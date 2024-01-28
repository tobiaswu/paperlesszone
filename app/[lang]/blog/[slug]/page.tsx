import { ArticleAuthor } from '@/components/ArticleAuthor';
import { ArticleShareButton } from '@/components/ArticleShareButton';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Locale } from '@/lib/i18n';
import { Article } from '@/lib/types';
import { ArticleContentRenderer } from '@/components/ArticleContentRenderer';
import { NotFound } from '@/components/NotFound';
import { getDictionary } from '@/utils/getDictionary';
import { MotionProgressbar } from '@/components/MotionProgressbar';
import { Metadata } from 'next';

type Props = {
  params: { slug: string; lang: Locale };
};

export const ARTICLES_API = `${process.env.STRAPI_URL}/api/articles`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article: Article | undefined = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.lang +
      '&filters[slug][$eq]=' +
      params.slug +
      '&populate[0]=thumbnail',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data[0])
    .catch((error) => console.log(error));

  const url = process.env.STRAPI_URL ?? '';

  return {
    title: article?.attributes.title,
    description: article?.attributes.description,
    openGraph: {
      images: url + article?.attributes.thumbnail?.data.attributes.url,
    },
  };
}

export async function generateStaticParams() {
  const articlesDe: Article[] | undefined = await fetch(
    ARTICLES_API + '?locale=de',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));
  const articlesEn: Article[] | undefined = await fetch(ARTICLES_API, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));
  const slugsDe = articlesDe?.map((article) => ({
    slug: article.attributes.slug,
  }));
  const slugsEn = articlesEn?.map((article) => ({
    slug: article.attributes.slug,
  }));

  if (slugsDe && slugsEn) {
    return slugsEn.concat(slugsDe);
  } else if (slugsDe) {
    return slugsDe;
  } else if (slugsEn) {
    return slugsEn;
  }
  return [];
}

export default async function Article({ params }: Props) {
  const dict = await getDictionary(params.lang);

  const article: Article | undefined = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.lang +
      '&filters[slug][$eq]=' +
      params.slug +
      '&populate[0]=author&populate[1]=author.avatar&populate[2]=category&populate[3]=tags',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data[0])
    .catch((error) => console.log(error));

  return article ? (
    <div>
      <MotionProgressbar />
      <div className="relative">
        <div className="bg-neutral p-8">
          <div className="container mx-auto">
            <div className="flex items-center justify-between gap-2">
              <Breadcrumbs dict={dict} />
              <ThemeSwitcher />
            </div>
            <h1 className="text-5xl font-bold my-4 leading-tight">
              {article.attributes.title}
            </h1>
            <p className="max-w-xl leading-relaxed">
              {article.attributes.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 items-start sm:items-center">
              <p className="text-base">
                {article.attributes.updatedAt &&
                  dict.blog.info.updated +
                    new Date(
                      article?.attributes.updatedAt
                    ).toLocaleDateString()}
              </p>
              <div className="badge badge-primary badge-md rounded-lg">
                {article.attributes.reading_time ?? 0}
                {dict.blog.info.readTime}
              </div>
              <ArticleShareButton dict={dict} />
            </div>
          </div>
        </div>

        {/* TODO: add hero image */}
        {/* <ArticleHeroImage
          imageLightUrl={article.attributes.heroImageLight.data.attributes.url}
          imageLightAlt={article.attributes.heroImageLight.data.attributes.alternativeText}
          imageDarkUrl={article.attributes.heroImageDark.data.attributes.url}
          imageDarkAlt={article.attributes.heroImageDark.data.attributes.alternativeText}
        /> */}

        <div className="container mx-auto py-8 px-4">
          <ArticleAuthor
            name={article.attributes.author?.data.attributes.name ?? ''}
            avatarUrl={
              article.attributes.author?.data.attributes.avatar?.data.attributes
                .url ?? '/'
            }
            avatarAltText={
              article.attributes.author?.data.attributes.avatar?.data.attributes
                .alternativeText ?? ''
            }
            twitterUrl={article.attributes.author?.data.attributes.twitterUrl}
            linkedinUrl={article.attributes.author?.data.attributes.linkedinUrl}
          />
        </div>
      </div>

      <div className="container flex flex-col md:flex-row mx-auto gap-8 px-4">
        {/* TODO: add table of content */}
        {/* <TableOfContents hashes={} titles={} /> */}

        <div className="max-w-4xl pb-16">
          <ArticleContentRenderer content={article.attributes.content} />
        </div>
      </div>

      {/* TODO: add Article rating functionality */}
      {/* <div className="flex gap-8 items-center justify-between mx-auto max-w-4xl px-4"> */}
      {/* <ArticleRating /> */}
      {/* </div> */}

      {/* TODO: add comment section */}

      {/* TODO: add related Articles */}
      {/* <div className="container mx-auto py-32 px-4">
        <RelatedArticles />
      </div> */}
    </div>
  ) : (
    <NotFound text={dict.blog.info.notFound} />
  );
}
