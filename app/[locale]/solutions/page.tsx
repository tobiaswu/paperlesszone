import { PageIntroCard } from '@/components/PageIntroCard';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function Solutions({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const tPaperless = await getTranslations({
    locale: params.locale,
    namespace: 'paperlessIntroCard',
  });

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <PageIntroCard
        buttonText={tPaperless('button')}
        description={tPaperless('description')}
        thumbnailAltText={tPaperless('thumbnailAlt')}
        thumbnailSrc="/assets/images/the-paperless-office.webp"
        title={tPaperless('title')}
        url={RouteId.paperless}
      />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.solutions',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    openGraph: {
      images: [
        {
          url: `${BASE_URL}/assets/images/the-paperless-office.webp`,
        },
      ],
    },
    alternates: {
      languages: {
        en: `${RouteId.solutions}`,
        de: `/de${RouteId.solutions}`,
        'x-default': `${RouteId.solutions}`,
      },
    },
  };
}
