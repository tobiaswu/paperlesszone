import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  loadingText: string;
  submitBtnText: string;
}

export const SubmitButton = ({
  loadingText,
  submitBtnText,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-outline" type="submit" disabled={pending}>
      {pending ? (
        <>
          <span className="loading loading-spinner loading-md" />
          <span>{loadingText}</span>
        </>
      ) : (
        <span>{submitBtnText}</span>
      )}
    </button>
  );
};
