import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function AboutSection({ data }) {
  const paragraphs = data.summary.split('\n\n');

  return (
    <SectionShell id="about" badge={data.badge} title={data.title}>
      <Reveal delay={100}>
        <div className="max-w-4xl space-y-5 text-base leading-8 text-muted md:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
