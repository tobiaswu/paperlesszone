import { useFormStatus } from 'react-dom';

interface SubscribeButtonProps {
  loadingMsg: string;
  btnTitle: string;
}

export const SubscribeButton = ({
  loadingMsg,
  btnTitle,
}: SubscribeButtonProps) => {
  const { pending } = useFormStatus();
  
  return (
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
  );
};
