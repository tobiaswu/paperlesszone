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
  const [email, setEmail] = useState('');
  const error = state?.error?.email?._errors[0];
  const message: string | undefined = state?.message?.message;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (message) {
      setShowMessage(true);
      setEmail('');
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  return (
    <div className='w-full max-w-xl'>
      <form action={formAction} className="sm:flex sm:items-start sm:join">
        <label className="form-control flex-grow">
          <input
            type="email"
            name="email"
            required
            className={`${
              error && 'input-error'
            } input input-bordered input-primary w-full mb-4 sm:mb-0 sm:mr-2 join-item`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="toast toast-end z-50">
          <div className="alert alert-info max-w-sm whitespace-pre-wrap">
            <PiCheckCircleLight className="text-2xl" />
            <span>{message}</span>
          </div>
        </div>
      )}
      <p className="text-xs pt-4">{disclaimer}</p>
    </div>
  );
};
