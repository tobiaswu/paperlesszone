import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import NextTopLoader from 'nextjs-toploader';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.root',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
