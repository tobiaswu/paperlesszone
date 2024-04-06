import { Comment } from '@/lib/types';
import { CommentForm } from './CommentForm';
import { getLocale, getTranslations } from 'next-intl/server';
import { CommentThread } from './CommentThread';

export interface CommentSectionProps {
  articleId: number;
  data: Comment[];
}

export const CommentSection = async ({
  articleId,
  data,
}: CommentSectionProps) => {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <div>
      {data.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-semibold leading-tight pb-8">
            {t('commentSection.title')}
          </h2>

          {data.map((comment) => (
            <div key={comment.id}>
              <CommentThread comment={comment} />
              <div className="divider"></div>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-3xl font-semibold leading-tight pb-8">
        {t('commentSection.formTitle')}
      </h2>
      <p className="label-text">{t('commentSection.note')}</p>
      <CommentForm
        articleId={articleId}
        commentPlaceholder={t('commentSection.commentPlaceholder')}
        loadingText={t('state.sending')}
        locale={locale}
        submitBtnText={t('commentSection.submitBtnText')}
      />
    </div>
  );
};
