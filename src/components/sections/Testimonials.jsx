'use client'

import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import { TESTIMONIALS } from '@/data/testimonials'

function Stars({ rating }) {
  const full = Math.max(0, Math.min(5, Math.round(Number(rating || 0))))
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < full ? 'text-fuchsia-300' : 'text-white/20'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const t = useT()

  return (
    <section id="testimonials" className="relative py-16 md:py-20">
      <Container>
        <FadeUp>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {t('testimonials.title')}
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {t('testimonials.text')}
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((x, idx) => (
            <FadeUp key={x.id} delay={0.02 + idx * 0.03}>
              <Card item={x} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Card({ item }) {
  const locale = useLocale()
  return (
    <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-glow2 transition hover:bg-white/10">
      <div className="flex items-center justify-between">
        <Stars rating={item.rating} />
        <div className="text-xs text-white/55">{item.date}</div>
      </div>

      <div className="mt-4 text-sm leading-relaxed text-white/75">
        “{item.text[locale]}”
      </div>

      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mt-5">
        <div className="text-sm font-semibold">{item.name}</div>
        <div className="text-xs text-white/60">{item.role[locale]}</div>
      </div>
    </div>
  )
}
