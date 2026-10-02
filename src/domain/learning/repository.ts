import { emptySnapshot, type StorageLike, type StateCatalog, type ProgressRepository, type SaveResult, type LearningReadResult } from './model';
const prefix = 'ptauto.docs.v1.';
type Stored = Record<string, unknown>;
function valid(value: unknown, kind: 'progress' | 'bookmark' | 'lastVisit', id?: string): value is Stored {
    if (!value || typeof value !== 'object' || Array.isArray(value))
        return false;
    const v = value as Stored;
    const idKey = kind === 'bookmark' ? 'contentId' : 'lessonId';
    const time = kind === 'lastVisit' ? 'openedAt' : 'updatedAt';
    return v.schemaVersion === 1 && typeof v[idKey] === 'string' && (!id || v[idKey] === id) &&
        typeof v[time] === 'string' && Number.isFinite(Date.parse(v[time] as string)) &&
        (kind === 'lastVisit' || typeof v[kind === 'progress' ? 'completed' : 'saved'] === 'boolean');
}
export function createProgressRepository(storage: StorageLike, catalog: StateCatalog): ProgressRepository {
    const memory = new Map<string, Stored>();
    const readValue = (kind: 'progress' | 'bookmark' | 'lastVisit', id: string | undefined, issues: LearningReadResult['issues']) => {
        const key = prefix + kind + (id ? '.' + id : '');
        try {
            const raw = storage.getItem(key);
            if (raw === null)
                return memory.get(key) || null;
            const value: unknown = JSON.parse(raw);
            if (!valid(value, kind, id)) {
                issues.push({ key, reason: 'invalid-data' });
                return memory.get(key) || null;
            }
            return value;
        }
        catch (error) {
            issues.push({ key, reason: error instanceof SyntaxError ? 'invalid-data' : 'unavailable' });
            return memory.get(key) || null;
        }
    };
    const save = (kind: 'progress' | 'bookmark' | 'lastVisit', id: string, value: Stored): SaveResult => {
        const allowed = kind === 'bookmark' ? catalog.contentIds : catalog.lessonIds;
        if (!allowed.includes(id))
            return { persisted: false, reason: 'invalid-data' };
        const key = prefix + kind + (kind === 'lastVisit' ? '' : '.' + id);
        memory.set(key, value);
        try {
            const raw = storage.getItem(key);
            if (raw !== null) {
                let existing: unknown;
                try {
                    existing = JSON.parse(raw);
                }
                catch {
                    return { persisted: false, reason: 'invalid-data' };
                }
                if (!valid(existing, kind, kind === 'lastVisit' ? undefined : id))
                    return { persisted: false, reason: 'invalid-data' };
            }
            storage.setItem(key, JSON.stringify(value));
            memory.delete(key);
            return { persisted: true };
        }
        catch (error) {
            return { persisted: false, reason: error instanceof Error && error.name === 'QuotaExceededError' ? 'quota' : 'unavailable' };
        }
    };
    return {
        read() {
            const snapshot = emptySnapshot();
            const issues: LearningReadResult['issues'] = [];
            for (const id of catalog.lessonIds) {
                const value = readValue('progress', id, issues);
                if (value)
                    snapshot.progress[id] = value as unknown as typeof snapshot.progress[string];
            }
            for (const id of catalog.contentIds) {
                const value = readValue('bookmark', id, issues);
                if (value)
                    snapshot.bookmarks[id] = value as unknown as typeof snapshot.bookmarks[string];
            }
            snapshot.lastVisit = readValue('lastVisit', undefined, issues) as unknown as typeof snapshot.lastVisit;
            return { snapshot, issues };
        },
        setCompleted: (lessonId, completed) => save('progress', lessonId, { schemaVersion: 1, lessonId, completed, updatedAt: new Date().toISOString() }),
        setBookmark: (contentId, saved) => save('bookmark', contentId, { schemaVersion: 1, contentId, saved, updatedAt: new Date().toISOString() }),
        recordVisit: lessonId => save('lastVisit', lessonId, { schemaVersion: 1, lessonId, openedAt: new Date().toISOString() })
    };
}
