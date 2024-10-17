import { Metadata } from 'next';
import { getBlogArticles, getBlogTopics } from '@/lib/blog';
import { BlogPage, mapTopicName } from '@/components/Blog/BlogPage';
import { getTranslations } from 'next-intl/server';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';

type Props = {
  params: { slug: string; locale: string };
};

export default async function TopicBlogPage({ params }: Props) {
  const t = await getTranslations({ locale: params.locale });
  const allArticles = await getBlogArticles({ locale: params.locale });
  const topicArticles = allArticles?.filter((post) =>
    post.attributes.topics?.data
      .map((topic) => topic.attributes.topic)
      .includes(params.slug)
  );

  const topic = mapTopicName(params.slug);
  const topics = await getBlogTopics();

  return (
    <BlogPage
      articles={topicArticles ?? []}
      title={t('blog.topicPageTitle', { topic })}
      description={t('blog.description')}
      notFoundText={t('blog.topicPageNotFound', { topic })}
      readTimeText={t('blog.info.readTime')}
      topicsTitle={t('blog.topics.title')}
      topics={topics ?? []}
    />
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.blogTopic',
  });
  const slug = params.slug;
  const topic = mapTopicName(slug);

  return {
    title: t('title', { topic }),
    description: t('description', { topic }),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.blogTopic}/${slug}`,
        de: `/de${RouteId.blogTopic}/${slug}`,
        'x-default': `${RouteId.blogTopic}/${slug}`,
      },
    },
  };
}
