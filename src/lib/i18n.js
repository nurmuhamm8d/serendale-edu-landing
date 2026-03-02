import { MESSAGES } from '@/data/messages'
import { SITE } from '@/lib/site'

function getByPath(obj, path) {
  const parts = path.split('.')
  let cur = obj
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p]
    else return undefined
  }
  return cur
}

export function getMessages(locale) {
  if (MESSAGES[locale]) return MESSAGES[locale]
  return MESSAGES[SITE.defaultLocale]
}

export function t(locale, key) {
  const dict = getMessages(locale)
  const val = getByPath(dict, key)
  return typeof val === 'string' ? val : key
}
