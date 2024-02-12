import { RouteId } from '@/lib/route';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export const BlogNavbar = async () => {
  const t = await getTranslations();

  const CATEGORIES = [
    {
      id: 'all',
      t: t('blog.category.all'),
    },
    {
      id: 'guides',
      t: t('blog.category.guides'),
    },
    {
      id: 'trends',
      t: t('blog.category.trends'),
    },
    {
      id: 'workflows',
      t: t('blog.category.workflows'),
    },
  ];

  // TODO: add selection menu on mobile
  const className = 'tab w-32 overflow-hidden text-ellipsis md:w-auto'; // TODO: conditional set category's tab-active when URL param match

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
                key={cat.id}
                href={`${RouteId.blog}?category=${cat.id}`}
                role="tab"
                className={
                  cat.id === 'all' ? className + ' tab-active' : className
                }
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
