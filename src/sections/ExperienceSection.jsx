import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function ExperienceSection({ data }) {
  return (
    <SectionShell id="experience" badge={data.badge} title={data.title}>
      <ol className="relative space-y-9 border-l border-border/70 pl-6 md:pl-8">
        {data.entries.map((entry, idx) => (
          <Reveal key={`${entry.organization}-${entry.period}`} delay={idx * 70}>
            <li className="relative">
              <span className="absolute -left-[1.86rem] top-1.5 h-3 w-3 rounded-full border border-accent/60 bg-accent/48 shadow-[0_0_10px_hsl(var(--accent)/0.28)] md:-left-[2.35rem]" />

              <div className="rounded-xl border border-border/70 bg-panel/72 p-5 backdrop-blur-sm md:p-6">
                <div className="flex flex-col gap-2 border-b border-border/60 pb-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-start gap-2">
                      <h3 className="font-display text-xl font-semibold text-text">{entry.organization}</h3>
                      {entry.organizationUrl ? (
                        <a
                          href={entry.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-hover-target mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted/75 transition duration-300 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_12px_hsl(var(--accent)/0.14)]"
                          aria-label={`${data.labels?.visitOrganizationWebsite}: ${entry.organization}`}
                          title={data.labels?.visitOrganizationWebsite}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M14 5h5v5" />
                            <path d="M10 14 19 5" />
                            <path d="M19 13v4a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h4" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-muted">{entry.location}</p>
                  </div>
                  <div className="text-sm text-muted md:text-right">
                    <p className="font-medium text-text/90">{entry.period}</p>
                    {entry.type ? <p>{entry.type}</p> : null}
                  </div>
                </div>

                <div className="mt-5 space-y-6">
                  {entry.roles.map((role) => (
                    <article key={`${role.title}-${role.period ?? 'role'}`} className="space-y-3">
                      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <h4 className="font-display text-base font-semibold text-text md:text-lg">{role.title}</h4>
                        {role.period ? (
                          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent/90">
                            {role.period}
                          </p>
                        ) : null}
                      </div>

                      <ul className="space-y-2 text-sm leading-7 text-muted md:text-[15px]">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {role.skills?.length ? (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {role.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-border/70 bg-bg/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
