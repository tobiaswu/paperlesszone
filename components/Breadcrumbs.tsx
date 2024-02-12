import { RouteId } from '@/lib/route';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export const Breadcrumbs = async () => {
  const t = await getTranslations();

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href={RouteId.root}>{t('blog.info.home')}</Link>
        </li>
        <li>
          <Link href={RouteId.blog}>Blog</Link>
        </li>
        <li>{t('blog.info.here')}</li>
      </ul>
    </div>
  );
};
