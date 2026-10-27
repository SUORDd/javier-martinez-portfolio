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
    role: "Frontend developer · social service program",
    status: "Academic team project",
    summary:
      "An educational web platform for organizing academic workflows and learning activities; my work focused on the frontend.",
    problem:
      "Managing classes, students, and learning activities requires clear workflows for different school roles.",
    solution:
      "An educational web application that brings together teacher workflows and learning activities linked to curriculum content.",
    contribution:
      "I contributed to frontend development and prepared contracts, mock services, and adapters for API integration; the source code is unavailable to verify each implementation.",
    overview: [
      "STI-NEM is an educational web platform with interfaces for academic management and learning activities. The work was completed as a team as part of a master's thesis project at Mexico's National Institute of Technology.",
      "Available screenshots document the views. The frontend and backend repositories are not public or accessible from this environment, so I could not verify dependencies, routes, services, or a live API connection.",
    ],
    implemented: [
      "Screenshots of the teacher dashboard, classes, student profile, exercise settings, and exercise browsing.",
      "A curriculum-criteria interface for exercises; the screenshot does not confirm connected generation or result processing.",
    ],
    planned: [
      "Verify contracts, routes, and technologies against the sti-nem-front repository when the code is accessible.",
      "Confirm which workflows use an API, mocks, or services from the sti-nem-back backend.",
      "Validate exercise generation, authentication, and administrative profiles.",
    ],
  },
  "proximo-proyecto": {
    name: "Upcoming project",
    category: "Reserved space",
    role: "In preparation",
    status: "In preparation",
    summary: "A new project will be added here soon.",
  },
};

export function projectText<K extends keyof Project>(project: Project, field: K): Project[K] {
  return (projectEnglish[project.slug]?.[field] ?? project[field]) as Project[K];
}
