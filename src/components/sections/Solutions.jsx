'use client'

import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import { SECTIONS } from '@/data/sections'

export default function Solutions() {
  const t = useT()
  const locale = useLocale()
  const cards = SECTIONS.solutions.cards
  const footer = SECTIONS.solutions.footer[locale]

  return (
    <section id="solutions" className="relative py-16 md:py-20">
      <Container>
        <FadeUp>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {t('sections.solutionsTitle')}
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {t('sections.solutionsText')}
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c, idx) => (
            <FadeUp key={c.title.en} delay={0.02 + idx * 0.02}>
              <Card
                title={c.title[locale]}
                text={c.text[locale]}
                footer={footer}
              />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Card({ title, text, footer }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-glow2 transition hover:bg-white/10">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-white/65">{text}</div>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mt-5 text-xs text-white/60">{footer}</div>
    </div>
  )
}
