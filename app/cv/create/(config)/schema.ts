import { z } from 'zod';

export const ItemSchema = z.object({
    label: z.string().min(1, { message: 'Label is required' }),
    value: z.string().min(1, { message: 'Value is required' }),
})

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

export const SkillsSchema = z.object({
    category: z.array(ItemSchema).min(1, { message: 'Category is required' }),
    group: z.string().min(1, { message: 'Group is required' }),
    skills: z.array(ItemSchema).min(1, { message: 'Skills are required' }),
})


export const CVSchema = z.object({
    bio: BIOSchema,
    skills: z.array(SkillsSchema),
})