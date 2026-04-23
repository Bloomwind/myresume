import { useEffect, useMemo, useState } from 'react';

export function BrandTypingTitle({ branding }) {
  const sequence = useMemo(
    () => branding.typingBrandSequence?.filter((item) => item?.trim().length) ?? [],
    [branding.typingBrandSequence],
  );

  const hasSequence = sequence.length > 0;
  const finalText = branding.siteBrandText || sequence.at(-1) || 'portfolio';

  const [displayText, setDisplayText] = useState(() => (hasSequence ? '> ' : finalText));
  const [isComplete, setIsComplete] = useState(() => !hasSequence);

  useEffect(() => {
    if (!hasSequence) {
      return undefined;
    }

    let timeoutId;
    let stage = 0;
    let char = 0;
    let active = true;

    const step = () => {
      if (!active) {
        return;
      }

      const target = sequence[stage];

      if (char <= target.length) {
        setDisplayText(`> ${target.slice(0, char)}`);
        char += 1;
        timeoutId = setTimeout(step, stage === 0 ? 36 : 30);
        return;
      }

      if (stage < sequence.length - 1) {
        timeoutId = setTimeout(() => {
          stage += 1;
          char = 0;
          step();
        }, 520);
        return;
      }

      timeoutId = setTimeout(() => {
        setDisplayText(finalText);
        setIsComplete(true);
      }, 480);
    };

    timeoutId = setTimeout(() => {
      setIsComplete(false);
      setDisplayText('> ');
      step();
    }, 0);

    return () => {
      active = false;
      clearTimeout(timeoutId);
    };
  }, [hasSequence, sequence, finalText]);

  const text = hasSequence ? displayText : finalText;

  return (
    <span className="inline-flex items-center gap-1 font-mono text-[12px] tracking-[0.08em] text-text sm:text-[13px]">
      <span className="max-w-[8.5rem] truncate sm:max-w-[17rem]">{text}</span>
      <span className={`brand-caret ${hasSequence && !isComplete ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true">
        _
      </span>
    </span>
  );
}
