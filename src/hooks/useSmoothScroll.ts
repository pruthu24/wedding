import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lenis-driven inertial scrolling. Lenis still moves the real document
 * scroll position, so framer-motion's `useScroll` keeps working unchanged.
 * Disabled outright when the visitor asks for reduced motion.
 */
export function useSmoothScroll(enabled = true): void {
  useEffect(() => {
    if (!enabled) return;
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.25,
      // Long, soft tail — reads as a film dolly rather than a scroll.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
      wheelMultiplier: 0.9,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [enabled]);
}
