import { PageIntroCard } from '@/components/PageIntroCard';
import { RouteId } from '@/lib/route';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.resources',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
  };
}

export default async function Resources({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const tBlog = await getTranslations({
    locale: params.locale,
    namespace: 'blogIntroCard',
  });
  const tNewsletter = await getTranslations({
    locale: params.locale,
    namespace: 'newsletterIntroCard',
  });

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <PageIntroCard
        buttonText={tBlog('button')}
        description={tBlog('description')}
        thumbnailAltText={tBlog('thumbnailAlt')}
        thumbnailSrc="/assets/backgrounds/blob-md.svg"
        title={tBlog('title')}
        url={RouteId.blog}
      />
      <PageIntroCard
        buttonText={tNewsletter('button')}
        description={tNewsletter('description')}
        thumbnailAltText={tNewsletter('thumbnailAlt')}
        thumbnailSrc="/assets/backgrounds/blob-soft.svg"
        title={tNewsletter('title')}
        url="https://digitizerspace.beehiiv.com/subscribe"
      />
    </div>
  );
}
