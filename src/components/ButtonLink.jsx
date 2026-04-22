const STYLE_MAP = {
  primary:
    'border border-accent bg-accent text-white hover:bg-accent-strong hover:border-accent-strong',
  secondary:
    'border border-border bg-panel text-text hover:border-accent hover:text-accent',
  ghost: 'border border-transparent bg-transparent text-text hover:border-border hover:bg-panel',
};

export function ButtonLink({ href, label, style = 'primary' }) {
  const common =
    'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition duration-200';

  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.endsWith('.pdf');

  return (
    <a
      href={href}
      className={`${common} ${STYLE_MAP[style] ?? STYLE_MAP.primary}`}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      download={href.endsWith('.pdf') ? '' : undefined}
    >
      {label}
      {isExternal ? <span className="ml-2 text-xs opacity-70">↗</span> : null}
    </a>
  );
}
