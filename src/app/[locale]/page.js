import Hero from '@/components/sections/Hero'
import Courses from '@/components/sections/Courses'
import Services from '@/components/sections/Services'
import Solutions from '@/components/sections/Solutions'
import Roadmap from '@/components/sections/Roadmap'
import Whitepaper from '@/components/sections/Whitepaper'
import Advantages from '@/components/sections/Advantages'
import Testimonials from '@/components/sections/Testimonials'
import JsonLd from '@/components/seo/JsonLd'
import { SITE } from '@/lib/site'
import { TESTIMONIALS } from '@/data/testimonials'
import { buildReviewsJsonLd } from '@/lib/schema'
import { t } from '@/lib/i18n'

export default async function Page({ params }) {
  const { locale: rawLocale } = await params
  const locale = SITE.locales.includes(rawLocale)
    ? rawLocale
    : SITE.defaultLocale

  const jsonLd = buildReviewsJsonLd({
    name: t(locale, 'testimonials.schemaName'),
    locale,
    testimonials: TESTIMONIALS,
  })

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <Courses />
      <Services />
      <Solutions />
      <Roadmap />
      <Whitepaper />
      <Advantages />
      <Testimonials />
    </>
  )
}
