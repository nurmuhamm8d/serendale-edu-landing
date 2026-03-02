'use client'

import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import { useT } from '@/components/i18n/I18nProvider'

export default function Whitepaper() {
  const t = useT()

  return (
    <section id="whitepaper" className="relative py-16 md:py-20">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/5 p-8 shadow-glow2 md:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="bg-fuchsia-500/18 absolute left-[-20%] top-[-40%] h-[520px] w-[520px] rounded-full blur-3xl" />
              <div className="bg-sky-500/14 absolute right-[-20%] top-[-40%] h-[520px] w-[520px] rounded-full blur-3xl" />
            </div>

            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  {t('sections.whitepaperTitle')}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                  {t('sections.whitepaperText')}
                </p>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <Button
                  href="#testimonials"
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('buttons.details')}
                </Button>
                <Button
                  href="#advantages"
                  variant="secondary"
                  className="w-full md:w-auto"
                >
                  {t('buttons.explore')}
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
