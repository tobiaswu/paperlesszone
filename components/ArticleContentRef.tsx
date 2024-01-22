'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface ArticleContentRefProps {
  hash: string;
  title: string;
}

export const ArticleContentRef = ({ hash, title }: ArticleContentRefProps) => {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/#${hash}`} className="link link-info">
      {title}
    </Link>
  );
};
