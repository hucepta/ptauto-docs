import { expect, test } from 'vitest';
import type { LoaderContext } from 'astro/loaders';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { canonicalFileLoader } from '../../src/content/file-loader';
import { buildContentGraph, validateContentGraph } from '../../src/domain/content/graph';

type Loaded = { id: string; data: Record<string, unknown>; filePath: string };
async function ingest(data: Record<string, unknown>[]) {
    const testBase = resolve(tmpdir());
    const root = await mkdtemp(join(testBase, 'ptauto-ingestion-'));
    const entries = new Map<string, Loaded>();
    try {
        await Promise.all(data.map((entry, index) => writeFile(join(root, index + '.json'), JSON.stringify(entry))));
        const rootUrl = pathToFileURL(root + '/');
        const context = {
            config: { root: rootUrl, srcDir: new URL('src/', rootUrl), prerenderConflictBehavior: 'warn' },
            collection: 'concepts',
            logger: { warn() {}, error() {}, info() {}, debug() {} },
            store: {
                keys: () => entries.keys(), get: (id: string) => entries.get(id),
                set: (entry: Loaded) => entries.set(entry.id, entry), delete: (id: string) => entries.delete(id)
            },
            parseData: async ({ data }: { data: Record<string, unknown> }) => data,
            generateDigest: (contents: string) => createHash('sha256').update(contents).digest('hex'),
            entryTypes: new Map([['.json', { getEntryInfo: ({ contents }: { contents: string }) => ({ data: JSON.parse(contents) }) }]])
        };
        await canonicalFileLoader('*.json', './').load(context as unknown as LoaderContext);
        return [...entries.values()].map(entry => ({ ...entry.data, entity: 'concept', body: '## Nội dung\nĐịnh nghĩa kỹ thuật.', file: entry.filePath }));
    } finally {
        if (dirname(resolve(root)) !== testBase || !basename(root).startsWith('ptauto-ingestion-'))
            throw new Error('Unexpected fixture cleanup path');
        await rm(root, { recursive: true, force: true });
    }
}
const concept = { id: 'concept.autolisp.selection', slug: 'selection', title: 'Selection', description: 'Chọn đối tượng', technology: 'autolisp', kind: 'api', difficulty: 'co-ban', status: 'published' };

test('loader_retains_same_scope_slug_collisions_for_graph_validation', async () => {
    const entries = await ingest([concept, { ...concept, id: 'concept.autolisp.another' }]);
    expect(entries).toHaveLength(2);
    expect(validateContentGraph(entries).some(issue => issue.field === 'slug')).toBe(true);
});
test('loader_retains_duplicate_stable_ids_for_graph_validation', async () => {
    const entries = await ingest([concept, { ...concept, title: 'Duplicate definition' }]);
    expect(entries).toHaveLength(2);
    expect(validateContentGraph(entries).some(issue => issue.field === 'id')).toBe(true);
});
test('loader_keeps_identical_slugs_in_different_technologies', async () => {
    const entries = await ingest([concept, { ...concept, id: 'concept.activex.selection', technology: 'visual-lisp-activex' }]);
    expect(entries).toHaveLength(2);
    expect(buildContentGraph(entries).concepts).toHaveLength(2);
});
