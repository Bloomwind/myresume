import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function ProjectsSection({ data }) {
  return (
    <SectionShell id="projects" badge={data.badge} title={data.title}>
      <div className="grid gap-6 md:grid-cols-2">
        {data.entries.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 80}>
            <article className="flex h-full flex-col rounded-lg border border-border bg-panel p-6 transition hover:-translate-y-0.5 hover:border-accent/60">
              <h3 className="font-display text-xl font-semibold text-text">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted md:text-base">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-3 py-2 text-sm text-text transition hover:border-accent hover:text-accent"
                >
                  GitHub ↗
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-3 py-2 text-sm text-text transition hover:border-accent hover:text-accent"
                >
                  Demo ↗
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
