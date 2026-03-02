import './globals.css'
import { cookies, headers } from 'next/headers'
import Script from 'next/script'
import localFont from 'next/font/local'
import { SITE } from '@/lib/site'
import Background from '@/components/layout/Background'

const montserrat = localFont({
  src: [
    {
      path: '../../public/Fonts/Montserrat,Noto_Sans,Roboto,Space_Grotesk/Montserrat/Montserrat-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/Fonts/Montserrat,Noto_Sans,Roboto,Space_Grotesk/Montserrat/Montserrat-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = localFont({
  src: [
    {
      path: '../../public/Fonts/Montserrat,Noto_Sans,Roboto,Space_Grotesk/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-display',
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
        className={`${montserrat.variable} ${spaceGrotesk.variable} h-full font-sans text-white antialiased`}
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
