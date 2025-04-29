import { z } from 'zod';

export const BIOSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    surname: z.string().min(1, { message: 'Surname is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string(),
    city: z.string(),
    country: z.string(),
    post_code: z.string().regex(/^\d{5}$/, { message: 'Invalid postal code' }),
    github: z.string().url({ message: 'Invalid URL' }),
    linkedin: z.string().url({ message: 'Invalid URL' }),
    website: z.string().url({ message: 'Invalid URL' }).optional(),
})

export const CVSchema = z.object({
    bio: BIOSchema,
})