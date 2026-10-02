import { schemas, type Entity, type ContentEntry, type CourseEntry, type ChapterEntry, type LessonEntry, type ConceptEntry, type ExampleEntry, type ExerciseEntry, type ProjectEntry } from './schema';
export interface ValidationIssue {
    file: string;
    field: string;
    message: string;
}
export interface ContentGraph {
    entries: Map<string, ContentEntry>;
    courses: CourseEntry[];
    chapters: ChapterEntry[];
    lessons: LessonEntry[];
    concepts: ConceptEntry[];
    examples: ExampleEntry[];
    exercises: ExerciseEntry[];
    projects: ProjectEntry[];
}
export interface LessonNavigation {
    previous: string | null;
    next: string | null;
    prerequisites: string[];
}
function parse(inputs: unknown[]) {
    const entries: ContentEntry[] = [];
    const issues: ValidationIssue[] = [];
    for (const input of inputs) {
        if (!input || typeof input !== 'object') {
            issues.push({ file: 'content', field: 'entity', message: 'Entry không hợp lệ.' });
            continue;
        }
        const raw = input as Record<string, unknown>;
        const entity = raw.entity as Entity;
        const file = String(raw.file || raw.id || 'content');
        const schema = schemas[entity];
        if (!schema) {
            issues.push({ file, field: 'entity', message: 'Loại nội dung không hợp lệ.' });
            continue;
        }
        const result = schema.safeParse(raw);
        if (!result.success) {
            for (const i of result.error.issues)
                issues.push({ file, field: String(i.path[0] || 'metadata'), message: i.message });
            continue;
        }
        const body = typeof raw.body === 'string' ? raw.body : undefined;
        if (['lesson', 'concept', 'exercise', 'project'].includes(entity) && !body?.trim())
            issues.push({ file, field: 'body', message: 'Nội dung không được để trống.' });
        entries.push({ ...result.data, entity, file, body } as ContentEntry);
    }
    return { entries, issues };
}
export function validateContentGraph(inputs: unknown[]): ValidationIssue[] {
    const { entries, issues } = parse(inputs);
    const map = new Map<string, ContentEntry>();
    const report = (e: ContentEntry, field: string, message: string) => issues.push({ file: e.file || e.id, field, message });
    for (const e of entries) {
        if (map.has(e.id))
            report(e, 'id', `ID trùng: ${e.id}`);
        map.set(e.id, e);
    }
    const relation = (e: ContentEntry, field: string, ids: string[], kind: Entity) => { for (const id of ids) {
        const target = map.get(id);
        if (!target || target.entity !== kind)
            report(e, field, `Tham chiếu ${kind} không hợp lệ: ${id}`);
        else if (e.status === 'published' && target.status !== 'published')
            report(e, field, `Nội dung public trỏ draft: ${id}`);
    } };
    for (const e of entries) {
        if (e.entity === 'chapter')
            relation(e, 'courseId', [e.courseId], 'course');
        if (e.entity === 'lesson') {
            relation(e, 'chapterId', [e.chapterId], 'chapter');
            relation(e, 'exerciseIds', e.exerciseIds, 'exercise');
        }
        if ('prerequisites' in e)
            relation(e, 'prerequisites', e.prerequisites, 'lesson');
        if ('conceptIds' in e)
            relation(e, 'conceptIds', e.conceptIds, 'concept');
        if ('exampleIds' in e)
            relation(e, 'exampleIds', e.exampleIds, 'example');
        if (e.entity === 'concept')
            relation(e, 'relatedConceptIds', e.relatedConceptIds, 'concept');
        if (e.entity === 'exercise' && e.solutionExampleId)
            relation(e, 'solutionExampleId', [e.solutionExampleId], 'example');
    }
    const routes = new Set<string>();
    const orders = new Set<string>();
    for (const e of entries) {
        let scope: string = e.entity;
        if (e.entity === 'chapter')
            scope += `:${e.courseId}`;
        else if (e.entity === 'lesson') {
            const c = map.get(e.chapterId);
            scope += `:${c?.entity === 'chapter' ? c.courseId : e.chapterId}`;
        }
        else if ('technology' in e && e.entity !== 'course')
            scope += `:${e.technology}`;
        const key = `${scope}:${e.slug}`;
        if (routes.has(key))
            report(e, 'slug', `Slug trùng: ${e.slug}`);
        routes.add(key);
        if ('order' in e) {
            const parent = e.entity === 'chapter' ? e.courseId : e.entity === 'lesson' ? e.chapterId : 'courses';
            const key = `${e.entity}:${parent}:${e.order}`;
            if (orders.has(key))
                report(e, 'order', 'Thứ tự trùng trong cùng nhóm.');
            orders.add(key);
        }
        if (e.entity === 'lesson' || e.entity === 'project') {
            const visiting = new Set<string>();
            const done = new Set<string>();
            const visit = (id: string): boolean => { if (visiting.has(id))
                return true; if (done.has(id))
                return false; visiting.add(id); const node = map.get(id); const cycle = node && 'prerequisites' in node ? node.prerequisites.some(visit) : false; visiting.delete(id); done.add(id); return cycle; };
            if (visit(e.id))
                report(e, 'prerequisites', 'Prerequisite có chu trình.');
        }
        if (e.status === 'published' && (e.entity === 'chapter' || e.entity === 'course')) {
            const hasLesson = entries.some(l => { if (l.entity !== 'lesson' || l.status !== 'published')
                return false; const c = map.get(l.chapterId); return e.entity === 'chapter' ? l.chapterId === e.id : c?.entity === 'chapter' && c.courseId === e.id; });
            if (!hasLesson)
                report(e, 'status', 'Nhóm/lộ trình published cần có bài published.');
        }
    }
    return issues;
}
export function buildContentGraph(inputs: unknown[]): ContentGraph {
    const issues = validateContentGraph(inputs);
    if (issues.length)
        throw new Error(issues.map(i => `${i.file} [${i.field}]: ${i.message}`).join('\n'));
    const { entries } = parse(inputs);
    const p = entries.filter(e => e.status === 'published');
    return { entries: new Map(entries.map(e => [e.id, e])), courses: p.filter((e): e is CourseEntry => e.entity === 'course').sort((a, b) => a.order - b.order), chapters: p.filter((e): e is ChapterEntry => e.entity === 'chapter').sort((a, b) => a.order - b.order), lessons: p.filter((e): e is LessonEntry => e.entity === 'lesson'), concepts: p.filter((e): e is ConceptEntry => e.entity === 'concept'), examples: p.filter((e): e is ExampleEntry => e.entity === 'example'), exercises: p.filter((e): e is ExerciseEntry => e.entity === 'exercise'), projects: p.filter((e): e is ProjectEntry => e.entity === 'project') };
}
export function getGlossaryEntries(g: ContentGraph) { return g.concepts.filter(c => c.kind === 'term').sort((a, b) => a.title.localeCompare(b.title, 'vi')); }
export { getLessonCourse, getTechnology, getContentUrl, getExampleAnchor, getExampleTarget } from './routes';
export { getCourseLessons, getLessonNavigation } from './navigation';
