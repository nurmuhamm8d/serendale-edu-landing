'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from '@/components/layout/Container'
import Logo from '@/components/ui/Logo'
import LocaleSwitch from '@/components/ui/LocaleSwitch'
import { NAV_ITEMS } from '@/data/navigation'
import { useUiStore } from '@/store/uiStore'
import { useT, useLocale } from '@/components/i18n/I18nProvider'
import Image from 'next/image'

// ИСПРАВЛЕНО: ключ Icon → icon (чтобы совпадало с использованием в JSX)
const SOCIAL = [
  {
    id: 'github',
    href: 'https://github.com/serendale-demo',
    icon: '/SVG/mdi_github.svg',
    label: 'GitHub',
  },
  {
    id: 'discord',
    href: 'https://discord.gg/serendale-demo',
    icon: '/SVG/mdi_discord.svg',
    label: 'Discord',
  },
    {
    id: 'reddit',
    href: 'https://reddit.com/r/serendale_demo',
    icon: '/SVG/mdi_reddit.svg',
    label: 'Reddit',
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/serendale_demo',
    icon: '/SVG/mdi_twitter.svg',
    label: 'Twitter',
  },
]

export default function Header() {
  const t = useT()
  const locale = useLocale()
  const mobileNavOpen = useUiStore((s) => s.mobileNavOpen)
  const toggleMobileNav = useUiStore((s) => s.toggleMobileNav)
  const closeMobileNav = useUiStore((s) => s.closeMobileNav)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMobileNav()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeMobileNav])

  const onNavClick = () => closeMobileNav()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LocaleSwitch />
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ id, href, icon, label }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-white/70 transition hover:text-white"
                >
                  <Image src={icon} alt={label} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 md:hidden"
            onClick={toggleMobileNav}
            aria-label="Menu"
          >
            {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden"
            >
              <div className="mb-4 rounded-3xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center justify-between">
                  <LocaleSwitch />
                  <div className="flex items-center gap-2">
                    {SOCIAL.map(({ id, href, icon, label }) => (
                      <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="text-white/70 transition hover:text-white"
                      >
                        <Image src={icon} alt={label} width={20} height={20} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-2">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={onNavClick}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {t(item.key)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}