import { ArticleCard } from '@/components/ArticleCard';
import { Article } from '@/lib/types';
import { ARTICLES_API } from './[slug]/page';
import { NotFound } from '@/components/NotFound';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function Blog({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });

  const articles: Article[] | undefined = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.locale +
      '&populate=*&sort=publishedAt:desc',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  return articles ? (
    <div className="container mx-auto py-16 px-4 grid grid-cols-6 gap-8">
      {articles.map((article, index) => {
        if (index === 0) {
          return (
            <ArticleCard
              key={article.id}
              className="col-span-6 lg:card-side min-h-[300px]"
              preview
              category={article.attributes.category?.data.attributes.item}
              description={article.attributes.description}
              slug={article.attributes.slug}
              title={article.attributes.title}
              publishedAt={article.attributes.publishedAt}
              publishedAtText={t('blog.info.published')}
              readTime={article.attributes.reading_time}
              readTimeText={t('blog.info.readTime')}
              thumbnailUrl={article.attributes.thumbnail?.data.attributes.url}
              thumbnailAltText={
                article.attributes.thumbnail?.data.attributes.alternativeText
              }
            />
          );
        }
        return (
          <ArticleCard
            key={article.id}
            className="col-span-6 sm:col-span-3 lg:col-span-2"
            category={article.attributes.category?.data.attributes.item}
            slug={article.attributes.slug}
            title={article.attributes.title}
            publishedAt={article.attributes.publishedAt}
            publishedAtText={t('blog.info.published')}
            readTime={article.attributes.reading_time}
            readTimeText={t('blog.info.readTime')}
            thumbnailUrl={article.attributes.thumbnail?.data.attributes.url}
            thumbnailAltText={
              article.attributes.thumbnail?.data.attributes.alternativeText
            }
          />
        );
      })}
    </div>
  ) : (
    <NotFound text={t('blog.info.loadingError')} />
  );
}
