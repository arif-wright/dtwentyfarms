import { z } from 'zod';
export const emailSignupSchema = z.object({ email: z.email('Enter a valid email address.') });
export const contactSchema = z.object({
	name: z.string().trim().min(2, 'Enter your name.'),
	email: z.email('Enter a valid email address.'),
	category: z.enum([
		'existing-order',
		'upcoming-harvest',
		'courier-pickup',
		'specialty-preorder',
		'general'
	]),
	message: z.string().trim().min(10, 'Tell us a little more (at least 10 characters).').max(2000)
});
