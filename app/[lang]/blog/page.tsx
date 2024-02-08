import { ArticleCard } from '@/components/ArticleCard';
import { Locale } from '@/lib/i18n';
import { Article } from '@/lib/types';
import { ARTICLES_API } from './[slug]/page';
import { NotFound } from '@/components/NotFound';
import { getDictionary } from '@/utils/getDictionary';

export default async function Blog({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const articles: Article[] | undefined = await fetch(
    ARTICLES_API + '?locale=' + lang + '&populate=*&sort=publishedAt:desc',
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
              dict={dict}
              preview
              category={article.attributes.category?.data.attributes.item}
              description={article.attributes.description}
              slug={article.attributes.slug}
              title={article.attributes.title}
              publishedAt={article.attributes.publishedAt}
              readTime={article.attributes.reading_time}
              lang={lang}
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
            dict={dict}
            slug={article.attributes.slug}
            title={article.attributes.title}
            publishedAt={article.attributes.publishedAt}
            readTime={article.attributes.reading_time}
            lang={lang}
            thumbnailUrl={article.attributes.thumbnail?.data.attributes.url}
            thumbnailAltText={
              article.attributes.thumbnail?.data.attributes.alternativeText
            }
          />
        );
      })}
    </div>
  ) : (
    <NotFound text={dict.blog.info.loadingError} />
  );
}
