import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function NavBar({ branding, navItems, activeId, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-bg/70 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#home" className="cursor-hover-target inline-flex items-center gap-3" aria-label="Go to top">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-accent/40 bg-panel/80 font-display text-sm font-semibold text-text shadow-[0_0_24px_hsl(var(--accent)/0.22)]">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            {branding.initials}
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-muted sm:block">
            {branding.accentLabel}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cursor-hover-target group relative rounded-md px-3 py-2 text-sm transition ${
                  isActive ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-center rounded-full bg-accent transition duration-300 ${
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-70 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-hover-target inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-panel/70 text-text transition hover:border-accent/70 hover:text-accent md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-xl leading-none">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border/60 bg-bg/95 px-6 py-3 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`cursor-hover-target rounded-md px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-panel/80 text-accent'
                      : 'text-muted hover:bg-panel/70 hover:text-text'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
