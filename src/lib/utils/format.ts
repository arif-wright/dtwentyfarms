export const formatPrice = (cents: number, currency = 'USD') =>
	new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100);
export const formatDate = (value: string, options: Intl.DateTimeFormatOptions = {}) =>
	new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'America/Chicago',
		...options
	}).format(new Date(value));
