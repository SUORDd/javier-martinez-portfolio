import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LanguageProvider, LanguageText } from "@/components/language-provider";
import { getPublicAssetPath, getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteDescription =
  "Portafolio de Javier Martínez: ingeniería de software, productos educativos y enfoque profesional en Ciencia de Datos y Machine Learning.";
const siteUrl = getSiteUrl();
const canonicalUrl = siteUrl ? `${siteUrl}${getPublicAssetPath("/")}` : undefined;
const socialImage = siteUrl ? [`${siteUrl}${getPublicAssetPath("/og-image.svg")}`] : undefined;

export const metadata: Metadata = {
  title: {
    default: "Javier Martínez — Data Science & Software Engineering",
    template: "%s | Javier Martínez",
  },
  description: siteDescription,
  applicationName: "Javier Martínez · Portafolio",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
  authors: [{ name: "Francisco Javier Martínez Tecomahua" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Javier Martínez — Data Science & Software Engineering",
    description: siteDescription,
    ...(socialImage ? { images: socialImage } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Martínez — Data Science & Software Engineering",
    description: siteDescription,
    ...(socialImage ? { images: socialImage } : {}),
  },
  icons: {
    icon: getPublicAssetPath("/favicon-fj.svg"),
    shortcut: getPublicAssetPath("/favicon-fj.svg"),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  colorScheme: "dark light",
};

const themeScript = `try { var t = localStorage.getItem('portfolio-theme'); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t; var l = localStorage.getItem('portfolio-language'); if (l === 'en' || l === 'es') { document.documentElement.lang = l; document.documentElement.dataset.language = l; } } catch (_) {}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <LanguageProvider>
          <a className="skip-link" href="#contenido">
            <LanguageText es="Saltar al contenido" en="Skip to content" />
          </a>
          <SiteHeader />
          <ScrollReveal />
          <div id="contenido">{children}</div>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
