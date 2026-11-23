import { ExternalLink, Github, Code2 } from "lucide-react";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-top">
        <span className="project-icon"><Code2 size={21}/></span>
        <span className="project-topic">{project.topic || "Repositório"}</span>
      </div>
      <h3>{project.name.replaceAll("-", " ")}</h3>
      <p>{project.description || "Repositório público no GitHub. Consulte o projeto para ver detalhes e instruções."}</p>
      <div className="project-bottom">
        <span className="language-dot">{project.language || "Código"}</span>
        <a href={project.html_url || project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name} no GitHub`}>
          <Github size={16}/> Código <ExternalLink size={13}/>
        </a>
      </div>
    </article>
  );
}
