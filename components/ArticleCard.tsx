import { STRAPI_URL } from '@/lib/constants';
import { RouteId } from '@/lib/route';
import { getFormattedDate } from '@/utils/date';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export interface ArticleCardProps {
  className?: string;
  preview?: boolean;
  thumbnailUrl?: string;
  thumbnailAltText?: string;
  slug: string;
  category?: string;
  title: string;
  description?: string;
  publishedAt: string;
  publishedAtText: string;
  readTime?: number;
  readTimeText: string;
}

export const ArticleCard = ({
  className,
  preview,
  thumbnailUrl,
  thumbnailAltText,
  slug,
  category,
  title,
  description,
  publishedAt,
  publishedAtText,
  readTime,
  readTimeText,
}: ArticleCardProps) => {
  const locale = useLocale();
  const defaultClassName =
    'card bg-neutral shadow-md rounded-lg border border-gunmetal-600';
  const mergedClassName = className + ' ' + defaultClassName;
  const href = RouteId.blog + '/' + slug;

  return (
    <div className={mergedClassName}>
      <figure className="min-w-fit">
        <Link className="w-full" href={href}>
          {thumbnailUrl && thumbnailAltText && (
            <Image
              className="object-cover w-full h-full"
              src={STRAPI_URL + thumbnailUrl}
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
          {/* {tblog.category[category as keyof typeof tblog.category] ??
            ''} */}
        </div>
        <Link className="w-fit" href={href}>
          <h2 className="card-title text-2xl mb-2">{title}</h2>
        </Link>
        {preview && <p>{description}</p>}
        <div className="card-actions">
          <p className="text-base self-end">
            {publishedAtText + getFormattedDate(publishedAt, locale)}
          </p>
          <Link href={href}>
            <button className="btn btn-primary btn-outline btn-sm mt-2">
              {readTime ?? 0}
              {readTimeText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
