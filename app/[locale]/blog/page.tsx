import { ArticleCard } from '@/components/Article/ArticleCard';
import { Article } from '@/lib/types';
import { ARTICLES_API } from './[slug]/page';
import { NotFound } from '@/components/NotFound';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Category } from '@/lib/enums';

type Props = {
  params: { locale: string };
  searchParams: Record<string, string>;
};

export default async function Blog({ params, searchParams }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });

  const articles: Article[] | undefined = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.locale +
      '&populate=*&sort=publishedAt:desc&',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  const filteredArticles = searchParams.category
    ? articles?.filter(
        (article) =>
          article.attributes.category?.data.attributes.item ===
          searchParams.category
      )
    : searchParams.tag
      ? articles?.filter((article) =>
          article.attributes.tags?.data
            .map((tag) => tag.attributes.item)
            .includes(searchParams.tag)
        )
      : articles;

  return (
    <div className="container mx-auto pt-8 pb-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold pb-8">{t('blog.title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        <div className="col-span-2">
          {filteredArticles ? (
            <div className="grid grid-cols-2 gap-8">
              {filteredArticles.map((article) => {
                return (
                  <ArticleCard
                    key={article.id}
                    className="col-span-2 lg:col-span-1"
                    category={t(
                      `blog.category.${
                        article.attributes.category?.data.attributes
                          .item as Category
                      }`
                    )}
                    preview
                    description={article.attributes.description}
                    slug={article.attributes.slug}
                    title={article.attributes.title}
                    readTime={article.attributes.reading_time}
                    readTimeText={t('blog.info.readTime')}
                    thumbnailUrl={
                      article.attributes.thumbnail?.data.attributes.url
                    }
                    thumbnailAltText={
                      article.attributes.thumbnail?.data.attributes
                        .alternativeText
                    }
                  />
                );
              })}
            </div>
          ) : (
            <NotFound text={t('blog.info.loadingError')} />
          )}
        </div>
        <div className="col-span-1 flex flex-col md:flex-row">
          <div className="divider md:divider-horizontal" />
          <div>
            <p className="max-w-xl">{t('blog.description')}</p>
            <div className="divider divider-vertical" />
            <h2 className="text-2xl font-bold mb-4">
              {t('blog.topics.title')}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
