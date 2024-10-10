'use client';

import { useFormState } from 'react-dom';
import { submitCommentForm } from './actions';
import { SubmitButton } from '../SubmitButton';
import { ToastInfo } from '../ui/toastInfo';
import { ToastError } from '../ui/toastError';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { useDarkMode } from '@/lib/hooks/useDarkMode';

export interface CommentFormProps {
  articleId: number;
  articleSlug: string;
  commentId?: number;
  commentPlaceholder: string;
  loadingText: string;
  locale: string;
  submitBtnText: string;
}

export const CommentForm = ({
  articleId,
  articleSlug,
  commentId,
  commentPlaceholder,
  loadingText,
  locale,
  submitBtnText,
}: CommentFormProps) => {
  const [state, formAction] = useFormState(submitCommentForm, null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [darkMode] = useDarkMode();
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const nameError = state?.error?.name?._errors[0];
  const emailError = state?.error?.email?._errors[0];
  const textError = state?.error?.text?._errors[0];
  const message: string | undefined = state?.message?.message;
  const error: string | undefined = state?.message?.error;

  const onVerify = useCallback(() => {
    setCaptchaVerified(true);
  }, []);

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
      <form
        className="flex flex-col gap-4 pt-4"
        action={formAction}
        ref={formRef}
      >
        <input type="hidden" name="articleId" value={articleId} />
        {articleSlug && (
          <input type="hidden" name="articleSlug" value={articleSlug} />
        )}
        {commentId && (
          <input type="hidden" name="commentId" value={commentId} />
        )}
        <label className="form-control">
          <textarea
            className={`${
              textError && 'textarea-error'
            } textarea textarea-bordered text-base textarea-md`}
            name="text"
            placeholder={`${commentPlaceholder}*`}
            required
          />
          {textError && (
            <div className="label">
              <span className="label-text-alt text-error">{textError}</span>
            </div>
          )}
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="form-control flex-1">
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
          <label className="form-control flex-1">
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
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''}
            onSuccess={onVerify}
            options={{
              theme: darkMode ? 'dark' : 'light',
              language: locale,
            }}
          />
        </div>
        <SubmitButton
          disabled={!captchaVerified}
          loadingText={loadingText}
          submitBtnText={submitBtnText}
        />
      </form>
      {showMessage && <ToastInfo message={message} />}
      {showError && <ToastError error={error} />}
    </div>
  );
};
