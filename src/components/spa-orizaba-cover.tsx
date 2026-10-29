import Image from "next/image";
import { LanguageText } from "@/components/language-provider";
import { getPublicAssetPath } from "@/lib/site-url";
import styles from "./spa-orizaba-case-study.module.css";

export function SpaOrizabaCover() {
  return (
    <figure className={`sti-browser-frame ${styles.coverFrame}`}>
      <div className="sti-browser-toolbar" aria-hidden="true">
        <i /><i /><i />
        <span>DENUE · ORIZABA</span>
      </div>
      <div className={styles.coverImage}>
        <Image
          src={getPublicAssetPath("/images/spa-orizaba/denue-competitor-map.jpg")}
          alt=""
          width={1536}
          height={847}
          sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 520px"
          unoptimized
        />
      </div>
      <figcaption className={styles.coverCaption}>
        <span><LanguageText es="COMPETENCIA GEOLOCALIZADA" en="GEOGRAPHIC COMPETITOR VIEW" /></span>
        <strong>26 <LanguageText es="SPA directos" en="direct spas" /></strong>
      </figcaption>
    </figure>
  );
}
