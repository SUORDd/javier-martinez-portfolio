const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function getPublicAssetPath(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const vercelDeploymentUrl = process.env.VERCEL_URL;
  const cloudflarePagesUrl = process.env.CF_PAGES_URL;
  const candidate = configuredUrl ?? cloudflarePagesUrl ??
    (vercelProductionUrl ? `https://${vercelProductionUrl}` : undefined) ??
    (vercelDeploymentUrl ? `https://${vercelDeploymentUrl}` : undefined);

  if (!candidate) return undefined;
  return candidate.startsWith("http://") || candidate.startsWith("https://")
    ? candidate.replace(/\/$/, "")
    : `https://${candidate.replace(/\/$/, "")}`;
}
