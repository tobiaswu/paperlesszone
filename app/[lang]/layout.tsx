import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { type Locale, i18n } from '@/lib/i18n';
import { getDictionary } from '@/utils/getDictionary';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.lang === 'de') {
    return {
      title: 'DigitizerSpace - KI Automatisierung und Digitalisierung',
      description:
        '▷ Skaliere und digitalisiere dein Unternehmen mit DigitizerSpace. Intelligente Automatisierungen. ✓ Basierend auf realen Anwendungsfällen. ✓ Lerne und setze um.',
    };
  }
  return {
    title: 'DigitizerSpace - Automation & Digitization Solutions',
    description:
      '▷ Scale and digitalize your business with DigitizerSpace. Intelligent automations. ✓ Based on real use cases. ✓ Learn for free. ✓ Start implementing today.',
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <NextTopLoader color="#55d44c" />
        <Navbar dict={dict} lang={lang} />
        {children}
        <Footer dict={dict} lang={lang} />
        <Analytics />
        <GoogleAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
