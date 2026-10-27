"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const autoTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          // Reveal the main content groups and their individual visual cards.
          "main section:not(.home-hero):not(.ingles-case-hero):not(.sti-case-hero) .shell > *:not([data-reveal])",
          "main section:not(.home-hero):not(.ingles-case-hero):not(.sti-case-hero) .shell :is(article, figure, .aelp-gallery-item):not([data-reveal])",
          "footer .shell > *:not([data-reveal])",
        ].join(", "),
      ),
    );
    autoTargets.forEach((target, index) => {
      target.dataset.reveal = "";
      target.dataset.revealAuto = "";
      const siblingIndex = autoTargets
        .slice(0, index)
        .filter((candidate) => candidate.parentElement === target.parentElement)
        .length;
      target.style.transitionDelay = `${Math.min(siblingIndex * 55, 220)}ms`;
    });
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -25px 0px" },
    );

    targets.forEach((target) => {
      if (
        !reducedMotion &&
        target.getBoundingClientRect().top > window.innerHeight * 0.92
      )
        target.classList.add("reveal-pending");
      else target.classList.add("is-revealed");
      observer.observe(target);
    });

    let scrollFrame = 0;
    function updateProgress() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio =
        scrollable > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollable))
          : 0;
      if (progress.current)
        progress.current.style.transform = `scaleX(${ratio})`;
      document.documentElement.dataset.scrolled = String(window.scrollY > 24);
      scrollFrame = 0;
    }
    function queueProgress() {
      if (!scrollFrame)
        scrollFrame = window.requestAnimationFrame(updateProgress);
    }
    updateProgress();
    window.addEventListener("scroll", queueProgress, { passive: true });
    window.addEventListener("resize", queueProgress);

    const cleanups: (() => void)[] = [];
    if (
      window.matchMedia(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    ) {
      document
        .querySelectorAll<HTMLElement>("[data-interactive]")
        .forEach((surface) => {
          let pointerFrame = 0;
          const isProjectCard = surface.matches(".project-card");
          const isPhoneMockup = surface.matches(".ingles-chido-card-media");
          function onPointerMove(event: PointerEvent) {
            const clientX = event.clientX;
            const clientY = event.clientY;
            if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
            pointerFrame = window.requestAnimationFrame(() => {
              const rect = surface.getBoundingClientRect();
              const x = (clientX - rect.left) / rect.width;
              const y = (clientY - rect.top) / rect.height;
              surface.style.setProperty("--pointer-x", `${x * 100}%`);
              surface.style.setProperty("--pointer-y", `${y * 100}%`);
              if (isProjectCard) {
                const tiltX = (x - 0.5) * 2.2;
                const tiltY = (0.5 - y) * 1.6;
                const visualX = (x - 0.5) * -5;
                const visualY = (y - 0.5) * -4;
                surface.style.setProperty("--card-tilt-x", `${tiltX}deg`);
                surface.style.setProperty("--card-tilt-y", `${tiltY}deg`);
                surface.style.setProperty("--visual-shift-x", `${visualX}px`);
                surface.style.setProperty("--visual-shift-y", `${visualY}px`);
              }
              if (isPhoneMockup) {
                const tiltX = (x - 0.5) * 90;
                const tiltY = (0.5 - y) * 28;
                surface.style.setProperty("--phone-tilt-x", `${tiltX}deg`);
                surface.style.setProperty("--phone-tilt-y", `${tiltY}deg`);
                surface.style.setProperty("--phone-lift", "-5px");
              }
              pointerFrame = 0;
            });
          }
          function resetPointer() {
            if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
            pointerFrame = 0;
            surface.style.setProperty("--pointer-x", "50%");
            surface.style.setProperty("--pointer-y", "50%");
            if (isProjectCard) {
              surface.style.setProperty("--card-tilt-x", "0deg");
              surface.style.setProperty("--card-tilt-y", "0deg");
              surface.style.setProperty("--visual-shift-x", "0px");
              surface.style.setProperty("--visual-shift-y", "0px");
            }
            if (isPhoneMockup) {
              surface.style.setProperty("--phone-tilt-x", "0deg");
              surface.style.setProperty("--phone-tilt-y", "0deg");
              surface.style.setProperty("--phone-lift", "0px");
            }
          }
          surface.addEventListener("pointermove", onPointerMove, {
            passive: true,
          });
          surface.addEventListener("pointerleave", resetPointer);
          cleanups.push(() => {
            surface.removeEventListener("pointermove", onPointerMove);
            surface.removeEventListener("pointerleave", resetPointer);
            if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
          });
        });
    }

    return () => {
      observer.disconnect();
      targets.forEach((target) => target.classList.remove("reveal-pending"));
      autoTargets.forEach((target) => {
        target.removeAttribute("data-reveal");
        target.removeAttribute("data-reveal-auto");
        target.style.removeProperty("transition-delay");
      });
      window.removeEventListener("scroll", queueProgress);
      window.removeEventListener("resize", queueProgress);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return (
    <div className="reading-progress" aria-hidden="true">
      <span ref={progress} />
    </div>
  );
}
