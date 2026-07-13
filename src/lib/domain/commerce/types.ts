export interface Product {
	id: string;
	slug: string;
	name: string;
	subtitle: string;
	shortDescription: string;
	longDescription: string;
	priceInCents: number;
	currency: 'USD';
	image: string;
	imageAlt: string;
	quantityLabel: string;
	flavorProfile: string[];
	suggestedUses: string[];
	includedVarieties: string[];
	squareCheckoutUrl: string | null;
	active: boolean;
	featured: boolean;
	maximumPerCustomer: number;
}
export interface CropVariety {
	id: string;
	name: string;
	flavorNotes: string[];
	uses: string[];
	estimatedGrowDays: number;
	active: boolean;
}
