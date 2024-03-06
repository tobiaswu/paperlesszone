import { Article, Tag } from '@/lib/types';

export const sortAndLimitArticles = (
  articles: Article[],
  initialTags?: Tag[],
  initialArticleId?: number
) => {
  // Sort articles based on the number of common tags
  const sortedArticles = articles.sort((a, b) => {
    const aCommonTags =
      a.attributes.tags?.data.filter((tag) => initialTags?.includes(tag))
        .length ?? 0;
    const bCommonTags =
      b.attributes.tags?.data.filter((tag) => initialTags?.includes(tag))
        .length ?? 0;
    return bCommonTags - aCommonTags; // Descending order
  });

  // Filter initial article id and limit the number of articles to 5
  return sortedArticles
    .filter((article) => article.id !== initialArticleId)
    .slice(0, 5);
};
