export function ThemeToggle({ theme, onToggle, labels }) {
  const isDark = theme === 'dark';
  const ariaLabel = isDark ? labels?.toLight : labels?.toDark;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="cursor-hover-target inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-panel/72 text-text transition duration-300 hover:-translate-y-0.5 hover:border-accent/65 hover:text-accent"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 4v2m0 12v2m8-8h-2M6 12H4m12.95 4.95-1.41-1.41M8.46 8.46 7.05 7.05m9.9 0-1.41 1.41M8.46 15.54l-1.41 1.41" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20.2 14.8A8.5 8.5 0 1 1 9.2 3.8a7 7 0 1 0 11 11Z" />
        </svg>
      )}
    </button>
  );
}
