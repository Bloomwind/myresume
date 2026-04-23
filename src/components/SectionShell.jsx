import { Reveal } from './Reveal';

export function SectionShell({ id, badge, title, children }) {
  return (
    <section id={id} className="relative scroll-mt-24 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/90 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-border/70 bg-panel/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
            {badge}
          </p>
          <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-text md:text-4xl md:leading-tight">
            {title}
          </h2>
        </Reveal>
        <div className="mt-9">{children}</div>
      </div>
    </section>
  );
}
