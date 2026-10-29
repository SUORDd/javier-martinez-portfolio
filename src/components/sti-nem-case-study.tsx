import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  CircleAlert,
  Code2,
  Database,
  FileCode2,
  Globe2,
  Layers3,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  AelpCaptureGallery,
  type AelpCapture,
} from "@/components/aelp-capture-gallery";
import { StiNemBrowserFrame } from "@/components/sti-nem-browser-frame";
import { LanguageText } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";

const organizationUrl = "https://github.com/Tutor-IA-NEM";

const focusTags = [
  { es: "Tutoría con IA", en: "AI tutoring" },
  { es: "Nueva Escuela Mexicana", en: "New Mexican School" },
  { es: "4.º de primaria", en: "Grade 4" },
  { es: "Módulo docente", en: "Teacher module" },
  { es: "Desarrollo frontend", en: "Frontend engineering" },
  { es: "Servicio social", en: "Social service" },
];

const captures: AelpCapture[] = [
  {
    file: "dashboard-docente.png",
    title: "Dashboard docente",
    description:
      "Panel de inicio con accesos del módulo docente, actividad reciente e indicadores académicos.",
    alt: "Dashboard docente de STI-NEM; los nombres y cifras personales están anonimizados.",
    category: "Docente",
  },
  {
    file: "grupos.png",
    title: "Gestión de grupos",
    description:
      "Consulta visual de grupos con filtros por grado y ciclo escolar.",
    alt: "Vista de grupos escolares con filtros y tarjetas; se ocultaron cifras de estudiantes.",
    category: "Docente",
  },
  {
    file: "detalle-grupo.png",
    title: "Detalle y configuración del grupo",
    description:
      "Pantalla de configuración de retos y listado de participantes, con nombres y alias anonimizados.",
    alt: "Detalle de grupo con configuración y tabla; los nombres y alias fueron anonimizados.",
    category: "Docente",
  },
  {
    file: "perfil-estudiante.png",
    title: "Perfil del estudiante",
    description:
      "Interfaz con pestañas para organizar información formativa, progreso y actividad; se anonimizaron los datos del perfil.",
    alt: "Perfil de estudiante con datos personales y valores de progreso anonimizados.",
    category: "Estudiantes",
  },
  {
    file: "generacion-ejercicios.png",
    title: "Criterios para ejercicios",
    description:
      "Interfaz para elegir criterios curriculares y consultar el área donde aparecerían los resultados. La captura no confirma que la generación esté conectada.",
    alt: "Pantalla de selección de criterios para generación de ejercicios; la vista de resultados está vacía.",
    category: "Ejercicios",
  },
  {
    file: "ejercicios.png",
    title: "Consulta de ejercicios",
    description:
      "Listado visual con filtros curriculares, dificultades y acciones para consultar ejercicios.",
    alt: "Tabla de ejercicios con filtros por grado, campo formativo y contenido.",
    category: "Ejercicios",
  },
];

const declaredStack = [
  {
    name: "Next.js",
    role: "Framework web señalado para rutas y estructura de la aplicación.",
    icon: Globe2,
  },
  {
    name: "React",
    role: "Interfaces y componentes reutilizables.",
    icon: Layers3,
  },
  {
    name: "TypeScript",
    role: "Tipos y contratos de datos.",
    icon: Braces,
  },
  {
    name: "Tailwind CSS",
    role: "Estilos de interfaz responsiva.",
    icon: Code2,
  },
  {
    name: "Zod",
    role: "Esquemas de validación reportados para datos y respuestas.",
    icon: ShieldCheck,
  },
];

const declaredStackEnglish: Record<string, string> = {
  "Next.js": "Web framework reported for routing and application structure.",
  React: "Interfaces and reusable components.",
  TypeScript: "Types and data contracts.",
  "Tailwind CSS": "Responsive interface styling.",
  Zod: "Validation schemas reported for data and responses.",
};

