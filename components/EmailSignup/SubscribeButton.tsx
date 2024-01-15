import { Dictionary } from '@/lib/types';
import { useFormStatus } from 'react-dom';

export interface SubscribeButtonProps {
  dict: Dictionary;
}

export const SubscribeButton = ({ dict }: SubscribeButtonProps) => {
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
          <span>{dict.state.sending}</span>
        </>
      ) : (
        <span>{dict.button.subscribe}</span>
      )}
    </button>
  );
};
