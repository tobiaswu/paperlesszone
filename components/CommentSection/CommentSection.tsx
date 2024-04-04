import { Comment } from '@/lib/types';
import { CommentForm } from './CommentForm';
import { getFormatter, getTranslations } from 'next-intl/server';

export interface CommentSectionProps {
  articleId: number;
  data: Comment[];
}

export const CommentSection = async ({
  articleId,
  data,
}: CommentSectionProps) => {
  const t = await getTranslations();
  const format = await getFormatter();

  return (
    <div>
      {data.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-semibold leading-tight pb-8">
            {t('commentSection.title')}
          </h2>

          {data.map((comment) => {
            const dateCreated = new Date(comment.createdAt);
            const formattedDateCreated = format.dateTime(dateCreated, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            });

            return (
              <div key={comment.id}>
                <div className="flex items-center pb-2">
                  <p>{comment.author.name}</p>
                  <div className="divider divider-horizontal"></div>
                  <p className="text-sm">{formattedDateCreated}</p>
                </div>
                <p>{comment.content}</p>
                <button className="btn btn-link">
                  {t('commentSection.replyBtnText')}
                </button>
              </div>
            );
          })}
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
        submitBtnText={t('commentSection.submitBtnText')}
      />
    </div>
  );
};
