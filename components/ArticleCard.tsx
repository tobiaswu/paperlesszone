import { STRAPI_URL } from '@/lib/constants';
import { RouteId } from '@/lib/route';
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
  readTime,
  readTimeText,
}: ArticleCardProps) => {
  const defaultClassName =
    'card bg-neutral shadow-md rounded-lg border border-gunmetal-600';
  const mergedClassName = className + ' ' + defaultClassName;
  const href = RouteId.blog + '/' + slug;

  return (
    <div className={mergedClassName}>
      <figure className="w-full">
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
      <div className="card-body overflow-y-scroll">
        <div className="badge badge-secondary badge-lg rounded-lg mb-2">
          {category}
        </div>
        <Link className="w-fit" href={href}>
          <h2 className="card-title text-2xl mb-2">{title}</h2>
        </Link>
        {preview && <p>{description}</p>}
        <div className="card-actions">
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
