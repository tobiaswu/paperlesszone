import { CheckedText } from '@/components/CheckedText';
import Image from 'next/image';
import {
  PiArticleLight,
  PiCalculatorLight,
  PiClockCountdownLight,
  PiCloudCheckLight,
  PiDesktopTowerLight,
  PiDownloadLight,
  PiFileArrowDownLight,
  PiHandshakeLight,
  PiHardDrivesLight,
  PiHourglassMediumLight,
  PiKeyLight,
  PiLightbulbFilamentLight,
  PiMedalLight,
  PiMoneyLight,
  PiNumberSquareOneLight,
  PiNumberSquareThreeLight,
  PiNumberSquareTwoLight,
  PiPathLight,
  PiQuestionLight,
  PiRobotLight,
  PiScanLight,
  PiShootingStarLight,
  PiSignInLight,
  PiStarFourLight,
  PiTestTubeLight,
  PiTrendUpLight,
  PiTrophyLight,
  PiUserLight,
  PiWarningCircleLight,
  PiWrenchLight,
} from 'react-icons/pi';
import { SolutionCard } from '@/components/SolutionCard';
import { PricingCard } from '@/components/PricingCard';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MotionWrapper } from '@/components/MotionWrapper';
import { itemAnimationVariant, staggerAnimationVariant } from '@/lib/animation';
import { StatCard } from '@/components/StatCard';
import { RouteId } from '@/lib/route';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/utils/getDictionary';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.lang === 'de') {
    return {
      title: 'Nutze das Paperless-ngx System | wir installieren es für dich',
      description:
        '▷ Eliminiere Stift & Papier und mache deine Dokumente verfügbar für dein Team. Starte noch heute mit Paperless-ngx! ✓ 100% Zufriedenheitsgarantie. ✓ Kundensupport.',
    };
  }
  return {
    title: 'Get the Paperless-ngx system running | we install it for you',
    description:
      '▷ Eliminate pen & paper and make your documents available for your team. Get started with paperless-ngx today! ✓ 100% satisfaction guarantee ✓ full support.',
  };
}

