import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function AboutSection({ data }) {
  return (
    <SectionShell id="about" badge={data.badge} title={data.title}>
      <Reveal delay={120}>
        <p className="max-w-4xl text-base leading-8 text-muted md:text-lg">{data.summary}</p>
      </Reveal>
    </SectionShell>
  );
}
