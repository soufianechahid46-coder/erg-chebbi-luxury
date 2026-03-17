import { z } from 'zod';
import { locales } from '@/types/locale';

export const bookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  country: z.string().min(2),
  preferredLanguage: z.enum(locales),
  experienceSlug: z.string().min(2),
  preferredDate: z.string().optional().or(z.literal('')),
  checkIn: z.string().optional().or(z.literal('')),
  checkOut: z.string().optional().or(z.literal('')),
  adults: z.number().int().min(1),
  children: z.number().int().min(0),
  addons: z.array(z.string()).default([]),
  specialRequests: z.string().optional(),
  paymentMethod: z.enum(['pay_later', 'stripe', 'paypal', 'bank_transfer', 'cmi']),
  estimatedTotal: z.number().min(0)
});

export const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(10),
  preferredDate: z.string().optional()
});
