import type { HarvestRelease } from './types';

export type HarvestChronologyField =
	| 'preorderOpenAt'
	| 'preorderCloseAt'
	| 'confirmationAt'
	| 'estimatedPlantingAt'
	| 'harvestAt'
	| 'pickupDate';

export interface HarvestChronologyIssue {
	field: HarvestChronologyField;
	message: string;
}

const timestamp = (value: string) => new Date(value).getTime();

export function validateHarvestChronology(harvest: HarvestRelease): HarvestChronologyIssue[] {
	const open = timestamp(harvest.preorderOpenAt);
	const close = timestamp(harvest.preorderCloseAt);
	const confirmation = timestamp(harvest.confirmationAt);
	const planting = timestamp(harvest.estimatedPlantingAt);
	const harvestAt = timestamp(harvest.harvestAt);
	const pickup = timestamp(harvest.pickupDate);
	const issues: HarvestChronologyIssue[] = [];
	const values: Array<[HarvestChronologyField, number]> = [
		['preorderOpenAt', open],
		['preorderCloseAt', close],
		['confirmationAt', confirmation],
		['estimatedPlantingAt', planting],
		['harvestAt', harvestAt],
		['pickupDate', pickup]
	];
	for (const [field, value] of values) {
		if (!Number.isFinite(value))
			issues.push({ field, message: `${field} must be a valid ISO date.` });
	}
	if (issues.length) return issues;
	if (open >= close)
		issues.push({ field: 'preorderOpenAt', message: 'Preorders must open before they close.' });
	if (close > confirmation)
		issues.push({
			field: 'preorderCloseAt',
			message: 'Preorders cannot close after confirmation.'
		});
	if (confirmation >= planting)
		issues.push({ field: 'confirmationAt', message: 'Confirmation must happen before planting.' });
	if (planting >= harvestAt)
		issues.push({ field: 'estimatedPlantingAt', message: 'Planting must happen before harvest.' });
	if (harvestAt > pickup)
		issues.push({ field: 'harvestAt', message: 'Harvest must happen on or before pickup.' });
	return issues;
}

export function assertValidHarvestChronology(harvest: HarvestRelease): void {
	const issues = validateHarvestChronology(harvest);
	if (issues.length)
		throw new Error(
			`Invalid chronology for harvest “${harvest.slug}”: ${issues.map((issue) => issue.message).join(' ')}`
		);
}
