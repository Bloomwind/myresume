import { resolveLink } from '../utils/links';

const ICONS = {
  github: (
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.7.1 3 .8.8 1.2 1.8 1.2 3.1 0 4.7-2.9 5.8-5.6 6.1.4.4.8 1.1.8 2.3v3.3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M4.8 3.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.2 8.7h3.2V20H3.2V8.7Zm5 0h3v1.6h.1c.4-.8 1.5-1.9 3.1-1.9 3.3 0 3.9 2.1 3.9 4.9V20H15v-5.8c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3V20H8.2V8.7Z" />
  ),
  email: (
    <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.8-.3L12 10.7l7.2-5.5H4.8Zm15 13.3V7.3L12.5 13a.8.8 0 0 1-1 0L4.2 7.3v11.2h15.6Z" />
  ),
};

export function SocialLinks({ links, className = '' }) {
  const items = [
    { key: 'github', href: links.github, label: 'GitHub' },
    { key: 'linkedin', href: links.linkedin, label: 'LinkedIn' },
    { key: 'email', href: links.email, label: 'Email', type: 'email' },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => {
        const link = resolveLink(item.href, {
          type: item.type,
          disableIfPlaceholder: true,
        });

        const baseClass =
          'cursor-hover-target inline-flex h-10 w-10 items-center justify-center rounded-md border bg-panel/60 text-muted transition duration-300';

        if (link.isDisabled) {
          return (
            <span
              key={item.key}
              className={`${baseClass} cursor-not-allowed border-border/40 opacity-50`}
              aria-label={`${item.label} link unavailable`}
              title={
                link.isMissing
                  ? `Missing ${item.label} in src/data/profile.js`
                  : `Replace placeholder ${item.label} link in src/data/profile.js`
              }
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                {ICONS[item.key]}
              </svg>
            </span>
          );
        }

        return (
          <a
            key={item.key}
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
            className={`${baseClass} border-border/70 hover:-translate-y-0.5 hover:border-accent/70 hover:text-accent hover:shadow-[0_0_25px_hsl(var(--accent)/0.26)]`}
            aria-label={item.label}
            title={item.label}
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
              {ICONS[item.key]}
            </svg>
          </a>
        );
      })}
    </div>
  );
}
