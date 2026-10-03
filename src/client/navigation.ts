export {};
document.documentElement.classList.add('js');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const nav = document.querySelector<HTMLElement>('[data-primary-nav]');
const close = () => { nav?.setAttribute('data-open', 'false'); toggle?.setAttribute('aria-expanded', 'false'); };
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav?.setAttribute('data-open', String(open)); });
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav?.getAttribute('data-open') === 'true') {
        close();
        toggle?.focus();
    }
    const target = event.target as HTMLElement;
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) && !target.isContentEditable) {
        const search = document.querySelector<HTMLInputElement>('input[name=q]');
        if (search) {
            event.preventDefault();
            search.focus();
        } else {
            const link = document.querySelector<HTMLAnchorElement>('[data-search-link]');
            if (link) { event.preventDefault(); location.assign(link.href); }
        }
    }
});
if (matchMedia('(max-width:760px)').matches)
    document.querySelectorAll<HTMLDetailsElement>('.course-nav,.toc details').forEach(el => { el.open = false; });
