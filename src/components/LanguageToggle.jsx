export function LanguageToggle({ language, labels, onToggle }) {
  const shortLabels = labels?.languageShort ?? { en: 'EN', zh: '中' };
  const toggleLabel = labels?.languageToggleLabel;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="cursor-hover-target inline-flex h-10 items-center rounded-md border border-border/70 bg-panel/72 px-2.5 font-mono text-xs font-semibold tracking-[0.08em] text-text transition duration-300 hover:-translate-y-0.5 hover:border-accent/65 hover:text-accent"
      aria-label={toggleLabel}
      title={toggleLabel}
    >
      <span className={language === 'en' ? 'text-accent' : 'text-muted'}>{shortLabels.en}</span>
      <span className="mx-1 text-muted/60">/</span>
      <span className={language === 'zh' ? 'text-accent' : 'text-muted'}>{shortLabels.zh}</span>
    </button>
  );
}
