import { Article } from '@/lib/types';
import { ARTICLES_API } from '@/app/[locale]/blog/[slug]/page';
import { BlogPreviewTabs } from './BlogPreviewTabs';
import { getLocale, getTranslations } from 'next-intl/server';
import { ArticleCard } from './ArticleCard';
import { Category } from '@/lib/enums';
import { NotFound } from './NotFound';

export const BlogPreview = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

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
      if (index === 0) {
        return (
          <ArticleCard
            key={article.id}
            className="col-span-6 lg:card-side min-h-[324px]"
            preview
            category={t(
              `blog.category.${
                article.attributes.category?.data.attributes.item as Category
              }`
            )}
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
        );
      } else if (index < 4) {
        return (
          <ArticleCard
            key={article.id}
            className="col-span-6 sm:col-span-3 lg:col-span-2"
            category={t(
              `blog.category.${
                article.attributes.category?.data.attributes.item as Category
              }`
            )}
            slug={article.attributes.slug}
            title={article.attributes.title}
            readTime={article.attributes.reading_time}
            readTimeText={t('blog.info.readTime')}
            thumbnailUrl={article.attributes.thumbnail?.data.attributes.url}
            thumbnailAltText={
              article.attributes.thumbnail?.data.attributes.alternativeText
            }
          />
        );
      }
      return <></>;
    });
  };

  if (!articles) {
    return <NotFound text={t('blog.info.loadingError')} />;
  }

  return (
    <BlogPreviewTabs
      allArticleCards={renderArticleCards()}
      allTabTitle={t('blog.category.all')}
      guidesArticleCards={renderArticleCards(Category.GUIDES)}
      guidesTabTitle={t('blog.category.guides')}
      toolsArticleCards={renderArticleCards(Category.TOOLS)}
      toolsTabTitle={t('blog.category.tools')}
      trendsArticleCards={renderArticleCards(Category.TRENDS)}
      trendsTabTitle={t('blog.category.trends')}
      workflowsArticleCards={renderArticleCards(Category.WORKFLOWS)}
      workflowsTabTitle={t('blog.category.workflows')}
    />
  );
};
