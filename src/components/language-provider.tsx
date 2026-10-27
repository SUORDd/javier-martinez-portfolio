"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Language = "es" | "en";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
let fallbackLanguage: Language | null = null;

function subscribeLanguage(callback: () => void) {
  window.addEventListener("portfolio-language-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("portfolio-language-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getLanguageSnapshot(): Language {
  try {
    const stored = window.localStorage.getItem("portfolio-language");
    if (stored === "en" || stored === "es") {
      fallbackLanguage = stored;
      return stored;
    }
  } catch {
    // Use the in-memory selection when local storage is unavailable.
  }
  return fallbackLanguage ?? "es";
}

function getServerLanguageSnapshot(): Language {
  return "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  const toggleLanguage = useCallback(() => {
    const next: Language = getLanguageSnapshot() === "es" ? "en" : "es";
    fallbackLanguage = next;
    try {
      window.localStorage.setItem("portfolio-language", next);
    } catch {
      // The event still updates the current page if storage is unavailable.
    }
    window.dispatchEvent(new Event("portfolio-language-change"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
    }),
    [language, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LanguageText({
  es,
  en,
}: {
  es: string;
  en: string;
}) {
  const { language } = useLanguage();
  return <>{language === "en" ? en : es}</>;
}
