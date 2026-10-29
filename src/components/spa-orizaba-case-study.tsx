import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Database,
  Github,
  MapPin,
  Users,
  Workflow,
} from "lucide-react";
import {
  AelpCaptureGallery,
  type AelpCapture,
} from "@/components/aelp-capture-gallery";
import { LanguageText } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";
import styles from "./spa-orizaba-case-study.module.css";

const figures: AelpCapture[] = [
  {
    file: "regional-opportunity.jpg",
    title: "Oportunidad en la región",
    titleEn: "Regional opportunity",
    description:
      "Orizaba obtuvo 78.8 en el índice regional. El valor sirve para comparar municipios; no es una probabilidad de éxito comercial.",
    descriptionEn:
      "Orizaba scored 78.8 on the regional index. The value supports a comparison between municipalities; it is not a probability of commercial success.",
    alt: "Gráfica del índice regional: Orizaba obtiene 78.8, por encima de Fortín de las Flores, Camerino Z. Mendoza, Río Blanco, Nogales y Mariano Escobedo.",
    altEn:
      "Regional index chart: Orizaba scores 78.8, ahead of Fortín de las Flores, Camerino Z. Mendoza, Río Blanco, Nogales, and Mariano Escobedo.",
    category: "Oportunidad regional",
    categoryEn: "Regional opportunity",
    width: 1460,
    height: 837,
  },
  {
    file: "demographic-profile.jpg",
    title: "Perfil demográfico",
    titleEn: "Demographic profile",
    description:
      "El grupo de 25 a 59 años concentra 57,249 habitantes; la composición por sexo orienta una propuesta mixta.",
    descriptionEn:
      "The 25–59 age group includes 57,249 residents; the population by sex supports considering a mixed offer.",
    alt: "Perfil de Orizaba por sexo y edad: 53.9 por ciento mujeres, 46.1 por ciento hombres y 57,249 personas de 25 a 59 años.",
    altEn:
      "Orizaba profile by sex and age: 53.9 percent women, 46.1 percent men, and 57,249 residents aged 25 to 59.",
    category: "Perfil local",
    categoryEn: "Local profile",
    width: 1535,
    height: 1024,
  },
  {
    file: "services-landscape.jpg",
    title: "SPA y servicios afines",
    titleEn: "Spas and related services",
    description:
      "El recuento distingue 26 SPA directos y 735 servicios similares no especializados identificados en el reporte.",
    descriptionEn:
      "The count distinguishes 26 direct spas and 735 similar non-specialized services identified in the report.",
    alt: "Gráfica circular del reporte: 26 SPA directos y 735 servicios similares no especializados.",
    altEn:
      "Pie chart from the report: 26 direct spas and 735 similar non-specialized services.",
    category: "Competencia",
    categoryEn: "Competition",
    width: 800,
    height: 732,
  },
  {
    file: "denue-competitor-map.jpg",
    title: "Mapa de competencia DENUE",
    titleEn: "DENUE competitor map",
    description:
      "Los establecimientos se distribuyen por categoría y el mapa resalta el Centro. Su presencia no permite inferir ventas ni flujo peatonal.",
    descriptionEn:
      "Businesses are shown by category and the map highlights downtown. Their presence does not reveal sales or pedestrian traffic.",
    alt: "Mapa de Orizaba con establecimientos de SPA, cosmetología, estética, uñas y masajes; el Centro se muestra delimitado.",
    altEn:
      "Map of Orizaba showing spas, cosmetology, beauty, nail, and massage businesses, with the downtown area outlined.",
    category: "Competencia",
    categoryEn: "Competition",
    width: 1536,
    height: 847,
  },
  {
    file: "zone-opportunity.jpg",
    title: "Prioridad por zona",
    titleEn: "Neighborhood priority",
    description:
      "El Centro obtuvo 77.4/100 y encabeza la priorización dentro de Orizaba; las condiciones del local aún requieren revisión en campo.",
    descriptionEn:
      "Downtown scored 77.4/100 and ranks first within Orizaba; property conditions still require field validation.",
    alt: "Gráfica de score de oportunidad por zona: Centro 77.4, Centro Barrio Aulicaba 53.5, Cerritos 52.1 y otras zonas alrededor de 50.",
    altEn:
      "Neighborhood opportunity score chart: downtown 77.4, Centro Barrio Aulicaba 53.5, Cerritos 52.1, and other areas around 50.",
    category: "Ubicación",
    categoryEn: "Location",
    width: 1536,
    height: 1024,
  },
];

