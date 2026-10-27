"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";

type StiNemBrowserFrameProps = {
  className?: string;
  showCaption?: boolean;
  priority?: boolean;
};

export function StiNemBrowserFrame({
  className = "",
  showCaption = true,
  priority = false,
}: StiNemBrowserFrameProps) {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <figure className={`sti-browser-frame ${className}`}>
      <div className="sti-browser-toolbar" aria-hidden="true">
        <i /><i /><i />
        <span>STI-NEM · {isEnglish ? "Teacher dashboard" : "Dashboard docente"}</span>
      </div>
      <Image
        className="sti-browser-screenshot"
        src={getPublicAssetPath("/images/sti-nem/dashboard-docente.png")}
        alt={isEnglish ? "STI-NEM teacher dashboard with anonymized personal data and figures" : "Dashboard docente de STI-NEM con datos personales y cifras anonimizados"}
        width={1178}
        height={661}
        sizes="(max-width: 700px) 92vw, (max-width: 1100px) 48vw, 560px"
        priority={priority}
        unoptimized
      />
      {showCaption && (
        <figcaption>{isEnglish ? "Original dashboard screenshot · sensitive data anonymized" : "Captura original del dashboard · datos sensibles anonimizados"}</figcaption>
      )}
    </figure>
  );
}
