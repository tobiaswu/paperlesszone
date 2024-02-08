'use client';

import { Article, Dictionary } from '@/lib/types';
import { useState } from 'react';
import { ArticleCard } from './ArticleCard';
import { Category } from '@/lib/enums';
import { Locale } from '@/lib/i18n';

export interface BlogPreviewTabsProps {
  articles: Article[];
  dict: Dictionary;
  lang: Locale;
}

export const BlogPreviewTabs = ({
  articles,
  dict,
  lang,
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
    });
  };

  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      <a
        role="tab"
        className={`tab sm:w-28 md:w-32 ${activeTab === 0 ? 'tab-active' : ''}`}
        onClick={() => selectTab(0)}
      >
        {dict.blog.category.all}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">{renderArticleCards()}</div>
      </div>
      <a
        role="tab"
        className={`tab sm:w-28 md:w-32 ${activeTab === 1 ? 'tab-active' : ''}`}
        onClick={() => selectTab(1)}
      >
        {dict.blog.category.guides}
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
        {dict.blog.category.tools}
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
        {dict.blog.category.workflows}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">
          {renderArticleCards(Category.WORKFLOWS)}
        </div>
      </div>
    </div>
  );
};
