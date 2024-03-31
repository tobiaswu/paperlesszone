'use client';

import { PiCheckCircleLight } from 'react-icons/pi';
import { SubmitButton } from '../SubmitButton';
import { useFormState } from 'react-dom';
import { submitCommentForm } from './actions';

export interface CommentSectionProps {
  title: string;
  note: string;
  commentPlaceholder: string;
  checkboxLabel: string;
  loadingText: string;
  submitBtnText: string;
}

export const CommentSection = ({
  title,
  note,
  commentPlaceholder,
  checkboxLabel,
  loadingText,
  submitBtnText,
}: CommentSectionProps) => {
  const [state, formAction] = useFormState(submitCommentForm, null);

  const nameError = state?.error?.name?._errors[0];
  const emailError = state?.error?.email?._errors[0];
  const websiteError = state?.error?.website?._errors[0];
  const textError = state?.error?.text?._errors[0];
  const checkboxError = state?.error?.checkbox?._errors[0];
  const message: string | undefined = state?.message?.message;

  // Name
  // Datum mit Uhrzeit
  // Nachricht
  // Antworten button -> thread

  return (
    <div>
      <h2 className="text-3xl font-semibold leading-tight pb-8">{title}</h2>
      <p className="label-text">{note}</p>

      <form className="flex flex-col gap-4 pt-4" action={formAction}>
        <label className="form-control">
          <textarea
            className={`${
              textError && 'textarea-error'
            } textarea textarea-bordered text-base textarea-md`}
            name="text"
            placeholder={commentPlaceholder}
            required
          />
          {textError && (
            <div className="label">
              <span className="label-text-alt text-error">{textError}</span>
            </div>
          )}
        </label>

        <div className="flex gap-4">
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
          <label className="form-control flex-1">
            <input
              className={`${
                websiteError && 'input-error'
              } input input-bordered`}
              name="website"
              type="url"
              placeholder="Website"
            />
            {websiteError && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {websiteError}
                </span>
              </div>
            )}
          </label>
        </div>
        <label className="form-control">
          <label className="cursor-pointer label w-fit gap-4">
            <span className={`${checkboxError && 'text-error'} label-text`}>
              {checkboxLabel}
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
      {message && (
        <div className="alert alert-info mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};
