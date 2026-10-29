import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  Database,
  Layers3,
  Smartphone,
} from "lucide-react";
import {
  AelpCaptureGallery,
  type AelpCapture,
} from "@/components/aelp-capture-gallery";
import { InglesChidoCover } from "@/components/ingles-chido-cover";
import { LanguageText } from "@/components/language-provider";

const captures: AelpCapture[] = [
  {
    file: "1.webp",
    title: "Pantalla de apertura",
    description: "Vista inicial del prototipo con la identidad visual de Inglés Chido.",
    alt: "Pantalla de apertura de Inglés Chido con logotipo y barra de carga.",
    category: "Inicio",
  },
  {
    file: "2.webp",
    title: "Bienvenida y acceso",
    description:
      "Pantalla de entrada con la identidad del producto y accesos para comenzar o iniciar sesión.",
    alt: "Pantalla de bienvenida de Inglés Chido con opciones para comenzar e iniciar sesión.",
    reference: "Welcome · welcome-screen.tsx",
    category: "Inicio",
  },
  {
    file: "3.webp",
    title: "Presentación del producto",
    description: "Introducción a la propuesta de aprendizaje y a las opciones de inicio.",
    alt: "Presentación de Inglés Chido con objetivos de aprendizaje y acceso para comenzar.",
    category: "Inicio",
  },
  {
    file: "4.webp",
    title: "Objetivo de aprendizaje",
    description:
      "Un paso del onboarding para definir la motivación del estudiante.",
    alt: "Pantalla para seleccionar el objetivo de aprendizaje.",
    reference: "Onboarding · goal-screen.tsx",
    category: "Onboarding",
  },
  {
    file: "5.webp",
    title: "Tiempo de práctica",
    description: "Selección del tiempo que se desea dedicar al inglés cada día.",
    alt: "Pantalla de onboarding para elegir el tiempo diario de práctica.",
    category: "Onboarding",
  },
  {
    file: "6.webp",
    title: "Intereses",
    description: "Selección de temas de interés para personalizar el comienzo.",
    alt: "Pantalla de onboarding para seleccionar temas de interés.",
    category: "Onboarding",
  },
  {
    file: "7.webp",
    title: "Preferencias de comunicación",
    description: "Opciones de estilo para adaptar la comunicación de la experiencia.",
    alt: "Pantalla para seleccionar cómo prefiere comunicarse el estudiante.",
    category: "Onboarding",
  },
  {
    file: "8.webp",
    title: "Nivel de inglés",
    description: "Autoevaluación inicial del nivel de inglés.",
    alt: "Pantalla de onboarding para indicar el nivel actual de inglés.",
    category: "Onboarding",
  },
  {
    file: "9.webp",
    title: "Ruta A1 · Valle Natural",
    description:
      "Ruta visual con niveles y nodos de aprendizaje en distintos estados.",
    alt: "Ruta A1 de Inglés Chido con nodos bloqueados y lecciones disponibles.",
    category: "Ruta y lecciones",
  },
  {
    file: "21.webp",
    title: "Ruta de aprendizaje · tema oscuro",
    description: "Vista de la ruta A1 con el tema oscuro activo.",
    alt: "Mapa de aprendizaje de Inglés Chido en tema oscuro.",
    category: "Ruta y lecciones",
  },
  {
    file: "13.webp",
    title: "Mapa de aprendizaje",
    description: "Vista de la ruta A1 con sus niveles y accesos a las lecciones.",
    alt: "Mapa ilustrado de la ruta A1 en Inglés Chido.",
    category: "Ruta y lecciones",
  },
  {
    file: "14.webp",
    title: "Lección · Preséntate",
    description: "Vista de una lección situada dentro del mapa de aprendizaje.",
    alt: "Mapa de aprendizaje con la tarjeta de la lección Preséntate.",
    category: "Ruta y lecciones",
  },
  {
    file: "15.webp",
    title: "Lección · Objetos y colores",
    description: "Vista de una lección de vocabulario contextualizada en la ruta.",
    alt: "Mapa de aprendizaje con la tarjeta de la lección Objetos y colores.",
    category: "Ruta y lecciones",
  },
  {
    file: "16.webp",
    title: "Lección · Abecedario",
    description: "Acceso a la lección del abecedario desde el recorrido A1.",
    alt: "Mapa de aprendizaje con la tarjeta de la lección Abecedario.",
    category: "Ruta y lecciones",
  },
  {
    file: "17.webp",
    title: "Lección: el abecedario",
    description:
      "Portada audiovisual de una lección A1 con controles y avance por pasos.",
    alt: "Lección del abecedario en la aplicación Inglés Chido.",
    reference: "Lessons · lesson-screen.tsx",
    category: "Ruta y lecciones",
  },
  {
    file: "17_1.webp",
    title: "Práctica de deletreo y escritura",
    description: "Ejemplo visual para relacionar palabras, animales y su escritura.",
    alt: "Actividad de aprendizaje con las palabras dog y cat y una libreta para practicar escritura.",
    category: "Ruta y lecciones",
  },
  {
    file: "18.webp",
    title: "Práctica de vocales",
    description:
      "Actividad guiada para escuchar, repetir y practicar pronunciación.",
    alt: "Actividad de vocales con audio, guía de pronunciación y control de repetición.",
    reference: "Lessons · vowels-step.tsx",
    category: "Escucha y práctica",
  },
  {
    file: "19.webp",
    title: "Reconocimiento auditivo",
    description: "Escucha una vocal y elige la letra que corresponde al sonido.",
    alt: "Actividad para identificar una vocal a partir de su pronunciación.",
    category: "Escucha y práctica",
  },
  {
    file: "20.webp",
    title: "Práctica de consonantes",
    description: "Presentación de una consonante con controles para escuchar y repetir.",
    alt: "Lección de consonantes con audio, pronunciación y opciones de práctica.",
    category: "Escucha y práctica",
  },
  {
    file: "10.webp",
    title: "Repaso",
    description: "Resumen de áreas que pueden requerir práctica adicional.",
    alt: "Pantalla de repaso con apartados de patrones, vocabulario y habilidades.",
    category: "Repaso y vocabulario",
  },
  {
    file: "11.webp",
    title: "Vocabulario",
    description: "Consulta de palabras guardadas y formulario para añadir vocabulario.",
    alt: "Pantalla de vocabulario con búsqueda, filtros y opción para agregar palabras.",
    category: "Repaso y vocabulario",
  },
  {
    file: "22.webp",
    title: "Repaso · tema oscuro",
    description: "Vista del módulo de repaso con el tema oscuro activo.",
    alt: "Módulo de repaso de Inglés Chido en tema oscuro.",
    category: "Repaso y vocabulario",
  },
  {
    file: "22_1.webp",
    title: "Áreas de repaso · tema oscuro",
    description: "Apartados de práctica y contenido por reforzar en tema oscuro.",
    alt: "Lista de áreas de repaso en la interfaz oscura de Inglés Chido.",
    category: "Repaso y vocabulario",
  },
  {
    file: "22_2.webp",
    title: "Vocabulario · tema oscuro",
    description: "Consulta y práctica de vocabulario con el tema oscuro activo.",
    alt: "Pantalla de vocabulario en tema oscuro con una palabra guardada.",
    category: "Repaso y vocabulario",
  },
  {
    file: "12.webp",
    title: "Progreso por habilidad",
    description:
      "Vista local del nivel y del estado de evidencia para distintas habilidades.",
    alt: "Módulo de progreso con habilidades lingüísticas y estado de evidencia.",
    reference: "Progress · progress-screen.tsx",
    category: "Progreso",
  },
  {
    file: "22_3.webp",
    title: "Progreso por habilidad · tema oscuro",
    description: "Vista del progreso con el tema oscuro activo.",
    alt: "Progreso por habilidad en la interfaz oscura de Inglés Chido.",
    category: "Progreso",
  },
];

