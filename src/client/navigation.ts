export {};
document.documentElement.classList.add('js');
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
const header = document.querySelector('.site-header');
if (header) new ResizeObserver(() => document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height+'px')).observe(header);
const toc = document.querySelector<HTMLElement>('.toc');
const updateReadingOffset = () => document.documentElement.style.setProperty('--reading-nav-height', compact.matches && toc ? toc.getBoundingClientRect().height+'px' : '0px');
if (toc) {
    new ResizeObserver(updateReadingOffset).observe(toc);
    toc.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
        if (compact.matches) {
            const details = toc.querySelector('details');
            if (details) details.open = false;
            updateReadingOffset();
        }
    }));
}
compact.addEventListener('change', updateReadingOffset);
updateReadingOffset();
