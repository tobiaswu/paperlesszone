import { BlogPreview } from '@/components/Blog/BlogPreview';
import { CheckedText } from '@/components/CheckedText';
import { DiscoverCard } from '@/components/DiscoverCard';
import { EmailSignup } from '@/components/EmailSignup/EmailSignup';
import { MotionWrapper } from '@/components/MotionWrapper';
import { UseCaseCard } from '@/components/UseCaseCard';
import {
  fadeInAnimationVariant,
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/lib/transitions';
import { RouteId } from '@/lib/routes';
import Link from 'next/link';
import {
  PiAlienLight,
  PiCodepenLogoLight,
  PiFactoryLight,
  PiFileCloudLight,
  PiFilesLight,
  PiFlowArrowLight,
  PiPiggyBankLight,
  PiRepeatLight,
  PiRobotLight,
  PiRocketLaunchLight,
  PiSmileyLight,
  PiTriangleLight,
} from 'react-icons/pi';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { BlobLarge, BlobMedium } from '@/components/ui/blob';
import { SolutionCard } from '@/components/SolutionCard';

type Props = {
  params: { locale: string };
};

export default async function Home({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });

  const serviceKeys = [
    'consulting',
    'openSource',
    'agents',
    'webScraping',
  ] as const;

  return (
    <>
      <div className="relative h-full w-full overflow-x-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,#288a21_100%)]"></div>
        <div className="container mx-auto hero min-h-screen relative">
          <div className="hero-content text-center flex flex-col">
            <MotionWrapper
              className="max-w-6xl flex flex-col items-center justify-center"
              variants={fadeInAnimationVariant}
            >
              <h1 className="text-4xl sm:text-6xl font-bold sm:leading-relaxed bg-gradient-to-br from-slate-100 to-slate-300 text-transparent bg-clip-text">
                {t('root.heroTitle')}
              </h1>
              <div className="mt-4 flex justify-center items-center gap-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-lime_green-600 to-sapphire-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <Link href={RouteId.contact}>
                    <button className="relative btn btn-lg">
                      {t('button.contact')}
                    </button>
                  </Link>
                </div>
                <Link href="#services">
                  <button className="btn btn-lg">
                    {t('button.services')}
                    <PiTriangleLight className="rotate-180" />
                  </button>
                </Link>
              </div>
              <h2 className="text-xl text-center max-w-2xl my-8">
                {t('root.heroSubtitle')}
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              <MotionWrapper index={0} variants={staggerAnimationVariant}>
                <DiscoverCard
                  icon={<PiFactoryLight />}
                  title={t('root.discoverCard.systemTitle')}
                  url={RouteId.solutions}
                />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <DiscoverCard
                  icon={<PiRobotLight />}
                  title={t('root.discoverCard.automateTitle')}
                  url={RouteId.solutions}
                />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <DiscoverCard
                  icon={<PiFilesLight />}
                  title={t('root.discoverCard.eliminateTitle')}
                  url={RouteId.solutions}
                />
              </MotionWrapper>
              <MotionWrapper index={3} variants={staggerAnimationVariant}>
                <DiscoverCard
                  icon={<PiPiggyBankLight />}
                  title={t('root.discoverCard.costTitle')}
                  url={RouteId.solutions}
                />
              </MotionWrapper>
              <MotionWrapper index={4} variants={staggerAnimationVariant}>
                <DiscoverCard
                  icon={<PiRocketLaunchLight />}
                  title={t('root.discoverCard.efficiencyTitle')}
                  url={RouteId.solutions}
                />
              </MotionWrapper>
              <MotionWrapper index={5} variants={staggerAnimationVariant}>
                <DiscoverCard
                  icon={<PiSmileyLight />}
                  title={t('root.discoverCard.happyTitle')}
                  url={RouteId.solutions}
                />
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <section
        id="services"
        className="py-32 px-4 flex flex-col items-center justify-center [background:radial-gradient(125%_125%_at_50%_90%,rgba(255,255,255,0)_40%,#288a21_100%)]"
      >
        <div className="container mx-auto">
          <MotionWrapper variants={itemAnimationVariant}>
            <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-12 sm:leading-normal">
              {t('root.serviceSection.title')}
            </h2>
          </MotionWrapper>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceKeys.map((key, index) => (
              <MotionWrapper
                index={index}
                key={key}
                variants={staggerAnimationVariant}
              >
                <SolutionCard
                  icon={<PiCodepenLogoLight />}
                  title={t(`root.serviceSection.${key}.title`)}
                  description={t(`root.serviceSection.${key}.description`)}
                  url={RouteId[key as keyof typeof RouteId]}
                />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases */}
      <section className="overflow-x-hidden py-32 sm:pb-64 px-4 flex flex-col items-center justify-center">
        <BlobMedium />
        <div className="container mx-auto z-20">
          <MotionWrapper variants={itemAnimationVariant}>
            <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-12 sm:leading-normal">
              {t('root.useCaseSection.title')}
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="mb-12 text-center max-w-2xl mx-auto leading-relaxed">
              {t('root.useCaseSection.description')}
            </p>
          </MotionWrapper>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <MotionWrapper index={0} variants={staggerAnimationVariant}>
              <UseCaseCard
                icon={<PiRepeatLight />}
                title={t('root.useCaseSection.automationTitle')}
                description={
                  <p>{t('root.useCaseSection.automationDescription')}</p>
                }
              />
            </MotionWrapper>
            <MotionWrapper index={1} variants={staggerAnimationVariant}>
              <UseCaseCard
                icon={<PiFlowArrowLight />}
                title={t('root.useCaseSection.workflowTitle')}
                description={
                  <p>{t('root.useCaseSection.workflowDescription')}</p>
                }
              />
            </MotionWrapper>
            <MotionWrapper index={2} variants={staggerAnimationVariant}>
              <UseCaseCard
                icon={<PiFileCloudLight />}
                title={t('root.useCaseSection.digitizationTitle')}
                description={
                  <p>{t('root.useCaseSection.digitizationDescription')}</p>
                }
              />
            </MotionWrapper>
            <MotionWrapper index={3} variants={staggerAnimationVariant}>
              <UseCaseCard
                icon={<PiAlienLight />}
                title={t('root.useCaseSection.aiTitle')}
                description={<p>{t('root.useCaseSection.aiDescription')}</p>}
              />
            </MotionWrapper>
          </div>
        </div>
      </section>
      {/* Blog */}
      <section className="container mx-auto pb-16 sm:pb-32 px-4 bg-base-100">
        <MotionWrapper variants={itemAnimationVariant}>
          <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-24 sm:leading-normal">
            {t('root.blogSection.title')}
          </h2>
        </MotionWrapper>
        <MotionWrapper className="mb-8" variants={fadeInAnimationVariant}>
          <BlogPreview />
        </MotionWrapper>
        <div className="relative group w-fit">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-lime_green-600 to-sapphire-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Link href={RouteId.blog}>
            <button className="relative btn">
              {t('button.learnMore')}
              <PiTriangleLight className="rotate-90" />
            </button>
          </Link>
        </div>
      </section>
      {/* Reviews */}
      {/* <section className="container mx-auto pt-16 sm:pt-32 px-4 bg-base-100 grid grid-cols-2 gap-12">
        <div className="col-span-2 lg:col-span-1">
          <div className="grid sm:grid-cols-2 gap-4">
            <ReviewCard
              description="Review."
              avatarURL="/images/avatar.webp"
              name="John Doe"
              position="Chief Technology Officer"
            />
          </div>
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1">
          <MotionWrapper variants={itemAnimationVariant}>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-12 sm:leading-normal">
              {troot.clientSection.title}
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="leading-relaxed">
              {troot.clientSection.description}
            </p>
          </MotionWrapper>
          <Link className="w-fit mt-8" href={RouteId.about}>
            <button className="btn btn-primary">
              {tbutton.aboutUs}
              <PiTriangleLight className="rotate-90" />
            </button>
          </Link>
        </div>
      </section> */}
      {/* Newsletter */}
      <section className="overflow-x-hidden pt-32 pb-16 sm:pb-32 px-4 bg-base-100 flex flex-col items-center justify-center">
        <BlobLarge />
        <MotionWrapper
          variants={fadeInAnimationVariant}
          className="container mx-auto z-20 grid grid-cols-3 gap-20 xl:gap-40 border border-gunmetal-600 rounded-lg p-8 sm:p-12 backdrop-blur-3xl"
        >
          <div className="col-span-3 md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:leading-normal">
              {t('root.newsletterSection.title')}
            </h2>
            <p className="leading-relaxed mb-8">
              {t('root.newsletterSection.description')}
            </p>
            <p className="font-bold mb-8">
              {t('root.newsletterSection.whatYouGet')}
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <CheckedText
                description={t('root.newsletterSection.firstText')}
              />
              <CheckedText
                description={t('root.newsletterSection.secondText')}
              />
              <CheckedText
                description={t('root.newsletterSection.thirdText')}
              />
            </div>
            <p className="mb-8">{t('root.newsletterSection.cta')}</p>
            <EmailSignup
              btnTitle={t('button.subscribe')}
              disclaimer={t.rich('emailSignup.agreement', {
                PrivacyLink: (chunks) => (
                  <Link
                    className="link"
                    href={RouteId.privacy}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {chunks}
                  </Link>
                ),
              })}
              loadingMsg={t('state.sending')}
              badgeText={t('button.free')}
            />
          </div>
          {/* <div className="col-span-3 md:col-span-1 place-self-center">
            <div className="rounded-lg border-primary border-2 shadow-md bg-neutral px-8 py-32 relative">
              <p className="uppercase text-center font-bold">
                title
              </p>
              <PiPlusSquareFill className="text-5xl text-primary absolute -top-8 -left-8" />
            </div>
          </div> */}
        </MotionWrapper>
      </section>
    </>
  );
}
