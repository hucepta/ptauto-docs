import { describe, it, expect } from 'vitest';
import { buildContentGraph, validateContentGraph, getContentUrl, getLessonNavigation } from '../../src/domain/content/graph';
export function fixture() {
    return [
        { entity: 'course', id: 'course.autolisp', slug: 'autolisp', title: 'AutoLISP', description: 'Học AutoLISP', technology: 'autolisp', order: 1, status: 'published' },
        { entity: 'chapter', id: 'chapter.autolisp.ngon-ngu', slug: 'ngon-ngu', title: 'Ngôn ngữ cơ bản', description: 'Nền tảng', courseId: 'course.autolisp', order: 1, status: 'published' },
        { entity: 'lesson', id: 'lesson.autolisp.bieu-thuc', slug: 'bieu-thuc', title: 'Biểu thức', description: 'Đọc biểu thức', chapterId: 'chapter.autolisp.ngon-ngu', order: 1, difficulty: 'co-ban', status: 'published', prerequisites: [], conceptIds: [], exampleIds: [], exerciseIds: [], body: 'Nội dung thật' },
        { entity: 'lesson', id: 'lesson.autolisp.bien', slug: 'bien', title: 'Biến', description: 'Dùng biến', chapterId: 'chapter.autolisp.ngon-ngu', order: 2, difficulty: 'co-ban', status: 'published', prerequisites: ['lesson.autolisp.bieu-thuc'], conceptIds: [], exampleIds: [], exerciseIds: [], body: 'Nội dung thật' },
    ];
}
describe('content graph protects public navigation', () => {
    it('rejects_duplicate_ids', () => {
        const data = fixture();
        data.push({ ...data[0] });
        expect(validateContentGraph(data).some(i => i.field === 'id')).toBe(true);
    });
    it('rejects_duplicate_route_and_order', () => {
        const data = fixture();
        Object.assign(data[3], { slug: 'bieu-thuc', order: 1 });
        const issues = validateContentGraph(data);
        expect(issues.some(i => i.field === 'slug')).toBe(true);
        expect(issues.some(i => i.field === 'order')).toBe(true);
    });
    it('rejects_missing_parent_and_wrong_reference_kind', () => {
        const data = fixture();
        Object.assign(data[2], { chapterId: 'missing', prerequisites: ['course.autolisp'] });
        const issues = validateContentGraph(data);
        expect(issues.some(i => i.field === 'chapterId')).toBe(true);
        expect(issues.some(i => i.field === 'prerequisites')).toBe(true);
    });
    it('rejects_published_to_draft', () => {
        const data = fixture();
        data[2].status = 'draft';
        expect(validateContentGraph(data).some(i => i.field === 'prerequisites')).toBe(true);
    });
    it('rejects_prerequisite_cycle', () => {
        const data = fixture();
        Object.assign(data[2], { prerequisites: ['lesson.autolisp.bien'] });
        expect(validateContentGraph(data).some(i => i.field === 'prerequisites')).toBe(true);
    });
    it('orders_only_published_lessons', () => {
        const graph = buildContentGraph(fixture());
        expect(getLessonNavigation(graph, 'lesson.autolisp.bieu-thuc').next).toBe('lesson.autolisp.bien');
        expect(getLessonNavigation(graph, 'lesson.autolisp.bien').next).toBe(null);
    });
    it('moving_lesson_between_groups_keeps_url', () => {
        const data = fixture();
        expect(getContentUrl(buildContentGraph(data), 'lesson.autolisp.bien')).toBe('/hoc/autolisp/bien/');
        data.push({ ...data[1], id: 'chapter.autolisp.thu', slug: 'thu', title: 'Thực hành', order: 2 });
        Object.assign(data[3], { chapterId: 'chapter.autolisp.thu' });
        expect(getContentUrl(buildContentGraph(data), 'lesson.autolisp.bien')).toBe('/hoc/autolisp/bien/');
    });
});
