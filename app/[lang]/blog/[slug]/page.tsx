import { ArticleAuthor } from '@/components/ArticleAuthor';
import { ArticleShareButton } from '@/components/ArticleShareButton';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Locale } from '@/lib/i18n';
import { Article } from '@/lib/types';
import { NotFound } from '@/components/NotFound';
import { getDictionary } from '@/utils/getDictionary';
import { MotionProgressbar } from '@/components/MotionProgressbar';
import { Metadata } from 'next';
import { getFormattedDate } from '@/utils/date';
import Image from 'next/image';
import { ArticleTags } from '@/components/ArticleTags';
import { ArticleContent } from '@/components/ArticleContent';
import { TableOfContents } from '@/components/TableOfContents';
import { BASE_URL, STRAPI_URL } from '@/lib/constants';
import { RouteId } from '@/lib/route';

type Props = {
  params: { slug: string; lang: Locale };
};

export const ARTICLES_API = `${STRAPI_URL}/api/articles`;

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

  const baseData = {
    title: article?.attributes.title,
    description: article?.attributes.description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      images: STRAPI_URL + article?.attributes.thumbnail?.data.attributes.url,
    },
  };
  const canonicalUrl = `${RouteId.blog}/${params.slug}`;
  const hreflang = `/${params.lang}` + canonicalUrl;

  if (params.lang === 'de') {
    return {
      ...baseData,
      alternates: {
        canonical: canonicalUrl,
        languages: {
          'de-DE': hreflang,
        },
      },
    };
  }
  return {
    ...baseData,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': hreflang,
      },
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
      '&populate[0]=author&populate[1]=author.avatar&populate[2]=category&populate[3]=tags&populate[4]=thumbnail',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data[0])
    .catch((error) => console.log(error));

  const sectionTitles: string[] = article?.attributes.content
    .filter((item) => item.type === 'heading' && item.level === 2)
    // @ts-ignore
    .map((item) => item.children[0].text) as string[];

  return article ? (
    <div>
      <MotionProgressbar />
      <div className="bg-neutral p-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2">
            <Breadcrumbs dict={dict} />
            <ThemeSwitcher />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold my-4 leading-normal sm:leading-tight">
            {article.attributes.title}
          </h1>
          <p className="max-w-xl leading-relaxed">
            {article.attributes.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 items-start sm:items-center">
            <p className="text-base">
              {article.attributes.updatedAt &&
                dict.blog.info.updated +
                  getFormattedDate(article.attributes.updatedAt, params.lang)}
            </p>
            <div className="badge badge-primary badge-md rounded-lg">
              {article.attributes.reading_time ?? 0}
              {dict.blog.info.readTime}
            </div>
            <ArticleShareButton dict={dict} />
          </div>
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row mx-auto gap-12 px-4 pb-4 mt-8">
        <div className="max-w-md flex flex-col gap-8">
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

          <ArticleTags />
        </div>

        <div className="max-w-2xl xl:max-w-4xl">
          <Image
            src={STRAPI_URL + article.attributes.thumbnail.data.attributes.url}
            alt={article.attributes.thumbnail.data.attributes.alternativeText}
            width={1024}
            height={768}
            loading="lazy"
          />
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row mx-auto gap-12 px-4 pb-16">
        <div className="pt-12 lg:pb-6 lg:w-1/3">
          <TableOfContents sectionTitles={sectionTitles} dict={dict} />
        </div>

        <div className="lg:w-2/3">
          <ArticleContent content={article.attributes.content} />
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
