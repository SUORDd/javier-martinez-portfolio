export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  role: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  tags: string[];
  featured?: boolean;
  conceptual?: boolean;
  overview: string[];
  implemented: string[];
  planned: string[];
};

export const projects: Project[] = [
  {
    slug: "ingles-chido",
    number: "01",
    name: "Inglés Chido",
    category: "Adaptive English Learning Platform (AELP)",
    role: "Fundador y desarrollador",
    status: "En desarrollo",
    summary:
      "Adaptive English Learning Platform (AELP): una plataforma móvil para aprender inglés que conecta la práctica diaria con evidencias de progreso.",
    problem:
      "Completar actividades no demuestra, por sí solo, que un estudiante haya aprendido. El progreso necesita apoyarse en evidencias a lo largo del tiempo.",
    solution:
      "Una experiencia móvil progresiva con ruta visual, lecciones y registro local de respuestas, errores y repasos.",
    contribution:
      "Fundé el proyecto y trabajo en su visión de producto, la experiencia de aprendizaje y el desarrollo de la aplicación móvil.",
    tags: ["React Native", "TypeScript", "Expo"],
    featured: true,
    overview: [
      "Inglés Chido — Adaptive English Learning Platform (AELP) — es una plataforma móvil para aprender inglés. Su principio central distingue entre terminar una actividad y demostrar dominio: el progreso debe construirse con distintas evidencias y en el tiempo.",
      "La aplicación actual es un prototipo navegable con estado y datos en memoria. FastAPI, PostgreSQL y Alembic forman parte de la arquitectura de backend en desarrollo, pero todavía no respaldan el flujo principal.",
    ],
    implemented: [
      "Onboarding, bienvenida y perfil configurados con estado local.",
      "Ruta visual de aprendizaje, lecciones y estados de avance administrados localmente.",
      "Registro local de intentos, respuestas, errores, palabras y necesidades de repaso.",
      "Módulos de repaso, vocabulario, progreso y evaluación local de demostración.",
    ],
    planned: [
      "Unificar evidencias entre habilidades y detectar debilidades a partir de errores repetidos.",
      "Adaptar sesiones de práctica y presentar explicaciones claras del progreso.",
      "Migrar gradualmente la persistencia local a servicios con API y base de datos.",
      "Explorar Learning Analytics, Machine Learning y asistencia con modelos de lenguaje. No hay modelos predictivos entrenados ni integraciones productivas de LLM afirmadas aquí.",
    ],
  },
  {
    slug: "tutor-ia-nem",
    number: "02",
    name: "STI-NEM",
    category: "Educational Technology · Web Application",
    role: "Frontend Developer · Servicio Social",
    status: "Proyecto académico · equipo",
    summary:
      "Plataforma educativa web para organizar flujos académicos y actividades de aprendizaje; mi trabajo se centró en el frontend.",
    problem:
      "La gestión de grupos, estudiantes y actividades educativas requiere flujos claros para los distintos perfiles escolares.",
    solution:
      "Una aplicación web educativa que reúne interfaces para el trabajo docente y actividades vinculadas con contenidos curriculares.",
    contribution:
      "Participé en el desarrollo del frontend y en la preparación de contratos, servicios simulados y adaptadores para la integración con API; el código fuente no está disponible para comprobar cada implementación.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    overview: [
      "STI-NEM es una plataforma web educativa con interfaces para gestión académica y actividades de aprendizaje. El trabajo se realizó en equipo como parte de un proyecto de tesis de maestría del Tecnológico Nacional de México.",
      "Las capturas disponibles documentan las vistas. Los repositorios del frontend y backend no son públicos ni accesibles desde este entorno, por lo que no pude verificar dependencias, rutas, servicios o conexión real con la API.",
    ],
    implemented: [
      "Capturas de dashboard docente, grupos, perfil de estudiante, configuración de ejercicios y consulta de ejercicios.",
      "Interfaz de criterios curriculares para ejercicios; la captura no confirma generación conectada ni procesamiento de resultados.",
    ],
    planned: [
      "Verificar contratos, rutas y tecnologías contra el repositorio sti-nem-front cuando el código esté accesible.",
      "Confirmar qué flujos consumen API, usan mocks o requieren servicios del backend sti-nem-back.",
      "Validar la operación de generación de ejercicios, autenticación y perfiles administrativos.",
    ],
  },
  {
    slug: "proximo-proyecto",
    number: "03",
    name: "Próximo proyecto",
    category: "Espacio reservado",
    role: "En preparación",
    status: "En preparación",
    summary: "Un nuevo proyecto se incorporará próximamente a este espacio.",
    problem: "",
    solution: "",
    contribution: "",
    tags: [],
    overview: [],
    implemented: [],
    planned: [],
  },
];

export const detailedProjects = projects.filter(
  (project) => project.slug !== "proximo-proyecto",
);
