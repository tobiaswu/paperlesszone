import { PageIntroCard } from '@/components/PageIntroCard';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function Services({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const tConsulting = await getTranslations({
    locale: params.locale,
    namespace: 'consultingIntroCard',
  });
  const tOpenSource = await getTranslations({
    locale: params.locale,
    namespace: 'openSourceIntroCard',
  });

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <PageIntroCard
        buttonText={tConsulting('button')}
        description={tConsulting('description')}
        thumbnailAltText={tConsulting('thumbnailAlt')}
        thumbnailSrc="/assets/images/consulting.webp"
        title={tConsulting('title')}
        url={RouteId.consulting}
      />
      <PageIntroCard
        buttonText={tOpenSource('button')}
        description={tOpenSource('description')}
        thumbnailAltText={tOpenSource('thumbnailAlt')}
        thumbnailSrc="/assets/images/open-source.webp"
        title={tOpenSource('title')}
        url={RouteId.openSource}
      />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.services',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.services}`,
        de: `/de${RouteId.services}`,
        'x-default': `${RouteId.services}`,
      },
    },
  };
}
