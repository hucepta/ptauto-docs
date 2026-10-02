import { getContentUrl, getLessonCourse, getCourseLessons, getTechnology, getExampleTarget, type ContentGraph } from './graph';
export interface ContentPage {
    id: string;
    title: string;
    description: string;
    url: string;
    kind: string;
    technology: string;
    courseId?: string;
}
export interface SearchRecord extends ContentPage {
    content: string;
}
export interface ContentManifest {
    pages: ContentPage[];
    courses: {
        id: string;
        title: string;
        technology: string;
        url: string;
        lessonIds: string[];
    }[];
    searchRecords: SearchRecord[];
}
export function getContentManifest(graph: ContentGraph): ContentManifest {
    const entries = [...graph.lessons, ...graph.concepts, ...graph.projects];
    const pages = entries.map(e => ({ id: e.id, title: e.title, description: e.description, url: getContentUrl(graph, e.id), kind: e.entity, technology: getTechnology(graph, e), ...(e.entity === 'lesson' ? { courseId: getLessonCourse(graph, e).id } : {}) }));
    const searchRecords: SearchRecord[] = entries.map((e, i) => ({ ...pages[i], content: [e.title, e.description, ...e.aliases, ...e.tags, ...e.searchableTerms, e.body || ''].join('\n') }));
    for (const example of graph.examples) {
        const target = getExampleTarget(graph, example.id);
        if (!target)
            throw new Error('Ví dụ published cần chủ sở hữu: ' + example.id);
        searchRecords.push({ id: example.id, title: example.title, description: example.description, url: target.url, kind: 'example', technology: example.technology, content: [example.title, example.description, ...example.aliases, ...example.tags, ...example.searchableTerms].join('\n') });
    }
    for (const exercise of graph.exercises) {
        const owner = graph.lessons.find(l => l.exerciseIds.includes(exercise.id));
        if (!owner)
            throw new Error('Bài tập published cần bài học: ' + exercise.id);
        searchRecords.push({ id: exercise.id, title: exercise.title, description: exercise.description, url: getContentUrl(graph, owner.id) + '#' + exercise.id.replaceAll('.', '-'), kind: 'exercise', technology: exercise.technology, content: [exercise.title, exercise.description, exercise.body, exercise.expectedResult, ...exercise.aliases, ...exercise.searchableTerms].join('\n') });
    }
    return { pages, courses: graph.courses.map(c => ({ id: c.id, title: c.title, technology: c.technology, url: getContentUrl(graph, c.id), lessonIds: getCourseLessons(graph, c.id).map(l => l.id) })), searchRecords };
}
