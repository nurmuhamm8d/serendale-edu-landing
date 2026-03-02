import { SITE, getSiteUrl } from '@/lib/site'

export default function sitemap() {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return SITE.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  }))
}
