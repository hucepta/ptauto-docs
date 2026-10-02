import { expect, test } from 'vitest';
import { createSearchService, createLatestSearch, pagefindUrl } from '../../src/domain/search/pagefind-adapter';
import type { PagefindModule, SearchResult } from '../../src/domain/search/types';
const data = { url: '/tra-cuu/autolisp/list/', excerpt: '<img src=x onerror=alert(1)>', meta: { id: 'concept.autolisp.list', title: 'List', technology: 'autolisp', kind: 'concept' } };
test('base_path_resolves_assets', () => expect(pagefindUrl('/ptauto-docs/')).toBe('/ptauto-docs/pagefind/pagefind.js'));
test('keeps_technical_query_and_filters', async () => {
    let query = '';
    let options: Record<string, unknown> = {};
    const engine: PagefindModule = { options: async () => { }, search: async (q, o) => { query = q; options = o; return { results: [{ data: async () => data }, { data: async () => data }] }; } };
    const results = await createSearchService('/', async () => engine).search('Editor.GetSelection', { technology: 'autocad-dotnet' });
    expect(query).toBe('Editor.GetSelection');
    expect(options.filters).toEqual({ technology: 'autocad-dotnet' });
    expect(results).toHaveLength(1);
    expect(results[0].url).toBe(data.url);
});
test('index_load_error_can_retry', async () => {
    let attempts = 0;
    const engine: PagefindModule = { options: async () => { }, search: async () => ({ results: [{ data: async () => data }] }) };
    const service = createSearchService('/', async () => { if (++attempts === 1)
        throw new Error('network'); return engine; });
    await expect(service.search('list')).rejects.toThrow('network');
    expect(await service.search('list')).toHaveLength(1);
});
test('old_response_does_not_replace_new_query', async () => {
    let resolveOld: (r: SearchResult[]) => void = () => { };
    const seen: string[] = [];
    const runner = createLatestSearch({ search: q => q === 'old' ? new Promise(r => { resolveOld = r; }) : Promise.resolve([{ id: 'new', url: '/', title: 'New', excerpt: '', technology: '', kind: '' }]) });
    const first = runner.run('old', {}, r => seen.push(r[0]?.id || ''), () => { });
    await runner.run('new', {}, r => seen.push(r[0]?.id || ''), () => { });
    resolveOld([{ id: 'old', url: '/', title: 'Old', excerpt: '', technology: '', kind: '' }]);
    await first;
    expect(seen).toEqual(['new']);
});
