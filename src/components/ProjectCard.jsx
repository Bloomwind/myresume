import { resolveLink } from '../utils/links';

function ActionLink({ label, href }) {
  const link = resolveLink(href, { disableIfPlaceholder: true });

  const baseClass =
    'cursor-hover-target inline-flex items-center justify-center rounded-md border px-3.5 py-2 text-sm font-medium transition duration-300';

  if (link.isDisabled) {
    return (
      <span
        className={`${baseClass} cursor-not-allowed border-border/40 bg-panel/40 text-muted opacity-60`}
        aria-disabled="true"
        title={link.isMissing ? `Missing ${label} link` : `Replace placeholder ${label} link`}
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={link.href}
      target={link.isExternal ? '_blank' : undefined}
      rel={link.isExternal ? 'noopener noreferrer' : undefined}
      className={`${baseClass} border-border/70 bg-panel/60 text-text hover:-translate-y-0.5 hover:border-accent/70 hover:text-accent hover:shadow-[0_0_24px_hsl(var(--accent)/0.22)]`}
    >
      {label}
      {link.isExternal ? <span className="ml-1.5 text-xs opacity-75">↗</span> : null}
    </a>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="cursor-hover-target group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-panel/55 p-6 shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_12px_45px_-20px_hsl(var(--accent)/0.45)]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition duration-500 group-hover:bg-accent/20" />

      <h3 className="font-display text-xl font-semibold leading-tight text-text">{project.title}</h3>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent/90">{project.period}</p>
      <p className="mt-4 text-sm leading-7 text-muted md:text-[15px]">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/70 bg-bg/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <ActionLink label="GitHub" href={project.github} />
        {project.demo ? <ActionLink label="Demo" href={project.demo} /> : null}
      </div>
    </article>
  );
}
