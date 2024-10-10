'use client';

import { SubscribeButton } from './SubscribeButton';
import { PiCheckCircleLight, PiXCircleLight } from 'react-icons/pi';
import { useFormState } from 'react-dom';
import { submitEmailForm } from './actions';
import { useEffect, useState } from 'react';

interface EmailSignupProps {
  disclaimer: string;
  loadingMsg: string;
  btnTitle: string;
}

export const EmailSignup = ({
  btnTitle,
  disclaimer,
  loadingMsg,
}: EmailSignupProps) => {
  const [state, formAction] = useFormState(submitEmailForm, null);
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState('');
  const errorEmail = state?.error?.email?._errors[0];
  const message: string | undefined = state?.message?.message;
  const error: string | undefined = state?.message?.error;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (message) {
      setShowMessage(true);
      setEmail('');
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }

    if (error) {
      setShowError(true);
      setEmail('');
      timeout = setTimeout(() => {
        setShowError(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [message, error]);

  return (
    <div className="w-full max-w-xl">
      <form action={formAction} className="sm:flex sm:items-start sm:join">
        <label className="form-control flex-grow">
          <input
            type="email"
            name="email"
            required
            className={`${
              errorEmail && 'input-error'
            } input input-bordered input-primary w-full mb-4 sm:mb-0 sm:mr-2 join-item`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <div className="label">
              <span className="label-text-alt text-error">{errorEmail}</span>
            </div>
          )}
        </label>
        <SubscribeButton loadingMsg={loadingMsg} btnTitle={btnTitle} />
      </form>
      {showMessage && (
        <div className="toast toast-end z-50">
          <div className="alert alert-info max-w-sm whitespace-pre-wrap">
            <PiCheckCircleLight className="text-2xl" />
            <span>{message}</span>
          </div>
        </div>
      )}
      {showError && (
        <div className="toast toast-end z-50">
          <div className="alert alert-error max-w-sm whitespace-pre-wrap">
            <PiXCircleLight className="text-2xl" />
            <span>{error}</span>
          </div>
        </div>
      )}
      <p className="text-xs pt-4">{disclaimer}</p>
    </div>
  );
};
