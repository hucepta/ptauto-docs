const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-toc-link]')];
if (links.length) {
  const sections = links.map(link => document.getElementById(decodeURIComponent(link.hash.slice(1))));
  let queued = false;
  const update = () => {
    queued = false;
    let active = 0;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= 180) active = index;
    });
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
}
