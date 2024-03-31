import { z } from 'zod';

export const CommentFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().min(5),
  website: z.string().optional(),
  text: z.string().min(4),
  checkbox: z.string().optional().nullable(),
});
