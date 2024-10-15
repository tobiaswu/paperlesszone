'use client';

import { SubscribeButton } from './SubscribeButton';
import { useFormState } from 'react-dom';
import { submitEmailForm } from './actions';
import { ReactNode, useEffect, useState } from 'react';
import { ToastError } from '../ui/toastError';
import { ToastInfo } from '../ui/toastInfo';

interface EmailSignupProps {
  disclaimer: ReactNode;
  loadingMsg: string;
  btnTitle: string;
  badgeText?: string;
}

export const EmailSignup = ({
  btnTitle,
  disclaimer,
  loadingMsg,
  badgeText,
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
      setShowError(false);
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }

    if (error) {
      setShowError(true);
      setEmail('');
      setShowMessage(false);
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
      <form action={formAction}>
        <div className="sm:flex sm:items-start sm:join">
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
          <SubscribeButton
            loadingMsg={loadingMsg}
            btnTitle={btnTitle}
            badgeText={badgeText}
          />
        </div>
        <label htmlFor="gdpr" className="flex items-center gap-2 mt-2 text-xs">
          <input type="checkbox" name="gdpr" id="gdpr" required />
          <span>{disclaimer}</span>
        </label>
      </form>
      {showMessage && <ToastInfo message={message} />}
      {showError && <ToastError error={error} />}
    </div>
  );
};
