import type { MetadataRoute } from 'next';

import { SITE } from '~/config';
import { getAllServices } from '~/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/services', '/about', '/faqs', '/contact', '/privacy', '/terms'];
  const services = getAllServices().map((s) => `/services/${s.slug}`);
  return [...pages, ...services].map((path) => ({ url: `${SITE.url}${path}`, lastModified: new Date() }));
}
