import type { Product } from '$lib/domain/commerce/types';

export type HarvestStatus =
	'upcoming' | 'open' | 'threshold-met' | 'sold-out' | 'canceled' | 'completed';
export type CheckoutMode = 'unavailable' | 'square-link' | 'future-native';
export interface HarvestRelease {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	status: HarvestStatus;
	description: string;
	preorderOpenAt: string;
	preorderCloseAt: string;
	confirmationAt: string;
	estimatedPlantingAt: string;
	harvestAt: string;
	pickupDate: string;
	pickupWindow: string;
	minimumReservations: number;
	maximumReservations: number;
	currentReservations: number;
	publicPickupArea: string;
	courierAllowed: boolean;
	checkoutMode: CheckoutMode;
	products: Product[];
	notes: string[];
	featured: boolean;
	published: boolean;
	demonstration: boolean;
}
