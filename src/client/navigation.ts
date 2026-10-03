export {};
document.documentElement.classList.add('js');
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
