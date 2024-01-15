import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().min(5),
  phone: z.string().optional(),
  text: z.string().min(50),
  checkbox: z.string().optional().nullable(),
});
