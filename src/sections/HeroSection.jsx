import { ButtonLink } from '../components/ButtonLink';
import { Reveal } from '../components/Reveal';
import { SocialLinks } from '../components/SocialLinks';

export function HeroSection({ hero, links }) {
  return (
    <section id="home" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex rounded-full border border-border bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              {hero.badge}
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-6xl">
              {hero.name}
            </h1>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-4 max-w-3xl font-display text-lg font-medium text-accent md:text-2xl">
              {hero.headline}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-lg">{hero.intro}</p>
          </Reveal>

          <Reveal delay={270} className="mt-8 flex flex-wrap gap-3">
            {hero.cta.map((button) => (
              <ButtonLink key={button.label} href={button.href} label={button.label} style={button.style} />
            ))}
          </Reveal>
        </div>

        <Reveal delay={320} className="lg:justify-self-end">
          <div className="rounded-xl border border-border bg-panel p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              {hero.socialTitle}
            </p>
            <SocialLinks links={links} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
