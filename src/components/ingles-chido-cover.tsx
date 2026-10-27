"use client";

import Image from "next/image";
import { BookOpen, Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";

const detailScreens = [
  {
    file: "18.webp",
    alt: "Lección de Inglés Chido para escuchar y practicar las vocales.",
    altEn: "Inglés Chido vowel lesson for listening and pronunciation practice.",
    className: "ingles-detail-screen-left",
  },
  {
    file: "2.webp",
    alt: "Bienvenida de Inglés Chido con su identidad visual y accesos para comenzar.",
    altEn: "Inglés Chido welcome screen with its visual identity and ways to get started.",
    className: "ingles-detail-screen-main",
  },
  {
    file: "11.webp",
    alt: "Pantalla de vocabulario de Inglés Chido.",
    altEn: "Inglés Chido vocabulary screen.",
    className: "ingles-detail-screen-right",
  },
];

export function InglesChidoCover({ variant = "home" }: { variant?: "home" | "detail" }) {
  const isDetail = variant === "detail";
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <div className={`ingles-chido-home-visual${isDetail ? " ingles-chido-cover-detail" : ""}`}>
      <span className="ingles-home-orbit" aria-hidden="true" />
      <span className="ingles-home-orbit ingles-home-orbit-inner" aria-hidden="true" />
      <span className="ingles-home-orbit-dot ingles-home-orbit-dot-top" aria-hidden="true" />
      <span className="ingles-home-orbit-dot ingles-home-orbit-dot-bottom" aria-hidden="true" />
      {!isDetail && (
        <>
          <div className="ingles-home-float ingles-home-route" aria-hidden="true">
            <BookOpen size={22} />
            <span><strong>{isEnglish ? "Learning path" : "Ruta de aprendizaje"}</strong><small>{isEnglish ? "VISUAL PROGRESS" : "PROGRESO VISUAL"}</small></span>
          </div>
          <div className="ingles-home-float ingles-home-follow" aria-hidden="true">
            <span className="ingles-home-check"><Check size={20} /></span>
            <span><strong>{isEnglish ? "Progress tracking" : "Seguimiento"}</strong><small>{isEnglish ? "LEARNING EVIDENCE" : "EVIDENCIA DE APRENDIZAJE"}</small></span>
          </div>
          <div className="ingles-chido-card-media" data-interactive>
            <div className="ingles-chido-card-screen">
              <Image
                src={getPublicAssetPath("/images/ingles-chido/2.webp")}
                alt={isEnglish ? "Inglés Chido welcome screen with options to get started or sign in" : "Pantalla de bienvenida de Inglés Chido con opciones para empezar o iniciar sesión"}
                fill
                sizes="(max-width: 700px) 42vw, (max-width: 1100px) 23vw, 250px"
                unoptimized
                priority
              />
            </div>
            <span className="ingles-chido-card-notch" aria-hidden="true" />
          </div>
        </>
      )}
      {isDetail && (
        <div className="ingles-detail-screens" aria-label="Pantallas de Inglés Chido">
          {detailScreens.map((screen, index) => (
            <div className={`ingles-chido-card-media ingles-detail-screen ${screen.className}`} data-interactive key={screen.file}>
              <div className="ingles-chido-card-screen">
                <Image
                  src={getPublicAssetPath(`/images/ingles-chido/${screen.file}`)}
                  alt={isEnglish ? screen.altEn : screen.alt}
                  fill
                  sizes="(max-width: 650px) 29vw, (max-width: 850px) 20vw, 190px"
                  unoptimized
                  priority={index === 1}
                />
              </div>
              <span className="ingles-chido-card-notch" aria-hidden="true" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
