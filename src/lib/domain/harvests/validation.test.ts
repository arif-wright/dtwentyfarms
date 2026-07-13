import { describe, expect, it } from 'vitest';
import { featuredHarvest } from '$lib/data/harvests';
import { assertValidHarvestChronology, validateHarvestChronology } from './validation';

const harvest = featuredHarvest!;

describe('harvest chronology validation', () => {
	it('accepts the demonstration harvest sequence', () => {
		expect(validateHarvestChronology(harvest)).toEqual([]);
		expect(() => assertValidHarvestChronology(harvest)).not.toThrow();
	});
	it.each([
		[
			'preorder open before close',
			{ preorderOpenAt: harvest.preorderCloseAt },
			'Preorders must open'
		],
		[
			'close no later than confirmation',
			{ preorderCloseAt: '2026-08-10T11:00:00-05:00' },
			'cannot close after confirmation'
		],
		[
			'confirmation before planting',
			{ confirmationAt: harvest.estimatedPlantingAt },
			'Confirmation must happen before planting'
		],
		[
			'planting before harvest',
			{ estimatedPlantingAt: harvest.harvestAt },
			'Planting must happen before harvest'
		],
		[
			'harvest on or before pickup',
			{ pickupDate: '2026-08-20T16:30:00-05:00' },
			'Harvest must happen on or before pickup'
		]
	])('rejects an invalid %s sequence', (_name, patch, expected) => {
		const issues = validateHarvestChronology({ ...harvest, ...patch });
		expect(issues.some((issue) => issue.message.includes(expected))).toBe(true);
	});
});
