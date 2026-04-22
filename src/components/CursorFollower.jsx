import { useEffect, useRef, useState } from 'react';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, .cursor-hover-target';

export function CursorFollower() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const rafRef = useRef(0);
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return !coarsePointer && !reducedMotion;
  });

  useEffect(() => {
    if (!enabled || !ringRef.current || !dotRef.current) {
      document.body.classList.remove('custom-cursor-enabled');
      return undefined;
    }

    document.body.classList.add('custom-cursor-enabled');

    let cursorVisible = false;
    let hoveringInteractive = false;
    let pointerDown = false;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    const updateCursorClasses = () => {
      const ring = ringRef.current;
      const dot = dotRef.current;

      if (!ring || !dot) {
        return;
      }

      ring.classList.toggle('is-active', hoveringInteractive);
      ring.classList.toggle('is-pressed', pointerDown);
      dot.classList.toggle('is-pressed', pointerDown);

      const opacity = cursorVisible ? '1' : '0';
      ring.style.opacity = opacity;
      dot.style.opacity = opacity;
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    const onMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!cursorVisible) {
        cursorVisible = true;
        updateCursorClasses();
      }
    };

    const onMouseLeave = () => {
      cursorVisible = false;
      updateCursorClasses();
    };

    const onMouseDown = () => {
      pointerDown = true;
      updateCursorClasses();
    };

    const onMouseUp = () => {
      pointerDown = false;
      updateCursorClasses();
    };

    const onMouseOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      hoveringInteractive = Boolean(target.closest(INTERACTIVE_SELECTOR));
      updateCursorClasses();
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    updateCursorClasses();
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div ref={ringRef} className="pointer-ring" />
      <div ref={dotRef} className="pointer-dot" />
    </>
  );
}
