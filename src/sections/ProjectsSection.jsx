import { ProjectCard } from '../components/ProjectCard';
import { SectionShell } from '../components/SectionShell';
import { Reveal } from '../components/Reveal';

export function ProjectsSection({ data, ui }) {
  return (
    <SectionShell id="projects" badge={data.badge} title={data.title}>
      <div className="grid gap-6 md:grid-cols-2">
        {data.entries.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 90}>
            <ProjectCard
              project={project}
              actionLabels={data.actionLabels}
              linkMessages={ui?.linkStatus}
            />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
