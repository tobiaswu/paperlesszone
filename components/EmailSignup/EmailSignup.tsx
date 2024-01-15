'use client';

import { Dictionary } from '@/lib/types';
import { RouteId } from '@/lib/route';
import Link from 'next/link';
import { PiCheckCircleLight } from 'react-icons/pi';
import { submitEmailForm } from './actions';
import { useFormState } from 'react-dom';
import { SubscribeButton } from './SubscribeButton';
import { Locale } from '@/lib/i18n';

interface EmailSignupProps {
  dict: Dictionary;
  lang: Locale;
}

export const EmailSignup = ({ dict, lang }: EmailSignupProps) => {
  const [state, formAction] = useFormState(submitEmailForm, null);
  const error = state?.error?.email?._errors[0];
  const message: string | undefined = state?.message?.message;

  return (
    <div>
      <form action={formAction} className="sm:join">
        <label className="form-control">
          <input
            type="email"
            name="email"
            required
            className={`${
              error && 'input-error'
            } input input-bordered input-primary w-full sm:w-72 join-item mb-4 sm:mb-0`}
            placeholder="Email"
          />
          {error && (
            <div className="label">
              <span className="label-text-alt text-error">{error}</span>
            </div>
          )}
        </label>
        <SubscribeButton dict={dict} />
      </form>
      {message && (
        <div className="alert alert-info w-fit mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
      <p className="text-sm pt-8">
        {dict.emailSignup.firstAgreement}&nbsp;
        <Link href={`/${lang}${RouteId.privacy}`}>{dict.privacy.title}</Link>
        &nbsp;
        {dict.emailSignup.secondAgreement}
      </p>
    </div>
  );
};
