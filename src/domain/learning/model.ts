export interface StorageLike {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export interface StateCatalog {
    lessonIds: string[];
    contentIds: string[];
}
export interface ProgressEntry {
    schemaVersion: 1;
    lessonId: string;
    completed: boolean;
    updatedAt: string;
}
export interface BookmarkEntry {
    schemaVersion: 1;
    contentId: string;
    saved: boolean;
    updatedAt: string;
}
export interface LastVisitEntry {
    schemaVersion: 1;
    lessonId: string;
    openedAt: string;
}
export interface LearningSnapshot {
    progress: Record<string, ProgressEntry>;
    bookmarks: Record<string, BookmarkEntry>;
    lastVisit: LastVisitEntry | null;
}
export interface LearningReadResult {
    snapshot: LearningSnapshot;
    issues: {
        key: string;
        reason: 'unavailable' | 'invalid-data';
    }[];
}
export interface SaveResult {
    persisted: boolean;
    reason?: 'unavailable' | 'invalid-data' | 'quota';
}
export interface ProgressRepository {
    read(): LearningReadResult;
    setCompleted(id: string, completed: boolean): SaveResult;
    setBookmark(id: string, saved: boolean): SaveResult;
    recordVisit(id: string): SaveResult;
}
export const emptySnapshot = (): LearningSnapshot => ({ progress: {}, bookmarks: {}, lastVisit: null });
