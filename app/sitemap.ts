import { RouteId } from '@/lib/route';
import { Article } from '@/lib/types';
import { MetadataRoute } from 'next';
import { ARTICLES_API } from './[lang]/blog/[slug]/page';

const BASE_URL = process.env.URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles: Article[] = await fetch(
    ARTICLES_API + '?fields[0]=slug&fields[1]=updatedAt&locale=de&locale=en',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  const posts = articles.map((article) => ({
    url: `${BASE_URL + RouteId.blog}/${article.attributes.slug}`,
    lastModified: article.attributes.updatedAt,
  }));

  const routes = [
    {
      url: BASE_URL + RouteId.root,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: BASE_URL + RouteId.contact,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: BASE_URL + RouteId.about,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: BASE_URL + RouteId.blog,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: BASE_URL + RouteId.paperless,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: BASE_URL + RouteId.privacy,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...routes, ...posts];
}
