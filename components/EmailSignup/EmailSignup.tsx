'use client';

import { SubscribeButton } from './SubscribeButton';
import { PiCheckCircleLight } from 'react-icons/pi';
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
  const error = state?.error?.email?._errors[0];
  const message: string | undefined = state?.message?.message;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (message) {
      setShowMessage(true);
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

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
        <SubscribeButton loadingMsg={loadingMsg} btnTitle={btnTitle} />
      </form>
      {showMessage && (
        <div className="alert alert-info w-fit mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
      <p className="text-xs pt-4">{disclaimer}</p>
    </div>
  );
};
