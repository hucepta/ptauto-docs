const landing = document.querySelector<HTMLElement>('[data-landing]');
if (landing) {
  const demo = landing.querySelector<HTMLElement>('[data-code-demo]');
  const steps = [...landing.querySelectorAll<HTMLElement>('[data-code-step]')];
  const buttons = [...landing.querySelectorAll<HTMLButtonElement>('[data-demo-button]')];
  const show = (index: number) => {
    if (!demo) return;
    demo.dataset.step = String(index);
    steps.forEach((step, i) => {
      step.hidden = i !== index;
      if (i === index) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
    });
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  };
  buttons.forEach((button, i) => button.addEventListener('click', () => show(i)));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const motion = () => landing.classList.toggle('motion-enabled', !reduced.matches);
  reduced.addEventListener('change', motion);
  motion();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } });
    }, { threshold: .1 });
    landing.querySelectorAll('.motion-reveal').forEach(el => observer.observe(el));
  }
}
