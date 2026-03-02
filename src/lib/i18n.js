import { MESSAGES } from '@/data/messages'

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
  return MESSAGES[locale] || MESSAGES.en
}

export function t(locale, key) {
  const messages = getMessages(locale)
  const val = getByPath(messages, key)
  return typeof val === 'string' ? val : key
}
