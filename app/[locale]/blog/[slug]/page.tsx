import { ArticleAuthor } from '@/components/Article/ArticleAuthor';
import { ArticleShare } from '@/components/Article/ArticleShare';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { type Article, type Comment } from '@/lib/types';
import { NotFound } from '@/components/NotFound';
import { MotionProgressbar } from '@/components/MotionProgressbar';
import { Metadata } from 'next';
import Image from 'next/image';
import { ArticleTags } from '@/components/Article/ArticleTags';
import { ArticleContent } from '@/components/Article/ArticleContent';
import { TableOfContents } from '@/components/TableOfContents';
import { BASE_URL, STRAPI_URL } from '@/lib/constants';
import {
  getFormatter,
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { RelatedArticles } from '@/components/RelatedArticles/RelatedArticles';
import { sortAndLimitArticles } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import { pick } from 'lodash';
import { CommentSection } from '@/components/CommentSection/CommentSection';
import { getComments } from '@/components/CommentSection/actions';
import { RouteId } from '@/lib/routes';

type Props = {
  params: { slug: string; locale: string };
};

export const ARTICLES_API = `${STRAPI_URL}/api/articles`;

export default async function Article({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });
  const format = await getFormatter();
  const messages = await getMessages();

  const article: Article | undefined = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.locale +
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

  const articles: Article[] = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.locale +
      '&populate[0]=tags&populate[1]=category&populate[2]=thumbnail',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  const initialTags = article?.attributes.tags?.data;
  const sortedAndLimitedArticles = sortAndLimitArticles(
    articles,
    initialTags,
    article?.id
  );

  if (article) {
    const dateTimeUpdated = new Date(article.attributes.updatedAt);
    const formattedUpdatedDate = format.dateTime(dateTimeUpdated, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    const comments: Comment[] = await getComments(article.id);

    return (
      <div>
        <MotionProgressbar />
        <div className="bg-neutral p-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-2">
              <Breadcrumbs />
              <ThemeSwitcher />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold my-4 leading-normal sm:leading-tight">
              {article.attributes.title}
            </h1>
            <p className="max-w-xl leading-relaxed">
              {article.attributes.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 mt-8">
              <p className="text-base">
                {t('blog.info.updated') + formattedUpdatedDate}
              </p>
              <div className="badge badge-primary badge-md rounded-lg">
                {article.attributes.reading_time ?? 0}
                {t('blog.info.readTime')}
              </div>
              <ArticleShare
                btnCopyText={t('button.copy')}
                btnText={t('button.sharePost')}
                clipboardMsg={t('toast.clipboard')}
                emailText={t('shareDialog.email')}
                embedText={t('shareDialog.embed')}
                shareLinkText={t('shareDialog.shareLink')}
                title={t('shareDialog.title')}
              />
            </div>
          </div>
        </div>

        <div className="container flex flex-col lg:flex-row mx-auto gap-12 px-4 pb-4 mt-8">
          <div className="lg:w-1/3 flex flex-col gap-8">
            <ArticleAuthor
              name={article.attributes.author?.data.attributes.name ?? ''}
              avatarUrl={
                article.attributes.author?.data.attributes.avatar?.data
                  .attributes.url ?? '/'
              }
              avatarAltText={
                article.attributes.author?.data.attributes.avatar?.data
                  .attributes.alternativeText ?? ''
              }
              twitterUrl={article.attributes.author?.data.attributes.twitterUrl}
              linkedinUrl={
                article.attributes.author?.data.attributes.linkedinUrl
              }
            />

            {article.attributes.tags && (
              <ArticleTags tags={article.attributes.tags.data} />
            )}
          </div>

          <div className="lg:w-2/3">
            <Image
              className="w-full h-auto rounded-lg"
              src={
                STRAPI_URL + article.attributes.thumbnail.data.attributes.url
              }
              alt={article.attributes.thumbnail.data.attributes.alternativeText}
              width={1024}
              height={0}
              loading="lazy"
            />
          </div>
        </div>

        <div className="container flex flex-col lg:flex-row mx-auto gap-12 px-4 pb-16">
          <div className="pt-12 lg:pb-6 lg:w-1/3">
            <TableOfContents
              sectionTitles={sectionTitles}
              title={t('blog.toc.title')}
            />
          </div>

          <div className="lg:w-2/3 overflow-x-hidden">
            <ArticleContent content={article.attributes.content} />
          </div>
        </div>

        <div className="container mx-auto py-12 sm:py-16 px-4">
          <NextIntlClientProvider
            messages={pick(
              messages,
              'blog.relatedArticles',
              'blog.info',
              'blog.category'
            )}
          >
            <RelatedArticles articles={sortedAndLimitedArticles} />
          </NextIntlClientProvider>
        </div>

        {/* TODO: add Article rating functionality */}
        {/* <div className="flex gap-8 items-center justify-between mx-auto max-w-4xl px-4"> */}
        {/* <ArticleRating /> */}
        {/* </div> */}

        <div className="container mx-auto py-12 sm:py-16 px-4">
          <CommentSection articleId={article.id} data={comments} />
        </div>

        <ScrollToTopButton />
      </div>
    );
  } else {
    return <NotFound text={t('blog.info.notFound')} />;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article: Article | undefined = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.locale +
      '&filters[slug][$eq]=' +
      params.slug +
      '&populate[0]=thumbnail&populate[1]=tags&populate[2]=localizations',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data[0])
    .catch((error) => console.log(error));

  const slug = article?.attributes.slug;
  const slugEn = article?.attributes.localizations?.data.find(
    (item) => item.attributes.locale === 'en'
  )?.attributes.slug;
  const slugDe = article?.attributes.localizations?.data.find(
    (item) => item.attributes.locale === 'de'
  )?.attributes.slug;

  const alternates = article?.attributes.localizations?.data.length;

  return {
    title: article?.attributes.title,
    description: article?.attributes.description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      images: STRAPI_URL + article?.attributes.thumbnail?.data.attributes.url,
    },
    robots: { index: true, follow: true },
    alternates: alternates
      ? {
          languages: {
            en:
              params.locale === 'en'
                ? `${RouteId.blog}/${slug}`
                : `${RouteId.blog}/${slugEn}`,
            de:
              params.locale === 'de'
                ? `/de${RouteId.blog}/${slug}`
                : `/de${RouteId.blog}/${slugDe}`,
            'x-default':
              params.locale === 'en'
                ? `${RouteId.blog}/${slug}`
                : `${RouteId.blog}/${slugEn}`,
          },
        }
      : undefined,
  };
}
