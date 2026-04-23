import { useState } from 'react';
import { BrandTypingTitle } from './BrandTypingTitle';
import { ThemeToggle } from './ThemeToggle';

export function NavBar({
  branding,
  navItems,
  activeId,
  theme,
  onToggleTheme,
  ui,
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/82 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/22 to-transparent" />
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
        aria-label={ui?.navAriaLabel}
      >
        <a
          href="#home"
          className="cursor-hover-target inline-flex items-center gap-3"
          aria-label={ui?.goToTopLabel}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-accent/30 bg-panel/92 font-display text-sm font-semibold text-text shadow-[0_0_14px_hsl(var(--accent)/0.1)]">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/65 to-transparent" />
            {branding.initials}
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <BrandTypingTitle branding={branding} />
            <span className="hidden max-w-[17rem] truncate font-mono text-[10px] uppercase tracking-[0.14em] text-muted/85 sm:block">
              {branding.siteBrandSubtext}
            </span>
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
          <ThemeToggle theme={theme} onToggle={onToggleTheme} labels={ui?.themeToggle} />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-hover-target inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-panel/72 text-text transition hover:border-accent/65 hover:text-accent md:hidden"
            aria-label={ui?.toggleMenuLabel}
            aria-expanded={open}
          >
            <span className="text-xl leading-none">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border/70 bg-bg/95 px-6 py-3 backdrop-blur-2xl md:hidden">
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
