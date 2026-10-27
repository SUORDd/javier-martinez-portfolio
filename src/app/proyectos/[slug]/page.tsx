import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Compass,
  Github,
  Lightbulb,
  ListChecks,
} from "lucide-react";
import { notFound } from "next/navigation";
import { detailedProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { LearningPathArt, TeacherDashboardArt } from "@/components/project-art";
import { InglesChidoCaseStudy } from "@/components/ingles-chido-case-study";
import { StiNemCaseStudy } from "@/components/sti-nem-case-study";
import { getPublicAssetPath, getSiteUrl } from "@/lib/site-url";
import { LanguageText } from "@/components/language-provider";
import { projectText } from "@/data/project-translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return detailedProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = detailedProjects.find((item) => item.slug === slug);
  if (!project) return { title: "Proyecto no encontrado" };
  const siteUrl = getSiteUrl();
  const socialImage = siteUrl ? `${siteUrl}${getPublicAssetPath("/og-image.svg")}` : undefined;
  return {
    title: project.name,
    description: `${project.summary} Mi participación: ${project.role}.`,
    ...(siteUrl
      ? { alternates: { canonical: `${siteUrl}${getPublicAssetPath(`/proyectos/${project.slug}/`)}` } }
      : {}),
    openGraph: {
      title: `${project.name} — Proyectos de Javier Martínez`,
      description: project.summary,
      ...(socialImage
        ? {
            images: [
              {
                url: socialImage,
                width: 1200,
                height: 630,
                alt: `${project.name} · Proyecto de Javier Martínez`,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = detailedProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  const isInglesChido = project.slug === "ingles-chido";
  const nextProject = detailedProjects.find(
    (item) => item.slug !== project.slug,
  );

  if (isInglesChido) return <InglesChidoCaseStudy />;
  if (project.slug === "tutor-ia-nem") return <StiNemCaseStudy />;

  return (
    <main className="detail-page" key={project.slug}>
      <section className="detail-hero">
        <div className="shell">
          <span className="detail-watermark" aria-hidden="true">
            {project.number}
          </span>
          <Link className="back-link" href="/#proyectos">
            <ArrowLeft size={15} /> <LanguageText es="Volver a proyectos" en="Back to projects" />
          </Link>
          <div className="detail-intro">
            <p className="eyebrow">
              <span>{project.number}</span> / <LanguageText es={project.category.toUpperCase()} en={String(projectText(project, "category")).toUpperCase()} />
            </p>
            <h1>
              <LanguageText es={project.name} en={projectText(project, "name")} />
              <span>.</span>
            </h1>
            <div className="detail-meta">
              <span><LanguageText es={project.role} en={projectText(project, "role")} /></span>
              <span className="status-dot">
                <i />
                <LanguageText es={project.status} en={projectText(project, "status")} />
              </span>
            </div>
            <p className="detail-lede"><LanguageText es={project.summary} en={projectText(project, "summary")} /></p>
          </div>
          <div
            className={`detail-art${isInglesChido ? " detail-art-learning" : " detail-art-teacher"}`}
          >
            {isInglesChido ? <LearningPathArt /> : <TeacherDashboardArt />}
          </div>
          {project.conceptual && (
            <p className="conceptual-note">
              <LanguageText es="La composición es ilustrativa. No representa una captura verificada del producto." en="This composition is illustrative and does not represent a verified product screenshot." />
            </p>
          )}
        </div>
      </section>

      <section className="detail-content">
        <div className="shell detail-columns">
          <div className="detail-main-column">
            <section className="detail-block" id="contexto" data-reveal>
              <p className="eyebrow">
                <span>01</span> / <LanguageText es="CONTEXTO" en="CONTEXT" />
              </p>
              <h2><LanguageText es="El problema" en="The problem" /></h2>
              <p><LanguageText es={project.problem} en={projectText(project, "problem")} /></p>
              <div className="detail-callout">
                <Lightbulb size={19} />
                <p><LanguageText es={project.solution} en={projectText(project, "solution")} /></p>
              </div>
            </section>
            <section className="detail-block" id="alcance" data-reveal>
              <p className="eyebrow">
                <span>02</span> / <LanguageText es="ALCANCE" en="SCOPE" />
              </p>
              <h2>
                {isInglesChido ? <LanguageText es="Producto en evolución" en="A product in progress" /> : <LanguageText es="La plataforma" en="The platform" />}
              </h2>
              {project.overview.map((paragraph, index) => (
                <p key={paragraph}><LanguageText es={paragraph} en={projectText(project, "overview")[index]} /></p>
              ))}
            </section>
            <section className="detail-block" id="contribucion" data-reveal>
              <p className="eyebrow">
                <span>03</span> / <LanguageText es="MI TRABAJO" en="MY WORK" />
              </p>
              <h2><LanguageText es="Mi contribución" en="My contribution" /></h2>
              <p><LanguageText es={project.contribution} en={projectText(project, "contribution")} /></p>
            </section>
          </div>
          <aside className="detail-sidebar">
            <nav
              className="detail-topic-nav"
              aria-label="Contenido del proyecto / Project contents"
            >
              <a href="#contexto">
                <span>01</span><LanguageText es="El problema" en="The problem" />
              </a>
              <a href="#alcance">
                <span>02</span><LanguageText es="Alcance" en="Scope" />
              </a>
              <a href="#contribucion">
                <span>03</span><LanguageText es="Mi contribución" en="My contribution" />
              </a>
              <a href="#evolucion">
                <span>04</span>
                {isInglesChido ? <LanguageText es="Desarrollo y evolución" en="Development and next steps" /> : <LanguageText es="Experiencia" en="Experience" />}
              </a>
            </nav>
            <div className="sidebar-panel">
              <p className="eyebrow">
                <span>
                  <Compass size={14} />
                </span>{" "}
                  <LanguageText es="MI PARTICIPACIÓN" en="MY ROLE" />
              </p>
              <h3>{project.role}</h3>
              <div className="sidebar-rule" />
              <p className="sidebar-label"><LanguageText es="ESTADO" en="STATUS" /></p>
              <p><LanguageText es={project.status} en={projectText(project, "status")} /></p>
              {project.tags.length > 0 && (
                <>
                  <div className="sidebar-rule" />
                  <p className="sidebar-label"><LanguageText es="TECNOLOGÍAS RELACIONADAS" en="RELATED TECHNOLOGIES" /></p>
                  <ul className="detail-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="sidebar-panel side-note">
              <Github size={17} />
              <p>
                {isInglesChido
                  ? <LanguageText es="Consulta el código y la documentación del proyecto en su repositorio público." en="View the project's code and documentation in its public repository." />
                  : <LanguageText es="Mi contribución se limita al desarrollo frontend del módulo docente." en="My contribution is limited to frontend development for the teacher module." />}
              </p>
              {isInglesChido && (
                <a
                  href="https://github.com/SUORDd/Ingles-Chido"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LanguageText es="Ver repositorio" en="View repository" /> <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {isInglesChido && (
        <section className="detail-scope" id="evolucion" data-reveal>
          <div className="shell scope-layout">
            <div className="scope-heading">
              <p className="eyebrow">
                <span>04</span> / <LanguageText es="IMPLEMENTADO" en="IMPLEMENTED" />
              </p>
              <h2>
                <LanguageText es="Lo que ya" en="What has" />
                <br />
                <em><LanguageText es="está construido." en="been built." /></em>
              </h2>
              <p>
                <LanguageText es="La app móvil actual y su estado local, descritos sin adelantar capacidades de la arquitectura prevista." en="The current mobile app and its local state, described without overstating the planned architecture." />
              </p>
            </div>
            <div className="scope-list">
              {project.implemented.map((item, index) => (
                <div className="scope-item" key={item}>
                  <span>
                    <Check size={15} />
                  </span>
                  <p><LanguageText es={item} en={projectText(project, "implemented")[index]} /></p>
                </div>
              ))}
            </div>
          </div>
          <div className="shell planned-layout">
            <div className="planned-heading">
              <p className="eyebrow">
                <span>05</span> / <LanguageText es="SIGUIENTE EVOLUCIÓN" en="WHAT'S NEXT" />
              </p>
              <h2><LanguageText es="En planificación" en="Planned" /></h2>
              <p>
                <LanguageText es="Ideas de evolución del producto, todavía no presentadas como funciones disponibles." en="Ideas for future product development, not yet presented as available features." />
              </p>
            </div>
            <div className="planned-list">
              {project.planned.map((item, index) => (
                <div className="planned-item" key={item}>
                  <ListChecks size={16} />
                  <p><LanguageText es={item} en={projectText(project, "planned")[index]} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isInglesChido && (
        <section className="detail-scope" id="evolucion" data-reveal>
          <div className="shell tutor-contribution">
            <p className="eyebrow">
              <span>04</span> / <LanguageText es="EXPERIENCIA" en="EXPERIENCE" />
            </p>
            <h2>
              <LanguageText es="Construir para las personas" en="Building for the people" />
              <br />
              <LanguageText es="que enseñan." en="who teach." />
            </h2>
            <p>
              <LanguageText es="El proyecto me permitió concentrarme en cómo docentes recorren una herramienta digital y encuentran la información que necesitan. La experiencia fue específica al frontend: organización de pantallas, navegación y consistencia de componentes." en="The project let me focus on how teachers navigate a digital tool and find the information they need. My work was specific to the frontend: screen organization, navigation, and component consistency." />
            </p>
            <p>
              <LanguageText es="La plataforma se desarrolló en equipo. Esta página no atribuye a mi participación el backend, los modelos de inteligencia artificial ni el desarrollo completo del sistema." en="The platform was developed by a team. This page does not attribute the backend, AI models, or the complete system to my contribution." />
            </p>
          </div>
        </section>
      )}

      {nextProject && (
        <nav className="shell project-pagination" aria-label="More projects">
          <Link href="/#proyectos">
            <ArrowLeft size={16} />
            <LanguageText es="Todos los proyectos" en="All projects" />
          </Link>
          <Link href={`/proyectos/${nextProject.slug}/`}>
            <div>
              <small><LanguageText es="SIGUIENTE PROYECTO" en="NEXT PROJECT" /></small>
              <strong>{nextProject.name}</strong>
            </div>
            <ArrowUpRight size={23} />
          </Link>
        </nav>
      )}

      <section className="detail-next">
        <div className="shell detail-next-inner">
          <div>
            <p className="eyebrow">
              <span><LanguageText es="EN CONTACTO" en="GET IN TOUCH" /></span>
            </p>
            <h2><LanguageText es="¿Hablamos de una residencia?" en="Let's talk about an internship." /></h2>
            <p><LanguageText es="Disponible desde enero de 2027." en="Available starting January 2027." /></p>
          </div>
          <a
            className="button button-primary"
            href={`mailto:${profile.email}?subject=${encodeURIComponent(`Residencia profesional — ${profile.name}`)}`}
          >
            <LanguageText es="Escríbeme" en="Email me" /> <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
