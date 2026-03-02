'use client'

import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import { ADVANTAGES } from '@/data/advantages'
import {
  Sparkles,
  FlaskConical,
  LineChart,
  Users,
  Zap,
  Library,
} from 'lucide-react'

const ICONS = {
  Sparkles,
  FlaskConical,
  LineChart,
  Users,
  Zap,
  Library,
}

export default function Advantages() {
  const t = useT()
  const locale = useLocale()

  return (
    <section id="advantages" className="relative py-16 md:py-20">
      <Container>
        <FadeUp>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {t('advantages.title')}
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {t('advantages.text')}
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((a, idx) => {
            const Icon = ICONS[a.icon] || Sparkles
            return (
              <FadeUp key={a.id} delay={0.02 + idx * 0.03}>
                <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-3 shadow-glow">
                      <Icon size={18} />
                    </div>
                    <div className="text-sm font-semibold">
                      {a.title[locale]}
                    </div>
                  </div>
                  <div className="mt-4 text-sm leading-relaxed text-white/65">
                    {a.text[locale]}
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