export default async function Paperless({ params }: Props) {
  const dict = await getDictionary(params.lang);

  const paperlessCardItems = [
    {
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item.firstName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.firstInfo,
    },
    {
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item
        .secondName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.secondInfo,
    },
    {
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item.thirdName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.thirdInfo,
    },
    {
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item
        .fourthName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.fourthInfo,
    },
    {
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item.fifthName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.fifthInfo,
    },
    {
      icon: <PiShootingStarLight />,
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item.sixthName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.sixthInfo,
    },
    {
      icon: <PiShootingStarLight />,
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item
        .seventhName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.seventhInfo,
    },
    {
      icon: <PiShootingStarLight />,
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item
        .eighthName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.eighthInfo,
    },
    {
      icon: <PiShootingStarLight />,
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item
        .ninethName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.ninethInfo,
    },
    {
      icon: <PiWarningCircleLight className="text-accent" />,
      name: dict.solutions.paperless.pricingCard.paperlessSystem.item.tenthName,
      infoText:
        dict.solutions.paperless.pricingCard.paperlessSystem.item.tenthInfo,
    },
  ];

  const testCardItems = [
    {
      icon: <PiUserLight className="text-primary" />,
      name: dict.solutions.paperless.pricingCard.testSystem.item.firstName,
    },
    {
      icon: <PiKeyLight className="text-primary" />,
      name: dict.solutions.paperless.pricingCard.testSystem.item.secondName,
    },
    {
      icon: <PiWarningCircleLight className="text-accent" />,
      name: dict.solutions.paperless.pricingCard.testSystem.item.thirdName,
    },
  ];

  const liveCardItems = [
    {
      icon: <PiStarFourLight className="text-primary" />,
      name: dict.solutions.paperless.pricingCard.liveDemo.item.firstName,
    },
    {
      icon: <PiPathLight className="text-primary" />,
      name: dict.solutions.paperless.pricingCard.liveDemo.item.secondName,
    },
  ];

  return (
    <>
      <div className="hero bg-blob-soft bg-cover xl:bg-contain bg-top">
        <div className="hero-content text-center flex flex-col">
          <MotionWrapper className="max-w-6xl" variants={itemAnimationVariant}>
            <h1 className="text-4xl sm:text-6xl font-bold sm:leading-relaxed sm:pt-8">
              {dict.solutions.paperless.title}
            </h1>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="mt-8 mb-2 max-w-xl mx-auto leading-relaxed">
              {dict.solutions.paperless.description}
            </p>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <Link href="#pricing">
              <button className="btn btn-secondary btn-lg mb-16 capitalize">
                {dict.button.getStarted}
              </button>
            </Link>
          </MotionWrapper>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-4 max-w-2xl">
              <MotionWrapper index={0} variants={staggerAnimationVariant}>
                <Image
                  className="h-auto w-96"
                  src="https://docs.paperless-ngx.com/assets/logo_full_white.svg"
                  alt="White logo of paperless-ngx"
                  width={0}
                  height={184}
                  loading="lazy"
                />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <CheckedText
                  description={dict.solutions.paperless.firstCheckedText}
                />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <CheckedText
                  description={dict.solutions.paperless.secondCheckedText}
                />
              </MotionWrapper>
              <MotionWrapper index={3} variants={staggerAnimationVariant}>
                <CheckedText
                  description={dict.solutions.paperless.thirdCheckedText}
                />
              </MotionWrapper>
            </div>
            <div className="flex flex-col gap-4">
              <MotionWrapper index={0} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiClockCountdownLight />}
                  title={dict.solutions.paperless.averageTimeTitle}
                  value={dict.solutions.paperless.averageTimeValue}
                  description={dict.solutions.paperless.averageTimeDescription}
                />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiRobotLight />}
                  title={dict.solutions.paperless.teachTitle}
                  value={dict.solutions.paperless.teachValue}
                  description={dict.solutions.paperless.teachDescription}
                />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <StatCard
                  icon={<PiKeyLight />}
                  title={dict.solutions.paperless.dataSafetyTitle}
                  value={dict.solutions.paperless.dataSafetyValue}
                  description={dict.solutions.paperless.dataSafetyDescription}
                />
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>

      <MotionWrapper variants={itemAnimationVariant}>
        <Image
          className="container mx-auto pt-16 px-4"
          src="https://docs.paperless-ngx.com/assets/screenshots/documents-smallcards-dark.png"
          alt="paperless-ngx dashboard with tagged documents"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </MotionWrapper>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">
            {dict.solutions.paperless.reqTitle}
          </h2>
        </div>
        <p className="max-w-3xl">{dict.solutions.paperless.reqDescription}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiDownloadLight />}
            description={dict.solutions.paperless.reqtFirstStep}
            url="https://github.com/paperless-ngx/paperless-ngx"
          />
          <SolutionCard
            icon={<PiScanLight />}
            description={dict.solutions.paperless.reqSecondStep}
            // url="https://github.com/paperless-ngx/paperless-ngx"
          />
          <SolutionCard
            icon={<PiDesktopTowerLight />}
            description={dict.solutions.paperless.reqThirdStep}
            // url="https://github.com/paperless-ngx/paperless-ngx"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiHourglassMediumLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">
            {dict.solutions.paperless.installTitle}
          </h2>
        </div>
        <p className="max-w-3xl">
          {dict.solutions.paperless.installDescription}
        </p>
        <ul className="mt-8">
          <li className="flex flex-col gap-4 mb-8">
            <PiNumberSquareOneLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="col-span-2 flex flex-col sm:flex-row gap-2">
                <SolutionCard
                  icon={<PiHardDrivesLight />}
                  description={dict.solutions.paperless.installFirstStep}
                />
                <div className="divider sm:divider-horizontal">
                  {dict.conditional.or}
                </div>
                <SolutionCard
                  icon={<PiCloudCheckLight />}
                  description={dict.solutions.paperless.installSecondStep}
                />
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-4 mb-8">
            <PiNumberSquareTwoLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
              <SolutionCard
                icon={<PiWrenchLight />}
                description={dict.solutions.paperless.installThirdStep}
              />
            </div>
          </li>
          <li className="flex flex-col gap-4">
            <PiNumberSquareThreeLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
              <SolutionCard
                icon={<PiSignInLight />}
                description={dict.solutions.paperless.installFourthStep}
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">
            {dict.solutions.paperless.useTitle}
          </h2>
        </div>
        <p className="max-w-3xl">
          {dict.solutions.paperless.useDescription}&nbsp;
          <Link
            className="underline hover:text-primary"
            href="https://docs.paperless-ngx.com/"
          >
            {dict.solutions.paperless.officialDocLinkText}
          </Link>
          .
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiFileArrowDownLight />}
            description={dict.solutions.paperless.useFirstStep}
            url={`/${params.lang}#newsletter`}
          />
          <SolutionCard
            icon={<PiLightbulbFilamentLight />}
            description={dict.solutions.paperless.useSecondStep}
            url={`/${params.lang + RouteId.blog}?tag=paperless`}
          />
          <SolutionCard
            icon={<PiArticleLight />}
            description={dict.solutions.paperless.useThirdStep}
            url={`/${params.lang + RouteId.blog}?tag=paperless`}
          />
        </div>
      </div>

      <section className="bg-blob-lg bg-center bg-cover xl:bg-contain">
        <div className="container mx-auto px-4 py-16">
          <div className="flex gap-4 items-center mb-8">
            <PiMedalLight className="text-5xl text-yellow-400" />
            <h2 className="text-4xl font-semibold">
              {dict.solutions.paperless.offerTitle}
            </h2>
          </div>
          <h3 className="text-3xl max-w-3xl mb-4">
            {dict.solutions.paperless.offerSubtitle}
          </h3>
          <p className="max-w-3xl">
            {dict.solutions.paperless.offerDescription}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
            <SolutionCard
              icon={<PiWrenchLight />}
              description={dict.solutions.paperless.offerFirstBenefit}
            />
            <SolutionCard
              icon={<PiTestTubeLight />}
              description={dict.solutions.paperless.offerSecondBenefit}
              url="https://paperless.digitizerspace.com/"
            />
            <SolutionCard
              icon={<PiHandshakeLight />}
              description={dict.solutions.paperless.offerThirdBenefit}
            />
            <SolutionCard
              icon={<PiMoneyLight />}
              description={dict.solutions.paperless.offerFourthBenefit}
            />
            <SolutionCard
              icon={<PiTrophyLight />}
              description={dict.solutions.paperless.offerFifthBenefit}
            />
            <SolutionCard
              icon={<PiTrendUpLight />}
              description={dict.solutions.paperless.offerSixthBenefit}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16" id="pricing">
        <div className="flex gap-4 items-center mb-8">
          <PiCalculatorLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">
            {dict.solutions.paperless.pricingTitle}
          </h2>
        </div>
        <p className="max-w-3xl">
          {dict.solutions.paperless.pricingDescription}
        </p>
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <PricingCard
            title={dict.solutions.paperless.pricingCard.paperlessSystem.title}
            subtitle={
              dict.solutions.paperless.pricingCard.paperlessSystem.subtitle
            }
            priceOld={
              dict.solutions.paperless.pricingCard.paperlessSystem.priceOld
            }
            discount={
              dict.solutions.paperless.pricingCard.paperlessSystem.discount
            }
            badgeText={
              dict.solutions.paperless.pricingCard.paperlessSystem.badgeText
            }
            price={dict.solutions.paperless.pricingCard.paperlessSystem.price}
            priceInfo={
              dict.solutions.paperless.pricingCard.paperlessSystem.priceInfo
            }
            btnText={dict.button.getStarted}
            btnUrl={
              params.lang === 'de'
                ? 'https://buy.stripe.com/bIY6re0K11YDg9O8ww?locale=de'
                : 'https://buy.stripe.com/cN2g1O64l9r58Hm145?locale=en'
            }
            className="border-primary"
            items={paperlessCardItems}
          />
          <div>
            <PricingCard
              title={dict.solutions.paperless.pricingCard.testSystem.title}
              subtitle={
                dict.solutions.paperless.pricingCard.testSystem.subtitle
              }
              badgeText={
                dict.solutions.paperless.pricingCard.testSystem.badgeText
              }
              btnText={dict.button.startDemo}
              btnUrl="https://paperless.digitizerspace.com/"
              price={dict.solutions.paperless.pricingCard.testSystem.price}
              className="border-gunmetal-600 mb-8"
              items={testCardItems}
            />
            <PricingCard
              title={dict.solutions.paperless.pricingCard.liveDemo.title}
              subtitle={dict.solutions.paperless.pricingCard.liveDemo.subtitle}
              badgeText={
                dict.solutions.paperless.pricingCard.liveDemo.badgeText
              }
              btnText={dict.button.bookDemo}
              btnUrl={`/${params.lang}${RouteId.contact}`}
              price={dict.solutions.paperless.pricingCard.liveDemo.price}
              className="border-gunmetal-600"
              items={liveCardItems}
            />
          </div>
        </div>
        <h3 className="text-3xl mt-16 mb-4">
          {dict.solutions.paperless.dataProtectionTitle}
        </h3>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <p className="max-w-3xl text-sm">
            {dict.solutions.paperless.dataProtectionDescription}
          </p>
          <div className="w-full">
            <Image
              className="w-auto h-32"
              src="/assets/images/ai-gdpr-shield.webp"
              alt="EU GDPR logo"
              width={128}
              height={128}
            />
          </div>
        </div>
      </div>
    </>
  );
}
