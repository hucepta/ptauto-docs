import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { courseSchema, chapterSchema, lessonSchema, conceptSchema, exampleSchema, exerciseSchema, projectSchema } from './domain/content/schema';
export const collections = {
    courses: defineCollection({ loader: glob({ pattern: '*.json', base: './src/content/courses' }), schema: courseSchema }),
    chapters: defineCollection({ loader: glob({ pattern: '*.json', base: './src/content/chapters' }), schema: chapterSchema }),
    lessons: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }), schema: lessonSchema }),
    concepts: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/concepts' }), schema: conceptSchema }),
    examples: defineCollection({ loader: glob({ pattern: '*.json', base: './src/content/examples' }), schema: exampleSchema }),
    exercises: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/exercises' }), schema: exerciseSchema }),
    projects: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/projects' }), schema: projectSchema }),
};
