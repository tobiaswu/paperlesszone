'use client';

import { Article } from '@/lib/types';
import { useState } from 'react';
import { ArticleCard } from './ArticleCard';
import { Category } from '@/lib/enums';

export interface BlogPreviewTabsProps {
  articles: Article[];
  allTabTitle: string;
  toolsTabTitle: string;
  guidesTabTitle: string;
  workflowsTabTitle: string;
  publishedAtTitle: string;
  readTimeText: string;
}

export const BlogPreviewTabs = ({
  articles,
  allTabTitle,
  toolsTabTitle,
  guidesTabTitle,
  workflowsTabTitle,
  publishedAtTitle,
  readTimeText,
}: BlogPreviewTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const selectTab = (index: number) => {
    setActiveTab(index);
  };

  const renderArticleCards = (category?: Category) => {
    const filteredArticles = category
      ? articles.filter(
          (article) =>
            article.attributes.category?.data.attributes.item === category
        )
      : articles;

    return filteredArticles.map((article, index) => {
      if (index === 0) {
        return (
          <ArticleCard
            key={article.id}
            className="col-span-6 lg:card-side min-h-[300px]"
            preview
            category={article.attributes.category?.data.attributes.item}
            description={article.attributes.description}
            slug={article.attributes.slug}
            title={article.attributes.title}
            publishedAt={article.attributes.publishedAt}
            publishedAtText={publishedAtTitle}
            readTime={article.attributes.reading_time}
            readTimeText={readTimeText}
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
          slug={article.attributes.slug}
          title={article.attributes.title}
          publishedAt={article.attributes.publishedAt}
          publishedAtText={publishedAtTitle}
          readTime={article.attributes.reading_time}
          readTimeText={readTimeText}
          thumbnailUrl={article.attributes.thumbnail?.data.attributes.url}
          thumbnailAltText={
            article.attributes.thumbnail?.data.attributes.alternativeText
          }
        />
      );
    });
  };

  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      <a
        role="tab"
        className={`tab sm:w-28 md:w-32 ${activeTab === 0 ? 'tab-active' : ''}`}
        onClick={() => selectTab(0)}
      >
        {allTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">{renderArticleCards()}</div>
      </div>
      <a
        role="tab"
        className={`tab sm:w-28 md:w-32 ${activeTab === 1 ? 'tab-active' : ''}`}
        onClick={() => selectTab(1)}
      >
        {guidesTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">
          {renderArticleCards(Category.GUIDES)}
        </div>
      </div>
      <a
        role="tab"
        className={`tab sm:w-28 md:w-32 ${activeTab === 2 ? 'tab-active' : ''}`}
        onClick={() => selectTab(2)}
      >
        {toolsTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">
          {renderArticleCards(Category.TOOLS)}
        </div>
      </div>
      <a
        role="tab"
        className={`tab sm:w-28 md:w-32 ${activeTab === 3 ? 'tab-active' : ''}`}
        onClick={() => selectTab(3)}
      >
        {workflowsTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">
          {renderArticleCards(Category.WORKFLOWS)}
        </div>
      </div>
    </div>
  );
};
