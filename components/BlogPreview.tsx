import { Article, Dictionary } from '@/lib/types';
import { ArticleCard } from './ArticleCard';
import { ARTICLES_API } from '@/app/[lang]/blog/[slug]/page';
import { Locale } from '@/lib/i18n';

interface BlogPreviewProps {
  dict: Dictionary;
  lang: Locale;
}

export const BlogPreview = async ({ dict, lang }: BlogPreviewProps) => {
  const articles: Article[] | undefined = await fetch(
    ARTICLES_API + '?locale=' + lang + '&populate=*',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      <a role="tab" className="tab tab-active sm:w-28 md:w-32">
        {dict.blog.category.all}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">
          {articles?.map((article, index) => {
            if (index === 0) {
              return (
                <ArticleCard
                  key={article.id}
                  className="col-span-6 lg:card-side"
                  dict={dict}
                  preview
                  category={article.attributes.category?.data.attributes.item}
                  description={article.attributes.description}
                  slug={article.attributes.slug}
                  title={article.attributes.title}
                  publishedAt={article.attributes.publishedAt}
                  readTime={article.attributes.reading_time}
                  lang={lang}
                  thumbnailUrl={
                    article.attributes.thumbnail?.data.attributes.url
                  }
                  thumbnailAltText={
                    article.attributes.thumbnail?.data.attributes
                      .alternativeText
                  }
                />
              );
            }
            return (
              <ArticleCard
                key={article.id}
                className="col-span-6 sm:col-span-3 lg:col-span-2"
                dict={dict}
                category={article.attributes.category?.data.attributes.item}
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
      </div>
      <a role="tab" className="tab sm:w-28 md:w-32">
        {dict.blog.category.useCases}
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        {dict.blog.category.guides}
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        {dict.blog.category.trends}
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        {dict.blog.category.productNews}
      </a>
      {/* <a role="tab" className="tab sm:w-28 md:w-32">
        Industries
      </a> */}
    </div>
  );
};
