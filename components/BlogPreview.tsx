import { Article } from '@/lib/types';
import { ARTICLES_API } from '@/app/[locale]/blog/[slug]/page';
import { BlogPreviewTabs } from './BlogPreviewTabs';
import { getLocale, getTranslations } from 'next-intl/server';

export const BlogPreview = async () => {
  const t = await getTranslations();
  const locale = await getLocale();
  const articles: Article[] | undefined = await fetch(
    ARTICLES_API + '?locale=' + locale + '&populate=*&sort=publishedAt:desc',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  if (!articles) {
    return <p>Articles could not be loaded.</p>;
  }

  return (
    <BlogPreviewTabs
      articles={articles}
      allTabTitle={t('blog.category.all')}
      toolsTabTitle={t('blog.category.tools')}
      guidesTabTitle={t('blog.category.guides')}
      workflowsTabTitle={t('blog.category.workflows')}
      publishedAtTitle={t('blog.info.published')}
      readTimeText={t('blog.info.readTime')}
    />
  );
};
