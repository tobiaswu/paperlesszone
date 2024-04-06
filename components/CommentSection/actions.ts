'use server';

import { CommentFormSchema } from '@/lib/schema';
import { revalidateTag } from 'next/cache';

export const submitCommentForm = async (state: any, formData: FormData) => {
  const articleId = formData.get('articleId') as string;
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
