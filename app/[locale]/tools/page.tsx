import React from 'react';
import type { Metadata } from 'next';
import { PageIntroCard } from '@/components/PageIntroCard';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function Resources({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const tTools = await getTranslations({
    locale: params.locale,
    namespace: 'toolsIntroCard',
  });

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <PageIntroCard
        buttonText={tTools('button')}
        description={tTools('description')}
        thumbnailAltText={tTools('thumbnailAlt')}
        thumbnailSrc="/assets/images/paperless-ngx-dashboard.webp"
        title={tTools('title')}
        url={`${RouteId.blog}/free-online-demo-paperless-ngx`}
      />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.tools',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.tools}`,
        de: `/de${RouteId.tools}`,
        'x-default': `${RouteId.tools}`,
      },
    },
  };
}
