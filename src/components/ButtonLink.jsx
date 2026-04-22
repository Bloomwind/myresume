import { resolveLink } from '../utils/links';

const STYLE_MAP = {
  primary:
    'border border-accent/80 bg-accent/90 text-white shadow-[0_0_0_1px_hsl(var(--accent)/0.2)] hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]',
  secondary:
    'border border-border/80 bg-panel/70 text-text hover:-translate-y-0.5 hover:border-accent/70 hover:text-accent',
  ghost:
    'border border-border/30 bg-transparent text-text hover:-translate-y-0.5 hover:border-accent/70 hover:bg-panel/60',
  disabled:
    'cursor-not-allowed border border-border/40 bg-panel/40 text-muted opacity-70',
};

export function ButtonLink({
  href,
  label,
  style = 'primary',
  type = 'url',
  allowPlaceholder = false,
  className = '',
}) {
  const link = resolveLink(href, {
    type,
    disableIfPlaceholder: !allowPlaceholder,
  });

  const common =
    'cursor-hover-target inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition duration-300';

  const styleClass = link.isDisabled ? STYLE_MAP.disabled : STYLE_MAP[style] ?? STYLE_MAP.primary;

  if (link.isDisabled) {
    return (
      <span
        className={`${common} ${styleClass} ${className}`}
        aria-disabled="true"
        title={link.isMissing ? 'Missing link in profile data' : 'Replace placeholder link in src/data/profile.js'}
      >
        {label}
      </span>
    );
  }

  const isPdf = link.href.toLowerCase().endsWith('.pdf');

  return (
    <a
      href={link.href}
      className={`${common} ${styleClass} ${className}`}
      target={link.isExternal ? '_blank' : undefined}
      rel={link.isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
      download={isPdf && !link.isExternal ? '' : undefined}
      title={link.isPlaceholder ? 'Placeholder link: update in src/data/profile.js' : undefined}
    >
      {label}
      {link.isExternal ? <span className="text-xs opacity-75">↗</span> : null}
      {link.isPlaceholder ? (
        <span className="rounded-sm border border-border/60 px-1.5 py-0.5 text-[10px] uppercase tracking-wide">
          Placeholder
        </span>
      ) : null}
    </a>
  );
}
