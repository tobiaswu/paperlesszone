import { MotionWrapper } from '@/components/MotionWrapper';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import { itemAnimationVariant } from '@/lib/transitions';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Metadata } from 'next/types';

type Props = {
  params: { locale: string };
};

export default async function WebScraping({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'services.webScraping',
  });

  return (
    <div className="relative h-full w-full overflow-x-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(85,212,76,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(85,212,76,.15),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto hero min-h-screen relative">
        <div className="hero-content text-center flex flex-col pb-16">
          <MotionWrapper className="max-w-6xl" variants={itemAnimationVariant}>
            <h1 className="mt-20 text-4xl sm:text-6xl font-bold sm:leading-relaxed bg-gradient-to-br from-slate-100 to-slate-300 text-transparent bg-clip-text">
              {t('title')}
            </h1>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="mt-8 mb-2 max-w-2xl mx-auto leading-relaxed text-lg">
              {t('summary')}
            </p>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <Link href={RouteId.contact}>
              <button className="btn btn-secondary btn-lg mb-16">
                {t('cta')}
              </button>
            </Link>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.services.webScraping',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.webScraping}`,
        de: `/de${RouteId.webScraping}`,
        'x-default': `${RouteId.webScraping}`,
      },
    },
  };
}
