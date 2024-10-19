import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next/types';

type Props = {
  params: { locale: string };
};

export default async function OpenSource({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'services.openSource',
  });

  return <h1>{t('title')}</h1>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.services.openSource',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.openSource}`,
        de: `/de${RouteId.openSource}`,
        'x-default': `${RouteId.openSource}`,
      },
    },
  };
}
