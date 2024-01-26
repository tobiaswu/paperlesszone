import { Locale } from '@/lib/i18n';
import { RouteId } from '@/lib/route';
import { Dictionary } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export interface ArticleCardProps {
  className?: string;
  dict: Dictionary;
  preview?: boolean;
  thumbnailUrl?: string;
  thumbnailAltText?: string;
  slug: string;
  category: string;
  title: string;
  description?: string;
  publishedAt: string;
  readTime?: number;
  lang: Locale;
}

export const ArticleCard = ({
  className,
  dict,
  preview,
  thumbnailUrl,
  thumbnailAltText,
  slug,
  category,
  title,
  description,
  publishedAt,
  readTime,
  lang,
}: ArticleCardProps) => {
  const defaultClassName =
    'card bg-neutral shadow-md rounded-lg border border-gunmetal-600';
  const mergedClassName = className + ' ' + defaultClassName;
  const url = process.env.STRAPI_URL;
  const href = '/' + lang + RouteId.blog + '/' + slug;
  const date = new Date(publishedAt).toLocaleDateString();

  return (
    <div className={mergedClassName}>
      <figure className="min-w-fit">
        <Link className="w-full" href={href}>
          {thumbnailUrl && thumbnailAltText && (
            <Image
              className="object-cover w-full h-full"
              src={url + thumbnailUrl}
              alt={thumbnailAltText}
              width={300}
              height={0}
              loading="lazy"
            />
          )}
        </Link>
      </figure>
      <div className="card-body">
        <div className="badge badge-secondary badge-lg rounded-lg mb-2">
          {category}
        </div>
        <Link className="w-fit" href={href}>
          <h2 className="card-title text-2xl mb-2">{title}</h2>
        </Link>
        {preview && <p>{description}</p>}
        <div className="card-actions">
          <p className="text-base self-end">
            {dict.blog.info.published + date}
          </p>
          <Link href={href}>
            <button className="btn btn-primary btn-outline btn-sm mt-2">
              {readTime ?? 0}
              {dict.blog.info.readTime}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
