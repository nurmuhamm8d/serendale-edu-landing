import { notFound } from 'next/navigation'
import I18nProvider from '@/components/i18n/I18nProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE, getSiteUrl } from '@/lib/site'
import { getMessages, t } from '@/lib/i18n'

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!SITE.locales.includes(locale)) return {}

  const siteUrl = getSiteUrl()
  const title = t(locale, 'meta.title')
  const description = t(locale, 'meta.description')
  const url = `${siteUrl}/${locale}`

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ru: `${siteUrl}/ru`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Serendale',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!SITE.locales.includes(locale)) notFound()

  const messages = getMessages(locale)

  return (
    <I18nProvider key={locale} locale={locale} messages={messages}>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" className="min-h-[70vh]">
        {children}
      </main>
      <Footer locale={locale} />
    </I18nProvider>
  )
}
