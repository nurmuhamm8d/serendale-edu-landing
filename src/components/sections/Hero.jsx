'use client'

import Image from 'next/image'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import { SECTIONS } from '@/data/sections'

export default function Hero() {
  const t = useT()
  const locale = useLocale()
  const data = SECTIONS.heroArt

  return (
    <section className="relative overflow-hidden">
      <HeroBacklights />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[1071px] pt-[160px] text-center md:pt-[243px]">
          <FadeUp delay={0.06}>
            <h1 className="mt-8 font-medium tracking-[0.02em] md:mt-[36px]">
              <span className="gradient-shimmer block text-[48px] leading-[58px] md:text-[80px] md:leading-[98px]">
                {t('hero.titleTop')}
              </span>
              <span className="-mt-[10px] block text-[48px] leading-[58px] text-white md:-mt-[20px] md:text-[80px] md:leading-[98px]">
                {t('hero.titleBottom')}
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.12}>
            <p className="mx-auto mt-6 max-w-[723px] text-base leading-relaxed text-white/65 md:mt-[84px] md:text-[20px] md:leading-[33px] md:tracking-[0.036em]">
              {t('hero.text')}
            </p>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="mt-8 flex items-center justify-center gap-2 md:mt-[32px]">
              <Button
                href="#courses"
                variant="primary"
                size="cta"
                className="min-w-[176px]"
              >
                {t('hero.ctaPrimary')}
              </Button>
              <Button
                href="#courses"
                variant="secondary"
                size="cta"
                className="min-w-[167px]"
              >
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </FadeUp>
        </div>
      </Container>

      <FadeUp delay={0.22}>
        <div className="-mt-[100px] flex justify-center md:-mt-[87px]">
          <div className="relative h-[420px] w-[120vw] max-w-none md:h-[619px] md:w-[1600px]">
            <Image
              src="/images/hero.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 170vw, 1605px"
              className="pointer-events-none select-none object-contain"
            />
          </div>
        </div>
      </FadeUp>

      <div className="pb-16 pt-10 md:pb-24 md:pt-12">
        <Container>
          <FadeUp delay={0.3}>
            <div className="mt-14">
              <HeroArt locale={locale} data={data} />
            </div>
          </FadeUp>
        </Container>
      </div>
    </section>
  )
}

function HeroBacklights() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-48 left-1/2 h-[780px] w-[780px] -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="bg-sky-500/18 absolute left-[-18vw] top-[10vh] h-[720px] w-[720px] rounded-full blur-3xl" />
      <div className="bg-violet-500/18 absolute right-[-18vw] top-[22vh] h-[760px] w-[760px] rounded-full blur-3xl" />
      <div className="bg-fuchsia-500/14 absolute left-[6vw] top-[68vh] h-[760px] w-[760px] rounded-full blur-3xl" />
      <div className="bg-sky-500/12 absolute right-[6vw] top-[110vh] h-[760px] w-[760px] rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-60 [background:linear-gradient(120deg,rgba(236,72,153,0.12),transparent_35%,rgba(59,130,246,0.10))]" />
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute inset-0 [background:linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.88))]" />
    </div>
  )
}

function HeroArt({ locale, data }) {
  return (
    <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/5 px-6 py-10 shadow-glow2">
      <div className="relative mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <div className="text-sm font-semibold text-white/80">
              {data.label[locale]}
            </div>
            <div className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              {data.title[locale]}
            </div>
            <div className="text-sm leading-relaxed text-white/65">
              {data.text[locale]}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-fuchsia-400/30 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-sky-400/25 blur-2xl" />

            <div className="grid gap-3 rounded-3xl border border-white/10 bg-black/30 p-5">
              {data.features.map((x) => (
                <div
                  key={x.left.en}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="text-sm text-white/75">{x.left[locale]}</div>
                  <div className="text-xs text-white/55">{x.right[locale]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {data.miniCards.map((c) => (
            <MiniCard
              key={c.title.en}
              title={c.title[locale]}
              text={c.text[locale]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function MiniCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/65">{text}</div>
    </div>
  )
}
