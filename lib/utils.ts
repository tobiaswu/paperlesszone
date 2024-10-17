import { Article, Topic } from '@/lib/types';

export const sortAndLimitArticles = (
  articles: Article[],
  initialTopics?: Topic[],
  initialArticleId?: number
) => {
  // Sort articles based on the number of common topics
  const sortedArticles = articles.sort((a, b) => {
    const aCommonTopics =
      a.attributes.topics?.data.filter((topic) =>
        initialTopics?.includes(topic)
      ).length ?? 0;
    const bCommonTopics =
      b.attributes.topics?.data.filter((topic) =>
        initialTopics?.includes(topic)
      ).length ?? 0;
    return bCommonTopics - aCommonTopics; // Descending order
  });

  // Filter initial article id and limit the number of articles to 5
  return sortedArticles
    .filter((article) => article.id !== initialArticleId)
    .slice(0, 5);
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
