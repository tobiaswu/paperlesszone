import { getLocale, getTranslations } from 'next-intl/server';
import { ArticleCard } from '../Article/ArticleCard';
import { NotFound } from '../NotFound';
import { getBlogArticles } from '@/lib/blog';

export const BlogPreview = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  const allArticles = await getBlogArticles({ locale });

  if (!allArticles) {
    return (
      <NotFound
        text={t('blog.info.loadingError')}
        buttonText={t('button.backToBlog')}
      />
    );
  }

  return (
    <div className="grid grid-cols-6 gap-10">
      {allArticles?.map((article, index) => {
        return (
          <>
            {index === 0 ? (
              <ArticleCard
                key={article.id}
                className="col-span-6 lg:card-side min-h-[324px]"
                preview
                description={article.attributes.description}
                slug={article.attributes.slug}
                title={article.attributes.title}
                readTime={article.attributes.reading_time}
                readTimeText={t('blog.info.readTime')}
                thumbnailUrl={article.attributes.thumbnail?.data.attributes.url}
                thumbnailAltText={
                  article.attributes.thumbnail?.data.attributes.alternativeText
                }
              />
            ) : index < 4 ? (
              <ArticleCard
                key={article.id}
                className="col-span-6 sm:col-span-3 lg:col-span-2"
                preview
                description={article.attributes.description}
                slug={article.attributes.slug}
                title={article.attributes.title}
                readTime={article.attributes.reading_time}
                readTimeText={t('blog.info.readTime')}
                thumbnailUrl={article.attributes.thumbnail?.data.attributes.url}
                thumbnailAltText={
                  article.attributes.thumbnail?.data.attributes.alternativeText
                }
              />
            ) : null}
          </>
        );
      })}
    </div>
  );
};
