import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const REDIRECT_MAP: Record<string, string> = {
  '/paperless-backup-automatisierung': '/paperless-backup-automation',
  '/paperless-multi-faktor-authentifizierung':
    '/paperless-multi-factor-authentication',
  '/paperless-arbeitsablauf-mit-mitarbeitern-berechtigungen':
    '/paperless-workflow-with-employees-permissions',
  '/ordnerstruktur-fuer-unternehmen': '/folder-structure-for-companies',
  '/notion-vs-asana-fuer-projekt-management':
    '/notion-vs-asana-for-project-management',
  '/paperless-workflow-steuerberater': '/paperless-workflow-tax-accountants',
  '/kostenlose-online-demo-paperless-ngx': '/free-online-demo-paperless-ngx',
  '/paperless-installation-auf-ubuntu-vps':
    '/paperless-installation-on-ubuntu-vps',
};

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  for (const [from, to] of Object.entries(REDIRECT_MAP)) {
    if (pathname === from) {
      const url = request.nextUrl.clone();
      url.pathname = to;
      return NextResponse.redirect(url, 308);
    }
  }

  const handleRouting = createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'de'],

    // Used when no locale matches
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    alternateLinks: false,
  });
  const response = handleRouting(request);
  return response;
}

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(de|en)/:path*'],

  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
