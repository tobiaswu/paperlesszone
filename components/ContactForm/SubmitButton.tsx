import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  const t = useTranslations();
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary" type="submit" disabled={pending}>
      {pending ? (
        <>
          <span className="loading loading-spinner loading-md" />
          <span>{t('state.sending')}</span>
        </>
      ) : (
        <span>{t('button.submit')}</span>
      )}
    </button>
  );
};
