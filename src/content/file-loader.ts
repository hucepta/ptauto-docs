import { glob } from 'astro/loaders';

export function canonicalFileLoader(pattern: string, base: string | URL) {
    return glob({ pattern, base, generateId: ({ entry }) => entry });
}
