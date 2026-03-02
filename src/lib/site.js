export const SITE = {
  name: 'Serendale',
  defaultLocale: 'ru',
  locales: ['ru', 'en'],
}

function normalizeUrl(value) {
  if (!value) return null
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  return `https://${value}`
}

export function getSiteUrl() {
  const fromPublic = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL)
  if (fromPublic) return fromPublic

  const vercel = normalizeUrl(process.env.VERCEL_URL)
  if (vercel) return vercel

  return 'http://localhost:3000'
}
