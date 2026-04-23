import { ButtonLink } from '../components/ButtonLink';
import { Reveal } from '../components/Reveal';
import { SocialLinks } from '../components/SocialLinks';

export function HeroSection({ hero, links }) {
  const focus = hero.currentFocus ?? {
    title: 'Current Focus',
    items: hero.highlights ?? [],
  };

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_360px] lg:gap-12 lg:px-8">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex rounded-full border border-accent/30 bg-panel/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent/90 backdrop-blur-sm">
              {hero.badge}
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-6xl md:leading-[1.06]">
              {hero.name}
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-5 max-w-3xl font-display text-lg font-medium text-accent md:text-2xl">
              {hero.headline}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-3xl text-base leading-8 text-muted md:text-lg">{hero.intro}</p>
          </Reveal>

          <Reveal delay={230} className="mt-9 flex flex-wrap gap-3">
            {hero.cta.map((button) => (
              <ButtonLink
                key={button.label}
                href={button.href}
                label={button.label}
                style={button.style}
                type={button.type}
                allowPlaceholder={button.type === 'resume'}
              />
            ))}
          </Reveal>
        </div>

        <Reveal delay={260} className="self-start lg:mt-2">
          <aside className="relative overflow-hidden rounded-2xl border border-border/70 bg-panel/55 p-6 shadow-soft backdrop-blur-md">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{hero.socialTitle}</p>
            <SocialLinks links={links} />

            <div className="mt-6 border-t border-border/60 pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{focus.title}</p>
              <ul className="space-y-3 text-sm leading-6 text-muted">
                {focus.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
