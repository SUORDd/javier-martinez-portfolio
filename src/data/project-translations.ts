import type { Project } from "@/data/projects";

export const projectEnglish: Record<string, Partial<Project>> = {
  "ingles-chido": {
    role: "Founder and developer",
    status: "In development",
    summary:
      "Adaptive English Learning Platform (AELP): a mobile platform for learning English that connects daily practice with evidence of progress.",
    problem:
      "Completing activities does not, by itself, prove that a student has learned. Progress needs to be supported by evidence over time.",
    solution:
      "A progressive mobile experience with a visual learning path, lessons, and local records of answers, mistakes, and review needs.",
    contribution:
      "I founded the project and work on its product vision, learning experience, and mobile app development.",
    overview: [
      "Inglés Chido — Adaptive English Learning Platform (AELP) — is a mobile platform for learning English. Its core principle distinguishes completing an activity from demonstrating mastery: progress should be built from different kinds of evidence over time.",
      "The current app is a navigable prototype with in-memory state and data. FastAPI, PostgreSQL, and Alembic are part of the backend architecture under development, but do not yet support the main app flow.",
    ],
    implemented: [
      "Onboarding, welcome flow, and profile configured with local state.",
      "Visual learning path, lessons, and progress states managed locally.",
      "Local records of attempts, answers, mistakes, vocabulary, and review needs.",
      "Review, vocabulary, progress, and local demonstration assessment modules.",
    ],
    planned: [
      "Unify evidence across skills and identify weaknesses from repeated mistakes.",
      "Adapt practice sessions and present clear explanations of progress.",
      "Gradually migrate local persistence to API services and a database.",
      "Explore learning analytics, machine learning, and language-model assistance. No trained predictive models or production LLM integrations are claimed here.",
    ],
  },
  "tutor-ia-nem": {
    category: "Educational Technology · AI Tutoring",
    role: "Frontend developer · teacher module",
    status: "Academic team project",
    summary:
      "An AI tutor for fourth-grade students, aligned with Mexico’s New Mexican School curriculum and designed to generate exercises that support learning.",
    problem:
      "Fourth-grade students need guided practice with curriculum content. STI-NEM proposes an intelligent tutor that offers exercises and supports their learning.",
    solution:
      "A web system with teacher, student, and administrator modules. Its initial goal is to generate AI-assisted exercises aligned with the New Mexican School curriculum.",
    contribution:
      "I developed the teacher-module screens, including the dashboard, class-management, and exercise views. My contribution focused on the teacher interface within the team building the broader system.",
    overview: [
      "STI-NEM is an AI-assisted intelligent tutoring system designed for fourth-grade students. Its initial goal is to generate exercises aligned with Mexico’s New Mexican School curriculum and help students learn as they solve them. The platform includes teacher, student, and administrator modules.",
      "The work was completed as a team as part of a master's thesis project at Mexico's National Institute of Technology.",
      "Available screenshots document the views. The frontend and backend repositories are not public or accessible from this environment, so I could not verify dependencies, routes, services, or a live API connection.",
    ],
    implemented: [
      "Teacher-module screens: dashboard, class management, and views related to students and exercises.",
      "An exercise criteria interface aligned with the curriculum. Screenshots show the UI but do not by themselves verify AI generation.",
    ],
    planned: [
      "Verify contracts, routes, and technologies against the sti-nem-front repository when the code is accessible.",
      "Confirm which workflows use an API, mocks, or services from the sti-nem-back backend.",
      "Validate exercise generation, authentication, and administrative profiles.",
    ],
  },
  "spa-orizaba": {
    category: "Data Science · Commercial analysis",
    role: "Technical data analysis",
    status: "Academic project · 2026",
    summary:
      "Public-data analysis to assess the opportunity for a spa in Orizaba and prioritize a location to investigate.",
    problem:
      "The decision required comparing economic context, demographics, and local competition without presenting indirect signals as proven demand.",
    solution:
      "A regional and neighborhood comparison combining economic, demographic, and business data into indicators and visualizations that guide the next field study.",
    contribution:
      "I led the technical work: sourcing, cleaning, transforming, and integrating datasets; preparing indicators and producing inputs for the team’s storytelling and communication.",
    overview: [
      "An academic data science project assessing whether Orizaba showed favorable signals for an accessible mixed spa and where to begin looking for a location.",
      "The analysis combines state-level ENIGH 2024 economic context with DENUE business records and municipal demographics from the 2020 Population Census / ITER. The evidence helps prioritize options; it does not replace sales data or a field study.",
    ],
    implemented: [
      "Prepared and analyzed ENIGH, DENUE, and 2020 Census / ITER data.",
      "Classified direct competitors and related services, normalizing business names and validating geographic records.",
      "Built regional and neighborhood indicators, plus visualizations of competition and demographics.",
    ],
    planned: [
      "Validate rent, pedestrian traffic, parking, safety, and property conditions before making an investment decision.",
    ],
  },
};

export function projectText<K extends keyof Project>(project: Project, field: K): Project[K] {
  return (projectEnglish[project.slug]?.[field] ?? project[field]) as Project[K];
}
