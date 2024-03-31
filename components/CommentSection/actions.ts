'use server';

import { CommentFormSchema } from '@/lib/schema';

export const submitCommentForm = async (state: any, formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const website = formData.get('website') as string;
  const text = formData.get('text') as string;
  const checkbox = formData.get('checkbox') as string;

  const parsed = CommentFormSchema.safeParse({
    name: name,
    email: email,
    website: website,
    text: text,
    checkbox: checkbox,
  });

  if (!parsed.success) {
    return { error: parsed.error.format() };
  } else {
    const response = await fetch(process.env.URL + '/api/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, website, text, checkbox }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);

    return { message: response };
  }
};
