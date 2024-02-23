import type { NextRequest } from 'next/server'
import { NextResponse, userAgent } from 'next/server'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots).*)']
}

export async function middleware(request: NextRequest) {
  const url = request.nextUrl
  const { device, ua } = userAgent(request)
  const is_chrome = ua.includes('Chrome-Lighthouse') ? 'true' : 'false'
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  url.searchParams.set('is_chrome', is_chrome)
  url.searchParams.set('viewport', viewport)

  if (request.nextUrl.pathname.endsWith('sitemap.xml')) {
    return NextResponse.rewrite(new URL(`/api/sitemap`, request.url))
  }

  return NextResponse.rewrite(url)
}
