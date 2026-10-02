import { expect, test } from 'vitest';
import { createProgressRepository } from '../../src/domain/learning/repository';
import { emptySnapshot, type StorageLike } from '../../src/domain/learning/model';
import { getCourseProgress, getContinueTarget } from '../../src/domain/learning/progress';
import { buildContentGraph, getContentUrl } from '../../src/domain/content/graph';
import { contentFixture } from '../fixtures/content';
const catalog = { lessonIds: ['lesson.autolisp.first', 'lesson.autolisp.second'], contentIds: ['lesson.autolisp.first', 'lesson.autolisp.second'] };
class MemoryStorage implements StorageLike {
    data = new Map<string, string>();
    getItem(key: string) { return this.data.get(key) ?? null; }
    setItem(key: string, value: string) { this.data.set(key, value); }
    removeItem(key: string) { this.data.delete(key); }
}
test('explicit_completion_only', () => {
    const repo = createProgressRepository(new MemoryStorage(), catalog);
    repo.recordVisit(catalog.lessonIds[0]);
    expect(repo.read().snapshot.lastVisit?.lessonId).toBe(catalog.lessonIds[0]);
    expect(repo.read().snapshot.progress[catalog.lessonIds[0]]?.completed).not.toBe(true);
});
test('reload_restores_progress_and_bookmark', () => {
    const storage = new MemoryStorage();
    const repo = createProgressRepository(storage, catalog);
    repo.setCompleted(catalog.lessonIds[0], true);
    repo.setBookmark(catalog.contentIds[0], true);
    const snapshot = createProgressRepository(storage, catalog).read().snapshot;
    expect(snapshot.progress[catalog.lessonIds[0]].completed).toBe(true);
    expect(snapshot.bookmarks[catalog.contentIds[0]].saved).toBe(true);
});
test('two_tabs_update_different_lessons', () => {
    const storage = new MemoryStorage();
    const a = createProgressRepository(storage, catalog);
    const b = createProgressRepository(storage, catalog);
    a.setCompleted(catalog.lessonIds[0], true);
    b.setCompleted(catalog.lessonIds[1], true);
    expect(Object.values(a.read().snapshot.progress).filter(p => p.completed)).toHaveLength(2);
});
test('corrupt_or_denied_storage_keeps_reader', () => {
    const storage = new MemoryStorage();
    const key = 'ptauto.docs.v1.progress.' + catalog.lessonIds[0];
    storage.setItem(key, 'broken');
    const repo = createProgressRepository(storage, catalog);
    expect(repo.read().issues).toEqual([{ key, reason: 'invalid-data' }]);
    expect(repo.setCompleted(catalog.lessonIds[0], true).persisted).toBe(false);
    expect(storage.getItem(key)).toBe('broken');
    expect(repo.read().snapshot.progress[catalog.lessonIds[0]].completed).toBe(true);
    const blocked = { getItem: () => { throw new Error('denied'); }, setItem: () => { throw new Error('denied'); }, removeItem: () => { throw new Error('denied'); } };
    const denied = createProgressRepository(blocked, catalog);
    expect(denied.setBookmark(catalog.contentIds[0], true).persisted).toBe(false);
    expect(denied.read().issues.length).toBeGreaterThan(0);
    expect(denied.read().snapshot.bookmarks[catalog.contentIds[0]].saved).toBe(true);
});
test('slug_change_keeps_state', () => {
    const fixture = contentFixture();
    const graph = buildContentGraph(fixture);
    const storage = new MemoryStorage();
    const repo = createProgressRepository(storage, catalog);
    repo.setCompleted(catalog.lessonIds[0], true);
    const renamed = fixture.map(e => e.id === catalog.lessonIds[0] ? { ...e, slug: 'renamed' } : e);
    expect(getContentUrl(buildContentGraph(renamed), catalog.lessonIds[0])).not.toBe(getContentUrl(graph, catalog.lessonIds[0]));
    expect(getCourseProgress(buildContentGraph(renamed), 'course.autolisp', repo.read().snapshot)).toEqual({ completed: 1, total: 2 });
});
test('last_lesson_does_not_link_to_draft', () => {
    const graph = buildContentGraph(contentFixture());
    const storage = new MemoryStorage();
    const repo = createProgressRepository(storage, catalog);
    repo.recordVisit(catalog.lessonIds[0]);
    expect(getContinueTarget(graph, repo.read().snapshot)).toBe(catalog.lessonIds[0]);
    repo.setCompleted(catalog.lessonIds[0], true);
    expect(getContinueTarget(graph, repo.read().snapshot)).toBe(catalog.lessonIds[1]);
    repo.setCompleted(catalog.lessonIds[1], true);
    expect(getContinueTarget(graph, repo.read().snapshot)).toBeNull();
    expect(getContinueTarget(graph, emptySnapshot(), 'course.autolisp')).toBe(catalog.lessonIds[0]);
});
