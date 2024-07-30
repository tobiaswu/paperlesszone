'use server';

import { ContactFormSchema } from '@/lib/schemas';

export const submitContactForm = async (state: any, formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const text = formData.get('text') as string;
  const checkbox = formData.get('checkbox') as string;

  const parsed = ContactFormSchema.safeParse({
    name: name,
    email: email,
    phone: phone,
    text: text,
    checkbox: checkbox,
  });

  if (!parsed.success) {
    return { error: parsed.error.format() };
  } else {
    const response = await fetch(process.env.URL + '/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, text, checkbox }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);

    return { message: response };
  }
};
