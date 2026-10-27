import Image from "next/image";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Target,
} from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { SkillsExplorer } from "@/components/skills-explorer";
import { CopyEmail } from "@/components/copy-email";
import { LanguageText } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";

export function PortfolioPage() {
  return (
    <main>
      <HomeHero />

      <section className="about-section section-anchor" id="sobre-mi">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <span>01</span> / <LanguageText es="PERFIL" en="PROFILE" />
            </p>
            <h2>
              <LanguageText es="De construir productos" en="From building products" />
              <br /><LanguageText es="a" en="to" /> <em><LanguageText es="entender los datos." en="understanding data." /></em>
            </h2>
          </div>
          <div className="about-content" data-reveal>
            <div className="about-statement">
              <span className="statement-symbol" aria-hidden="true">
                ↳
              </span>
              <p className="about-lede">
                <LanguageText es="Me interesa que los datos ayuden a comprender comportamientos, encontrar oportunidades y construir experiencias más útiles." en="I want data to help us understand behavior, find opportunities, and build more useful experiences." />
              </p>
            </div>
            <div className="about-facts">
              <p>
                <LanguageText es="Soy estudiante de Ingeniería en Sistemas Computacionales en el Tecnológico Nacional de México, Instituto Tecnológico de Orizaba. Como fundador y desarrollador de Inglés Chido, he trabajado en la experiencia y la implementación de una aplicación educativa móvil." en="I am a Computer Systems Engineering student at the National Institute of Mexico, Orizaba Institute of Technology. As the founder and developer of Inglés Chido, I have worked on the experience and implementation of a mobile learning app." />
              </p>
              <p>
                <LanguageText es="Ahora quiero profundizar en ciencia de datos y aprendizaje automático, llevando el rigor analítico a productos digitales que respondan a necesidades reales." en="I now want to deepen my knowledge of data science and machine learning, bringing analytical rigor to digital products that address real needs." />
              </p>
            </div>
          </div>
          <div className="principles-grid">
            <article className="principle" data-reveal>
              <div className="principle-top">
                <Code2 size={23} strokeWidth={1.3} />
                <span>01</span>
              </div>
              <h3><LanguageText es="Desarrollo de productos" en="Product development" /></h3>
              <p>
                <LanguageText es="De la idea a las interfaces y funcionalidades que forman una experiencia de aprendizaje." en="From the initial idea to the interfaces and features that shape a learning experience." />
              </p>
            </article>
            <article className="principle" data-reveal>
              <div className="principle-top">
                <ChartNoAxesCombined size={23} strokeWidth={1.3} />
                <span>02</span>
              </div>
              <h3><LanguageText es="Pensamiento analítico" en="Analytical thinking" /></h3>
              <p>
                <LanguageText es="Explorar información, reconocer patrones y evaluar resultados con criterio." en="Exploring information, recognizing patterns, and evaluating results with care." />
              </p>
            </article>
            <article className="principle" data-reveal>
              <div className="principle-top">
                <Target size={23} strokeWidth={1.3} />
                <span>03</span>
              </div>
              <h3><LanguageText es="Orientación al impacto" en="Impact-driven work" /></h3>
              <p>
                <LanguageText es="Crear herramientas que faciliten procesos, decisiones y experiencias de usuarios reales." en="Building tools that improve processes, decisions, and real user experiences." />
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="projects-section section-anchor" id="proyectos">
        <div className="shell">
          <div className="section-heading section-heading-row" data-reveal>
            <div>
              <p className="eyebrow">
                <span>02</span> / <LanguageText es="TRABAJO SELECCIONADO" en="SELECTED WORK" />
              </p>
              <h2>
                <LanguageText es="Proyectos con" en="Projects with" />
                <br />
                <em><LanguageText es="propósito." en="purpose." /></em>
              </h2>
            </div>
            <p className="section-aside">
              <LanguageText es="Productos educativos y experiencias de software: el trabajo que he desarrollado, mi contribución y lo que cada proyecto busca resolver." en="Educational products and software experiences: the work I have built, my contribution, and the problems each project aims to solve." />
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="shell education-layout">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <span>03</span> / <LanguageText es="FORMACIÓN" en="EDUCATION" />
            </p>
            <h2>
              <LanguageText es="Base técnica." en="Technical foundation." />
              <br />
              <em><LanguageText es="Mirada analítica." en="Analytical perspective." /></em>
            </h2>
          </div>
          <div className="education-card" data-reveal data-interactive>
            <div className="education-top">
              <span><LanguageText es="FORMACIÓN ACADÉMICA" en="EDUCATION" /></span>
              <span>2026</span>
            </div>
            <div className="education-logo">
              <Image
                src={getPublicAssetPath("/images/ito-logo.png")}
                alt="Instituto Tecnológico de Orizaba logo / Logotipo del Instituto Tecnológico de Orizaba"
                width={88}
                height={88}
                unoptimized
              />
            </div>
            <div className="education-rule" />
            <h3><LanguageText es={profile.degree} en="Computer Systems Engineering" /></h3>
            <p><LanguageText es={profile.institution} en="National Technological Institute of Mexico — Orizaba Institute of Technology" /></p>
            <div className="education-bottom">
              <span>
                <LanguageText es={profile.semester} en="Eighth semester · final stage of my degree" />
                <br />
                <LanguageText es={profile.languages} en="Spanish (native) · English B2" />
              </span>
              <span>FORTÍN, VER.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-anchor" id="skills">
        <div className="shell">
          <div className="section-heading section-heading-row" data-reveal>
            <div>
              <p className="eyebrow">
              <span>04</span> / <LanguageText es="HERRAMIENTAS" en="SKILLS" />
              </p>
              <h2>
                <LanguageText es="Habilidades" en="Technical" /> <em><LanguageText es="técnicas." en="skills." /></em>
              </h2>
            </div>
            <p className="section-aside">
              <LanguageText es="Una base de desarrollo aplicada en proyectos y un enfoque activo de formación en ciencia de datos." en="A software development foundation applied through projects, alongside an active focus on data science." />
            </p>
          </div>
          <SkillsExplorer />
        </div>
      </section>

      <section className="contact-section section-anchor" id="contacto">
        <div className="contact-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="shell contact-layout">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">
              <span>05</span> / <LanguageText es="SIGUIENTE PASO" en="NEXT STEP" />
            </p>
            <h2>
              <LanguageText es="¿Construimos algo" en="Shall we build something" />
              <br />
              <em><LanguageText es="con impacto?" en="impactful?" /></em>
              <span className="contact-heading-arrow" aria-hidden="true">
                ↗
              </span>
            </h2>
            <p>
              <LanguageText es="Busco una residencia profesional desde enero de 2027 en equipos de Ciencia de Datos, Machine Learning o Inteligencia Artificial, donde pueda contribuir y seguir creciendo." en="I am seeking a professional internship starting in January 2027 with a Data Science, Machine Learning, or Artificial Intelligence team, where I can contribute and continue to grow." />
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary contact-cta"
                href={`mailto:${profile.email}?subject=Residencia%20profesional%20%E2%80%94%20Javier%20Mart%C3%ADnez`}
              >
                <LanguageText es="Contactar por correo" en="Email me" /> <ArrowUpRight size={17} />
              </a>
              <CopyEmail />
            </div>
          </div>
          <div className="contact-details" data-reveal>
            <a href={`mailto:${profile.email}`}>
              <span>
                <Mail size={18} />
              </span>
              <div>
                <small><LanguageText es="ESCRÍBEME" en="EMAIL" /></small>
                <strong>{profile.email}</strong>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <a href={`tel:${profile.phoneUri}`}>
              <span>
                <Phone size={18} />
              </span>
              <div>
                <small><LanguageText es="LLÁMAME" en="CALL ME" /></small>
                <strong>{profile.phone}</strong>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span>
                <Github size={18} />
              </span>
              <div>
                <small><LanguageText es="CÓDIGO Y PROYECTOS" en="CODE & PROJECTS" /></small>
                <strong>github.com/SUORDd</strong>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>
                <Linkedin size={18} />
              </span>
              <div>
                <small><LanguageText es="PERFIL PROFESIONAL" en="PROFESSIONAL PROFILE" /></small>
                <strong>LinkedIn · Francisco Javier Martínez</strong>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <div className="contact-location">
              <span>
                <MapPin size={18} />
              </span>
              <div>
                <small><LanguageText es="UBICACIÓN" en="LOCATION" /></small>
                <strong>{profile.contactLocation}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
