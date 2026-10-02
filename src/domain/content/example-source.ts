import type { ExampleEntry } from './schema';
import { readFile, realpath } from 'node:fs/promises';
import { isAbsolute, relative, resolve } from 'node:path';
export async function readExampleCode(example: ExampleEntry, codeRoot: string): Promise<string> {
    const root = await realpath(codeRoot);
    const inside = (file: string) => { const path = relative(root, file); return path !== '..' && !path.startsWith('../') && !path.startsWith('..\\') && !isAbsolute(path); };
    const file = resolve(root, example.sourceFile);
    if (!inside(file))
        throw new Error('Example path nằm ngoài code root.');
    const canonical = await realpath(file);
    if (!inside(canonical))
        throw new Error('Example path nằm ngoài code root.');
    return readFile(canonical, 'utf8');
}
