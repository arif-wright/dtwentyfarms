import { error } from '@sveltejs/kit';
import { getHarvestBySlug } from '$lib/data/harvests';
export function load({ params }) {
	const harvest = getHarvestBySlug(params.slug);
	if (!harvest) error(404, 'Harvest not found');
	return { harvest };
}
