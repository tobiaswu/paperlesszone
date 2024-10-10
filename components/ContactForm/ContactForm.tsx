'use client';

import { useFormState } from 'react-dom';
import { submitContactForm } from './actions';
import { SubmitButton } from '../SubmitButton';
import { useEffect, useState, useRef } from 'react';
import { ToastError } from '../ui/toastError';
import { ToastInfo } from '../ui/toastInfo';

interface ContactFormProps {
  copyNote: string;
  loadingText: string;
  phonePlaceholder: string;
  submitBtnText: string;
  textareaPlaceholder: string;
}

export const ContactForm = ({
  copyNote,
  loadingText,
  phonePlaceholder,
  submitBtnText,
  textareaPlaceholder,
}: ContactFormProps) => {
  const [state, formAction] = useFormState(submitContactForm, null);
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const nameError = state?.error?.name?._errors[0];
  const emailError = state?.error?.email?._errors[0];
  const phoneError = state?.error?.phone?._errors[0];
  const textError = state?.error?.text?._errors[0];
  const checkboxError = state?.error?.checkbox?._errors[0];
  const message: string | undefined = state?.message?.message;
  const error: string | undefined = state?.message?.error;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (message) {
      setShowMessage(true);
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      if (formRef.current) {
        formRef.current.reset();
      }
    }

    if (error) {
      setShowError(true);
      timeout = setTimeout(() => {
        setShowError(false);
      }, 3000);

      if (formRef.current) {
        formRef.current.reset();
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [message, error]);

  return (
    <div>
      <form ref={formRef} className="flex flex-col gap-4" action={formAction}>
        <label className="form-control">
          <input
            className={`${nameError && 'input-error'} input input-bordered`}
            name="name"
            required
            type="text"
            placeholder="Name*"
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
            placeholder="Email*"
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
          placeholder={phonePlaceholder}
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
            placeholder={`${textareaPlaceholder}*`}
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
              {copyNote}
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
        <SubmitButton loadingText={loadingText} submitBtnText={submitBtnText} />
      </form>
      {showMessage && <ToastInfo message={message} />}
      {showError && <ToastError error={error} />}
    </div>
  );
};
