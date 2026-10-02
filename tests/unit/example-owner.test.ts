import { expect, test } from 'vitest';
import { buildContentGraph, getExampleTarget } from '../../src/domain/content/graph';
import { contentFixture } from '../fixtures/content';
test('exercise_solution_has_one_published_owner', () => {
    const entries = contentFixture().map(e => e.id === 'lesson.autolisp.first' ? { ...e, exerciseIds: ['exercise.autolisp.practice'] } : e);
    const graph = buildContentGraph([...entries,
        { entity: 'example', id: 'example.autolisp.solution', slug: 'solution', title: 'Solution', description: 'Code', technology: 'autolisp', language: 'lisp', sourceFile: 'solution.lsp', status: 'published' },
        { entity: 'exercise', id: 'exercise.autolisp.practice', slug: 'practice', title: 'Practice', description: 'Practice', technology: 'autolisp', difficulty: 'co-ban', body: 'Read code.', expectedResult: 'Result', solutionExampleId: 'example.autolisp.solution', status: 'published' }]);
    expect(getExampleTarget(graph, 'example.autolisp.solution')).toMatchObject({ contentId: 'lesson.autolisp.first', url: '/hoc/autolisp/first/#example-autolisp-solution' });
});
