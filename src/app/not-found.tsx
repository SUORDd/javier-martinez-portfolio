import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LanguageText } from "@/components/language-provider";

export default function NotFound() {
  return <main className="not-found shell"><p className="eyebrow"><span>404</span> / <LanguageText es="NO ENCONTRADO" en="NOT FOUND" /></p><h1><LanguageText es="Esta página no está disponible." en="This page is unavailable." /></h1><Link className="button button-primary" href="/"><ArrowLeft size={16} /> <LanguageText es="Ir al inicio" en="Go home" /></Link></main>;
}
