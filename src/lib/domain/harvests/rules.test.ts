import { describe, expect, it } from 'vitest';
import { featuredHarvest } from '$lib/data/harvests';
import {
	canCheckout,
	checkoutLabel,
	hasValidCheckoutUrl,
	isSoldOut,
	isThresholdMet,
	reservationProgress,
	statusLabel
} from './rules';
const harvest = featuredHarvest!;
const product = harvest.products[0];
describe('harvest rules', () => {
	it('presents every harvest status', () => {
		expect(statusLabel.upcoming).toBe('Opens soon');
		expect(statusLabel['threshold-met']).toBe('Harvest confirmed');
		expect(Object.keys(statusLabel)).toHaveLength(6);
	});
	it('calculates bounded reservation progress', () => {
		expect(reservationProgress({ ...harvest, currentReservations: 8 })).toBe(50);
		expect(reservationProgress({ ...harvest, currentReservations: 99 })).toBe(100);
	});
	it('detects thresholds and sold-out releases', () => {
		expect(isThresholdMet({ ...harvest, currentReservations: 8 })).toBe(true);
		expect(isSoldOut({ ...harvest, currentReservations: 16 })).toBe(true);
		expect(isSoldOut({ ...harvest, status: 'sold-out' })).toBe(true);
	});
	it('requires an active product, open release, mode, and valid https URL', () => {
		const configured = { ...product, squareCheckoutUrl: 'https://square.link/u/example' };
		const open = { ...harvest, status: 'open' as const, checkoutMode: 'square-link' as const };
		expect(hasValidCheckoutUrl(configured)).toBe(true);
		expect(canCheckout(open, configured)).toBe(true);
		expect(canCheckout(open, { ...configured, active: false })).toBe(false);
		expect(canCheckout({ ...open, status: 'sold-out' }, configured)).toBe(false);
	});
	it('uses honest checkout labels', () => {
		expect(checkoutLabel(harvest, product)).toBe('Checkout coming soon');
		expect(checkoutLabel({ ...harvest, status: 'sold-out' }, product)).toBe('Sold out');
	});
});
