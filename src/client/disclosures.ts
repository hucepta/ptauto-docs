export {};
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const running = new WeakMap<HTMLDetailsElement, { animation: Animation; opening: boolean }>();
matchMedia('(max-width:1000px)').addEventListener('change', () => {
  document.querySelectorAll<HTMLDetailsElement>('.course-nav, .toc details').forEach(details => {
    running.get(details)?.animation.cancel();
    running.delete(details);
    details.style.overflow = '';
    details.removeAttribute('data-collapsing');
  });
});
document.querySelectorAll<HTMLDetailsElement>('details:not([data-path-picker])').forEach(details => {
  const summary = details.querySelector(':scope > summary');
  if (!summary) return;
  details.addEventListener('click', event => {
    if (!(event.target instanceof Element) || !event.target.closest('a[href]')) return;
    const active = running.get(details);
    active?.animation.cancel();
    running.delete(details);
    details.style.overflow = '';
    details.removeAttribute('data-collapsing');
  }, { capture: true });
  summary.addEventListener('click', event => {
    if (reduced.matches || typeof details.animate !== 'function') return;
    event.preventDefault();
    const previous = running.get(details);
    const opening = !(previous?.opening ?? details.open);
    const start = details.getBoundingClientRect().height;
    previous?.animation.cancel();
    details.open = opening;
    const end = details.getBoundingClientRect().height;
    details.open = true;
    details.style.overflow = 'hidden';
    details.toggleAttribute('data-collapsing', !opening);
    const animation = details.animate([{ height: start+'px' }, { height: end+'px' }], {
      duration: 240, easing: 'cubic-bezier(.22,1,.36,1)',
    });
    running.set(details, { animation, opening });
    animation.onfinish = () => {
      if (running.get(details)?.animation !== animation) return;
      details.open = opening;
      details.style.overflow = '';
      details.removeAttribute('data-collapsing');
      running.delete(details);
    };
  });
});
