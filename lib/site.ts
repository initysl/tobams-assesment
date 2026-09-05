/**
 * Canonical origin for metadata, robots.txt and the sitemap.
 *
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment. The localhost
 * fallback keeps `next build` working locally - relative metadata URLs are a
 * build error without a metadataBase, so this must always resolve to something.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const SITE_NAME = 'Tobams Group';
