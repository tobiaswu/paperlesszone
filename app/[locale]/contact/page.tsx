import { ContactForm } from '@/components/ContactForm/ContactForm';
import { ContactOption } from '@/components/ContactOption';
import {
  PiEnvelopeLight,
  PiGlobeLight,
  PiMapPinLineLight,
  PiPhoneCallLight,
} from 'react-icons/pi';
import type { Metadata } from 'next';
import { MotionWrapper } from '@/components/MotionWrapper';
import {
  fadeInAnimationVariant,
  itemAnimationVariant,
  staggerAnimationVariant,
} from '@/lib/transitions';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { BASE_URL } from '@/lib/constants';
import { RouteId } from '@/lib/routes';
import { BlobMedium } from '@/components/ui/blob';

type Props = {
  params: { locale: string };
};

export default async function Contact({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-12 px-4 py-16 min-h-screen place-items-center overflow-x-hidden">
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center">
          <BlobMedium />
          <div className="z-20">
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
                  optionText="info@paperlesszone.com"
                  url="mailto:info@paperlesszone.com"
                />
              </MotionWrapper>
              <MotionWrapper index={1} variants={staggerAnimationVariant}>
                <ContactOption
                  icon={<PiPhoneCallLight />}
                  optionLabel={t('contact.callOptionLabel')}
                  optionText={t('contact.callOptionText')}
                />
              </MotionWrapper>
              <MotionWrapper index={2} variants={staggerAnimationVariant}>
                <ContactOption
                  icon={<PiMapPinLineLight />}
                  optionLabel={t('contact.officeOptionLabel')}
                  optionText={t('contact.officeOptionText')}
                />
              </MotionWrapper>
              <MotionWrapper index={3} variants={staggerAnimationVariant}>
                <ContactOption
                  icon={<PiGlobeLight />}
                  optionLabel={t('contact.languageOptionLabel')}
                  optionText={t('contact.languageOptionText')}
                />
              </MotionWrapper>
            </div>
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
          <ContactForm
            copyNote={t('contactForm.copyNote')}
            loadingText={t('state.sending')}
            phonePlaceholder={t('contactForm.phonePlaceholder')}
            submitBtnText={t('button.submit')}
            textareaPlaceholder={t('contactForm.textareaPlaceholder')}
          />
        </MotionWrapper>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata.contact',
  });

  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    metadataBase: new URL(BASE_URL),
    alternates: {
      languages: {
        en: `${RouteId.contact}`,
        de: `/de${RouteId.contact}`,
        'x-default': `${RouteId.contact}`,
      },
    },
  };
}
