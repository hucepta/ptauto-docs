import { defineCollection } from 'astro:content';
import { canonicalFileLoader } from './content/file-loader';
import { courseSchema, chapterSchema, lessonSchema, conceptSchema, exampleSchema, exerciseSchema, projectSchema } from './domain/content/schema';
export const collections = {
    courses: defineCollection({ loader: canonicalFileLoader('*.json', './src/content/courses'), schema: courseSchema }),
    chapters: defineCollection({ loader: canonicalFileLoader('*.json', './src/content/chapters'), schema: chapterSchema }),
    lessons: defineCollection({ loader: canonicalFileLoader('**/*.md', './src/content/lessons'), schema: lessonSchema }),
    concepts: defineCollection({ loader: canonicalFileLoader('**/*.md', './src/content/concepts'), schema: conceptSchema }),
    examples: defineCollection({ loader: canonicalFileLoader('*.json', './src/content/examples'), schema: exampleSchema }),
    exercises: defineCollection({ loader: canonicalFileLoader('**/*.md', './src/content/exercises'), schema: exerciseSchema }),
    projects: defineCollection({ loader: canonicalFileLoader('**/*.md', './src/content/projects'), schema: projectSchema }),
};
