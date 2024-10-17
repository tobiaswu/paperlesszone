import { STRAPI_URL } from './constants';
import { Article, Topic } from './types';

export const ARTICLES_API = `${STRAPI_URL}/api/articles`;
export const TOPICS_API = `${STRAPI_URL}/api/topics`;
export const getBlogArticles = async (params: {
  locale: string;
}): Promise<Article[] | undefined> => {
  const res = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.locale +
      '&populate=*&sort=publishedAt:desc',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data.data;
};

export const getBlogArticle = async (params: {
  slug: string;
  locale: string;
}): Promise<Article | undefined> => {
  const res = await fetch(
    ARTICLES_API +
      '?locale=' +
      params.locale +
      '&filters[slug][$eq]=' +
      params.slug +
      '&populate[0]=author&populate[1]=author.avatar&populate[2]=topics&populate[3]=thumbnail&populate[4]=localizations',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data.data[0];
};

export const getBlogTopics = async (): Promise<Topic[] | undefined> => {
  const res = await fetch(TOPICS_API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  });

  const data = await res.json();
  return data.data;
};
