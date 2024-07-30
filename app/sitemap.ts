import { RouteId } from '@/lib/routes';
import { Article } from '@/lib/types';
import { MetadataRoute } from 'next';
import { ARTICLES_API } from './[locale]/blog/[slug]/page';
import { BASE_URL } from '@/lib/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articlesEn: Article[] = await fetch(
    ARTICLES_API + '?fields[0]=slug&fields[1]=updatedAt&locale=en',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));
  const articlesDe: Article[] = await fetch(
    ARTICLES_API + '?fields[0]=slug&fields[1]=updatedAt&locale=de',
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

  const postsEn: MetadataRoute.Sitemap = articlesEn.map((article) => ({
    url: `${BASE_URL + RouteId.blog}/${article.attributes.slug}`,
    lastModified: article.attributes.updatedAt,
    changeFrequency: 'monthly',
    priority: 1,
  }));
  const postsDe: MetadataRoute.Sitemap = articlesDe.map((article) => ({
    url: `${BASE_URL}/de${RouteId.blog}/${article.attributes.slug}`,
    lastModified: article.attributes.updatedAt,
    changeFrequency: 'monthly',
    priority: 1,
  }));

  let routes = <MetadataRoute.Sitemap>[];

  for (const path of Object.values(RouteId)) {
    const isRootPath = path === RouteId.root;
    const enUrl = isRootPath ? BASE_URL : `${BASE_URL + path}`;
    const deUrl = isRootPath ? `${BASE_URL}/de` : `${BASE_URL}/de${path}`;

    routes.push(
      {
        url: enUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: deUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }
    );
  }

  return [...routes, ...postsEn, ...postsDe];
}
