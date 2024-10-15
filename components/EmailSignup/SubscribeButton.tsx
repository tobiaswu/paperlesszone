import { useFormStatus } from 'react-dom';

interface SubscribeButtonProps {
  loadingMsg: string;
  btnTitle: string;
  badgeText?: string;
}

export const SubscribeButton = ({
  loadingMsg,
  btnTitle,
  badgeText,
}: SubscribeButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <div className="indicator">
      {badgeText && (
        <span className="indicator-item badge badge-accent text-xs">
          {badgeText}
        </span>
      )}
      <button
        type="submit"
        className="btn btn-primary w-full sm:w-fit join-item"
        disabled={pending}
      >
        {pending ? (
          <>
            <span className="loading loading-spinner loading-md" />
            <span>{loadingMsg}</span>
          </>
        ) : (
          <span>{btnTitle}</span>
        )}
      </button>
    </div>
  );
};
