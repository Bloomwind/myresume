import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function ExperienceSection({ data }) {
  return (
    <SectionShell id="experience" badge={data.badge} title={data.title}>
      <ol className="relative space-y-10 border-l border-border pl-6 md:pl-8">
        {data.entries.map((entry, idx) => (
          <Reveal key={entry.role} delay={idx * 70}>
            <li className="relative">
              <span className="absolute -left-[2.2rem] top-1 h-3.5 w-3.5 rounded-full border border-accent/40 bg-accent/60 md:-left-[2.7rem]" />
              <div className="rounded-lg border border-border bg-panel p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text">{entry.role}</h3>
                    <p className="text-sm text-muted">{entry.organization}</p>
                  </div>
                  <div className="text-sm text-muted">
                    <p>{entry.period}</p>
                    <p>{entry.type}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted md:text-base">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
