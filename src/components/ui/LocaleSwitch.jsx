'use client'

import { useRouter, usePathname } from 'next/navigation'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/cn'
import { useLocale } from '@/components/i18n/I18nProvider'

function toLocalePath(pathname, nextLocale) {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return `/${nextLocale}`
  if (SITE.locales.includes(parts[0])) parts[0] = nextLocale
  else parts.unshift(nextLocale)
  return `/${parts.join('/')}`
}

export default function LocaleSwitch() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const setLocale = (nextLocale) => {
    if (nextLocale === locale) return
    const y = window.scrollY
    router.replace(toLocalePath(pathname, nextLocale), { scroll: false })
    requestAnimationFrame(() => {
      window.scrollTo({ top: y, left: 0, behavior: 'auto' })
    })
  }

  return (
    <div className="inline-flex rounded-full border border-white/15 bg-white/5 p-1">
      {SITE.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={cn(
            'rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-white/70 transition hover:text-white',
            l === locale && 'bg-white/10 text-white',
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
