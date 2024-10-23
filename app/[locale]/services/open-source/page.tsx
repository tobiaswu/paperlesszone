import { CheckedText } from '@/components/CheckedText';
import { MotionWrapper } from '@/components/MotionWrapper';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import { itemAnimationVariant } from '@/lib/transitions';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';
import {
  PiCheckBold,
  PiCheckCircleBold,
  PiBoxArrowDownBold,
  PiClockBold,
  PiXBold,
  PiXCircleBold,
} from 'react-icons/pi';

type Props = {
  params: { locale: string };
};

export default async function OpenSource({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'services.openSource',
  });

  const logos = [
    {
      src: '/assets/logos/paperless-ngx.webp',
      alt: 'Paperless NGX',
    },
    {
      src: '/assets/logos/nextcloud.webp',
      alt: 'Nextcloud',
    },
    {
      src: '/assets/logos/odoo.webp',
      alt: 'Odoo',
    },
    {
      src: '/assets/logos/metabase.webp',
      alt: 'Metabase',
    },
  ];

  const avatarLogos = [
    {
      src: '/assets/avatars/real-estate-agent.webp',
      alt: 'Real Estate Agent',
    },
    {
      src: '/assets/avatars/it-owner.webp',
      alt: 'IT Owner',
    },
    {
      src: '/assets/avatars/medical-doctor.webp',
      alt: 'Medical Doctor',
    },
    {
      src: '/assets/avatars/lawyer.webp',
      alt: 'Lawyer',
    },
    {
      src: '/assets/avatars/construction-worker.webp',
      alt: 'Construction Worker',
    },
  ];

  const cardKeys = ['card1', 'card2', 'card3'] as const;
  const serviceBreakdownKeys = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
  ] as const;
  const howItWorksKeys = ['step1', 'step2', 'step3', 'step4', 'step5'] as const;
  const pricingStructureRowKeys = [
    'row1',
    'row2',
    'row3',
    'row4',
    'row5',
    'row6',
  ] as const;

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
            <MotionWrapper
              variants={itemAnimationVariant}
              className="flex sm:flex-row flex-col items-center gap-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-left">
                    {t('heroHeading')}
                  </h2>
                  <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    {logos.map((logo) => (
                      <div className="avatar" key={logo.alt}>
                        <div className="w-12">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={48}
                            height={48}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-left">{t('trustedBy')}</p>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  {avatarLogos.map((logo) => (
                    <div className="avatar" key={logo.alt}>
                      <div className="w-12">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <CheckedText description={t('heroBenefits.first')} />
                <CheckedText description={t('heroBenefits.second')} />
                <CheckedText description={t('heroBenefits.third')} />
              </div>
            </MotionWrapper>
          </div>
        </div>
        {/* Pain Points & Solutions */}
        <div className="container mx-auto">
          <div className="divider mb-16"></div>
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('painAndGains.title')}
          </h2>
          <p className="text-lg text-center">{t('painAndGains.summary')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
            {cardKeys.map((key) => (
              <div
                className="card rounded-lg bg-neutral border border-gunmetal-600 shadow-md overflow-hidden"
                key={key}
              >
                <div className="card-body">
                  <h3 className="card-title">
                    <PiXCircleBold className="text-red-500 text-3xl flex-shrink-0" />
                    {t(`painAndGains.${key}.pain`)}
                  </h3>
                  <ul>
                    {t.rich(`painAndGains.${key}.pains`, {
                      li: (children) => (
                        <li className="flex items-center gap-2">
                          <PiXBold className="text-red-500 text-xl flex-shrink-0" />
                          {children}
                        </li>
                      ),
                    })}
                  </ul>
                  <p className="flex items-center gap-2">
                    <PiCheckCircleBold className="text-green-500 text-3xl flex-shrink-0" />
                    <span>{t(`painAndGains.${key}.gain`)}</span>
                  </p>
                  <ul>
                    {t.rich(`painAndGains.${key}.gains`, {
                      li: (children) => (
                        <li className="flex items-center gap-2">
                          <PiCheckBold className="text-green-500 text-xl flex-shrink-0" />
                          {children}
                        </li>
                      ),
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center items-center mb-16">
            <p className="text-lg">{t('painAndGains.conclusion')}</p>
            <Link href={RouteId.contact}>
              <button className="btn btn-secondary btn-lg">
                {t('painAndGains.cta')}
              </button>
            </Link>
          </div>
        </div>
        {/* Featured Open Source Solutions */}
        <div className="container mx-auto">
          <div className="divider mb-16"></div>
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('featuredSolutions.title')}
          </h2>
          <p className="text-lg text-center">
            {t('featuredSolutions.summary')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
            {cardKeys.map((key) => (
              <div
                className="card border border-gunmetal-600 overflow-hidden backdrop-blur-3xl"
                key={key}
              >
                <div className="card-body">
                  <h3 className="card-title">
                    <div className="avatar">
                      <div className="mask mask-hexagon w-16">
                        <Image
                          src={`/assets/logos/${t(`featuredSolutions.${key}.logo`)}.webp`}
                          alt={t(`featuredSolutions.${key}.title`)}
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    {t(`featuredSolutions.${key}.title`)}
                  </h3>
                  <ul className="list-disc list-inside">
                    {t.rich(`featuredSolutions.${key}.description`, {
                      li: (children) => <li>{children}</li>,
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('featuredSolutions.box.title')}
              </h3>
              <ul className="mb-4">
                {t.rich('featuredSolutions.box.description', {
                  li: (children) => (
                    <li className="flex items-center gap-2">
                      <PiCheckBold className="text-green-500 text-xl flex-shrink-0" />
                      {children}
                    </li>
                  ),
                })}
              </ul>
              <p className="mb-4">{t('featuredSolutions.box.cta')}</p>
              <Link href={RouteId.contact}>
                <button className="btn btn-secondary">
                  {t('featuredSolutions.box.ctaLink')}
                </button>
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('featuredSolutions.portfolio.title')}
              </h3>
              <p className="mb-4">
                {t('featuredSolutions.portfolio.description')}
              </p>
              <ul className="mb-4">
                {t.rich('featuredSolutions.portfolio.comingSoon', {
                  li: (children) => (
                    <li className="flex items-center gap-2">
                      <PiClockBold className="text-yellow-500 text-xl flex-shrink-0" />
                      {children}
                    </li>
                  ),
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* Service Breakdown */}
        <div className="container mx-auto">
          <div className="divider mb-16"></div>
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('serviceBreakdown.title')}
          </h2>
          <p className="text-lg text-center">{t('serviceBreakdown.summary')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
            {serviceBreakdownKeys.map((key) => (
              <div
                className="card rounded-lg bg-neutral border border-gunmetal-600 shadow-md overflow-hidden"
                key={key}
              >
                <div className="card-body">
                  <h3 className="card-title">
                    {t(`serviceBreakdown.${key}.title`)}
                  </h3>
                  <ul className="list-disc list-inside">
                    {t.rich(`serviceBreakdown.${key}.description`, {
                      li: (children) => <li>{children}</li>,
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t.rich('serviceBreakdown.box.title', {
                  br: () => <br />,
                })}
              </h3>
              <ul>
                {t.rich('serviceBreakdown.box.description', {
                  li: (children) => (
                    <li className="flex items-center gap-2">
                      <PiCheckBold className="text-green-500 text-xl flex-shrink-0" />
                      {children}
                    </li>
                  ),
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('serviceBreakdown.compliance.title')}
              </h3>
              <p className="max-w-xl mb-4">
                {t('serviceBreakdown.compliance.description')}
              </p>
              <Image
                src="/assets/logos/gdpr.webp"
                alt="GDPR"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center gap-8 mb-16">
            <Link href={RouteId.contact}>
              <button className="btn btn-secondary btn-lg flex-shrink-0">
                {t('serviceBreakdown.ctaLink')}
              </button>
            </Link>
            <p className="text-lg max-w-xl">
              {t('serviceBreakdown.ctaDescription')}
            </p>
          </div>
        </div>
        {/* How it works */}
        <div className="container mx-auto">
          <div className="divider mb-16"></div>
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-center">{t('howItWorks.summary')}</p>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-16">
            {howItWorksKeys.map((key, index) => (
              <li key={key}>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <PiCheckCircleBold className="text-primary text-3xl flex-shrink-0" />
                </div>
                <div
                  className={`mb-10 max-w-lg ${
                    index % 2 === 0
                      ? 'timeline-start md:text-end'
                      : 'timeline-end'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {t(`howItWorks.${key}.title`)}
                  </h3>
                  <ul className="list-inside list-disc">
                    {t.rich(`howItWorks.${key}.description`, {
                      li: (children) => <li>{children}</li>,
                    })}
                  </ul>
                </div>
                <hr className="bg-primary" />
              </li>
            ))}
          </ul>
          <div className="flex sm:flex-row flex-col justify-center gap-16 my-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('howItWorks.cta')}</h3>
              <Link href={RouteId.contact}>
                <button className="btn btn-secondary btn-lg">
                  {t('howItWorks.ctaLink')}
                </button>
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('howItWorks.guaranteeTitle')}
              </h3>
              <ul>
                {t.rich('howItWorks.guarantees', {
                  li: (children) => (
                    <li className="flex items-center gap-2">
                      <PiCheckBold className="text-green-500 text-xl flex-shrink-0" />
                      {children}
                    </li>
                  ),
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* Pricing Structure */}
        <div className="container mx-auto">
          <div className="divider mb-16"></div>
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('pricingStructure.title')}
          </h2>
          <p className="text-lg text-center">{t('pricingStructure.summary')}</p>
          <div className="overflow-x-auto mt-16">
            <table className="table table-zebra w-full table-xs sm:table-sm md:table-md lg:table-lg">
              <thead className="text-2xl text-secondary">
                <tr>
                  {t.rich('pricingStructure.tableHead', {
                    th: (children) => <th>{children}</th>,
                  })}
                </tr>
              </thead>
              <tbody>
                {pricingStructureRowKeys.map((key) => (
                  <tr key={key}>
                    {t.rich(`pricingStructure.${key}`, {
                      th: (children) => <th>{children}</th>,
                      td: (children) => <td>{children}</td>,
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('pricingStructure.additional.title')}
              </h3>
              <ul className="list-inside list-disc mb-4">
                {t.rich('pricingStructure.additional.description1', {
                  li: (children) => <li>{children}</li>,
                })}
              </ul>
              <ul className="list-inside list-disc mb-8">
                {t.rich('pricingStructure.additional.description2', {
                  li: (children) => <li>{children}</li>,
                })}
              </ul>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {t('pricingStructure.cta')}
                </h3>
                <Link href={RouteId.contact}>
                  <button className="btn btn-secondary">
                    {t('pricingStructure.ctaLink')}
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('pricingStructure.scaling.title')}
              </h3>
              <ul className="list-inside list-disc mb-4">
                {t.rich('pricingStructure.scaling.description1', {
                  li: (children) => <li>{children}</li>,
                })}
              </ul>
              <ul className="list-inside list-disc mb-8">
                {t.rich('pricingStructure.scaling.description2', {
                  li: (children) => <li>{children}</li>,
                })}
              </ul>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {t('pricingStructure.included.title')}
                </h3>
                <ul className="list-inside list-disc">
                  {t.rich('pricingStructure.included.description', {
                    li: (children) => <li>{children}</li>,
                  })}
                </ul>
              </div>
            </div>
            <div className="border border-gunmetal-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                {t('pricingStructure.guarantee.title')}
              </h3>
              <ul className="mb-8">
                {t.rich('pricingStructure.guarantee.description', {
                  li: (children) => (
                    <li className="flex items-center gap-2">
                      <PiCheckBold className="text-green-500 text-xl flex-shrink-0" />
                      {children}
                    </li>
                  ),
                })}
              </ul>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {t('pricingStructure.payment.title')}
                </h3>
                <ul>
                  {t.rich('pricingStructure.payment.description', {
                    li: (children) => (
                      <li className="flex items-center gap-2">
                        <PiBoxArrowDownBold className="text-blue-500 text-xl flex-shrink-0" />
                        {children}
                      </li>
                    ),
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.services.openSource',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.openSource}`,
        de: `/de${RouteId.openSource}`,
        'x-default': `${RouteId.openSource}`,
      },
    },
  };
}
