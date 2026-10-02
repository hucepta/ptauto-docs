export interface SearchFilters {
    technology?: string;
    kind?: string;
}
export interface SearchResult {
    id: string;
    url: string;
    title: string;
    excerpt: string;
    technology: string;
    kind: string;
}
export interface SearchService {
    search(query: string, filters?: SearchFilters): Promise<SearchResult[]>;
}
export interface PagefindData {
    url: string;
    excerpt: string;
    meta: Record<string, string>;
}
export interface PagefindModule {
    options(options: Record<string, unknown>): Promise<void>;
    search(query: string, options: Record<string, unknown>): Promise<{
        results: {
            data(): Promise<PagefindData>;
        }[];
    }>;
}
