import Container from '@/components/layout/Container'
import { NAV_ITEMS } from '@/data/navigation'
import { t } from '@/lib/i18n'

const SOCIAL = [
  { id: 'github', href: 'https://github.com/serendale-demo', label: 'GitHub' },
  {
    id: 'discord',
    href: 'https://discord.gg/serendale-demo',
    label: 'Discord',
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/serendale_demo',
    label: 'Twitter',
  },
  {
    id: 'reddit',
    href: 'https://reddit.com/r/serendale_demo',
    label: 'Reddit',
  },
]

const TAGLINE = {
  ru: 'Готово для Vercel · Next.js · Tailwind · Motion · Zustand',
  en: 'Vercel-ready · Next.js · Tailwind · Motion · Zustand',
}

export default function Footer({ locale }) {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold tracking-wide">Serendale</div>
            <div className="mt-3 text-sm text-white/70">
              {t(locale, 'meta.description')}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">
              {t(locale, 'footer.navTitle')}
            </div>
            <nav className="mt-4 grid gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {t(locale, item.key)}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-sm font-semibold">
              {t(locale, 'footer.contactsTitle')}
            </div>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <div>{t(locale, 'footer.city')}</div>
              <a
                className="hover:text-white"
                href="mailto:hello@serendale.example"
              >
                {t(locale, 'footer.email')}
              </a>
              <a className="hover:text-white" href="tel:+77777777777">
                {t(locale, 'footer.phone')}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Serendale. {t(locale, 'footer.rights')}
          </div>
          <div className="text-white/50">{TAGLINE[locale] || TAGLINE.en}</div>
        </div>
      </Container>
    </footer>
  )
}
