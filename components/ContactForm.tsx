'use client';

import { useEffect, useState } from 'react';
import { PiCheckCircleLight, PiWarningCircleLight } from 'react-icons/pi';
import { ZodError, z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email().min(5),
  phone: z.string().optional(),
  text: z.string().min(50),
  checkbox: z.string().optional().nullable(),
});

export const ContactForm = () => {
  const [message, setMessage] = useState<string>();
  const [error, setError] = useState<string>();

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const text = formData.get('text') as string;
    const checkbox = formData.get('checkbox') as string;

    const parsed = schema.safeParse({
      name: name,
      email: email,
      phone: phone,
      text: text,
      checkbox: checkbox,
    });

    if (!parsed.success) {
      const msg: ZodError[] = JSON.parse(parsed.error.message);
      msg.forEach((item: ZodError) => {
        setError(item.message);
      });
    } else {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, text, checkbox }),
      })
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => setError(err.error));
    }
  };

  useEffect(() => {
    if (message && error) {
      setError(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  useEffect(() => {
    if (message && error) {
      setMessage(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div>
      <form className="flex flex-col gap-4" action={handleSubmit}>
        <input
          className="input input-bordered"
          name="name"
          required
          type="text"
          placeholder="Name"
        />
        <input
          className="input input-bordered"
          name="email"
          required
          type="email"
          placeholder="Email"
        />
        <input
          className="input input-bordered"
          name="phone"
          type="tel"
          placeholder="Phone"
        />
        <textarea
          className="textarea textarea-bordered text-base textarea-md"
          name="text"
          placeholder="Tell us about your project"
          required
        ></textarea>
        <label className="cursor-pointer label w-fit gap-4">
          <span className="label-text">Send me a copy to my email</span>
          <input
            type="checkbox"
            name="checkbox"
            className="checkbox checkbox-primary"
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {message && (
        <div className="alert alert-info mt-4">
          <PiCheckCircleLight className="text-2xl" />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="alert alert-error mt-4">
          <PiWarningCircleLight className="text-2xl" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
