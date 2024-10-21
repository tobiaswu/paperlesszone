import { ArticleAuthor } from '@/components/Article/ArticleAuthor';
import { ArticleShare } from '@/components/Article/ArticleShare';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { type Comment } from '@/lib/types';
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
import { CardPopover } from '@/components/CardPopover';
import { getBlogArticle, getBlogArticles } from '@/lib/blog';

type Props = {
  params: { slug: string; locale: string };
};

export default async function Article({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });
  const format = await getFormatter();
  const messages = await getMessages();

  const allArticles = await getBlogArticles({ locale: params.locale });
  const article = await getBlogArticle({
    slug: params.slug,
    locale: params.locale,
  });

  const sectionTitles: string[] = article?.attributes.content
    .filter((item: any) => item.type === 'heading' && item.level === 2)
    .map((item: any) => item.children[0].text) as string[];

  const initialTopics = article?.attributes.topics?.data;
  const sortedAndLimitedArticles = sortAndLimitArticles(
    allArticles ?? [],
    initialTopics,
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
              author={t('blog.info.author')}
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
              authorDescription={
                article.attributes.author?.data.attributes.description
              }
            />

            {article.attributes.topics && (
              <ArticleTags
                tags={article.attributes.topics.data}
                title={t('blog.topics.title')}
              />
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

            <div className="flex flex-wrap gap-12 items-center mt-12">
              <ArticleShare
                btnCopyText={t('button.copy')}
                btnText={t('button.sharePost')}
                clipboardMsg={t('toast.clipboard')}
                emailText={t('shareDialog.email')}
                embedText={t('shareDialog.embed')}
                shareLinkText={t('shareDialog.shareLink')}
                title={t('shareDialog.title')}
              />
              {article.attributes.topics && (
                <ArticleTags tags={article.attributes.topics.data} />
              )}
            </div>
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
          <CommentSection
            articleId={article.id}
            articleSlug={article.attributes.slug}
            comments={comments}
          />
        </div>

        <ScrollToTopButton />

        <CardPopover />
      </div>
    );
  } else {
    return (
      <NotFound
        text={t('blog.info.notFound')}
        buttonText={t('button.backToBlog')}
      />
    );
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getBlogArticle({
    slug: params.slug,
    locale: params.locale,
  });

  const slug = article?.attributes.slug;
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
            en: `${RouteId.blog}/${slug}`,
            de: `/de${RouteId.blog}/${slug}`,
            'x-default': `${RouteId.blog}/${slug}`,
          },
        }
      : undefined,
  };
}
