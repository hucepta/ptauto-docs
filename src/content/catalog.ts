import { getCollection } from 'astro:content';
import { buildContentGraph } from '../domain/content/graph';
async function load() {
    const [courses, chapters, lessons, concepts, examples, exercises, projects] = await Promise.all([getCollection('courses'), getCollection('chapters'), getCollection('lessons'), getCollection('concepts'), getCollection('examples'), getCollection('exercises'), getCollection('projects')]);
    const groups = { course: courses, chapter: chapters, lesson: lessons, concept: concepts, example: examples, exercise: exercises, project: projects };
    const entries = Object.entries(groups).flatMap(([entity, items]) => items.map(item => ({ ...item.data, entity, body: 'body' in item ? item.body : undefined, file: item.filePath })));
    return { graph: buildContentGraph(entries), lessons, concepts, exercises, projects };
}
let cache: ReturnType<typeof load> | undefined;
export function getContent() { return cache ??= load(); }
