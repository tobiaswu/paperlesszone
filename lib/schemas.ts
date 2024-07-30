import { z } from 'zod';

export const CommentFormSchema = z.object({
  articleId: z.string(),
  commentId: z.string().optional().nullable(),
  name: z.string().min(2),
  email: z.string().email().min(5),
  text: z.string().min(4),
  checkbox: z.string().optional().nullable(),
});

export const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().min(5),
  phone: z.string().optional(),
  text: z.string().min(50),
  checkbox: z.string().optional().nullable(),
});

export const EmailFormSchema = z.object({
  email: z.string().email().min(5),
});
