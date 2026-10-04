export {};
const knowledgeSection = document.querySelector('#chu-de');
const knowledgeLink = document.querySelector('[data-knowledge-nav]');
if (knowledgeSection && knowledgeLink) {
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) knowledgeLink.setAttribute('aria-current', 'location');
        else knowledgeLink.removeAttribute('aria-current');
    }, { rootMargin: '-75px 0px -35% 0px' }).observe(knowledgeSection);
}
document.addEventListener('keydown', event => {
    const target = event.target as HTMLElement;
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) && !target.isContentEditable) {
        const search = document.querySelector<HTMLInputElement>('input[name=q]');
        if (search) {
            event.preventDefault();
            search.focus();
        }
    }
});
const compact = matchMedia('(max-width:1000px)');
const updatePanels = () => {
    document.querySelectorAll<HTMLDetailsElement>('.course-nav, .toc details').forEach(el => { el.open = !compact.matches; });
};
updatePanels();
compact.addEventListener('change', updatePanels);
const reader = document.querySelector<HTMLElement>('.reader-grid');
if (reader) {
    const toggle = document.querySelector<HTMLButtonElement>('[data-reader-toggle]');
    const tabs = [...reader.querySelectorAll<HTMLButtonElement>('[data-reader-panel]')];
    const closePanels = (returnFocus = false) => {
        reader.removeAttribute('data-open-panel');
        toggle?.setAttribute('aria-expanded', 'false');
        if (returnFocus) toggle?.focus();
    };
    const openPanel = (panel: string) => {
        reader.dataset.openPanel = panel;
        toggle?.setAttribute('aria-expanded', 'true');
        tabs.forEach(item => item.setAttribute('aria-selected', String(item.dataset.readerPanel === panel)));
        const details = reader.querySelector<HTMLDetailsElement>(panel === 'sidebar' ? '.course-nav, .reference-nav' : '.toc details');
        if (details) details.open = true;
        reader.querySelector<HTMLElement>(panel === 'sidebar' ? '#reader-sidebar' : '#reader-toc')?.focus();
    };
    toggle?.addEventListener('click', () => reader.dataset.openPanel ? closePanels(true) : openPanel('sidebar'));
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => openPanel(tab.dataset.readerPanel || 'sidebar'));
        tab.addEventListener('keydown', event => {
            if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || tabs.length < 2) return;
            event.preventDefault();
            const next = tabs[(index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]!;
            openPanel(next.dataset.readerPanel || 'sidebar');
            next.focus();
        });
    });
    reader.querySelectorAll('[data-reader-panel-close]').forEach(button => button.addEventListener('click', () => closePanels(true)));
    reader.querySelectorAll<HTMLAnchorElement>('.reader-sidebar a, .toc a').forEach(link => link.addEventListener('click', () => closePanels()));
    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape' || !reader.dataset.openPanel) return;
        closePanels(true);
    });
    compact.addEventListener('change', () => closePanels());
}
const header = document.querySelector('.site-header');
if (header) new ResizeObserver(() => document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height+'px')).observe(header);
document.documentElement.style.setProperty('--reading-nav-height', '0px');
const prefetched = new Set<string>();
const prefetch = (anchor: HTMLAnchorElement | null) => {
    if (!anchor || !anchor.href || anchor.origin !== location.origin || anchor.hash || anchor.download || prefetched.size >= 12) return;
    if (prefetched.has(anchor.href) || (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) return;
    prefetched.add(anchor.href);
    const hint = document.createElement('link');
    hint.rel = 'prefetch';
    hint.href = anchor.href;
    document.head.append(hint);
};
const findAnchor = (event: Event) => (event.target as Element)?.closest?.('a[href]') as HTMLAnchorElement | null;
document.addEventListener('pointerover', event => { if ((event as PointerEvent).pointerType === 'mouse') prefetch(findAnchor(event)); }, { passive: true });
document.addEventListener('pointerdown', event => prefetch(findAnchor(event)), { passive: true });
document.addEventListener('focusin', event => prefetch(findAnchor(event)), { passive: true });
const likelyNext = document.querySelector<HTMLAnchorElement>('.article-actions-end a[href]');
if (likelyNext) {
    const queue = () => prefetch(likelyNext);
    if ('requestIdleCallback' in window) window.requestIdleCallback(queue, { timeout: 1800 });
    else setTimeout(queue, 900);
}
