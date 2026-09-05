import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Only "/" is listed. The nav and footer point at placeholder routes that do
 * not exist yet, and submitting known 404s to a search engine is worse than
 * submitting nothing - add them here as the real pages get built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