const pipeline = [
  {
    number: "01",
    icon: Database,
    title: "Localizar fuentes",
    titleEn: "Source the data",
    body: "Reuní ENIGH 2024, DENUE e ITER / CPV 2020, manteniendo claro el nivel geográfico de cada fuente.",
    bodyEn:
      "I sourced ENIGH 2024, DENUE, and 2020 Census / ITER data, keeping each source’s geographic level explicit.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Limpiar y normalizar",
    titleEn: "Clean and normalize",
    body: "Depuré faltantes y claves inválidas, normalicé nombres y revisé duplicados y coordenadas.",
    bodyEn:
      "I handled missing values and invalid codes, normalized names, and checked duplicates and coordinates.",
  },
  {
    number: "03",
    icon: Users,
    title: "Perfilar Orizaba",
    titleEn: "Profile Orizaba",
    body: "Integré población por edad y sexo para dimensionar el contexto local y los segmentos adultos.",
    bodyEn:
      "I combined population by age and sex to describe the local context and adult segments.",
  },
  {
    number: "04",
    icon: ChartNoAxesCombined,
    title: "Construir indicadores",
    titleEn: "Build indicators",
    body: "Calculé promedios ponderados ENIGH, un proxy de gasto relacionado y scores relativos para municipios y zonas.",
    bodyEn:
      "I calculated weighted ENIGH averages, a related-spending proxy, and relative scores for municipalities and neighborhoods.",
  },
  {
    number: "05",
    icon: MapPin,
    title: "Comunicar hallazgos",
    titleEn: "Communicate findings",
    body: "Preparé mapas, comparaciones y cifras para que el equipo desarrollara la narrativa y la presentación.",
    bodyEn:
      "I prepared maps, comparisons, and figures for the team’s narrative and presentation.",
  },
];

const sources = [
  {
    name: "ENIGH 2024",
    scope: "Nacional y estatal",
    scopeEn: "National and state level",
    description:
      "Ingreso y gasto de hogares; Veracruz se usa como contexto económico, no como estimación municipal.",
    descriptionEn:
      "Household income and spending; Veracruz is used as economic context, not as a municipal estimate.",
  },
  {
    name: "DENUE",
    scope: "Establecimientos",
    scopeEn: "Business directory",
    description:
      "Registros y coordenadas para identificar competencia SPA directa y servicios relacionados.",
    descriptionEn:
      "Business records and coordinates to identify direct spa competition and related services.",
  },
  {
    name: "CPV 2020 / ITER",
    scope: "Municipio de Orizaba",
    scopeEn: "Orizaba municipality",
    description:
      "Población total, composición por sexo y grupos de edad para perfilar el mercado local.",
    descriptionEn:
      "Total population, sex composition, and age groups to profile the local market.",
  },
];

const metrics = [
  {
    value: "123,182",
    label: "habitantes en Orizaba",
    labelEn: "residents in Orizaba",
    note: "CPV 2020 / ITER",
  },
  {
    value: "26",
    label: "SPA directos en DENUE",
    labelEn: "direct spas in DENUE",
    note: "Competencia registrada",
    noteEn: "Registered competitors",
  },
  {
    value: "78.8",
    label: "índice regional de Orizaba",
    labelEn: "Orizaba regional index",
    note: "Comparación entre municipios · 0–100",
    noteEn: "Municipal comparison · 0–100",
  },
  {
    value: "77.4",
    label: "score de zona Centro",
    labelEn: "Downtown area score",
    note: "Comparación dentro de Orizaba · 0–100",
    noteEn: "Comparison within Orizaba · 0–100",
  },
];

