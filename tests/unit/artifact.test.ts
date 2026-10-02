import { afterEach, expect, test } from 'vitest';
import { mkdtemp, writeFile, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { verifyArtifact } from '../../scripts/verify-artifact.mjs';
const dirs: string[] = [];
afterEach(async () => { await Promise.all(dirs.splice(0).map(p => rm(p, { recursive: true, force: true }))); });
async function artifact() {
    const root = await mkdtemp(join(tmpdir(), 'ptauto-artifact-'));
    dirs.push(root);
    await mkdir(join(root, 'pagefind'));
    await writeFile(join(root, 'index.html'), '<html lang="vi"><head><meta name="ptauto-build" content="abc"></head><body><main id="content"><a href="/missing/">Broken</a></main></body></html>');
    await writeFile(join(root, 'catalog.json'), JSON.stringify({ buildId: 'abc', base: '/', pages: [] }));
    await writeFile(join(root, 'search-records.json'), JSON.stringify({ buildId: 'abc', base: '/', records: [] }));
    await writeFile(join(root, 'pagefind/build.json'), JSON.stringify({ buildId: 'abc', base: '/', records: 0 }));
    await writeFile(join(root, 'pagefind/pagefind.js'), 'test');
    await writeFile(join(root, 'pagefind/test.wasm'), 'test');
    return root;
}
test('all_published_links_resolve', async () => { await expect(verifyArtifact(await artifact())).rejects.toThrow(/missing/); });
test('mismatched_search_artifact_rejected', async () => { const root = await artifact(); await writeFile(join(root, 'pagefind/build.json'), JSON.stringify({ buildId: 'old', base: '/', records: 0 })); await expect(verifyArtifact(root)).rejects.toThrow(/build|phiên bản/i); });
test('missing_index_rejected', async () => { const root = await artifact(); await rm(join(root, 'pagefind/pagefind.js')); await expect(verifyArtifact(root)).rejects.toThrow(/pagefind/i); });
