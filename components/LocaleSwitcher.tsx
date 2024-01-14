'use client';

import { i18n, type Locale } from '@/common/i18n/i18n-config';
import { useLocale } from '@/utils/hooks';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const LocaleSwitcher = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [storedLocale, setStoredLocale] = useLocale();
  const [activeTab, setActiveTab] = useState<Locale>();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleClick = (locale: Locale) => {
    setActiveTab(locale);
    setStoredLocale(locale);
  };

  useEffect(() => {
    if (!pathName) return;
    const segments = pathName.split('/');
    setActiveTab(segments[1] as Locale);

    if (storedLocale && segments[1] !== storedLocale) {
      setActiveTab(storedLocale);
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
        const className = activeTab?.includes(locale)
          ? 'tab tab-active'
          : 'tab';

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
