"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { captureEnglish } from "@/data/capture-translations";
import { getPublicAssetPath } from "@/lib/site-url";

export type AelpCapture = {
  file: string;
  title: string;
  description: string;
  alt: string;
  reference?: string;
  category?: string;
  titleEn?: string;
  descriptionEn?: string;
  altEn?: string;
  categoryEn?: string;
  width?: number;
  height?: number;
};

function getCaptureCategory(capture: AelpCapture, language: "es" | "en") {
  return language === "en"
    ? capture.categoryEn ?? captureEnglish[capture.file]?.categoryEn ?? capture.category
    : capture.category;
}

export function AelpCaptureGallery({
  captures,
  variant = "mobile",
  imageBasePath = getPublicAssetPath("/images/ingles-chido"),
}: {
  captures: AelpCapture[];
  variant?: "mobile" | "desktop";
  imageBasePath?: string;
}) {
  const isDesktop = variant === "desktop";
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("__all__");
  const [selected, setSelected] = useState<AelpCapture | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const categories = useMemo(() => {
    const sourceCategories = Array.from(
      new Set(captures.map((capture) => capture.category).filter(Boolean)),
    ) as string[];
    return [
      {
        key: "__all__",
        label: language === "es" ? "Todas" : "All",
      },
      ...sourceCategories.map((sourceCategory) => {
        const example = captures.find((capture) => capture.category === sourceCategory);
        return {
          key: sourceCategory,
          label: example ? getCaptureCategory(example, language) ?? sourceCategory : sourceCategory,
        };
      }),
    ];
  }, [captures, language]);

  const filteredCaptures = useMemo(() => {
    if (selectedCategory === "__all__") return captures;
    return captures.filter((capture) => capture.category === selectedCategory);
  }, [captures, selectedCategory]);

  function captureTitle(capture: AelpCapture) {
    return language === "en" ? capture.titleEn ?? captureEnglish[capture.file]?.titleEn ?? capture.title : capture.title;
  }
  function captureDescription(capture: AelpCapture) {
    return language === "en" ? capture.descriptionEn ?? captureEnglish[capture.file]?.descriptionEn ?? capture.description : capture.description;
  }
  function captureAlt(capture: AelpCapture) {
    return language === "en" ? capture.altEn ?? captureEnglish[capture.file]?.altEn ?? capture.alt : capture.alt;
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelected(null);
        return;
      }
      if (!isDesktop || !selected || filteredCaptures.length < 2) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const currentIndex = filteredCaptures.findIndex((capture) => capture.file === selected.file);
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + direction + filteredCaptures.length) % filteredCaptures.length;
      setSelected(filteredCaptures[nextIndex]);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [filteredCaptures, isDesktop, selected]);

  useEffect(() => {
    if (!isDesktop) return;
    if (selected) closeButtonRef.current?.focus();
    else triggerRef.current?.focus();
  }, [isDesktop, selected]);

  return (
    <>
      {categories.length > 1 && (
        <div
          className="aelp-gallery-filters"
          role="tablist"
          aria-label={language === "es" ? "Filtrar capturas por categoría" : "Filter captures by category"}
        >
          {categories.map((category) => {
            const count =
              category.key === "__all__"
                ? captures.length
                : captures.filter((capture) => capture.category === category.key).length;
            const isSelected = selectedCategory === category.key;
            return (
              <button
                key={category.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`aelp-gallery-filter${isSelected ? " aelp-gallery-filter-active" : ""}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label} <span>({count})</span>
              </button>
            );
          })}
        </div>
      )}

      <div className={`aelp-gallery${isDesktop ? " aelp-gallery-desktop" : ""}`}>
        {filteredCaptures.map((capture) => (
          <article className="aelp-gallery-item" key={capture.file}>
            <button
              type="button"
              className={`aelp-gallery-image${isDesktop ? " aelp-gallery-image-desktop" : ""}`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelected(capture);
              }}
              aria-label={language === "es" ? `Ampliar captura: ${captureTitle(capture)}` : `Enlarge capture: ${captureTitle(capture)}`}
            >
              {isDesktop && (
                <span className="sti-browser-chrome" aria-hidden="true">
                  <i /><i /><i /><span>{captureTitle(capture)}</span>
                </span>
              )}
              <Image
                src={`${imageBasePath}/${capture.file}`}
                alt={captureAlt(capture)}
                width={capture.width ?? (isDesktop ? 1178 : 1284)}
                height={capture.height ?? (isDesktop ? 663 : 2778)}
                sizes={isDesktop
                  ? "(max-width: 700px) 90vw, (max-width: 1050px) 46vw, 540px"
                  : "(max-width: 700px) 74vw, (max-width: 1050px) 35vw, 260px"}
                unoptimized
              />
            </button>
            <div>
              {capture.reference && (
                <p className="aelp-gallery-reference">{capture.reference}</p>
              )}
              <h3>{captureTitle(capture)}</h3>
              <p>{captureDescription(capture)}</p>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="aelp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={captureTitle(selected)}
          onClick={() => setSelected(null)}
          onKeyDown={(event) => {
            if (isDesktop && event.key === "Tab") {
              event.preventDefault();
              closeButtonRef.current?.focus();
            }
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="aelp-lightbox-close"
            onClick={() => setSelected(null)}
            aria-label={language === "es" ? "Cerrar visor" : "Close viewer"}
          >
            <X size={21} />
          </button>
          <div
            className="aelp-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={`${imageBasePath}/${selected.file}`}
              alt={captureAlt(selected)}
              width={selected.width ?? (isDesktop ? 1178 : 1284)}
              height={selected.height ?? (isDesktop ? 663 : 2778)}
              sizes={isDesktop ? "90vw" : "80vw"}
              unoptimized
            />
            <div className="aelp-lightbox-meta">
              <p className="aelp-gallery-reference">{selected.reference}</p>
              <h4>{captureTitle(selected)}</h4>
              <p>{captureDescription(selected)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
