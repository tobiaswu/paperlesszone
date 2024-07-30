'use client';

import { Category } from '@/lib/enums';
import { RouteId } from '@/lib/routes';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface BlogNavbarProps {
  categoryTexts: Record<string, string>;
}

export const BlogNavbar = ({ categoryTexts }: BlogNavbarProps) => {
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get('category');

  // TODO: add selection menu on mobile
  const className = 'tab w-32 overflow-hidden text-ellipsis md:w-auto';

  return (
    <div className="flex gap-4 items-center bg-neutral border-b border-gunmetal-600 w-full h-16 p-8">
      <div className="container mx-auto">
        <div
          role="tablist"
          className="tabs tabs-boxed bg-transparent p-0 overflow-x-scroll gap-2"
        >
          {Object.keys(Category).map((key) => {
            const cat = Category[key as keyof typeof Category];
            const catName = categoryTexts[cat];
            const defaultCat = cat === Category.ALL;

            return (
              <Link
                key={key}
                href={
                  defaultCat ? RouteId.blog : `${RouteId.blog}?category=${cat}`
                }
                role="tab"
                className={
                  (!paramCategory && defaultCat) || cat === paramCategory
                    ? className + ' tab-active'
                    : className
                }
              >
                {catName}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
