import { BlogNavbar } from '@/components/BlogNavbar';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/route';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.blog',
  });
  // const canonicalData = {
  //   metadataBase: new URL(BASE_URL),
  //   alternates: {
  //     canonical: RouteId.blog,
  //     languages: {
  //       'en-US': '/en' + RouteId.blog,
  //       'de-DE': '/de' + RouteId.blog,
  //     },
  //   },
  // };

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BlogLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div data-theme>
      <BlogNavbar />
      {children}
    </div>
  );
}
