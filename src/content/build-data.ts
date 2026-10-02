import { createHash } from 'node:crypto';
import { getContent } from './catalog';
import { getContentManifest } from '../domain/content/manifest';
import { readExampleCode } from '../domain/content/example-source';
async function build() {
    const { graph } = await getContent();
    const manifest = getContentManifest(graph);
    for (const example of graph.examples) {
        const record = manifest.searchRecords.find(r => r.id === example.id)!;
        record.content += '\n' + await readExampleCode(example, 'src/content/examples/code');
    }
    const buildId = createHash('sha256').update(JSON.stringify(manifest) + import.meta.env.BASE_URL).digest('hex').slice(0, 16);
    return { ...manifest, buildId, base: import.meta.env.BASE_URL, version: 1 };
}
let cache: ReturnType<typeof build> | undefined;
export function getBuildData() { return cache ??= build(); }
