import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function EducationSection({ data }) {
  return (
    <SectionShell id="education" badge={data.badge} title={data.title}>
      <div className="grid gap-4">
        {data.entries.map((entry, idx) => (
          <Reveal key={entry.school} delay={idx * 80}>
            <div className="flex flex-col gap-1 rounded-lg border border-border bg-panel p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-text">{entry.school}</h3>
                <p className="text-sm text-muted md:text-base">{entry.degree}</p>
              </div>
              <p className="text-sm text-muted">{entry.period}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
