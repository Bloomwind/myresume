import { ButtonLink } from '../components/ButtonLink';
import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function ContactSection({ data }) {
  return (
    <SectionShell id="contact" badge={data.badge} title={data.title}>
      <Reveal>
        <p className="max-w-3xl text-base leading-8 text-muted md:text-lg">{data.note}</p>
      </Reveal>
      <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
        {data.buttons.map((button) => (
          <ButtonLink
            key={button.label}
            href={button.href}
            label={button.label}
            style={button.style}
            type={button.type}
          />
        ))}
      </Reveal>
    </SectionShell>
  );
}
