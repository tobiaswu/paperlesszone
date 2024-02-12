import { ContactForm } from '@/components/ContactForm/ContactForm';
import { ContactOption } from '@/components/ContactOption';
import {
  PiEnvelopeLight,
  PiMapPinLineLight,
  PiPhoneCallLight,
} from 'react-icons/pi';
import type { Metadata } from 'next';
import { MotionWrapper } from '@/components/MotionWrapper';
import {
  fadeInAnimationVariant,
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/lib/animation';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/route';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.contact',
  });
  // const canonicalData = {
  //   metadataBase: new URL(BASE_URL),
  //   alternates: {
  //     canonical: RouteId.contact,
  //     languages: {
  //       'en-US': '/en' + RouteId.contact,
  //       'de-DE': '/de' + RouteId.contact,
  //     },
  //   },
  // };

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Contact({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-12 px-4 py-16 min-h-screen place-items-center">
        <div className="col-span-2 lg:col-span-1 bg-blob-soft bg-cover lg:bg-contain bg-top">
          <MotionWrapper variants={itemAnimationVariant}>
            <h1 className="text-4xl sm:text-6xl font-bold mb-12 sm:leading-relaxed">
              {t('contact.title')}
            </h1>
          </MotionWrapper>
          <MotionWrapper variants={itemAnimationVariant}>
            <p className="leading-relaxed mb-8">{t('contact.description')}</p>
          </MotionWrapper>
          <div className="flex flex-col gap-4">
            <MotionWrapper index={0} variants={staggerAnimationVariant}>
              <ContactOption
                icon={<PiEnvelopeLight />}
                optionLabel="Email"
                optionText="hello@digitizerspace.com"
                url="mailto:hello@digitizerspace.com"
              />
            </MotionWrapper>
            <MotionWrapper index={1} variants={staggerAnimationVariant}>
              <ContactOption
                icon={<PiPhoneCallLight />}
                optionLabel={t('contact.callOptionLabel')}
                optionText={t('contact.callOptionText')}
                url="https://calendly.com/tobiaswu/1-1-meeting-clone"
              />
            </MotionWrapper>
            <MotionWrapper index={2} variants={staggerAnimationVariant}>
              <ContactOption
                icon={<PiMapPinLineLight />}
                optionLabel={t('contact.officeOptionLabel')}
                optionText={t('contact.officeOptionText')}
              />
            </MotionWrapper>
          </div>
        </div>

        <MotionWrapper
          variants={fadeInAnimationVariant}
          className="col-span-2 lg:col-span-1 bg-neutral border border-gunmetal-600 rounded-lg p-8 h-fit shadow-md"
        >
          <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-8 sm:leading-normal">
            {t('contact.formTitle')}
          </h2>
          <p className="text-center mb-8">{t('contact.formDescription')}</p>
          <ContactForm />
        </MotionWrapper>
      </div>
    </div>
  );
}
