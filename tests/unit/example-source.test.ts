import { afterEach, expect, test } from 'vitest';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readExampleCode } from '../../src/domain/content/example-source';
import { exampleSchema, type ExampleEntry } from '../../src/domain/content/schema';
const folders: string[] = [];
afterEach(async () => { await Promise.all(folders.splice(0).map(p => rm(p, { recursive: true, force: true }))); });
function example(sourceFile: string): ExampleEntry {
    return { ...exampleSchema.parse({ id: 'example.autolisp.test', slug: 'test', title: 'Test', description: 'Test', technology: 'autolisp', language: 'lisp', sourceFile: 'test.lsp' }), sourceFile, entity: 'example' };
}
test('rejects_example_path_outside_code_root', async () => {
    const root = await mkdtemp(join(tmpdir(), 'ptauto-code-'));
    folders.push(root);
    await expect(readExampleCode(example('../outside.lsp'), root)).rejects.toThrow(/outside|ngoài|path/i);
});
test('returns_source_without_reformatting', async () => {
    const root = await mkdtemp(join(tmpdir(), 'ptauto-code-'));
    folders.push(root);
    const code = '; Điểm gốc\r\n(setq p (list 2.0 4.0 0.0))\r\n';
    await writeFile(join(root, 'test.lsp'), code);
    expect(await readExampleCode(example('test.lsp'), root)).toBe(code);
});
