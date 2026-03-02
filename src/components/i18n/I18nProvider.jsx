'use client'

import { createContext, useContext, useMemo } from 'react'

const I18nContext = createContext({
  locale: 'ru',
  t: (key) => key
})

function getByPath(obj, path) {
  const parts = path.split('.')
  let cur = obj
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p]
    else return undefined
  }
  return cur
}

export default function I18nProvider({ locale, messages, children }) {
  const value = useMemo(() => {
    const t = (key) => {
      const val = getByPath(messages, key)
      return typeof val === 'string' ? val : key
    }
    return { locale, t }
  }, [locale, messages])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useT() {
  return useContext(I18nContext).t
}

export function useLocale() {
  return useContext(I18nContext).locale
}
