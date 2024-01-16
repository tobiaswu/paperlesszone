import { Locale } from '@/lib/i18n';
import { RouteId } from '@/lib/route';
import { Dictionary } from '@/lib/types';
import Link from 'next/link';

export interface Props {
  dict: Dictionary;
  lang: Locale;
}

export const BlogNavbar = ({ dict, lang }: Props) => {
  const CATEGORIES = [
    {
      name: 'all',
      t: dict.blog.category.all,
    },
    {
      name: 'useCases',
      t: dict.blog.category.useCases,
    },
    {
      name: 'guides',
      t: dict.blog.category.guides,
    },
    {
      name: 'trends',
      t: dict.blog.category.trends,
    },
    {
      name: 'productNews',
      t: dict.blog.category.productNews,
    },
  ];

  // TODO: add selection menu on mobile
  const className =
    'tab w-32 overflow-hidden text-ellipsis md:w-auto'; // TODO: conditional set category's tab-active when URL param match

  return (
    <div className="flex gap-4 items-center bg-neutral border-b border-gunmetal-600 w-full h-16 p-8">
      <div className="container mx-auto">
        <div
          role="tablist"
          className="tabs tabs-boxed bg-transparent p-0 overflow-x-scroll gap-2"
        >
          {CATEGORIES.map((cat) => {
            return (
              <Link
                key={cat.name}
                href={`/${lang + RouteId.blog}?category=${cat.name}`}
                role="tab"
                className={className}
              >
                {cat.t}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
