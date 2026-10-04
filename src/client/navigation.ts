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
    const buttons = [...reader.querySelectorAll<HTMLButtonElement>('[data-reader-panel]')];
    const closePanels = () => {
        reader.removeAttribute('data-open-panel');
        buttons.forEach(button => button.setAttribute('aria-expanded', 'false'));
    };
    buttons.forEach(button => button.addEventListener('click', () => {
        const panel = button.dataset.readerPanel;
        if (reader.dataset.openPanel === panel) {
            closePanels();
            return;
        }
        reader.dataset.openPanel = panel;
        buttons.forEach(item => item.setAttribute('aria-expanded', String(item === button)));
        const details = reader.querySelector<HTMLDetailsElement>(panel === 'sidebar' ? '.course-nav, .reference-nav' : '.toc details');
        if (details) details.open = true;
        reader.querySelector<HTMLElement>(panel === 'sidebar' ? '#reader-sidebar' : '#reader-toc')?.focus();
    }));
    reader.querySelector('[data-reader-panel-close]')?.addEventListener('click', closePanels);
    reader.querySelectorAll<HTMLAnchorElement>('.reader-sidebar a, .toc a').forEach(link => link.addEventListener('click', closePanels));
    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape' || !reader.dataset.openPanel) return;
        const button = buttons.find(item => item.dataset.readerPanel === reader.dataset.openPanel);
        closePanels();
        button?.focus();
    });
    compact.addEventListener('change', closePanels);
}
const header = document.querySelector('.site-header');
if (header) new ResizeObserver(() => document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height+'px')).observe(header);
document.documentElement.style.setProperty('--reading-nav-height', '0px');
const prefetched = new Set<string>();
document.addEventListener('pointerover', event => {
    const anchor = (event.target as Element)?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!anchor || !anchor.href || anchor.origin !== location.origin || anchor.hash || anchor.download || prefetched.size >= 8) return;
    if (prefetched.has(anchor.href)) return;
    prefetched.add(anchor.href);
    const hint = document.createElement('link');
    hint.rel = 'prefetch';
    hint.href = anchor.href;
    document.head.append(hint);
}, { passive: true });
