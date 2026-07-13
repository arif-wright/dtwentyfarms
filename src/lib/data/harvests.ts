import type { HarvestRelease } from '$lib/domain/harvests/types';
import { products } from '$lib/data/products';
import { assertValidHarvestChronology } from '$lib/domain/harvests/validation';

// Demonstration content only. Replace dates and checkout URLs before launch.
export const harvests: HarvestRelease[] = [
	{
		id: 'demo-august',
		slug: 'august-table-harvest',
		title: 'August Table Harvest',
		subtitle: 'A small first release for everyday meals',
		status: 'upcoming',
		description:
			'A two-product release featuring a balanced rotation of crisp, peppery, and mild microgreens.',
		preorderOpenAt: '2026-08-03T14:00:00-05:00',
		preorderCloseAt: '2026-08-09T20:00:00-05:00',
		confirmationAt: '2026-08-10T10:00:00-05:00',
		estimatedPlantingAt: '2026-08-10T12:00:00-05:00',
		harvestAt: '2026-08-21T08:00:00-05:00',
		pickupDate: '2026-08-21T16:30:00-05:00',
		pickupWindow: '4:30–6:30 PM',
		minimumReservations: 8,
		maximumReservations: 16,
		currentReservations: 0,
		publicPickupArea: 'Cloud Trails area of Boerne',
		courierAllowed: true,
		checkoutMode: 'unavailable',
		products,
		notes: [
			'Orders close at the cutoff or when capacity is reached.',
			'After orders close, customers receive confirmation if the minimum is reached. If it is not, customers are notified and refunded through Square during the initial release.'
		],
		featured: true,
		published: true,
		demonstration: true
	}
];

if (import.meta.env.DEV) {
	harvests.forEach(assertValidHarvestChronology);
}
export const featuredHarvest =
	harvests.find((harvest) => harvest.featured && harvest.published) ?? null;
export const getHarvestBySlug = (slug: string) =>
	harvests.find((harvest) => harvest.slug === slug && harvest.published);
