import { z } from 'zod';

export const secondFormSchema = z.object({
  email: z.string().min(1, 'Enter your email address').email('Incorrect email address'),

  password: z.string().min(5, 'Enter your last name'),
});

export type FormFields = z.infer<typeof secondFormSchema>;
