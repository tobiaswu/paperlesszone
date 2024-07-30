import Image from 'next/image';
import {
  PiCoinsThin,
  PiLightningLight,
  PiLinkedinLogoLight,
  PiTimerLight,
} from 'react-icons/pi';
import { StatCard } from '@/components/StatCard';
import Link from 'next/link';
import { RouteId } from '@/lib/routes';
import type { Metadata } from 'next';
import { MotionWrapper } from '@/components/MotionWrapper';
import {
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/lib/transitions';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { BsTwitterX } from 'react-icons/bs';
import { BASE_URL } from '@/lib/constants';
import { BlobMedium } from '@/components/ui/blob';

type Props = {
  params: { locale: string };
};

export default async function About({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });

  return (
    <>
      <section className="flex flex-col items-center justify-center overflow-x-hidden">
        <BlobMedium />
        <div className="hero z-20">
          <div className="hero-content text-center flex flex-col">
            <MotionWrapper
              className="max-w-6xl"
              variants={itemAnimationVariant}
            >
              <h1 className="text-4xl sm:text-6xl font-bold sm:leading-relaxed mt-20">
                {t('about.title')}
              </h1>
            </MotionWrapper>
            <MotionWrapper variants={itemAnimationVariant}>
              <p className="mt-8 max-w-xl mx-auto leading-relaxed">
                {t('about.description')}
              </p>
            </MotionWrapper>
          </div>
        </div>

        <div className="py-16">
          <div className="container mx-auto flex flex-col gap-8 px-4 items-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <MotionWrapper index={0} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiLightningLight />}
                  title={t('about.statCard.foundedTitle')}
                  value={t('about.statCard.founedValue')}
                />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiCoinsThin />}
                  title={t('about.statCard.costSavingTitle')}
                  value={t('about.statCard.costSavingValue')}
                />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiTimerLight />}
                  title={t('about.statCard.timeSavingTitle')}
                  value={t('about.statCard.timeSavingValue')}
                />
              </MotionWrapper>
            </div>
            <Image
              className="rounded-lg max-w-6xl w-full mt-16"
              src="/assets/images/ai-hacker-wide.webp"
              alt="Ai generated image of a hacker in a space suit in front of a macbook."
              width={768}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 pb-32">
        <p className="mb-8">{t('about.firstSectionText')}</p>
        <p>
          {t('about.secondSectionText')}
          &nbsp;
          <Link className="link link-hover link-primary" href={RouteId.root}>
            DigitizerSpace.com
          </Link>
          .&nbsp;
          {t('about.thirdSectionText')}
        </p>
        <h2 className="mt-16 mb-8 text-4xl font-semibold">
          {t('about.firstSubtitle')}
        </h2>
        <p>{t('about.fourthSectionText')}</p>
        <div className="flex flex-col sm:flex-row gap-8 items-center my-8">
          <div className="flex flex-col items-center gap-4">
            <Image
              className="rounded-lg border border-gunmetal-600 w-72 h-auto"
              src="/assets/images/founder-portrait.webp"
              alt="Portrait of the founder Tobias Wupperfeld"
              width={320}
              height={0}
              loading="lazy"
            />
            <div className="flex gap-2">
              <Link
                href="https://twitter.com/tobiaswup"
                className="link link-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsTwitterX className="text-2xl" />
              </Link>
              <Link
                href="https://linkedin.com/in/tobias-wupperfeld"
                className="link link-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                <PiLinkedinLogoLight className="text-2xl" />
              </Link>
            </div>
          </div>
          <p className="italic font-serif max-w-md">
            &quot;{t('about.quote')}&quot;
          </p>
        </div>
        <p>
          {t('about.fifthSectionText')}
          &nbsp;
          <Link
            className="link link-hover link-primary"
            href="https://openai.com/blog/introducing-chatgpt-enterprise"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('about.fortune500LinkText')}
          </Link>
          &nbsp;{t('about.sixthSectionText')}
        </p>
        <h2 className="mt-16 mb-8 text-4xl font-semibold">
          {t('about.secondSubtitle')}
        </h2>
        <p>
          {t('about.seventhSectionText')}
          &nbsp;
          <Link
            className="link link-hover link-primary"
            href={RouteId.resources}
          >
            {t('about.resourcesLinkText')}
          </Link>
          ,&nbsp;
          <Link
            className="link link-hover link-primary"
            href={RouteId.solutions}
          >
            {t('about.solutionsLinkText')}
          </Link>
          &nbsp;{t('conditional.or')}&nbsp;
          <Link className="link link-hover link-primary" href={RouteId.contact}>
            {t('about.contactUsLinkText')}
          </Link>
          &nbsp;
          {t('about.eighthSectionText')}
        </p>
      </section>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.about',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.about}`,
        de: `/de${RouteId.about}`,
        'x-default': `${RouteId.about}`,
      },
    },
  };
}
