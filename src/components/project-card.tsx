import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Project } from "@/data/projects";
import { InglesChidoCover } from "@/components/ingles-chido-cover";
import { StiNemBrowserFrame } from "@/components/sti-nem-browser-frame";
import { SpaOrizabaCover } from "@/components/spa-orizaba-cover";
import { LanguageText } from "@/components/language-provider";
import { projectText } from "@/data/project-translations";

export function ProjectCard({ project }: { project: Project }) {
  const reserved = project.slug === "proximo-proyecto";
  const className = `project-card${project.featured ? " project-card-featured" : ""}${project.slug === "ingles-chido" ? " project-card-ingles" : ""}${reserved ? " project-card-reserved" : ""}`;
  const content = (
    <>
      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.number} / <LanguageText es="PROYECTO" en="PROJECT" /></span>
          <span className="status-dot">
            <i />
            <LanguageText es={project.status} en={projectText(project, "status")} />
          </span>
        </div>
        <div className="project-card-title-row">
          {reserved ? <h3><LanguageText es={project.name} en={projectText(project, "name")} /></h3> : (
            <div className="project-title-link">
              <h3><LanguageText es={project.name} en={projectText(project, "name")} /></h3>
              <ArrowUpRight size={25} />
            </div>
          )}
        </div>
        <p className="project-category"><LanguageText es={project.category} en={projectText(project, "category")} /></p>
        <p className="project-summary"><LanguageText es={project.summary} en={projectText(project, "summary")} /></p>
        <div className="project-role">
          <span><LanguageText es="MI PARTICIPACIÓN" en="MY ROLE" /></span>
          <p><LanguageText es={project.role} en={projectText(project, "role")} /></p>
        </div>
        {!reserved && (
          <span className="text-link project-detail-link">
            <LanguageText es="Conocer el proyecto" en="Explore the project" />{" "}
            <span>
              <ArrowUpRight size={17} />
            </span>
          </span>
        )}
      </div>
      <div className="project-visual">
        {project.slug === "ingles-chido" ? (
          <InglesChidoCover />
        ) : project.slug === "tutor-ia-nem" ? (
          <StiNemBrowserFrame className="sti-card-browser-frame" showCaption={false} />
        ) : project.slug === "spa-orizaba" ? (
          <SpaOrizabaCover />
        ) : (
          <div className="reserved-art">
            <span className="reserved-ring" />
            <span className="reserved-cross">
              <Plus size={30} strokeWidth={1} />
            </span>
            <span className="reserved-label"><LanguageText es="EN PREPARACIÓN" en="COMING SOON" /></span>
            <span className="reserved-corner corner-tl" />
            <span className="reserved-corner corner-br" />
          </div>
        )}
      </div>
    </>
  );

  if (reserved) {
    return (
      <article className={className} data-reveal data-interactive>
        {content}
      </article>
    );
  }

  return (
    <Link
      aria-label={`Conocer el proyecto ${project.name}`}
      className={className}
      data-reveal
      data-interactive
      href={`/proyectos/${project.slug}/`}
    >
      {content}
    </Link>
  );
}
