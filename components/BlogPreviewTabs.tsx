'use client';

import { useState } from 'react';

export interface BlogPreviewTabsProps {
  allArticleCards?: JSX.Element[];
  allTabTitle: string;
  guidesArticleCards?: JSX.Element[];
  guidesTabTitle: string;
  toolsArticleCards?: JSX.Element[];
  toolsTabTitle: string;
  trendsArticleCards?: JSX.Element[];
  trendsTabTitle: string;
  workflowsArticleCards?: JSX.Element[];
  workflowsTabTitle: string;
}

export const BlogPreviewTabs = ({
  allArticleCards,
  allTabTitle,
  guidesArticleCards,
  guidesTabTitle,
  toolsArticleCards,
  toolsTabTitle,
  trendsArticleCards,
  trendsTabTitle,
  workflowsArticleCards,
  workflowsTabTitle,
}: BlogPreviewTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const selectTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      <a
        role="tab"
        className={`tab px-2 sm:w-28 md:w-32 ${
          activeTab === 0 ? 'tab-active' : ''
        }`}
        onClick={() => selectTab(0)}
      >
        {allTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">{allArticleCards}</div>
      </div>
      <a
        role="tab"
        className={`tab px-2 sm:w-28 md:w-32 ${
          activeTab === 1 ? 'tab-active' : ''
        }`}
        onClick={() => selectTab(1)}
      >
        {guidesTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">{guidesArticleCards}</div>
      </div>
      <a
        role="tab"
        className={`tab px-2 sm:w-28 md:w-32 ${
          activeTab === 2 ? 'tab-active' : ''
        }`}
        onClick={() => selectTab(2)}
      >
        {toolsTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">{toolsArticleCards}</div>
      </div>
      <a
        role="tab"
        className={`tab px-2 sm:w-28 md:w-32 ${
          activeTab === 3 ? 'tab-active' : ''
        }`}
        onClick={() => selectTab(3)}
      >
        {trendsTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">{trendsArticleCards}</div>
      </div>
      <a
        role="tab"
        className={`tab px-2 sm:w-28 md:w-32 ${
          activeTab === 4 ? 'tab-active' : ''
        }`}
        onClick={() => selectTab(4)}
      >
        {workflowsTabTitle}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">{workflowsArticleCards}</div>
      </div>
    </div>
  );
};
