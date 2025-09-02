import { z } from 'zod';

export const formSchema = z.object({
  amount: z.string(),
  lastName: z
    .string()
    .min(1, 'Enter your last name')
    .regex(/^[A-ZА-Я][a-zа-я]*$/, 'Incorrect last name'),

  firstName: z
    .string()
    .min(1, 'Enter your first name')
    .regex(/^[A-Za-zА-Яа-яЁё\s-]+$/, 'Incorrect first name'),

  email: z.string().min(1, 'Enter your email address').email('Incorrect email address'),

  password: z
    .string()
    .min(1, 'Enter your last name')
    .regex(/^[A-ZА-Я][a-zа-я]*$/, 'Incorrect last name'),
});

export type FormFields = z.infer<typeof formSchema>;
