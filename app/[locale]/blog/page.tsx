import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { RouteId } from '@/lib/routes';
import { BASE_URL } from '@/lib/constants';
import { Metadata } from 'next';
import { getBlogArticles, getBlogTopics } from '@/lib/blog';
import { BlogPage } from '@/components/Blog/BlogPage';

type Props = {
  params: { locale: string };
};

export default async function Blog({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });
  const allArticles = await getBlogArticles({ locale: params.locale });
  const topics = await getBlogTopics();

  return (
    <BlogPage
      articles={allArticles ?? []}
      title={t('blog.title')}
      description={t('blog.description')}
      notFoundText={t('blog.info.notFound')}
      readTimeText={t('blog.info.readTime')}
      topicsTitle={t('blog.topics.title')}
      topics={topics ?? []}
    />
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.blog',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.blog}`,
        de: `/de${RouteId.blog}`,
        'x-default': `${RouteId.blog}`,
      },
    },
  };
}
