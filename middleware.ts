import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const REDIRECT_MAP: Record<string, string> = {
  '/de/blog/paperless-backup-automatisierung':
    '/de/blog/paperless-backup-automation',
  '/de/blog/paperless-multi-faktor-authentifizierung':
    '/de/blog/paperless-multi-factor-authentication',
  '/de/blog/paperless-arbeitsablauf-mit-mitarbeitern-berechtigungen':
    '/de/blog/paperless-workflow-with-employees-permissions',
  '/de/blog/ordnerstruktur-fuer-unternehmen':
    '/de/blog/folder-structure-for-companies',
  '/de/blog/notion-vs-asana-fuer-projekt-management':
    '/de/blog/notion-vs-asana-for-project-management',
  '/de/blog/paperless-workflow-steuerberater':
    '/de/blog/paperless-workflow-tax-accountants',
  '/de/blog/kostenlose-online-demo-paperless-ngx':
    '/de/blog/free-online-demo-paperless-ngx',
  '/de/blog/paperless-installation-auf-ubuntu-vps':
    '/de/blog/paperless-installation-on-ubuntu-vps',
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
