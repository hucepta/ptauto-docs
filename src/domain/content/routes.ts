import type { ContentGraph } from './graph';
import type { CourseEntry, LessonEntry, ContentEntry, Technology } from './schema';
export function getLessonCourse(g: ContentGraph, l: LessonEntry): CourseEntry { const c = g.entries.get(l.chapterId); if (c?.entity !== 'chapter')
    throw new Error(`Thiếu nhóm của ${l.id}`); const course = g.entries.get(c.courseId); if (course?.entity !== 'course')
    throw new Error(`Thiếu lộ trình của ${l.id}`); return course; }
export function getTechnology(g: ContentGraph, e: ContentEntry): Technology { if (e.entity === 'lesson')
    return getLessonCourse(g, e).technology; if (e.entity === 'chapter') {
    const c = g.entries.get(e.courseId);
    if (c?.entity === 'course')
        return c.technology;
    throw new Error('Không tìm thấy lộ trình.');
} return e.technology; }
export function getContentUrl(g: ContentGraph, id: string): string { const e = g.entries.get(id); if (!e)
    throw new Error(`Không tìm thấy ${id}`); switch (e.entity) {
    case 'course': return `/hoc/${e.slug}/`;
    case 'chapter': return `/hoc/${(g.entries.get(e.courseId) as CourseEntry).slug}/chu-de/${e.slug}/`;
    case 'lesson': return `/hoc/${getLessonCourse(g, e).slug}/${e.slug}/`;
    case 'concept': return `/tra-cuu/${e.technology}/${e.slug}/`;
    case 'project': return `/du-an/${e.technology}/${e.slug}/`;
    default: throw new Error(`Loại ${e.entity} không có trang riêng.`);
} }
export function getExampleAnchor(id: string): string { return id.replaceAll('.', '-'); }
export function getExampleTarget(g: ContentGraph, id: string) {
    const priority = { concept: 0, lesson: 1, project: 2 };
    const owners = [...g.concepts, ...g.lessons, ...g.projects].filter(e => e.exampleIds.includes(id) || (e.entity === 'lesson' && e.exerciseIds.some(exerciseId => {
        const exercise = g.entries.get(exerciseId);
        return exercise?.entity === 'exercise' && exercise.solutionExampleId === id;
    }))).sort((a, b) => priority[a.entity] - priority[b.entity] || a.id.localeCompare(b.id));
    const owner = owners[0];
    return owner ? { contentId: owner.id, anchorId: getExampleAnchor(id), url: `${getContentUrl(g, owner.id)}#${getExampleAnchor(id)}` } : null;
}
