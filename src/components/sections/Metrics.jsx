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
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 rounded-[34px] border border-white/10 bg-white/5 p-4 sm:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.key}
          className="rounded-3xl border border-white/10 bg-black/25 px-4 py-4 text-center"
        >
          <div className="text-lg font-semibold tracking-[-0.02em]">
            {it.value}
          </div>
          <div className="mt-1 text-xs text-white/60">{t(it.key)}</div>
        </div>
      ))}
    </div>
  )
}
