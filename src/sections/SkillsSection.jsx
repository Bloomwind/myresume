import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function SkillsSection({ data }) {
  return (
    <SectionShell id="skills" badge={data.badge} title={data.title}>
      <div className="grid gap-5 md:grid-cols-2">
        {data.groups.map((group, idx) => (
          <Reveal key={group.category} delay={idx * 60}>
            <div className="group relative overflow-hidden rounded-xl border border-border/70 bg-panel/55 p-5 backdrop-blur-sm transition duration-300 hover:border-accent/55 hover:shadow-[0_10px_35px_-20px_hsl(var(--accent)/0.35)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/18" />
              <h3 className="font-display text-lg font-semibold text-text">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-bg/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
