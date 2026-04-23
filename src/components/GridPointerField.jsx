import { useEffect, useState } from 'react';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, .cursor-hover-target';

export function GridPointerField() {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return !coarsePointer && !reducedMotion;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (!enabled) {
      root.classList.remove('grid-pointer-enabled');
      return undefined;
    }

    root.classList.add('grid-pointer-enabled');

    let rafId = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.35;

    const commitPointer = () => {
      root.style.setProperty('--grid-cursor-x', `${x}px`);
      root.style.setProperty('--grid-cursor-y', `${y}px`);
      rafId = 0;
    };

    const queueCommit = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(commitPointer);
      }
    };

    const onPointerMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      root.style.setProperty('--grid-cursor-opacity', '1');
      queueCommit();
    };

    const onPointerLeave = () => {
      root.style.setProperty('--grid-cursor-opacity', '0');
      root.style.setProperty('--grid-cursor-boost', '0');
    };

    const onPointerOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const hoveringInteractive = Boolean(target.closest(INTERACTIVE_SELECTOR));
      root.style.setProperty('--grid-cursor-boost', hoveringInteractive ? '0.14' : '0.06');
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave, { passive: true });
    document.addEventListener('pointerover', onPointerOver, { passive: true });

    commitPointer();
    root.style.setProperty('--grid-cursor-opacity', '0');
    root.style.setProperty('--grid-cursor-boost', '0.06');

    return () => {
      root.classList.remove('grid-pointer-enabled');
      root.style.removeProperty('--grid-cursor-x');
      root.style.removeProperty('--grid-cursor-y');
      root.style.removeProperty('--grid-cursor-opacity');
      root.style.removeProperty('--grid-cursor-boost');
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('pointerover', onPointerOver);

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [enabled]);

  return null;
}
