import { Metadata } from 'next';
import { getBlogArticles, getBlogTopics } from '@/lib/blog';
import { BlogPage, mapTopicName } from '@/components/Blog/BlogPage';
import { getTranslations } from 'next-intl/server';

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const topic = params.slug;
  return {
    title: `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles | PaperlessZone Blog`,
    description: `Browse articles related to ${topic} on PaperlessZone Blog`,
  };
}
