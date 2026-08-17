import { useEffect } from 'react';

/**
 * Reveal-on-scroll for every [data-reveal] element in the tree.
 *
 * Uses a low (0) IntersectionObserver threshold plus a scroll-driven
 * safety sweep that also reveals anything already scrolled past. A prior
 * version of this site shipped with a 0.15 threshold and no sweep: under
 * heavy paint (blurred/gradient animations) or an instant scroll jump
 * (direct #fragment load, Home/End, scrollbar-thumb drag), the observer
 * could miss a crossing entirely and leave content stuck invisible. See
 * that incident for the full repro — this is the fix carried forward.
 */
export function useRevealSweep() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
      observer.observe(el);
    });

    let ticking = false;
    function sweep() {
      ticking = false;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < vh) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sweep);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    sweep();

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);
}
