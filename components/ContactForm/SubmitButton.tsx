import { Dictionary } from '@/lib/types';
import { useFormStatus } from 'react-dom';

export interface SubmitButtonProps {
  dict: Dictionary;
}

export const SubmitButton = ({ dict }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary" type="submit" disabled={pending}>
      {pending ? (
        <>
          <span className="loading loading-spinner loading-md" />
          <span>{dict.state.sending}</span>
        </>
      ) : (
        <span>{dict.button.submit}</span>
      )}
    </button>
  );
};
