const landing = document.querySelector<HTMLElement>('[data-landing]');
if (landing) {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const listeners = new AbortController();
    const hero = landing.querySelector<HTMLElement>('[data-hero]');
    const demo = landing.querySelector<HTMLElement>('[data-code-demo]');
    const codeSteps = [...landing.querySelectorAll<HTMLElement>('[data-code-step]')];
    const buttons = [...landing.querySelectorAll<HTMLButtonElement>('[data-demo-button]')];
    const status = landing.querySelector<HTMLElement>('[data-demo-status]');
    let frame = 0, elapsed = 0, previous = 0;
    let playing = false, inView = false, seen = false, introPlayed = false;
    const pause = () => { cancelAnimationFrame(frame); frame = 0; previous = 0; };
    const show = (index: number, announce = false) => {
        if (!demo) return;
        demo.dataset.step = String(index);
        codeSteps.forEach((element, step) => {
            if (step === index) element.setAttribute('aria-current', 'step');
            else element.removeAttribute('aria-current');
        });
        buttons.forEach((button, step) => button.setAttribute('aria-pressed', String(step === index)));
        if (status) {
            status.setAttribute('aria-live', announce ? 'polite' : 'off');
            status.textContent = codeSteps[index]?.querySelector('p')?.textContent || '';
        }
    };
    const schedule = () => {
        if (playing && inView && !document.hidden && !reduced.matches && !frame)
            frame = requestAnimationFrame(tick);
    };
    const tick = (time: number) => {
        frame = 0;
        if (!playing || !inView || document.hidden || reduced.matches) { pause(); return; }
        if (previous) elapsed += time - previous;
        previous = time;
        const index = Math.min(3, Math.floor(elapsed / 1100));
        if (demo?.dataset.step !== String(index)) show(index);
        if (elapsed >= 4400) { playing = false; pause(); return; }
        schedule();
    };
    const begin = () => {
        pause(); elapsed = 0; seen = true;
        playing = !reduced.matches;
        show(reduced.matches ? 3 : 0);
        schedule();
    };
    const applyMotion = () => {
        landing.classList.toggle('motion-enabled', !reduced.matches);
        if (reduced.matches) {
            hero?.classList.remove('has-motion');
            if (hero) hero.dataset.phase = 'complete';
            playing = false; pause(); show(3);
        } else if (!introPlayed && hero) {
            introPlayed = true;
            hero.dataset.phase = 'intro';
            hero.classList.add('has-motion');
        }
    };
    hero?.addEventListener('animationend', event => {
        if (event.target === hero && event.animationName === 'hero-duration') hero.dataset.phase = 'complete';
    }, { signal: listeners.signal });
    buttons.forEach((button, index) => button.addEventListener('click', () => {
        playing = false; seen = true; pause(); show(index, true);
    }, { signal: listeners.signal }));
    landing.querySelector('[data-demo-replay]')?.addEventListener('click', begin, { signal: listeners.signal });
    reduced.addEventListener('change', applyMotion, { signal: listeners.signal });
    document.addEventListener('visibilitychange', () => document.hidden ? pause() : schedule(), { signal: listeners.signal });
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
            if (entry.target === demo) {
                inView = entry.isIntersecting;
                if (inView && !seen) begin();
                else if (inView) schedule();
                else pause();
            } else if (entry.isIntersecting) observer?.unobserve(entry.target);
        }
    }, { threshold: .15 }) : null;
    landing.querySelectorAll('.motion-reveal').forEach(element => observer?.observe(element));
    window.addEventListener('pagehide', event => {
        pause();
        if (!event.persisted) { observer?.disconnect(); listeners.abort(); }
    }, { signal: listeners.signal });
    window.addEventListener('pageshow', () => schedule(), { signal: listeners.signal });
    applyMotion();
}
