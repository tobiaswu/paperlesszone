import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next/types';

type Props = {
  params: { locale: string };
};

export default async function Agents({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'services.agents',
  });

  return <h1>{t('title')}</h1>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.services.agents',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.agents}`,
        de: `/de${RouteId.agents}`,
        'x-default': `${RouteId.agents}`,
      },
    },
  };
}
