import { RouteId } from '@/lib/routes';
import { Article } from '@/lib/types';
import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/constants';
import { getBlogArticles } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articlesEn: Article[] | undefined = await getBlogArticles({
    locale: 'en',
  });
  const articlesDe: Article[] | undefined = await getBlogArticles({
    locale: 'de',
  });

  if (!articlesEn || !articlesDe) {
    return [];
  }

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