const mobileStack = [
  ["React Native", "Interfaces móviles multiplataforma."],
  ["Expo", "Runtime, herramientas y empaquetado de la app."],
  ["TypeScript", "Tipos para pantallas, navegación y lógica."],
  ["Expo Router", "Rutas y navegación organizadas por archivos."],
  ["AsyncStorage", "Almacenamiento local del estado de sesión."],
  ["Reanimated · Skia", "Movimiento de interfaz y gráficos de la ruta."],
];

const mobileStackEnglish: Record<string, string> = {
  "React Native": "Cross-platform mobile interfaces.",
  Expo: "Runtime, tools, and app packaging.",
  TypeScript: "Types for screens, navigation, and logic.",
  "Expo Router": "File-based routes and navigation.",
  AsyncStorage: "Local storage for session state.",
  "Reanimated · Skia": "Interface motion and learning-path graphics.",
};

export function InglesChidoCaseStudy() {
  return (
    <main className="ingles-case">
      <section className="ingles-case-hero">
        <div className="shell">
          <Link className="back-link" href="/#proyectos">
            <ArrowLeft size={15} /> <LanguageText es="Volver a proyectos" en="Back to projects" />
          </Link>
          <div className="ingles-case-hero-grid">
            <div className="ingles-case-intro">
              <p className="eyebrow">
                <span>01</span> / <LanguageText es="CASO DE ESTUDIO · APP MÓVIL" en="MOBILE PRODUCT CASE STUDY" />
              </p>
              <h1>Inglés Chido<span>.</span></h1>
              <p className="ingles-case-subtitle">
                <LanguageText es="App interactiva para aprender inglés" en="Interactive English learning app" />
              </p>
              <p className="ingles-case-lede"><LanguageText es="Una app móvil para aprender inglés desde A1 con onboarding, ruta visual y lecciones que registran evidencia de práctica." en="A mobile app for learning English from A1, with onboarding, a visual learning path, and lessons that record practice evidence." /></p>
              <div className="ingles-case-tags" aria-label="Tecnologías móviles / Mobile technologies">
                {["React Native", "Expo", "TypeScript", "Expo Router"].map(
                  (tag) => <span key={tag}>{tag}</span>,
                )}
              </div>
              <div className="ingles-case-actions">
                <a className="ingles-case-secondary" href="#app">
                  <LanguageText es="Explorar la app" en="Explore the app" /> <ArrowRight size={15} />
                </a>
                <a className="ingles-case-secondary" href="#arquitectura">
                  <LanguageText es="Ver arquitectura" en="View architecture" /> <ArrowRight size={15} />
                </a>
              </div>
              <p className="ingles-case-team">
                <LanguageText es="Proyecto personal · Fundador y desarrollador · En desarrollo" en="Personal project · Founder and developer · In development" />
              </p>
            </div>
            <figure className="ingles-case-hero-visual">
              <InglesChidoCover variant="detail" />
            </figure>
          </div>
        </div>
      </section>

      <section className="ingles-case-overview">
        <div className="shell ingles-case-overview-grid">
          <div>
            <p className="eyebrow"><span>02</span> / <LanguageText es="PRODUCTO" en="PRODUCT" /></p>
            <h2><LanguageText es="De la práctica a una ruta de aprendizaje." en="From practice to a learning path." /></h2>
          </div>
          <p>
            <LanguageText es="Inglés Chido organiza un primer recorrido A1 en una app móvil. Parte de una idea de producto: completar una actividad no basta para evidenciar aprendizaje. El prototipo permite personalizar el inicio, recorrer lecciones y consultar el progreso local; la adaptación automática todavía está planeada." en="Inglés Chido organizes an initial A1 learning journey in a mobile app. Its product premise is that completing an activity alone is not evidence of learning. The prototype lets learners personalize onboarding, move through lessons, and review local progress; automatic adaptation is still planned." />
          </p>
        </div>
      </section>

      <section className="ingles-case-app" id="app">
        <div className="shell">
          <div className="ingles-case-section-heading">
            <div>
              <p className="eyebrow"><span>03</span> / <LanguageText es="EXPLORAR LA APP" en="EXPLORE THE APP" /></p>
              <h2><LanguageText es="La experiencia, en pantallas." en="The experience, on screen." /></h2>
            </div>
            <p><LanguageText es="Capturas del prototipo móvil actual. Selecciona una para ampliarla." en="Screenshots from the current mobile prototype. Select one to enlarge it." /></p>
          </div>
          <AelpCaptureGallery captures={captures} />
        </div>
      </section>

      <section className="ingles-case-stack">
        <div className="shell ingles-case-stack-grid">
          <div>
            <p className="eyebrow"><span>04</span> / <LanguageText es="STACK MÓVIL" en="MOBILE STACK" /></p>
            <h2><LanguageText es="Una base nativa y modular." en="A native, modular foundation." /></h2>
            <p>
              <LanguageText es="Estas herramientas están declaradas y se usan en la aplicación móvil para navegación, estado local e interacción visual." en="These tools are declared and used in the mobile app for navigation, local state, and visual interaction." />
            </p>
          </div>
          <div className="ingles-case-stack-list">
            {mobileStack.map(([name, role]) => (
              <article key={name}>
                <strong>{name}</strong><span><LanguageText es={role} en={mobileStackEnglish[name] ?? role} /></span>
              </article>
            ))}
            <article className="ingles-case-stack-backend">
              <strong>Python · FastAPI · SQLAlchemy</strong>
              <span><LanguageText es="Base del servicio API; el flujo móvil principal aún no está integrado." en="API service foundation; it is not yet integrated with the main mobile flow." /></span>
            </article>
            <article className="ingles-case-stack-backend">
              <strong>PostgreSQL · Alembic</strong>
              <span><LanguageText es="Persistencia y migraciones previstas para la evolución del backend." en="Persistence and migrations planned for the backend's future development." /></span>
            </article>
          </div>
        </div>
      </section>

      <section className="ingles-case-architecture" id="arquitectura">
        <div className="shell">
          <p className="eyebrow"><span>05</span> / <LanguageText es="ARQUITECTURA" en="ARCHITECTURE" /></p>
          <div className="ingles-case-section-heading">
            <h2><LanguageText es="Aplicación móvil → API → base de datos" en="Mobile app → API → database" /></h2>
            <p><LanguageText es="La app funciona con estado y datos locales; la conexión remota sigue en desarrollo." en="The app currently uses local state and data; remote connectivity is still under development." /></p>
          </div>
          <div className="ingles-case-architecture-grid">
            <article>
              <Smartphone size={20} />
              <span><LanguageText es="IMPLEMENTADO" en="IMPLEMENTED" /></span>
              <h3><LanguageText es="Aplicación móvil" en="Mobile app" /></h3>
              <p><LanguageText es="Expo, React Native y TypeScript. La app agrupa onboarding, ruta A1, lecciones y módulos de progreso." en="Expo, React Native, and TypeScript. The app brings together onboarding, the A1 path, lessons, and progress modules." /></p>
            </article>
            <i aria-hidden="true">→</i>
            <article>
              <Code2 size={20} />
              <span><LanguageText es="BASE EN DESARROLLO" en="FOUNDATION IN DEVELOPMENT" /></span>
              <h3><LanguageText es="API del backend" en="Backend API" /></h3>
              <p><LanguageText es="Servicio modular FastAPI con configuración y health checks. No respalda aún el flujo principal de la app." en="A modular FastAPI service with configuration and health checks. It does not yet support the app's main flow." /></p>
            </article>
            <i aria-hidden="true">→</i>
            <article>
              <Database size={20} />
              <span><LanguageText es="PREVISTO" en="PLANNED" /></span>
              <h3><LanguageText es="Base de datos" en="Database" /></h3>
              <p><LanguageText es="PostgreSQL y Alembic están en la base técnica; la persistencia del producto todavía es local." en="PostgreSQL and Alembic are part of the technical foundation; product data is still stored locally." /></p>
            </article>
          </div>
        </div>
      </section>

      <section className="ingles-case-highlights">
        <div className="shell">
          <p className="eyebrow"><span>06</span> / <LanguageText es="INGENIERÍA" en="ENGINEERING" /></p>
          <h2><LanguageText es="Decisiones que estructuran la experiencia." en="Decisions that shape the experience." /></h2>
          <div className="ingles-case-highlight-grid">
            <article><Layers3 size={19} /><h3><LanguageText es="Ruta por estado y presentación" en="State and presentation" /></h3><p><LanguageText es="Los datos curriculares, el estado de avance y la escena visual viven en módulos separados." en="Curriculum data, progress state, and the visual scene live in separate modules." /></p></article>
            <article><Code2 size={19} /><h3><LanguageText es="Motor de lecciones" en="Lesson engine" /></h3><p><LanguageText es="Pasos y actividades se componen en un flujo reutilizable para las primeras lecciones A1." en="Steps and activities are composed into a reusable flow for the first A1 lessons." /></p></article>
            <article><Database size={19} /><h3><LanguageText es="Evidencia local" en="Local evidence" /></h3><p><LanguageText es="El modelo distingue intentos, respuestas y necesidades de repaso; no implica analítica remota." en="The model distinguishes attempts, answers, and review needs; it does not imply remote analytics." /></p></article>
            <article><Check size={19} /><h3><LanguageText es="Temas y accesibilidad" en="Themes and accessibility" /></h3><p><LanguageText es="La app incluye modos claro y oscuro, y contempla movimiento reducido en sus animaciones." en="The app includes light and dark themes and respects reduced-motion preferences in its animations." /></p></article>
          </div>
        </div>
      </section>

      <section className="ingles-case-contribution">
        <div className="shell ingles-case-overview-grid">
          <div>
            <p className="eyebrow"><span>07</span> / <LanguageText es="MI PARTICIPACIÓN" en="MY ROLE" /></p>
            <h2><LanguageText es="Producto y desarrollo móvil." en="Product and mobile development." /></h2>
          </div>
          <div>
            <p>
              <LanguageText es="Desarrollo Inglés Chido de forma individual y me encargo del proyecto de principio a fin: producto, experiencia móvil y desarrollo de la aplicación. La base de backend también forma parte del trabajo; la API y la persistencia siguen en desarrollo y aún no están integradas al flujo principal de la app." en="I develop Inglés Chido independently and lead the project end to end: product, mobile experience, and app development. The backend foundation is also part of the work; the API and persistence are still in development and are not yet integrated into the app's main flow." />
            </p>
          </div>
        </div>
      </section>

      <section className="ingles-case-status">
        <div className="shell">
          <p className="eyebrow"><span>08</span> / <LanguageText es="ESTADO ACTUAL" en="CURRENT STATUS" /></p>
          <h2><LanguageText es="Un producto en evolución." en="A product in progress." /></h2>
          <div className="ingles-case-status-grid">
            <article><span>01</span><h3><LanguageText es="Implementado" en="Implemented" /></h3><p><LanguageText es="Bienvenida, onboarding local, ruta A1, lecciones iniciales, repaso, vocabulario y progreso." en="Welcome flow, local onboarding, A1 path, introductory lessons, review, vocabulary, and progress." /></p></article>
            <article><span>02</span><h3><LanguageText es="En desarrollo" en="In development" /></h3><p><LanguageText es="Backend modular y evolución de los flujos locales hacia servicios compartidos." en="A modular backend and the gradual move from local flows to shared services." /></p></article>
            <article><span>03</span><h3><LanguageText es="Planeado" en="Planned" /></h3><p><LanguageText es="Sincronización remota y adaptación de sesiones a partir de evidencias de aprendizaje." en="Remote synchronization and practice-session adaptation based on learning evidence." /></p></article>
          </div>
        </div>
      </section>

      <nav className="shell project-pagination" aria-label="Más proyectos / More projects">
        <Link href="/#proyectos"><ArrowLeft size={16} /> <LanguageText es="Todos los proyectos" en="All projects" /></Link>
        <Link href="/proyectos/tutor-ia-nem/">
          <div><small><LanguageText es="SIGUIENTE PROYECTO" en="NEXT PROJECT" /></small><strong>STI-NEM</strong></div>
          <ArrowRight size={23} />
        </Link>
      </nav>
    </main>
  );
}
