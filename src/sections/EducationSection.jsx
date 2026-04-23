import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function EducationSection({ data }) {
  const labels = data.labels ?? {};

  return (
    <SectionShell id="education" badge={data.badge} title={data.title}>
      <div className="grid gap-4">
        {data.entries.map((entry, idx) => (
          <Reveal key={entry.school} delay={idx * 70}>
            <article className="rounded-xl border border-border/70 bg-panel/72 p-5 backdrop-blur-sm md:p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-text md:text-xl">{entry.school}</h3>
                  <p className="mt-1 text-sm text-muted md:text-base">{entry.degree}</p>
                  <p className="text-sm text-muted md:text-base">{entry.field}</p>
                  {(entry.department || entry.advisor) && (
                    <div className="mt-2 space-y-1 text-xs tracking-[0.08em] text-muted/90 md:text-sm md:tracking-normal">
                      {entry.department ? (
                        <p>
                          <span className="font-medium text-text/90">{labels.department}:</span>{' '}
                          {entry.department}
                        </p>
                      ) : null}
                      {entry.advisor ? (
                        <p>
                          <span className="font-medium text-text/90">{labels.advisor}:</span>{' '}
                          {entry.advisor}
                        </p>
                      ) : null}
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-text/90">{entry.period}</p>
              </div>

              {entry.coursework?.length ? (
                <div className="mt-4 border-t border-border/60 pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {labels.coursework}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {entry.coursework.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 bg-bg/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
