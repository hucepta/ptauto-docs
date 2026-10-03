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
if (matchMedia('(max-width:760px)').matches)
    document.querySelectorAll<HTMLDetailsElement>('.course-nav').forEach(el => { el.open = false; });
