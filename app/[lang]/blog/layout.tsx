import { BlogNavbar } from '@/components/BlogNavbar';
import { BASE_URL } from '@/lib/constants';
import { Locale } from '@/lib/i18n';
import { RouteId } from '@/lib/route';
import { getDictionary } from '@/utils/getDictionary';
import type { Metadata } from 'next';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const canonicalData = {
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: RouteId.blog,
      languages: {
        'en-US': '/en' + RouteId.blog,
        'de-DE': '/de' + RouteId.blog,
      },
    },
  };
  if (params.lang === 'de') {
    return {
      title: 'DigitizerSpace Blog - Automatisierung, AI Trends & Mehr!',
      description:
        '▷ Entdecke den DigitierSpace Blog. Lerne wie du dein Unternehmen skalierst & digitalisierst. ✓ Reale Anwendungsfälle. ✓ Lerne kostenlos. ✓ Setze noch heute um.',
      ...canonicalData,
    };
  }
  return {
    title: 'DigitizerSpace Blog - Automation Use Cases, AI Trends & More',
    description:
      '▷ Discover the DigitizerSpace Blog. Learn how you can scale & digitalize your business. ✓ Based on real use cases. ✓ Learn for free. ✓ Start automating today.',
    ...canonicalData,
  };
}

export default async function BlogLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div data-theme>
      <BlogNavbar dict={dict} lang={lang} />
      {children}
    </div>
  );
}
