"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, SunMoon, X } from "lucide-react";
import { navigation, profile } from "@/data/profile";
import { useLanguage } from "@/components/language-provider";

const navigationLabels = {
  es: ["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"],
  en: ["Home", "About", "Projects", "Skills", "Contact"],
} as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          )[0];
        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: `-${Math.round(window.innerHeight * 0.15)}px 0px -${Math.round(window.innerHeight * 0.6)}px 0px`,
        threshold: 0,
      },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    header.current
      ?.querySelector<HTMLAnchorElement>("#primary-navigation a")
      ?.focus();
    function handleKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    }
    function handleOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setMenuOpen(false);
    }
    function handleResize() {
      if (window.innerWidth > 760) setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      /* Theme still works when local storage is unavailable. */
    }
  }

  return (
    <header className="site-header" ref={header}>
      <div className="header-inner shell">
        <Link
          className="brand"
          href={pathname === "/" ? "#inicio" : "/#inicio"}
          aria-label={`${profile.name}, ${language === "es" ? "inicio" : "home"}`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            JM
          </span>
          <span className="brand-name">Javier Martínez</span>
        </Link>
        <nav
          id="primary-navigation"
          className={`navigation${menuOpen ? " navigation-open" : ""}`}
          aria-label={language === "es" ? "Navegación principal" : "Main navigation"}
        >
          {navigation.map((item, index) => {
            const active =
              pathname === "/"
                ? activeSection === item.id
                : pathname.startsWith("/proyectos") && item.id === "proyectos";
            return (
              <Link
                key={item.id}
                className={`nav-link${active ? " nav-link-active" : ""}`}
                href={pathname === "/" ? item.href : `/${item.href}`}
                aria-current={active ? "location" : undefined}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveSection(item.id);
                }}
              >
                <span className="nav-link-number" aria-hidden="true">
                  0{index + 1}
                </span>
                {navigationLabels[language][index] ?? item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-controls">
          <button
            className="icon-button language-button"
            type="button"
            onClick={toggleLanguage}
            aria-label={language === "es" ? "Switch language to English" : "Cambiar idioma a español"}
            title={language === "es" ? "English" : "Español"}
          >
            <span>{language === "es" ? "EN" : "ES"}</span>
          </button>
          <button
            className="icon-button theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={language === "es" ? "Cambiar tema claro u oscuro" : "Toggle light or dark theme"}
            title={language === "es" ? "Cambiar tema" : "Change theme"}
          >
            <SunMoon size={18} strokeWidth={1.5} />
          </button>
          <button
            ref={menuButton}
            className="icon-button mobile-menu-button"
            type="button"
            aria-label={menuOpen
              ? (language === "es" ? "Cerrar menú" : "Close menu")
              : (language === "es" ? "Abrir menú" : "Open menu")}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
