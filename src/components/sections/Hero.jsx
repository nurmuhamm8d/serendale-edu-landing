'use client'

import Image from 'next/image'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/motion/FadeUp'
import Button from '@/components/ui/Button'
import Metrics from '@/components/sections/Metrics'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import { SECTIONS } from '@/data/sections'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <FadeUp>
            <Kicker />
          </FadeUp>

          <FadeUp delay={0.06}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl">
              <span className="gradient-shimmer">{TitleTop()}</span>
              <br />
              <span className="text-white">{TitleBottom()}</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
              {HeroText()}
            </p>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="#courses"
                variant="primary"
                className="min-w-[170px]"
              >
                {PrimaryCta()}
              </Button>
              <Button
                href="#courses"
                variant="secondary"
                className="min-w-[170px]"
              >
                {SecondaryCta()}
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="mx-auto mt-10 max-w-6xl">
              <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/5 shadow-glow2">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl" />
                  <div className="absolute right-[10%] top-[10%] h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
                </div>
                <div className="relative p-4 md:p-6">
                  <Image
                    src="/images/hero.webp"
                    alt="Serendale hero illustration"
                    width={2048}
                    height={688}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1100px"
                    className="h-auto w-full select-none"
                  />
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.26}>
            <div className="mt-10">
              <Metrics />
            </div>
          </FadeUp>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <FadeUp delay={0.08}>
            <HeroArt />
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}

function Kicker() {
  const t = useT()
  return (
    <div className="gradient-shimmer mx-auto inline-flex text-xs font-semibold tracking-[0.34em] md:text-sm">
      {t('hero.kicker')}
    </div>
  )
}

function TitleTop() {
  const t = useT()
  return t('hero.titleTop')
}

function TitleBottom() {
  const t = useT()
  return t('hero.titleBottom')
}

function HeroText() {
  const t = useT()
  return t('hero.text')
}

function PrimaryCta() {
  const t = useT()
  return t('hero.ctaPrimary')
}

function SecondaryCta() {
  const t = useT()
  return t('hero.ctaSecondary')
}

function HeroArt() {
  const locale = useLocale()
  const data = SECTIONS.heroArt

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
