"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/language-provider";

export function CopyEmail() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const message = copied
    ? (language === "es" ? "Correo copiado" : "Email copied")
    : copyFailed
      ? (language === "es" ? "No se pudo copiar" : "Could not copy")
      : (language === "es" ? "Copiar correo" : "Copy email");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setCopied(false);
      setCopyFailed(false);
    }, 3000);
  }

  return (
    <button type="button" className="copy-email" onClick={copyEmail}>
      {copied ? <Check size={15} /> : <Copy size={15} />}
      <span aria-live="polite">{message}</span>
    </button>
  );
}
