import type { Product } from '$lib/domain/commerce/types';
import type { HarvestRelease, HarvestStatus } from './types';
export const statusLabel: Record<HarvestStatus, string> = {
	upcoming: 'Opens soon',
	open: 'Open for preorder',
	'threshold-met': 'Harvest confirmed',
	'sold-out': 'Sold out',
	canceled: 'Canceled',
	completed: 'Completed'
};
export const reservationProgress = (harvest: HarvestRelease) =>
	Math.min(
		100,
		Math.max(0, Math.round((harvest.currentReservations / harvest.maximumReservations) * 100))
	);
export const isThresholdMet = (harvest: HarvestRelease) =>
	harvest.currentReservations >= harvest.minimumReservations;
export const isSoldOut = (harvest: HarvestRelease) =>
	harvest.status === 'sold-out' || harvest.currentReservations >= harvest.maximumReservations;
export const hasValidCheckoutUrl = (product: Product) => {
	if (!product.squareCheckoutUrl) return false;
	try {
		const url = new URL(product.squareCheckoutUrl);
		return url.protocol === 'https:' && url.hostname.length > 0;
	} catch {
		return false;
	}
};
export const canCheckout = (harvest: HarvestRelease, product: Product) =>
	harvest.checkoutMode === 'square-link' &&
	harvest.status === 'open' &&
	product.active &&
	hasValidCheckoutUrl(product) &&
	!isSoldOut(harvest);
export const checkoutLabel = (harvest: HarvestRelease, product: Product) => {
	if (isSoldOut(harvest)) return 'Sold out';
	if (harvest.status === 'upcoming') return 'Checkout coming soon';
	if (harvest.status === 'canceled' || harvest.status === 'completed')
		return 'Checkout unavailable';
	return canCheckout(harvest, product) ? 'Reserve through Square' : 'Checkout coming soon';
};
