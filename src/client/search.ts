import { createSearchService, createLatestSearch } from '../domain/search/pagefind-adapter';
import type { SearchResult } from '../domain/search/types';
const input = document.querySelector<HTMLInputElement>('[data-search-page] input[name=q]')!;
const form = input?.form;
const results = document.querySelector<HTMLElement>('[data-search-results]')!;
const status = document.querySelector<HTMLElement>('[data-search-status]')!;
const retry = document.querySelector<HTMLButtonElement>('[data-search-retry]')!;
const technology = document.querySelector<HTMLSelectElement>('[data-filter-technology]')!;
const kind = document.querySelector<HTMLSelectElement>('[data-filter-kind]')!;
const labels: Record<string, string> = { lesson: 'Bài học', concept: 'Tra cứu', example: 'Ví dụ code', exercise: 'Bài tập', project: 'Dự án' };
const runner = createLatestSearch(createSearchService(import.meta.env.BASE_URL));
const render = (items: SearchResult[]) => {
    results.replaceChildren();
    retry.hidden = true;
    status.textContent = items.length ? items.length + ' kết quả' : 'Không có kết quả. Thử từ khóa khác hoặc bỏ bộ lọc.';
    for (const item of items) {
        const li = document.createElement('li');
        li.className = 'search-result';
        const meta = document.createElement('span');
        meta.className = 'result-kind';
        meta.textContent = (labels[item.kind] || item.kind) + ' · ' + item.technology;
        const heading = document.createElement('h2');
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.title;
        heading.append(link);
        const excerpt = document.createElement('p');
        excerpt.textContent = item.excerpt;
        li.append(meta, heading, excerpt);
        results.append(li);
    }
};
const search = () => {
    runner.invalidate();
    results.replaceChildren();
    retry.hidden = true;
    const q = input.value.trim();
    const url = new URL(location.href);
    if (q)
        url.searchParams.set('q', q);
    else
        url.searchParams.delete('q');
    history.replaceState(null, '', url);
    if (!q) {
        status.textContent = 'Nhập tên hàm, bài học hoặc thuật ngữ để tìm.';
        return;
    }
    status.textContent = 'Đang tìm…';
    void runner.run(q, { technology: technology.value, kind: kind.value }, render, () => { status.textContent = 'Không tải được dữ liệu tìm kiếm. Kiểm tra kết nối rồi thử lại.'; retry.hidden = false; });
};
if (input) {
    input.value = new URL(location.href).searchParams.get('q') || '';
    let timer: ReturnType<typeof setTimeout>;
    input.addEventListener('input', () => { runner.invalidate(); clearTimeout(timer); timer = setTimeout(search, 180); });
    form?.addEventListener('submit', event => { event.preventDefault(); clearTimeout(timer); search(); });
    technology.addEventListener('change', search);
    kind.addEventListener('change', search);
    retry.addEventListener('click', search);
    search();
}
