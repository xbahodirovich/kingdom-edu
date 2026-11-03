import { useEffect } from 'react';

/** Visible-first progressive enhancement. No React renders on scroll. */
export function ScrollMotion() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (preference.matches || !('IntersectionObserver' in window)) return;
      const candidates = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = 'true';
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px 60px 0px', threshold: 0.05 });
      candidates.forEach(el => {
        if (el.getBoundingClientRect().top > innerHeight && !el.dataset.revealed) {
          el.dataset.motionReady = 'true';
          observer.observe(el);
        }
      });
      const focus = (event: FocusEvent) => {
        const el = (event.target as HTMLElement).closest<HTMLElement>('[data-reveal]');
        if (el) { el.dataset.revealed = 'true'; observer.unobserve(el); }
      };
      const showAll = () => candidates.forEach(el => { el.dataset.revealed = 'true'; });
      const restored = (event: PageTransitionEvent) => { if (event.persisted) showAll(); };
      let frame = 0;
      const photo = document.querySelector<HTMLElement>('[data-hero-plane]');
      const hero = document.querySelector<HTMLElement>('[data-hero]');
      const process = document.querySelector<HTMLElement>('[data-process]');
      const rail = document.querySelector<HTMLElement>('[data-process-rail]');
      const update = () => {
        frame = 0;
        if (innerWidth < 1024) {
          if (photo) photo.style.transform = '';
          if (rail) rail.style.transform = '';
          return;
        }
        if (photo && hero) {
          const rect = hero.getBoundingClientRect();
          if (rect.bottom > -50 && rect.top < innerHeight) {
            const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
            photo.style.transform = `translateY(${16 - progress * 32}px)`;
          }
        }
        if (rail && process) {
          const rect = process.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < innerHeight) {
            const progress = Math.max(0, Math.min(1, (innerHeight * .75 - rect.top) / (rect.height + innerHeight * .2)));
            rail.style.transform = `scaleY(${progress})`;
          }
        }
      };
      const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
      document.addEventListener('focusin', focus);
      window.addEventListener('hashchange', showAll);
      window.addEventListener('pageshow', restored);
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule);
      schedule();
      dispose = () => {
        observer.disconnect(); cancelAnimationFrame(frame);
        document.removeEventListener('focusin', focus);
        window.removeEventListener('hashchange', showAll);
        window.removeEventListener('pageshow', restored);
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
        candidates.forEach(el => { delete el.dataset.motionReady; });
        if (photo) photo.style.transform = '';
        if (rail) rail.style.transform = '';
      };
    };
    setup(); preference.addEventListener('change', setup);
    return () => { dispose(); preference.removeEventListener('change', setup); };
  }, []);
  return null;
}
