import React from 'react';
import { Article, Topic } from '@/lib/types';
import { ArticleCard } from '@/components/Article/ArticleCard';
import { NotFound } from '@/components/NotFound';
import Link from 'next/link';
import { RouteId } from '@/lib/routes';
import { capitalizeWords } from '@/lib/utils';

export const mapTopicName = (apiTopicName: string): string => {
  const displayName = apiTopicName.replace(/-/g, ' ');
  return capitalizeWords(displayName);
};

interface BlogPageProps {
  articles: Article[];
  title: string;
  description: string;
  notFoundText: string;
  readTimeText: string;
  topicsTitle: string;
  backToBlogText: string;
  topics: Topic[];
}

export const BlogPage = ({
  articles,
  title,
  description,
  notFoundText,
  readTimeText,
  topicsTitle,
  backToBlogText,
  topics,
}: BlogPageProps) => {
  return (
    <div className="container mx-auto pt-8 pb-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold pb-8 sm:pt-8 sm:pb-16">
        {title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        <div className="col-span-2">
          {articles ? (
            <div className="grid grid-cols-2 gap-8">
              {articles.map((article) => {
                return (
                  <ArticleCard
                    key={article.id}
                    className="col-span-2 lg:col-span-1"
                    preview
                    description={article.attributes.description}
                    slug={article.attributes.slug}
                    title={article.attributes.title}
                    readTime={article.attributes.reading_time}
                    readTimeText={readTimeText}
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
            <NotFound text={notFoundText} buttonText={backToBlogText} />
          )}
        </div>
        <div className="col-span-1 flex flex-col md:flex-row">
          <div className="divider md:divider-horizontal" />
          <div>
            <p className="text-lg leading-relaxed">{description}</p>
            <div className="divider divider-vertical" />
            <h2 className="text-2xl font-bold mb-4">{topicsTitle}</h2>
            <div className="flex flex-col gap-4">
              {topics
                .sort((a: Topic, b: Topic) =>
                  a.attributes.topic.localeCompare(b.attributes.topic)
                )
                .map((topic) => {
                  const topicArticles = articles.filter((article) =>
                    article.attributes.topics?.data
                      .map((topic) => topic.attributes.topic)
                      .includes(topic.attributes.topic)
                  );
                  const displayTopicName = mapTopicName(topic.attributes.topic);

                  return (
                    <Link
                      className="w-full"
                      key={topic.id}
                      href={`${RouteId.blogTopic}/${topic.attributes.topic}`}
                    >
                      <button className="btn w-full justify-between h-fit">
                        <div className="badge badge-secondary my-2">#</div>
                        {displayTopicName}
                        <span className="badge badge-outline badge-sm p-2 my-2">
                          {topicArticles.length}
                        </span>
                      </button>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
