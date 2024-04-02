import { z } from 'zod';

export const CommentFormSchema = z.object({
  articleId: z.string(),
  name: z.string().min(2),
  email: z.string().email().min(5),
  text: z.string().min(4),
  checkbox: z.string().optional().nullable(),
});
