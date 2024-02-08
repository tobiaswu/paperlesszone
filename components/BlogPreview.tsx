import { Article, Dictionary } from '@/lib/types';
import { ARTICLES_API } from '@/app/[lang]/blog/[slug]/page';
import { Locale } from '@/lib/i18n';
import { BlogPreviewTabs } from './BlogPreviewTabs';

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

  if (!articles) {
    return <p>Articles could not be loaded.</p>;
  }

  return <BlogPreviewTabs articles={articles} dict={dict} lang={lang} />;
};
