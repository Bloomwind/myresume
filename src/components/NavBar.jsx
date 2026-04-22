import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function NavBar({ branding, navItems, activeId, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="inline-flex items-center gap-3" aria-label="Go to top">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-panel font-display text-sm font-semibold text-text">
            {branding.initials}
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-muted sm:block">
            {branding.accentLabel}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-3 py-2 text-sm transition ${
                activeId === item.id
                  ? 'bg-panel text-accent'
                  : 'text-muted hover:bg-panel hover:text-text'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-panel text-text md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-xl leading-none">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-bg px-6 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  activeId === item.id
                    ? 'bg-panel text-accent'
                    : 'text-muted hover:bg-panel hover:text-text'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
