import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function SkillsSection({ data }) {
  return (
    <SectionShell id="skills" badge={data.badge} title={data.title}>
      <div className="grid gap-5 md:grid-cols-2">
        {data.groups.map((group, idx) => (
          <Reveal key={group.category} delay={idx * 70}>
            <div className="rounded-lg border border-border bg-panel p-5">
              <h3 className="font-display text-lg font-semibold text-text">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted"
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
