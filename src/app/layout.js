import './globals.css'
import { cookies, headers } from 'next/headers'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SITE } from '@/lib/site'
import Background from '@/components/layout/Background'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export default async function RootLayout({ children }) {
  const h = await headers()
  const headerLocale = h.get('x-locale')

  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value

  const lang = SITE.locales.includes(headerLocale)
    ? headerLocale
    : SITE.locales.includes(cookieLocale)
      ? cookieLocale
      : SITE.defaultLocale

  return (
    <html
      lang={lang}
      className="h-full"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} h-full text-white antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="prehydrate-extension-cleanup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var e=document.getElementById('elang_summary_extension');if(e&&e.parentNode){e.parentNode.removeChild(e);}})();",
          }}
        />
        <Background />
        {children}
      </body>
    </html>
  )
}
