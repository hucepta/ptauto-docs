import { expect, test } from 'vitest';
import { buildContentGraph, getGlossaryEntries } from '../../src/domain/content/graph';
import { getContentManifest } from '../../src/domain/content/manifest';
import { contentFixture } from '../fixtures/content';
test('new_lesson_requires_no_ui_change', () => {
    const entries = contentFixture();
    entries.push({ ...entries[2], id: 'lesson.autolisp.third', slug: 'third', title: 'Bài mới', order: 3 });
    const manifest = getContentManifest(buildContentGraph(entries));
    expect(manifest.pages.find(p => p.id === 'lesson.autolisp.third')).toMatchObject({ title: 'Bài mới', url: '/hoc/autolisp/third/' });
});
test('glossary_uses_concept_metadata', () => {
    const entries = [...contentFixture(), { entity: 'concept', id: 'concept.autolisp.term', slug: 'term', title: 'Term', description: 'Mô tả mới', kind: 'term', technology: 'autolisp', difficulty: 'co-ban', status: 'published', body: 'Nội dung.' }];
    expect(getGlossaryEntries(buildContentGraph(entries))[0].description).toBe('Mô tả mới');
});
