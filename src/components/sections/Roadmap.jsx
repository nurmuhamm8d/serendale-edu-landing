'use client'

import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import { SECTIONS } from '@/data/sections'

export default function Roadmap() {
  const t = useT()
  const locale = useLocale()
  const items = SECTIONS.roadmap.items

  return (
    <section id="roadmap" className="relative py-16 md:py-20">
      <Container>
        <FadeUp>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {t('sections.roadmapTitle')}
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {t('sections.roadmapText')}
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {items.map((it, idx) => (
            <FadeUp key={it.q} delay={0.02 + idx * 0.03}>
              <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <div className="inline-flex rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
                  {it.q}
                </div>
                <div className="mt-4 text-sm font-semibold">
                  {it.title[locale]}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/65">
                  {it.text[locale]}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
