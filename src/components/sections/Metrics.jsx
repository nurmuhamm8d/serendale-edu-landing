'use client'

import { useEffect, useState } from 'react'
import { useT, useLocale } from '@/components/i18n/I18nProvider'

function formatNumber(n) {
  try {
    return new Intl.NumberFormat(undefined).format(n)
  } catch {
    return String(n)
  }
}

export default function Metrics() {
  const t = useT()
  const locale = useLocale()
  const [data, setData] = useState(null)

  useEffect(() => {
    let active = true
    fetch('/api/metrics')
      .then((r) => r.json())
      .then((json) => {
        if (active) setData(json)
      })
      .catch(() => {
        if (active) setData(null)
      })
    return () => {
      active = false
    }
  }, [])

  const avgTimeValue =
    data && data.avgTime
      ? typeof data.avgTime === 'string'
        ? data.avgTime
        : data.avgTime[locale] || data.avgTime.ru || data.avgTime.en
      : '—'

  const items = [
    {
      key: 'metrics.learners',
      value: data ? formatNumber(data.learners) : '—',
    },
    { key: 'metrics.courses', value: data ? formatNumber(data.courses) : '—' },
    {
      key: 'metrics.satisfaction',
      value: data ? String(data.satisfaction) : '—',
    },
    { key: 'metrics.avgTime', value: avgTimeValue },
  ]

  return (
    <div className="mx-auto w-full max-w-[1071px] rounded-[44px] border border-white/10 bg-white/5 p-4 shadow-glow2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.key}
            className="rounded-[32px] border border-white/10 bg-black/25 px-6 py-5 text-center"
          >
            <div className="text-[22px] font-semibold leading-none tracking-[-0.02em]">
              {it.value}
            </div>
            <div className="mt-2 text-[12px] text-white/60">{t(it.key)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
