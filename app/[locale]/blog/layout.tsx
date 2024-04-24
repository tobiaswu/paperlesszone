import { BlogNavbar } from '@/components/BlogNavbar';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/route';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function BlogLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div>
      <BlogNavbar
        categoryTexts={{
          all: t('blog.category.all'),
          guides: t('blog.category.guides'),
          tools: t('blog.category.tools'),
          trends: t('blog.category.trends'),
          workflows: t('blog.category.workflows'),
        }}
      />
      {children}
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.blog',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.blog}`,
        de: `/de${RouteId.blog}`,
        'x-default': `${RouteId.blog}`,
      },
    },
  };
}
