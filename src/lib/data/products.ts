import type { CropVariety, Product } from '$lib/domain/commerce/types';

export const cropVarieties: CropVariety[] = [
	{
		id: 'radish',
		name: 'Radish',
		flavorNotes: ['peppery', 'crisp'],
		uses: ['tacos', 'sandwiches'],
		estimatedGrowDays: 10,
		active: true
	},
	{
		id: 'broccoli',
		name: 'Broccoli',
		flavorNotes: ['mild', 'fresh'],
		uses: ['eggs', 'salads'],
		estimatedGrowDays: 11,
		active: true
	},
	{
		id: 'pea',
		name: 'Pea Shoots',
		flavorNotes: ['sweet', 'tender'],
		uses: ['bowls', 'burgers'],
		estimatedGrowDays: 12,
		active: true
	}
];
export const products: Product[] = [
	{
		id: 'critical-roll',
		slug: 'critical-roll-sampler',
		name: 'Critical Roll Sampler',
		subtitle: 'A bright three-variety introduction',
		shortDescription: 'A rotating sampler built for easy everyday finishing.',
		longDescription:
			'Three complementary microgreen varieties selected from the harvest rotation for contrast in color, flavor, and texture.',
		priceInCents: 1800,
		currency: 'USD',
		image: '/images/critical-roll.svg',
		imageAlt: 'Illustrated bowl of colorful microgreens',
		quantityLabel: 'Three 1.5 oz portions',
		flavorProfile: ['peppery', 'mild', 'sweet'],
		suggestedUses: ['breakfast tacos', 'sandwiches', 'salads'],
		includedVarieties: ['Radish', 'Broccoli', 'Pea shoots'],
		squareCheckoutUrl: null,
		active: true,
		featured: true,
		maximumPerCustomer: 2
	},
	{
		id: 'weekly-box',
		slug: 'weekly-harvest-box',
		name: 'Weekly Harvest Box',
		subtitle: 'A generous mix for the week',
		shortDescription: 'A practical rotation of freshly cut greens for several meals.',
		longDescription:
			'A grower-selected mix of the week’s best varieties, portioned for tacos, eggs, sandwiches, salads, and bowls.',
		priceInCents: 2400,
		currency: 'USD',
		image: '/images/weekly-box.svg',
		imageAlt: 'Illustrated harvest box filled with fresh microgreens',
		quantityLabel: 'Approximately 6 oz total',
		flavorProfile: ['fresh', 'crisp', 'balanced'],
		suggestedUses: ['eggs', 'burgers', 'rice bowls'],
		includedVarieties: ['Seasonal rotation of 2–3 varieties'],
		squareCheckoutUrl: null,
		active: true,
		featured: true,
		maximumPerCustomer: 2
	}
];
