import { Article } from '@/lib/types';
import { ARTICLES_API } from '@/app/[locale]/blog/[slug]/page';
import { BlogPreviewTabs } from './BlogPreviewTabs';
import { getFormatter, getLocale, getTranslations } from 'next-intl/server';
import { ArticleCard } from './ArticleCard';
import { Category } from '@/lib/enums';

export const BlogPreview = async () => {
  const t = await getTranslations();
  const locale = await getLocale();
  const format = await getFormatter();

  const articles: Article[] | undefined = await fetch(
    ARTICLES_API + '?locale=' + locale + '&populate=*&sort=publishedAt:desc',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  const renderArticleCards = (category?: Category) => {
    const filteredArticles = category
      ? articles?.filter(
          (article) =>
            article.attributes.category?.data.attributes.item === category
        )
      : articles;

    return filteredArticles?.map((article, index) => {
      const dateTime = new Date(article.attributes.publishedAt);
      const formattedDate = format.dateTime(dateTime, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      if (index === 0) {
        return (
          <ArticleCard
            key={article.id}
            className="col-span-6 lg:card-side min-h-[300px]"
            preview
            category={t(
              `blog.category.${
                article.attributes.category?.data.attributes.item as Category
              }`
            )}
            description={article.attributes.description}
            formattedDate={formattedDate}
            slug={article.attributes.slug}
            title={article.attributes.title}
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
          category={t(
            `blog.category.${
              article.attributes.category?.data.attributes.item as Category
            }`
          )}
          formattedDate={formattedDate}
          slug={article.attributes.slug}
          title={article.attributes.title}
          publishedAtText={t('blog.info.published')}
          readTime={article.attributes.reading_time}
          readTimeText={t('blog.info.readTime')}
          thumbnailUrl={article.attributes.thumbnail?.data.attributes.url}
          thumbnailAltText={
            article.attributes.thumbnail?.data.attributes.alternativeText
          }
        />
      );
    });
  };

  if (!articles) {
    return <p>Articles could not be loaded.</p>;
  }

  return (
    <BlogPreviewTabs
      allArticleCards={renderArticleCards()}
      allTabTitle={t('blog.category.all')}
      guidesArticleCards={renderArticleCards(Category.GUIDES)}
      guidesTabTitle={t('blog.category.guides')}
      toolsArticleCards={renderArticleCards(Category.TOOLS)}
      toolsTabTitle={t('blog.category.tools')}
      workflowsArticleCards={renderArticleCards(Category.WORKFLOWS)}
      workflowsTabTitle={t('blog.category.workflows')}
    />
  );
};
