import { Reveal } from './Reveal';

export function SectionShell({ id, badge, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-border bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {badge}
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-text md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
