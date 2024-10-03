import { CheckedText } from '@/components/CheckedText';
import { MotionWrapper } from '@/components/MotionWrapper';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import {
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/lib/transitions';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

type Props = {
  params: { locale: string };
};

export default async function Consultation({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'solutions.consultation',
  });

  const processItems = [
    {
      title: t('process.firstStep'),
      description: t('process.firstDescription'),
    },
    {
      title: t('process.secondStep'),
      description: t('process.secondDescription'),
    },
    {
      title: t('process.thirdStep'),
      description: t('process.thirdDescription'),
    },
    {
      title: t('process.fourthStep'),
      description: t('process.fourthDescription'),
    },
    {
      title: t('process.fifthStep'),
      description: t('process.fifthDescription'),
    },
    {
      title: t('process.sixthStep'),
      description: t('process.sixthDescription'),
    },
  ];

  return (
    <>
      <div className="relative h-full w-full overflow-x-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(85,212,76,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(85,212,76,.15),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto hero min-h-screen relative">
          <div className="hero-content text-center flex flex-col pb-16">
            <MotionWrapper
              className="max-w-6xl"
              variants={itemAnimationVariant}
            >
              <h1 className="mt-20 text-4xl sm:text-6xl font-bold sm:leading-relaxed bg-gradient-to-br from-slate-100 to-slate-300 text-transparent bg-clip-text">
                {t('title')}
              </h1>
            </MotionWrapper>
            <MotionWrapper variants={itemAnimationVariant}>
              <p className="mt-8 mb-2 max-w-2xl mx-auto leading-relaxed">
                {t('summary')}
              </p>
            </MotionWrapper>
            <MotionWrapper variants={itemAnimationVariant}>
              <Link href="mailto:info@paperlesszone.com">
                <button className="btn btn-secondary btn-lg mb-16 capitalize">
                  {t('button')}
                </button>
              </Link>
            </MotionWrapper>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="max-w-2xl">
                <MotionWrapper index={0} variants={staggerAnimationVariant}>
                  <Image
                    className="h-auto w-96 rounded-lg"
                    src="/assets/images/founder-portrait.webp"
                    alt="Portrait of consultant"
                    width={384}
                    height={0}
                    loading="lazy"
                  />
                </MotionWrapper>
              </div>
              <div className="flex flex-col gap-4 text-left max-w-2xl">
                <MotionWrapper index={1} variants={staggerAnimationVariant}>
                  <h2 className="text-4xl">Tobias Wupperfeld</h2>
                </MotionWrapper>
                <MotionWrapper index={2} variants={staggerAnimationVariant}>
                  <p>{t('description')}</p>
                </MotionWrapper>
                <MotionWrapper index={3} variants={staggerAnimationVariant}>
                  <CheckedText description={t('firstCheckedText')} />
                </MotionWrapper>
                <MotionWrapper index={4} variants={staggerAnimationVariant}>
                  <CheckedText description={t('secondCheckedText')} />
                </MotionWrapper>
                <MotionWrapper index={5} variants={staggerAnimationVariant}>
                  <CheckedText description={t('thirdCheckedText')} />
                </MotionWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sapphire-100 py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-6xl gap-16">
          <div>
            <h2 className="text-4xl pb-8">{t('focusArea.title')}</h2>
            <ul className="list-disc pl-4 space-y-2 text-lg">
              <li>{t('focusArea.firstText')}</li>
              <li>{t('focusArea.secondText')}</li>
              <li>{t('focusArea.thirdText')}</li>
              <li>{t('focusArea.fourthText')}</li>
              <li>{t('focusArea.fifthText')}</li>
            </ul>
            <Link href="mailto:info@paperlesszone.com">
              <button className="relative btn btn-primary mt-8">
                {t('button')}
              </button>
            </Link>
          </div>
          <Image
            className="rounded-lg h-auto max-w-full"
            src="/assets/images/ai-chipset.webp"
            alt="ai chipset"
            height={0}
            width={512}
          />
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-6xl gap-16">
          <div>
            <h2 className="text-4xl pb-2">{t('expertise.title')}</h2>
            <h3 className="text-2xl pb-8">{t('expertise.subTitle')}</h3>
            <ul className="list-disc pl-4 space-y-2 text-lg">
              <li>{t('expertise.firstText')}</li>
              <li>{t('expertise.secondText')}</li>
              <li>{t('expertise.thirdText')}</li>
              <li>{t('expertise.fourthText')}</li>
              <li>{t('expertise.fifthText')}</li>
              <li>{t('expertise.sixthText')}</li>
            </ul>
            <Link href="mailto:info@paperlesszone.com">
              <button className="relative btn btn-primary mt-8">
                {t('button')}
              </button>
            </Link>
          </div>
          <Image
            className="rounded-lg h-auto max-w-full"
            src="/assets/images/coding.webp"
            alt="ai chipset"
            height={0}
            width={512}
          />
        </div>
      </div>

      <div className="bg-sapphire-100 pt-16 lg:pb-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-6xl lg:gap-16">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-4xl pb-4">{t('process.title')}</h2>

            {processItems.map((item, index) => {
              return (
                <div
                  key={`item-${index}`}
                  className="collapse collapse-arrow bg-neutral"
                >
                  <input
                    type="radio"
                    name="my-accordion"
                    defaultChecked={index == 0}
                  />
                  <div className="collapse-title text-xl font-medium">
                    <p>{item.title}</p>
                  </div>
                  <div className="collapse-content">
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
            <Link href="mailto:info@paperlesszone.com">
              <button className="relative btn btn-primary mt-8">
                {t('button')}
              </button>
            </Link>
          </div>
          <MotionWrapper variants={itemAnimationVariant}>
            <Image
              className="rounded-lg h-auto max-w-full"
              src="/assets/images/abstract-blob-round.webp"
              alt="ai chipset"
              height={0}
              width={512}
            />
          </MotionWrapper>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.solutions.consultation',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.consultation}`,
        de: `/de${RouteId.consultation}`,
        'x-default': `${RouteId.consultation}`,
      },
    },
  };
}
