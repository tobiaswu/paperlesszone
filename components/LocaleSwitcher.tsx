'use client';

import { LOCALES } from '@/lib/constants';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [activeLocale, setActiveLocale] = useState<string>(locale);

  const isArticle = pathname.includes('/blog/');

  const redirectedPathName = (nextLocale: string) => {
    let newPathname = pathname;
    if (locale !== 'en') {
      newPathname = newPathname.replace(`/${locale}`, `/${nextLocale}`);
    } else {
      newPathname = `/${nextLocale + newPathname}`;
    }
    router.push(newPathname);
    router.refresh();
  };

  const handleLocaleSwitch = (nextLocale: string) => {
    setActiveLocale(nextLocale);
    redirectedPathName(nextLocale);
  };

  return (
    <div
      role="tablist"
      className="tabs tabs-boxed tabs-sm border border-gunmetal-600 bg-neutral w-fit"
    >
      {LOCALES.map((locale) => {
        const className = activeLocale === locale ? 'tab tab-active' : 'tab';

        if (isArticle) {
          return (
            <button
              disabled={!activeLocale.includes(locale)}
              key={locale}
              className={className}
              role="tab"
            >
              {locale}
            </button>
          );
        }

        return (
          <a
            key={locale}
            className={className}
            role="tab"
            onClick={() => handleLocaleSwitch(locale)}
          >
            {locale}
          </a>
        );
      })}
    </div>
  );
};
