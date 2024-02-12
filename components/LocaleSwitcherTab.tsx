"use client"

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export interface LocaleSwitcherTabProps {
    children: ReactNode;
    defaultValue: string;
}

export const LocaleSwitcherTab = ({children, defaultValue}: LocaleSwitcherTabProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<number>();

  const onTabChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    router.replace(pathname, {locale: nextLocale});
  }

return (
    <div
    role="tablist"
    className="tabs tabs-boxed border border-gunmetal-600 bg-neutral w-fit"
  >
    {children}
    {locales.map((locale) => {
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