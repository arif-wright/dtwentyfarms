import { describe, expect, it } from 'vitest';
import { formatDate, formatPrice } from './format';
describe('format utilities', () => {
	it('formats USD prices', () => expect(formatPrice(1800)).toBe('$18.00'));
	it('formats Central dates consistently', () =>
		expect(formatDate('2026-08-21T08:00:00-05:00')).toBe('August 21, 2026'));
});
