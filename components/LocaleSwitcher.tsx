'use client';

import { i18n, type Locale } from '@/i18n-config';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const LocaleSwitcher = () => {
  const pathName = usePathname();
  const router = useRouter();

  const storedLocale = localStorage.getItem('locale');

  const [activeTab, setActiveTab] = useState<Locale | null>(
    storedLocale ? (storedLocale as Locale) : null
  );

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleClick = (locale: Locale) => {
    setActiveTab(locale);
    localStorage.setItem('locale', locale);
  };

  useEffect(() => {
    if (!pathName) return;
    const segments = pathName.split('/');

    if (storedLocale && segments[1] !== storedLocale) {
      segments[1] = storedLocale;
      router.replace(segments.join('/'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      role="tablist"
      className="tabs tabs-boxed border border-gunmetal-600 bg-neutral w-fit"
    >
      {i18n.locales.map((locale) => {
        const className = activeTab === locale ? 'tab tab-active' : 'tab';

        return (
          <Link
            key={locale}
            className={className}
            role="tab"
            href={redirectedPathName(locale)}
            onClick={() => handleClick(locale)}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
};
