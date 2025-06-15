import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["ar", "fr", "en"]
const defaultLocale = "ar"

function getLocale(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsSupportedLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameIsSupportedLocale) return

  // Redirect if there is no locale
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export function middleware(request: NextRequest) {
  return getLocale(request)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
