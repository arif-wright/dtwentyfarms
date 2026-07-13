<script lang="ts">
	import type { HarvestRelease } from '$lib/domain/harvests/types';
	import { formatDate } from '$lib/utils/format';
	let { harvest }: { harvest: HarvestRelease } = $props();
</script>

<dl>
	<div>
		<dt>Harvest</dt>
		<dd>{formatDate(harvest.harvestAt)}</dd>
	</div>
	<div>
		<dt>Order cutoff</dt>
		<dd>{formatDate(harvest.preorderCloseAt)}</dd>
	</div>
	<div>
		<dt>Pickup</dt>
		<dd>{formatDate(harvest.pickupDate)} · {harvest.pickupWindow}</dd>
	</div>
	<div>
		<dt>Capacity</dt>
		<dd>Minimum {harvest.minimumReservations} · Maximum {harvest.maximumReservations}</dd>
	</div>
</dl>

<style>
	dl {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 0;
		border-top: 1px solid var(--border);
	}
	div {
		padding: 1rem 0;
		border-bottom: 1px solid var(--border);
	}
	div:nth-child(odd) {
		padding-right: 1rem;
	}
	dt {
		font-size: 0.7rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.11em;
		color: var(--text-muted);
	}
	dd {
		margin: 0.25rem 0 0;
		font-weight: 700;
	}
	@media (max-width: 520px) {
		dl {
			grid-template-columns: 1fr;
		}
		div:nth-child(odd) {
			padding-right: 0;
		}
	}
</style>
