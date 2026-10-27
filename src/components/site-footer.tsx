import { ArrowUp, Github, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { LanguageText } from "@/components/language-provider";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link className="footer-name" href="/#inicio">
            © {new Date().getFullYear()} Javier Martínez
          </Link>
          <p><LanguageText es="Data Science · Software Engineering" en="Data Science · Software Engineering" /></p>
        </div>
        <div className="footer-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Correo electrónico / Email">
            <Mail size={17} />
          </a>
          <Link className="back-top" href="/#inicio">
            <LanguageText es="Volver arriba" en="Back to top" /> <ArrowUp size={14} />
          </Link>
        </div>
      </div>
      <p className="footer-wordmark" aria-hidden="true">
        Javier Martínez.
      </p>
    </footer>
  );
}
