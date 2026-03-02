'use client'

import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import { SECTIONS } from '@/data/sections'

export default function Services() {
  const t = useT()
  const locale = useLocale()
  const cards = SECTIONS.services.cards

  return (
    <section id="services" className="relative py-16 md:py-20">
      <Container>
        <FadeUp>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {t('sections.servicesTitle')}
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {t('sections.servicesText')}
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c, idx) => (
            <FadeUp key={c.title.en} delay={0.02 + idx * 0.02}>
              <Card title={c.title[locale]} text={c.text[locale]} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Card({ title, text }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-white/65">{text}</div>
    </div>
  )
}
