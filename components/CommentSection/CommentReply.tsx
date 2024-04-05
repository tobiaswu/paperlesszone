'use client';

import { useState } from 'react';
import { CommentForm } from './CommentForm';

export interface CommentReplyProps {
  commentPlaceholder: string;
  id: number;
  loadingText: string;
  replyBtnText: string;
  submitBtnText: string;
  title: string;
}

export const CommentReply = ({
  commentPlaceholder,
  id,
  loadingText,
  replyBtnText,
  submitBtnText,
  title,
}: CommentReplyProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="btn btn-link p-0" onClick={() => setOpen(true)}>
        {replyBtnText}
      </button>

      {open && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-gunmetal-400 opacity-80 z-10"></div>
          <div className="fixed bg-neutral p-4 sm:p-8 z-20 border border-gunmetal-600 border-opacity-30 rounded-lg top-1/4 left-1/4 w-full sm:w-auto sm:top-1/2 sm:left-1/2 transform -translate-x-1/4 sm:-translate-x-1/2 -translate-y-1/4 sm:-translate-y-1/2 shadow-2xl">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h3 className="font-semibold text-2xl">{title}</h3>
            <CommentForm
              articleId={5}
              commentId={id}
              commentPlaceholder={commentPlaceholder}
              loadingText={loadingText}
              submitBtnText={submitBtnText}
            />
          </div>
        </>
      )}
    </div>
  );
};
