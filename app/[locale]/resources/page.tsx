import { PageIntroCard } from '@/components/PageIntroCard';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

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
        thumbnailSrc="/assets/images/blog.webp"
        title={tBlog('title')}
        url={RouteId.blog}
      />
      <PageIntroCard
        buttonText={tNewsletter('button')}
        description={tNewsletter('description')}
        thumbnailAltText={tNewsletter('thumbnailAlt')}
        thumbnailSrc="/assets/images/newsletter.webp"
        title={tNewsletter('title')}
        url="https://paperlesszone.beehiiv.com/subscribe"
      />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.resources',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.resources}`,
        de: `/de${RouteId.resources}`,
        'x-default': `${RouteId.resources}`,
      },
    },
  };
}
