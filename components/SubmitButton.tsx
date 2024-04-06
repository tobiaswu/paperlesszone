import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  disabled?: boolean;
  loadingText: string;
  submitBtnText: string;
}

export const SubmitButton = ({
  disabled,
  loadingText,
  submitBtnText,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn btn-outline"
      type="submit"
      disabled={pending || disabled}
    >
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
