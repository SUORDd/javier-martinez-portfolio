import {
  ArrowDown,
  BookOpen,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function LearningPathArt() {
  return (
    <div
      className="learning-composition"
      role="img"
      aria-label="Representación conceptual de Inglés Chido: una ruta de aprendizaje con alfabeto, práctica y siguiente etapa. No es una captura del producto."
    >
      <div className="learning-orbit orbit-outer" />
      <div className="learning-orbit orbit-inner" />
      <span className="learning-floating floating-route">
        <BookOpen size={15} />
        <span>
          Ruta Viva<small>APRENDIZAJE PROGRESIVO</small>
        </span>
      </span>
      <div className="learning-art">
        <div className="phone-camera" />
        <div className="learning-art-top">
          <span className="learning-brand-icon">
            <BookOpen size={14} />
          </span>
          <strong>Inglés Chido</strong>
          <span>IC</span>
        </div>
        <div className="learning-screen-heading">
          <small>RUTA A1</small>
          <strong>Un paso más.</strong>
          <span>Tu camino de aprendizaje</span>
        </div>
        <div className="learning-path-space">
          <svg
            viewBox="0 0 220 210"
            fill="none"
            className="learning-path-svg"
            aria-hidden="true"
          >
            <path
              d="M64 23C154 23 176 42 150 79S36 117 64 154s77 34 89 44"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="4 7"
            />
            <path
              d="M64 23C154 23 176 42 150 79"
              className="learning-completed-line"
              strokeWidth="4"
            />
          </svg>
          <span className="learning-node node-done">
            <Check size={17} />
          </span>
          <span className="learning-node node-current">
            <Sparkles size={17} />
          </span>
          <span className="learning-node node-next">
            <ArrowDown size={17} />
          </span>
          <div className="learning-label label-one">
            <strong>Alfabeto</strong>
            <span>base inicial</span>
          </div>
          <div className="learning-label label-two">
            <strong>Práctica</strong>
            <span>evidencia local</span>
          </div>
          <div className="learning-label label-three">
            <strong>Siguiente etapa</strong>
            <span>en progreso</span>
          </div>
        </div>
        <div className="learning-art-foot">
          <span>APRENDER. PRACTICAR. AVANZAR.</span>
          <ChevronRight size={12} />
        </div>
      </div>
      <span className="learning-floating floating-evidence">
        <span className="evidence-mark">
          <Check size={13} />
        </span>
        <span>
          Seguimiento<small>EVIDENCIA DE APRENDIZAJE</small>
        </span>
      </span>
      <span className="composition-caption">
        CONCEPTO VISUAL · NO ES CAPTURA
      </span>
    </div>
  );
}

export function TeacherDashboardArt() {
  return (
    <div
      className="teacher-composition"
      role="img"
      aria-label="Representación conceptual de una interfaz para organizar un módulo docente; no es una captura del producto"
    >
      <div className="teacher-art">
        <div className="teacher-art-bar">
          <span className="teacher-brand-dot" />
          <strong>Área docente</strong>
          <span className="teacher-window-dots">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="teacher-art-body">
          <div className="teacher-sidebar">
            <i />
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="teacher-main">
            <span className="teacher-eyebrow">ESPACIO DE TRABAJO</span>
            <strong>
              Organiza tu clase<span>↗</span>
            </strong>
            <div className="teacher-widgets">
              <span className="teacher-formula">
                x²<small>MATEMÁTICAS</small>
              </span>
              <span className="teacher-abstract">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="teacher-row">
              <i />
              <span />
              <i />
            </div>
            <div className="teacher-row">
              <i />
              <span />
              <i />
            </div>
            <div className="teacher-row">
              <i />
              <span />
              <i />
            </div>
          </div>
        </div>
      </div>
      <span className="composition-caption">
        REPRESENTACIÓN CONCEPTUAL · NO ES CAPTURA
      </span>
    </div>
  );
}
