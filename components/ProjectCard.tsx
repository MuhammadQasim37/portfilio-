import type { Project } from "@/data/portfolio";

const statusLabel = { completed: "Completed", "in-progress": "In progress", planned: "Planned concept" } as const;

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project">
      {project.status && <span className="badge">{statusLabel[project.status]}</span>}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <h4>{project.featuresLabel}</h4>
      <ul className="feat">{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
      <ul className="chips" aria-label="Technologies">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      {(project.repoUrl || project.liveUrl) && (
        <div className="links">
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Source code</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live site</a>}
        </div>
      )}
    </article>
  );
}
