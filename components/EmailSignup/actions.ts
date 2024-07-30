'use server';

import { EmailFormSchema } from '@/lib/schemas';

export const submitEmailForm = async (state: any, formData: FormData) => {
  const email = formData.get('email') as string;

  const parsed = EmailFormSchema.safeParse({
    email: email,
  });

  if (!parsed.success) {
    return { error: parsed.error.format() };
  } else {
    const response = await fetch(process.env.URL + '/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);

    return { message: response };
  }
};
