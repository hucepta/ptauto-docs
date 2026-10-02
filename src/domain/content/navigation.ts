import type { ContentGraph, LessonNavigation } from './graph';
import type { LessonEntry, ChapterEntry } from './schema';
import { getLessonCourse } from './routes';
export function getCourseLessons(g: ContentGraph, courseId: string): LessonEntry[] { return g.lessons.filter(l => getLessonCourse(g, l).id === courseId).sort((a, b) => { const ca = g.entries.get(a.chapterId) as ChapterEntry; const cb = g.entries.get(b.chapterId) as ChapterEntry; return ca.order - cb.order || a.order - b.order || a.id.localeCompare(b.id); }); }
export function getLessonNavigation(g: ContentGraph, id: string): LessonNavigation { const e = g.entries.get(id); if (e?.entity !== 'lesson')
    throw new Error('Không tìm thấy bài.'); const list = getCourseLessons(g, getLessonCourse(g, e).id); const i = list.findIndex(l => l.id === id); return { previous: list[i - 1]?.id || null, next: list[i + 1]?.id || null, prerequisites: e.prerequisites }; }
