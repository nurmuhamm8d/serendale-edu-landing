import { NextResponse } from 'next/server'
import { SITE } from './src/lib/site'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split('/').filter(Boolean)
  const maybeLocale = segments[0]

  if (!maybeLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${SITE.defaultLocale}`
    const res = NextResponse.redirect(url)
    res.cookies.set('NEXT_LOCALE', SITE.defaultLocale, { path: '/' })
    return res
  }

  if (!SITE.locales.includes(maybeLocale)) {
    const url = request.nextUrl.clone()
    url.pathname = `/${SITE.defaultLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
    const res = NextResponse.redirect(url)
    res.cookies.set('NEXT_LOCALE', SITE.defaultLocale, { path: '/' })
    return res
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', maybeLocale)

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  res.cookies.set('NEXT_LOCALE', maybeLocale, { path: '/' })
  return res
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|.*\\..*).*)'],
}
