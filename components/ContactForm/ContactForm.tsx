'use client';

import { Dictionary } from '@/lib/types';
import { useFormState } from 'react-dom';
import { PiCheckCircleLight } from 'react-icons/pi';
import { submitContactForm } from './actions';
import { SubmitButton } from './SubmitButton';

interface ContactFormProps {
  dict: Dictionary;
}

export const ContactForm = ({ dict }: ContactFormProps) => {
  const [state, formAction] = useFormState(submitContactForm, null);

  const nameError = state?.error?.name?._errors[0];
  const emailError = state?.error?.email?._errors[0];
  const phoneError = state?.error?.phone?._errors[0];
  const textError = state?.error?.text?._errors[0];
  const checkboxError = state?.error?.checkbox?._errors[0];
  const message: string | undefined = state?.message?.message;

  return (
    <div>
      <form className="flex flex-col gap-4" action={formAction}>
        <label className="form-control">
          <input
            className={`${nameError && 'input-error'} input input-bordered`}
            name="name"
            required
            type="text"
            placeholder="Name"
          />
          {nameError && (
            <div className="label">
              <span className="label-text-alt text-error">{nameError}</span>
            </div>
          )}
        </label>
        <label className="form-control">
          <input
            className={`${emailError && 'input-error'} input input-bordered`}
            name="email"
            required
            type="email"
            placeholder="Email"
          />
          {emailError && (
            <div className="label">
              <span className="label-text-alt text-error">{emailError}</span>
            </div>
          )}
        </label>
        <input
          className={`${phoneError && 'input-error'} input input-bordered`}
          name="phone"
          type="tel"
          placeholder={dict.contactForm.phonePlaceholder}
        />
        {phoneError && (
          <div className="label">
            <span className="label-text-alt text-error">{phoneError}</span>
          </div>
        )}
        <label className="form-control">
          <textarea
            className={`${
              textError && 'textarea-error'
            } textarea textarea-bordered text-base textarea-md`}
            name="text"
            placeholder={dict.contactForm.textareaPlaceholder}
            required
          />
          {textError && (
            <div className="label">
              <span className="label-text-alt text-error">{textError}</span>
            </div>
          )}
        </label>
        <label className="form-control">
          <label className="cursor-pointer label w-fit gap-4">
            <span className={`${checkboxError && 'text-error'} label-text`}>
              {dict.contactForm.copyNote}
            </span>
            <input
              type="checkbox"
              name="checkbox"
              className={`${
                checkboxError && 'checkbox-error'
              } checkbox checkbox-primary`}
            />
          </label>
          {checkboxError && (
            <div className="label">
              <span className="label-text-alt text-error">{checkboxError}</span>
            </div>
          )}
        </label>
        <SubmitButton dict={dict} />
      </form>
      {message && (
        <div className="alert alert-info mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};
