'use client';

import { locales } from '@/lib/constants';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const [activeLocale, setActiveLocale] = useState<string>(locale);

  const isArticle = pathname.includes('/blog/');

  const redirectedPathName = (nextLocale: string) => {
    let newPathname = pathname;
    if (locale !== 'en') {
      newPathname = newPathname.replace(`/${locale}`, '');
    }
    newPathname = `/${nextLocale + newPathname}`;
    return newPathname;
  };

  return (
    <div
      role="tablist"
      className="tabs tabs-boxed border border-gunmetal-600 bg-neutral w-fit"
    >
      {locales.map((locale) => {
        const className = activeLocale === locale ? 'tab tab-active' : 'tab';

        if (isArticle) {
          if (activeLocale.includes(locale)) {
            return (
              <button key={locale} className={className} role="tab">
                {locale}
              </button>
            );
          }
          return (
            <button disabled key={locale} className={className} role="tab">
              {locale}
            </button>
          );
        }

        return (
          <Link
            key={locale}
            className={className}
            role="tab"
            href={redirectedPathName(locale)}
            onClick={() => setActiveLocale(locale)}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
};
