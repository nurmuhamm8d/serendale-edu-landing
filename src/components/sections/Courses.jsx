'use client'

import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import { SECTIONS } from '@/data/sections'

export default function Courses() {
  const t = useT()
  const locale = useLocale()
  const cards = SECTIONS.courses.cards

  return (
    <section id="courses" className="relative py-16 md:py-20">
      <Container>
        <FadeUp>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {t('sections.coursesTitle')}
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {t('sections.coursesText')}
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c, idx) => (
            <FadeUp key={c.title.en} delay={0.02 + idx * 0.02}>
              <CourseCard
                title={c.title[locale]}
                text={c.text[locale]}
                meta={c.meta[locale]}
              />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Button href="#advantages" variant="secondary">
              {t('buttons.explore')}
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}

function CourseCard({ title, text, meta }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-glow2 transition hover:bg-white/10">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-white/65">{text}</div>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mt-5 text-xs text-white/60">{meta}</div>
    </div>
  )
}
