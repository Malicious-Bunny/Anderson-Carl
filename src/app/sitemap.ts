import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://andersoncarlconsultancy.uk'

  const routes = [
    '',
    '/about',
    '/contact',
    '/services/passport',
    '/services/driver-licence',
    '/services/resident-permit',
    '/services/visa-renewal',
    '/services/uk-birth-certificate',
    '/services/uk-marriage-certificate',
    '/services/uk-death-certificate',
    '/services/ielts-certificate',
    '/services/pte-certificate',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : route.startsWith('/services/') ? 0.8 : 0.6,
  }))
}
