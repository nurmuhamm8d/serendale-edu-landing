'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/motion/FadeUp'
import { useT } from '@/components/i18n/I18nProvider'

export default function Whitepaper() {
  const t = useT()

  return (
    <section id="whitepaper" className="pb-16 md:pb-24">
      <Container>
        <FadeUp>
          <div className="rounded-[44px] border border-white/10 bg-white/5 px-6 py-10 md:px-12 md:py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  {t('sections.whitepaperTitle')}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                  {t('sections.whitepaperText')}
                </div>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <Button
                  href="#whitepaper"
                  variant="primary"
                  size="cta"
                  className="min-w-[176px]"
                >
                  {t('buttons.details')}
                </Button>
                <Button
                  href="#courses"
                  variant="secondary"
                  size="cta"
                  className="min-w-[167px]"
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
