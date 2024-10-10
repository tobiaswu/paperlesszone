import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer';
import { TopHeaderBar } from '@/components/TopHeaderBar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import NextTopLoader from 'nextjs-toploader';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { BASE_URL, LOCALES } from '@/lib/constants';
import { RouteId } from '@/lib/routes';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <TopHeaderBar />
        <NextTopLoader color="#55d44c" />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <GoogleAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.root',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    applicationName: 'PaperlessZone',
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.root}`,
        de: `/de${RouteId.root}`,
        'x-default': `${RouteId.root}`,
      },
    },
  };
}
