'use server';

import { CommentFormSchema } from '@/lib/schemas';
import { Comment } from '@/lib/types';
import { getLocale } from 'next-intl/server';
import { revalidateTag } from 'next/cache';
export const submitCommentForm = async (state: any, formData: FormData) => {
  const articleId = formData.get('articleId') as string;
  const articleSlug = formData.get('articleSlug') as string;
  const commentId = formData.get('commentId');
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const text = formData.get('text') as string;
  const checkbox = formData.get('checkbox') as string;
  const token = formData.get('cf-turnstile-response');

  const parsed = CommentFormSchema.safeParse({
    articleId: articleId,
    commentId: commentId,
    name: name,
    email: email,
    text: text,
    checkbox: checkbox,
  });

  if (!parsed.success) {
    return { error: parsed.error.format() };
  } else {
    const verifyRes = await fetch(process.env.URL + '/api/verify', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'content-type': 'application/json',
      },
    });

    if (verifyRes.ok) {
      const res = await fetch(process.env.URL + '/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articleId,
          commentId,
          name,
          email,
          text,
          checkbox,
        }),
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => err);

      revalidateTag(`article-${articleId}`);

      if (commentId) {
        await notifyUsers(
          Number(articleId),
          Number(commentId),
          text,
          name,
          articleSlug
        );
      }

      return { message: res };
    }
  }
};

export const getComments = async (articleId: number) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/comments/api::article.article:${articleId}`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
    next: { tags: [`article-${articleId}`] },
  };

  return await fetch(apiUrl, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

const notifyUsers = async (
  articleId: number,
  commentId: number,
  text: string,
  name: string,
  articleSlug: string
) => {
  const comments: Comment[] = await getComments(articleId);

  // find the comment with the commentId in the comments array or its children
  const findComment = (
    comments: Comment[],
    commentId: number
  ): Comment | undefined => {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].id === commentId) {
        return comments[i];
      } else if (comments[i].children) {
        const comment = findComment(comments[i].children, commentId);
        if (comment) {
          return comment;
        }
      }
    }
  };
  const comment = findComment(comments, commentId);

  // find all the authors of the thread
  if (comment) {
    const authorEmails = [comment.author.email];
    const findAuthors = (comment: Comment) => {
      if (comment.children) {
        comment.children.forEach((child) => {
          authorEmails.push(child.author.email);
          findAuthors(child);
        });
      }
    };
    findAuthors(comment);

    const uniqueEmails: string[] = authorEmails.filter(
      (email, index) => authorEmails.indexOf(email) === index
    );

    const apiUrl = `${process.env.URL}/api/notify`;
    const locale = await getLocale();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emails: uniqueEmails,
        text,
        name,
        articleSlug,
        locale,
      }),
    };

    await fetch(apiUrl, options);
  }
};
