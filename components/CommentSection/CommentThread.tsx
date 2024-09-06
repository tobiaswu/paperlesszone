import { Comment } from '@/lib/types';
import { CommentReply } from './CommentReply';
import { getFormatter, getLocale, getTranslations } from 'next-intl/server';

export interface CommentThreadProps {
  articleId: number;
  articleSlug: string;
  comment: Comment;
  depth?: number;
}

export const CommentThread = async ({
  articleId,
  articleSlug,
  comment,
  depth = 0,
}: CommentThreadProps) => {
  const t = await getTranslations();
  const format = await getFormatter();
  const locale = await getLocale();
  const dateCreated = new Date(comment.createdAt);
  const formattedDateCreated = format.dateTime(dateCreated, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div
      className={depth > 0 ? 'pl-6 border-l-2 border-neutral' : ''}
      key={comment.id}
    >
      <div className="flex items-center pb-2">
        <p>{comment.author.name}</p>
        <div className="divider divider-horizontal"></div>
        <p className="text-sm">{formattedDateCreated}</p>
      </div>
      <p className="text-base">{comment.content}</p>
      <CommentReply
        articleId={articleId}
        articleSlug={articleSlug}
        commentId={comment.id}
        commentPlaceholder={t('commentSection.commentPlaceholder')}
        loadingText={t('state.sending')}
        locale={locale}
        replyBtnText={t('commentSection.replyBtnText')}
        submitBtnText={t('commentSection.submitBtnText')}
        title={t('commentSection.replyDialogTitle', {
          user: comment.author.name,
        })}
      />
      {comment.gotThread &&
        comment.children.map((child) => (
          <CommentThread
            articleId={articleId}
            articleSlug={articleSlug}
            key={child.id}
            comment={child}
            depth={depth + 1}
          />
        ))}
    </div>
  );
};