export function StiNemCaseStudy() {
  return (
    <main className="sti-case">
      <section className="sti-case-hero">
        <div className="shell">
          <Link className="back-link" href="/#proyectos">
            <ArrowLeft size={15} /> <LanguageText es="Volver a proyectos" en="Back to projects" />
          </Link>
          <div className="sti-case-hero-grid">
            <div className="sti-case-intro">
              <p className="eyebrow"><span>02</span> / <LanguageText es="CASO DE ESTUDIO · TUTORÍA INTELIGENTE" en="AI TUTORING CASE STUDY" /></p>
              <h1>STI-NEM<span>.</span></h1>
              <p className="sti-case-subtitle">
                <LanguageText es="Tutor inteligente con IA para la Nueva Escuela Mexicana" en="AI tutor for Mexico’s New Mexican School" />
              </p>
              <p className="sti-case-lede">
                <LanguageText es="Diseñado para niñas y niños de cuarto de primaria, STI-NEM busca apoyar su aprendizaje con un tutor inteligente. Su objetivo inicial es generar ejercicios con IA alineados con la Nueva Escuela Mexicana. La plataforma contempla módulos de docente, estudiante y administración. Mi aporte se centró en construir las pantallas del módulo docente." en="Designed for fourth-grade students, STI-NEM aims to support learning with an intelligent tutor. Its initial goal is to generate AI-assisted exercises aligned with Mexico’s New Mexican School curriculum. The platform includes teacher, student, and administrator modules. I focused on building the teacher-module screens." />
              </p>
              <div className="sti-case-tags" aria-label="Enfoque del proyecto / Project focus">
                {focusTags.map((tag) => (
                  <span key={tag.en}><LanguageText es={tag.es} en={tag.en} /></span>
                ))}
              </div>
              <p className="sti-case-stack-label"><LanguageText es="STACK REFERIDO PARA EL PROYECTO" en="REPORTED PROJECT STACK" /></p>
              <div className="sti-case-tech-inline">
                {declaredStack.map(({ name }) => <span key={name}>{name}</span>)}
              </div>
              <div className="sti-case-actions">
                <a className="sti-case-org-link" href={organizationUrl} target="_blank" rel="noreferrer">
                  <LanguageText es="Organización en GitHub" en="GitHub organization" /> <ArrowUpRight size={15} />
                </a>
                <a className="sti-case-secondary" href="#experience">
                  <LanguageText es="Explorar pantallas" en="Explore screens" /> <ArrowRight size={15} />
                </a>
              </div>
              <p className="sti-case-academic">
                <LanguageText es="Servicio social en un proyecto de tesis de maestría del Tecnológico Nacional de México, dirigido por la MCE Beatriz Zepahua." en="Social service work on a master's thesis project at Mexico's National Technological Institute, supervised by MCE Beatriz Zepahua." />
              </p>
            </div>
            <StiNemBrowserFrame className="sti-case-hero-frame" priority />
          </div>
        </div>
      </section>

      <section className="sti-case-context">
        <div className="shell sti-case-context-grid">
          <div>
            <p className="eyebrow"><span>01</span> / <LanguageText es="RESUMEN" en="OVERVIEW" /></p>
            <h2><LanguageText es="Un tutor inteligente para practicar y aprender." en="An intelligent tutor to practice and learn." /></h2>
          </div>
          <p>
            <LanguageText es="El sistema está pensado para apoyar a estudiantes de cuarto de primaria con ejercicios de la Nueva Escuela Mexicana generados con IA. También contempla módulos de docente, estudiante y administración; las capturas disponibles muestran sobre todo la interfaz del módulo docente." en="The system is designed to support fourth-grade students with AI-generated exercises aligned with Mexico’s New Mexican School curriculum. It also includes teacher, student, and administrator modules; the available screenshots mainly show the teacher interface." />
          </p>
        </div>
      </section>

      <section className="sti-case-experience" id="experience">
        <div className="shell">
          <div className="sti-case-section-heading">
            <div>
              <p className="eyebrow"><span>02</span> / <LanguageText es="EXPERIENCIA WEB" en="WEB EXPERIENCE" /></p>
              <h2><LanguageText es="Explorar la plataforma" en="Explore the platform" /></h2>
            </div>
            <p>
              <LanguageText es="Capturas de escritorio con datos personales anonimizados. Las vistas prueban la interfaz mostrada, no la operación del backend ni la validez de sus datos. Las cifras visibles pertenecen al contenido de las capturas; no se presentan como resultados de aprendizaje ni métricas verificadas del proyecto." en="Desktop screenshots with personal data anonymized. They document the displayed interface, not backend operation or data validity. Visible figures belong to the screenshots and are not presented as learning outcomes or verified project metrics." />
            </p>
          </div>
          <AelpCaptureGallery
            captures={captures}
            variant="desktop"
            imageBasePath={getPublicAssetPath("/images/sti-nem")}
          />
        </div>
      </section>

      <section className="sti-case-stack">
        <div className="shell">
          <div className="sti-case-section-heading">
            <div>
              <p className="eyebrow"><span>03</span> / <LanguageText es="TECNOLOGÍAS Y HERRAMIENTAS" en="TECHNOLOGIES & TOOLS" /></p>
              <h2><LanguageText es="Tecnologías del frontend" en="Frontend stack" /></h2>
            </div>
            <p>
              <LanguageText es="Tecnologías indicadas para STI-NEM. No pude comprobar dependencias, versiones ni su uso en el código: el repositorio frontend no está disponible públicamente desde este entorno." en="Technologies reported for STI-NEM. I could not verify dependencies, versions, or their use in the code because the frontend repository is not publicly available from this environment." />
            </p>
          </div>
          <div className="sti-case-stack-grid">
            {declaredStack.map(({ name, role, icon: Icon }) => (
              <article key={name}>
                <Icon size={20} />
                <strong>{name}</strong>
                <p><LanguageText es={role} en={declaredStackEnglish[name] ?? role} /></p>
                <span><LanguageText es="Declarado · no verificado en fuente" en="Reported · not verified in source" /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sti-case-architecture" id="architecture">
        <div className="shell">
          <p className="eyebrow"><span>04</span> / <LanguageText es="ARQUITECTURA FRONTEND Y API" en="FRONTEND ARCHITECTURE & API" /></p>
          <div className="sti-case-section-heading">
            <h2><LanguageText es="Una integración por verificar." en="An integration to be verified." /></h2>
            <p>
              <LanguageText es="El flujo siguiente resume las capas referidas para el proyecto; su implementación y conexión efectiva requieren acceso al código." en="The flow below summarizes the reported project layers; verifying their implementation and actual connections requires access to the source code." />
            </p>
          </div>
          <div className="sti-case-flow" aria-label="Flujo de arquitectura / Architecture flow">
            <article>
              <Layers3 size={20} />
              <span><LanguageText es="CAPTURAS DISPONIBLES" en="SCREENSHOTS AVAILABLE" /></span>
              <h3><LanguageText es="Interfaz React" en="React UI" /></h3>
              <p><LanguageText es="Interfaces web para los flujos docentes y de ejercicios." en="Web interfaces for teacher and exercise workflows." /></p>
            </article>
            <i aria-hidden="true">⇢</i>
            <article className="sti-case-flow-unverified">
              <FileCode2 size={20} />
              <span><LanguageText es="REFERIDO · FUENTE NO DISPONIBLE" en="REPORTED · SOURCE UNAVAILABLE" /></span>
              <h3><LanguageText es="Servicios y adaptadores" en="Services & adapters" /></h3>
              <p><LanguageText es="Contratos, DTOs, validación y selección entre servicios simulados o API." en="Contracts, DTOs, validation, and selection between mock services and an API." /></p>
            </article>
            <i aria-hidden="true">⇢</i>
            <article className="sti-case-flow-unverified">
              <Server size={20} />
              <span><LanguageText es="REPOSITORIO NO ACCESIBLE" en="REPOSITORY NOT ACCESSIBLE" /></span>
              <h3><LanguageText es="API de backend" en="Backend API" /></h3>
              <p><LanguageText es="Servicio separado; no se pudo verificar endpoints, autenticación ni persistencia." en="Separate service; endpoints, authentication, and persistence could not be verified." /></p>
            </article>
          </div>
          <p className="sti-case-architecture-note">
            <LanguageText es="La generación de ejercicios con IA es un objetivo central del sistema. Las capturas disponibles documentan interfaces, pero no demuestran por sí solas que la generación o la conexión con servicios estén operativas." en="AI exercise generation is a central goal of the system. The available screenshots document interfaces but do not by themselves verify that generation or service connections are operational." />
          </p>
        </div>
      </section>

      <section className="sti-case-engineering">
        <div className="shell">
          <p className="eyebrow"><span>05</span> / <LanguageText es="INGENIERÍA" en="ENGINEERING" /></p>
          <div className="sti-case-section-heading">
            <h2><LanguageText es="Trabajo técnico reportado." en="Reported technical work." /></h2>
            <p>
              <LanguageText es="Estos aspectos describen las responsabilidades indicadas para mi participación. Las rutas de código no son verificables sin acceso a sti-nem-front." en="These points describe the responsibilities reported for my contribution. The code paths cannot be verified without access to sti-nem-front." />
            </p>
          </div>
          <div className="sti-case-engineering-list">
            <article><span>01</span><div><h3><LanguageText es="Contratos tipados" en="Typed contracts" /></h3><p><LanguageText es="Organización de tipos internos para desacoplar las vistas del formato externo de datos." en="Internal types organized to decouple views from external data formats." /></p></div><small><LanguageText es="POR VERIFICAR" en="TO VERIFY" /></small></article>
            <article><span>02</span><div><h3><LanguageText es="Servicios simulados y API" en="Mock services and API" /></h3><p><LanguageText es="Separación referida entre datos de demostración y adaptadores para servicios." en="Reported separation between demonstration data and service adapters." /></p></div><small><LanguageText es="POR VERIFICAR" en="TO VERIFY" /></small></article>
            <article><span>03</span><div><h3><LanguageText es="Adaptación y validación" en="Data adaptation and validation" /></h3><p><LanguageText es="Transformación DTO y validación Zod mencionadas para mantener consistencia entre respuestas y UI." en="DTO transformation and Zod validation were reported to keep responses and UI consistent." /></p></div><small><LanguageText es="POR VERIFICAR" en="TO VERIFY" /></small></article>
            <article><span>04</span><div><h3><LanguageText es="Estados de solicitud y sesión" en="Request and session states" /></h3><p><LanguageText es="Preparación referida de carga, errores y sesión en los límites cliente-servidor." en="Reported preparation of loading, error, and session states at client-server boundaries." /></p></div><small><LanguageText es="POR VERIFICAR" en="TO VERIFY" /></small></article>
          </div>
        </div>
      </section>

      <section className="sti-case-contribution">
        <div className="shell sti-case-context-grid">
          <div>
            <p className="eyebrow"><span>06</span> / <LanguageText es="MI ROL Y CONTRIBUCIÓN" en="MY ROLE & CONTRIBUTION" /></p>
            <h2><LanguageText es="Desarrollo frontend · Módulo docente" en="Frontend development · Teacher module" /></h2>
          </div>
          <div>
            <p>
              <LanguageText es="Desarrollé las pantallas del módulo docente, incluidos el dashboard, la gestión de grupos y las vistas relacionadas con estudiantes y ejercicios. Mi trabajo se concentró en la interfaz que usan los docentes dentro de un sistema más amplio de tutoría asistida con IA." en="I developed the teacher-module screens, including the dashboard, class management, and views related to students and exercises. My work focused on the teacher interface within a broader AI-assisted tutoring system." />
            </p>
            <p>
              <LanguageText es="Mi responsabilidad fue el módulo docente; no atribuyo a mi rol la tesis, el backend completo ni el sistema desarrollado por el resto del equipo." en="My responsibility was the teacher module; I do not claim the thesis, the complete backend, or the system built by the rest of the team as my own work." />
            </p>
            <a className="sti-case-org-link" href={organizationUrl} target="_blank" rel="noreferrer">
              <LanguageText es="Organización en GitHub" en="GitHub organization" /> <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="sti-case-status">
        <div className="shell">
          <p className="eyebrow"><span>07</span> / <LanguageText es="ESTADO DEL PROYECTO" en="PROJECT STATUS" /></p>
          <h2><LanguageText es="Qué puede comprobarse con el material disponible." en="What can be verified from the available material." /></h2>
          <div className="sti-case-status-grid">
            <article>
              <Check size={18} />
              <h3><LanguageText es="Interfaz visible" en="Visible interface" /></h3>
              <p><LanguageText es="Dashboard docente, grupos y perfil de estudiante, además de vistas de criterios y consulta de ejercicios." en="Teacher dashboard, classes, and student profile, as well as exercise criteria and browsing views." /></p>
              <span><LanguageText es="Respaldado por capturas" en="Supported by screenshots" /></span>
            </article>
            <article>
              <Users size={18} />
              <h3><LanguageText es="Experiencia demostrativa" en="Demonstration experience" /></h3>
              <p><LanguageText es="Las capturas muestran contenido de perímetros y estados de estudiantes; no verifican datos reales ni persistencia." en="Screenshots show perimeter content and student states; they do not verify real data or persistence." /></p>
              <span><LanguageText es="Comportamiento no comprobado" en="Behavior not verified" /></span>
            </article>
            <article>
              <Database size={18} />
              <h3><LanguageText es="Backend e IA" en="Backend & AI" /></h3>
              <p><LanguageText es="Repositorios de frontend y backend no están disponibles públicamente. No se pudo validar consumo de API ni generación de resultados." en="The frontend and backend repositories are not publicly available. API usage and result generation could not be validated." /></p>
              <span><LanguageText es="Integración no verificable" en="Integration not verifiable" /></span>
            </article>
            <article>
              <CircleAlert size={18} />
              <h3><LanguageText es="Otros perfiles" en="Other user roles" /></h3>
              <p><LanguageText es="Las rutas completas de administración, dirección y estudiante requieren comprobarse en el código." en="The full administrator, principal, and student workflows still need to be verified in the code." /></p>
              <span><LanguageText es="Alcance no confirmado" en="Scope not confirmed" /></span>
            </article>
          </div>
          <p className="sti-case-status-note"><LanguageText es="Stack y detalles de arquitectura incluidos con base en la información proporcionada para este proyecto; quedan sujetos a validación cuando el código fuente esté disponible." en="The stack and architecture details are based on information provided for this project and remain subject to validation when the source code becomes available." /></p>
        </div>
      </section>

      <nav className="shell project-pagination" aria-label="Más proyectos / More projects">
        <Link href="/#proyectos"><ArrowLeft size={16} /> <LanguageText es="Todos los proyectos" en="All projects" /></Link>
        <Link href="/proyectos/spa-orizaba/">
          <div><small><LanguageText es="SIGUIENTE PROYECTO" en="NEXT PROJECT" /></small><strong>SPA Orizaba</strong></div>
          <ArrowRight size={23} />
        </Link>
      </nav>
    </main>
  );
}
