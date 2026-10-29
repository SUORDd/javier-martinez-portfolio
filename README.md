# Portafolio de Javier Martínez

Sitio personal con Next.js, React y TypeScript. Presenta mi perfil, formación, habilidades, proyectos y estudios de caso en español e inglés.

## Desarrollo local

Requiere Node.js 20.9 o posterior.

```bash
npm ci
npm run dev
```

Abre `http://localhost:3000`.

## Build estático

```bash
npm run build
```

El sitio se exporta a `out/`. Para ejecutarlo bajo una ruta de repositorio, configura `NEXT_PUBLIC_BASE_PATH` antes del build.

## GitHub Pages

Este repositorio se publica automáticamente en [tecomahua.github.io/javier-martinez-portfolio](https://tecomahua.github.io/javier-martinez-portfolio/) al actualizar `main`. El workflow configura la ruta base para el nombre del repositorio y genera sitemap, canonical y enlaces a imágenes con la URL pública del sitio.

## Contenido

- Perfil, navegación, proyectos y habilidades: `src/data/`.
- Páginas de proyecto: `src/app/proyectos/`.
- Recursos públicos del sitio: `public/`.
