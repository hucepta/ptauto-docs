import type { SearchService, PagefindModule, SearchResult, SearchFilters } from './types';
export function pagefindUrl(base: string) { return base.replace(/\/$/, '') + '/pagefind/pagefind.js'; }
export function createSearchService(base: string, loader?: () => Promise<PagefindModule>): SearchService {
    let attempt = 0;
    const loadModule = loader || (() => { const url = pagefindUrl(base) + (attempt++ ? '?retry=' + attempt : ''); return import(/* @vite-ignore */ url) as Promise<PagefindModule>; });
    let engine: Promise<PagefindModule> | undefined;
    const load = () => engine ??= (async () => {
        try {
            const module = await loadModule();
            await module.options({ baseUrl: base, excerptLength: 25 });
            return module;
        }
        catch (error) {
            engine = undefined;
            throw error;
        }
    })();
    return { async search(query, filters = {}) {
            if (!query.trim())
                return [];
            const module = await load();
            const activeFilters = Object.fromEntries(Object.entries(filters).filter(([, v]) => v));
            let response;
            try {
                response = await module.search(query.trim(), { filters: activeFilters });
            }
            catch (error) {
                engine = undefined;
                throw error;
            }
            const data = await Promise.all(response.results.slice(0, 150).map(r => r.data()));
            const results = new Map<string, SearchResult>();
            for (const d of data) {
                const id = d.meta.id;
                if (!id || results.has(id))
                    continue;
                results.set(id, { id, url: d.meta.target || d.url, title: d.meta.title || id, excerpt: d.meta.description || d.excerpt.replace(/<[^>]*>/g, ''), technology: d.meta.technology || '', kind: d.meta.kind || '' });
            }
            return [...results.values()];
        } };
}
export function createLatestSearch(service: SearchService) {
    let version = 0;
    return { invalidate() { version++; }, async run(query: string, filters: SearchFilters, done: (r: SearchResult[]) => void, fail: (e: unknown) => void) {
            const current = ++version;
            try {
                const results = await service.search(query, filters);
                if (current === version)
                    done(results);
            }
            catch (error) {
                if (current === version)
                    fail(error);
            }
        } };
}