export function SpaOrizabaCaseStudy() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="shell">
          <Link className="back-link" href="/#proyectos">
            <ArrowLeft size={15} /> <LanguageText es="Volver a proyectos" en="Back to projects" />
          </Link>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className="eyebrow">
                <span>03</span> / <LanguageText es="CASO DE CIENCIA DE DATOS" en="DATA SCIENCE CASE STUDY" />
              </p>
              <h1>SPA <span>Orizaba</span><b>.</b></h1>
              <p className={styles.subtitle}>
                <LanguageText es="Una oportunidad comercial, leída con datos." en="A commercial opportunity, read through data." />
              </p>
              <p className={styles.lede}>
                <LanguageText
                  es="¿Qué señales apoyarían la apertura de un SPA en Orizaba y por dónde convendría empezar a buscar? Integré información económica, demográfica y comercial para orientar esa decisión."
                  en="What signals support opening a spa in Orizaba, and where should the search begin? I combined economic, demographic, and business data to guide that decision."
                />
              </p>
              <div className={styles.tags} aria-label="Herramientas y fuentes / Tools and data sources">
                {["Python", "Pandas", "NumPy", "ENIGH 2024", "DENUE", "INEGI"].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className={styles.heroActions}>
                <Link className={`button button-primary ${styles.heroAction}`} href="#metodo">
                  <LanguageText es="Ver el análisis" en="Explore the analysis" /> <ArrowRight size={17} />
                </Link>
                <a
                  className={`button button-secondary ${styles.repoAction}`}
                  href="https://github.com/Tecomahua/spa-orizaba-analisis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> <LanguageText es="Ver repositorio" en="View repository" />
                </a>
              </div>
            </div>
            <figure className={styles.heroFigure}>
              <div className={styles.heroImage}>
                <Image
                  src={getPublicAssetPath("/images/spa-orizaba/regional-opportunity.jpg")}
                  alt="Orizaba alcanza 78.8 puntos en el índice regional de oportunidad del reporte."
                  width={1460}
                  height={837}
                  sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 620px"
                  priority
                  unoptimized
                />
              </div>
              <figcaption>
                <span><LanguageText es="ÍNDICE REGIONAL · 0–100" en="REGIONAL INDEX · 0–100" /></span>
                <strong><LanguageText es="Orizaba" en="Orizaba" /> <em>78.8</em></strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.results} id="resultados">
        <div className="shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow"><span>01</span> / <LanguageText es="LO QUE ENCONTRAMOS" en="WHAT THE DATA SHOWED" /></p>
              <h2><LanguageText es="Orizaba destacó en la región. El Centro, dentro de la ciudad." en="Orizaba led the region. Downtown ranked first within the city." /></h2>
            </div>
            <p>
              <LanguageText es="Dos comparaciones, dos escalas: el índice 78.8 ordena municipios; el score 77.4 prioriza zonas dentro de Orizaba. Ambos ayudan a enfocar la investigación, no garantizan demanda." en="Two comparisons at two scales: the 78.8 index ranks municipalities; the 77.4 score prioritizes areas within Orizaba. Both focus further research; neither guarantees demand." />
            </p>
          </div>
          <div className={styles.metricGrid}>
            {metrics.map((metric) => (
              <article className={styles.metric} key={metric.value}>
                <strong>{metric.value}</strong>
                <span><LanguageText es={metric.label} en={metric.labelEn} /></span>
                <small><LanguageText es={metric.note} en={metric.noteEn ?? metric.note} /></small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.method} id="metodo">
        <div className="shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow"><span>02</span> / <LanguageText es="EL PROCESO TÉCNICO" en="THE TECHNICAL PROCESS" /></p>
              <h2><LanguageText es="De fuentes dispersas a una comparación útil." en="From separate sources to a useful comparison." /></h2>
            </div>
            <p>
              <LanguageText es="Mantuve separado el contexto estatal de ENIGH y la evidencia municipal de DENUE e ITER para no trasladar conclusiones de Veracruz directamente a Orizaba." en="I kept ENIGH’s state-level context separate from municipal DENUE and ITER evidence, so state findings would not be passed off as Orizaba estimates." />
            </p>
          </div>
          <div className={styles.sourceGrid}>
            {sources.map((source, index) => (
              <article className={styles.sourceCard} key={source.name}>
                <span className={styles.sourceIndex}>0{index + 1}</span>
                <h3>{source.name}</h3>
                <p className={styles.sourceScope}><LanguageText es={source.scope} en={source.scopeEn} /></p>
                <p><LanguageText es={source.description} en={source.descriptionEn} /></p>
              </article>
            ))}
          </div>
          <div className={styles.pipeline}>
            {pipeline.map(({ number, icon: Icon, title, titleEn, body, bodyEn }) => (
              <article className={styles.pipelineStep} key={number}>
                <div className={styles.pipelineTop}><span>{number}</span><Icon size={19} strokeWidth={1.5} /></div>
                <h3><LanguageText es={title} en={titleEn} /></h3>
                <p><LanguageText es={body} en={bodyEn} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reading}>
        <div className="shell">
          <div className={styles.readingGrid}>
            <div>
              <p className="eyebrow"><span>03</span> / <LanguageText es="LA DECISIÓN" en="THE DECISION" /></p>
              <h2><LanguageText es="Empezar en el Centro. Validar el local antes de invertir." en="Start downtown. Validate the property before investing." /></h2>
            </div>
            <div className={styles.readingCopy}>
              <p>
                <LanguageText es="La zona Centro obtuvo el score más alto del análisis local: 77.4/100. La concentración comercial y la visibilidad la convierten en el mejor punto de partida para buscar un espacio." en="Downtown received the highest score in the local analysis: 77.4/100. Its commercial concentration and visibility make it the strongest place to begin looking." />
              </p>
              <p>
                <LanguageText es="La recomendación es priorizar la búsqueda allí y revisar en campo renta, flujo peatonal, estacionamiento, seguridad y condiciones del inmueble. El análisis ubica dónde investigar; no reemplaza esa revisión." en="The recommendation is to prioritize the search there, then check rent, pedestrian traffic, parking, safety, and property conditions in person. The analysis points to where to investigate; it does not replace that work." />
              </p>
              <div className={styles.recommendation}>
                <MapPin size={19} />
                <span><LanguageText es="Zona prioritaria" en="Priority area" /></span>
                <strong>Centro · Orizaba</strong>
                <em>77.4 / 100</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection} id="visualizaciones">
        <div className="shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow"><span>04</span> / <LanguageText es="EVIDENCIA VISUAL" en="VISUAL EVIDENCE" /></p>
              <h2><LanguageText es="Cinco vistas del análisis." en="Five views of the analysis." /></h2>
            </div>
            <p>
              <LanguageText es="Gráficas y mapa incluidos en el reporte del proyecto. Haz clic en una imagen para ampliarla." en="Charts and map included in the project report. Select an image to enlarge it." />
            </p>
          </div>
          <AelpCaptureGallery
            captures={figures}
            variant="desktop"
            imageBasePath={getPublicAssetPath("/images/spa-orizaba")}
          />
        </div>
      </section>

      <section className={styles.contribution}>
        <div className="shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow"><span>05</span> / <LanguageText es="EL EQUIPO Y MI APORTE" en="THE TEAM AND MY CONTRIBUTION" /></p>
              <h2><LanguageText es="Mi responsabilidad fue hacer que los datos estuvieran listos para contar la historia." en="My responsibility was to make the data ready for the story." /></h2>
            </div>
            <p>
              <LanguageText es="Fue un proyecto de tres personas con responsabilidades distintas y complementarias." en="This was a three-person project with distinct, complementary responsibilities." />
            </p>
          </div>
          <article className={styles.leadRole}>
            <div className={styles.leadRoleTop}>
              <ChartNoAxesCombined size={22} />
              <span><LanguageText es="ANÁLISIS TÉCNICO · CIENCIA DE DATOS" en="TECHNICAL ANALYSIS · DATA SCIENCE" /></span>
            </div>
            <h3>Francisco Javier Martínez Tecomahua</h3>
            <p>
              <LanguageText es="Me encargué de localizar y preparar las fuentes, limpiar y transformar los registros, cruzar la información de Orizaba, calcular los indicadores y producir las visualizaciones. También documenté el flujo para que el análisis pudiera reproducirse." en="I sourced and prepared the datasets, cleaned and transformed records, joined information for Orizaba, calculated indicators, and produced the visualizations. I also documented the workflow so the analysis could be reproduced." />
            </p>
            <div className={styles.toolTags}>{["Python", "Pandas", "NumPy", "ENIGH", "DENUE", "ITER"].map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
          <div className={styles.teamGrid}>
            <article>
              <span>STORYTELLING</span>
              <h3>Gerson Cruz Serrano</h3>
              <p><LanguageText es="Construyó la narrativa con datos y ordenó los hallazgos para responder la pregunta del proyecto." en="Developed the data story and organized the findings around the project question." /></p>
            </article>
            <article>
              <span><LanguageText es="COMUNICACIÓN" en="COMMUNICATION" /></span>
              <h3>Keila Yunuette Serna Illescas</h3>
              <p><LanguageText es="Se encargó de comunicar los resultados y presentar la propuesta del equipo." en="Led communication of the results and presentation of the team’s proposal." /></p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.limits}>
        <div className="shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow"><span>06</span> / <LanguageText es="ALCANCE Y LÍMITES" en="SCOPE AND LIMITS" /></p>
              <h2><LanguageText es="Una guía para investigar, no una promesa de ventas." en="A guide for further research, not a sales forecast." /></h2>
            </div>
          </div>
          <div className={styles.limitGrid}>
            <article>
              <span>01</span>
              <h3><LanguageText es="Gasto como contexto" en="Spending as context" /></h3>
              <p><LanguageText es="ENIGH no contiene una medida directa de gasto en SPA a nivel municipal. El reporte usa cuidado personal y salud como proxy estatal." en="ENIGH does not directly measure spa spending at the municipal level. The report uses personal care and health as a state-level proxy." /></p>
            </article>
            <article>
              <span>02</span>
              <h3><LanguageText es="Presencia no es rentabilidad" en="Presence is not profitability" /></h3>
              <p><LanguageText es="DENUE ayuda a localizar establecimientos; no informa ventas, ocupación ni supervivencia de cada negocio." en="DENUE helps locate businesses; it does not report sales, occupancy, or business survival." /></p>
            </article>
            <article>
              <span>03</span>
              <h3><LanguageText es="Scores relativos" en="Relative scores" /></h3>
              <p><LanguageText es="Los indicadores sirven para ordenar opciones con las variables disponibles. La decisión final requiere visitas, cotizaciones y validación comercial." en="The indicators rank options using available variables. A final decision requires site visits, quotes, and commercial validation." /></p>
            </article>
          </div>
          <p className={styles.sourcesNote}>
            <LanguageText es="Fuentes del proyecto: INEGI ENIGH 2024, DENUE y Censo de Población y Vivienda 2020 / ITER; DataMéxico y clasificaciones SCIAN / ENGASTO como referencias complementarias." en="Project sources: INEGI ENIGH 2024, DENUE, and the 2020 Population and Housing Census / ITER; DataMéxico and SCIAN / ENGASTO classifications as complementary references." />
          </p>
        </div>
      </section>

      <nav className={`shell project-pagination ${styles.pagination}`} aria-label="Más proyectos / More projects">
        <Link href="/#proyectos"><ArrowLeft size={16} /> <LanguageText es="Todos los proyectos" en="All projects" /></Link>
        <Link href="/proyectos/tutor-ia-nem/">
          <div><small><LanguageText es="PROYECTO ANTERIOR" en="PREVIOUS PROJECT" /></small><strong>STI-NEM</strong></div>
          <ArrowRight size={23} />
        </Link>
      </nav>

      <section className="detail-next">
        <div className="shell detail-next-inner">
          <div>
            <p className="eyebrow"><span><LanguageText es="EN CONTACTO" en="GET IN TOUCH" /></span></p>
            <h2><LanguageText es="¿Hablamos de análisis de datos?" en="Let's talk about data analysis." /></h2>
            <p><LanguageText es="Disponible para residencia profesional desde enero de 2027." en="Available for a professional internship starting January 2027." /></p>
          </div>
          <a className="button button-primary" href="mailto:fjmt0716@gmail.com?subject=Residencia%20profesional%20%E2%80%94%20Javier%20Mart%C3%ADnez">
            <LanguageText es="Escríbeme" en="Email me" /> <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
