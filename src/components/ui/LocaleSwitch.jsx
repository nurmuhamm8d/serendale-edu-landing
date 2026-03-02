'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useLocale } from '@/components/i18n/I18nProvider'

export default function LocaleSwitch() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const locale = useLocale()

  const nextLocale = locale === 'ru' ? 'en' : 'ru'

  const rest = pathname.replace(/^\/(ru|en)(?=\/|$)/, '')
  const base = `/${nextLocale}${rest || ''}`

  const qs = searchParams.toString()
  const hash = typeof window !== 'undefined' ? window.location.hash : ''
  const url = qs ? `${base}?${qs}${hash}` : `${base}${hash}`

  const onClick = () => {
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;SameSite=Lax`
    router.push(url)
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
    >
      {nextLocale.toUpperCase()}
    </button>
  )
}
