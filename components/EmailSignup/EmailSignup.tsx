'use client';

import Link from 'next/link';

interface EmailSignupProps {
  disclaimer: JSX.Element;
  loadingMsg: string;
  btnTitle: string;
}

export const EmailSignup = ({ btnTitle }: EmailSignupProps) => {
  // const [state, formAction] = useFormState(submitEmailForm, null);
  // const error = state?.error?.email?._errors[0];
  // const message: string | undefined = state?.message?.message;

  return (
    <div>
      {/* TODO: activate again when on beehive paid plan */}
      {/* <form action={formAction} className="sm:join">
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
      {message && (
        <div className="alert alert-info w-fit mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
      <p className="text-sm pt-8">{disclaimer}</p> */}
      <Link href="https://digitizerspace.beehiiv.com/subscribe">
        <button className="btn btn-primary w-full">{btnTitle}</button>
      </Link>
    </div>
  );
};
