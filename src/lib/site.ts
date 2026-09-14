const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// A localhost fallback keeps development and builds usable before the public
// domain is known. Production should always provide NEXT_PUBLIC_SITE_URL.
export const siteUrl = new URL(configuredSiteUrl ?? "http://localhost:3000");

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}
