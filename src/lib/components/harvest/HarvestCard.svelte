<script lang="ts">
	import type { HarvestRelease } from '$lib/domain/harvests/types';
	import HarvestStatusBadge from './HarvestStatusBadge.svelte';
	import HarvestDates from './HarvestDates.svelte';
	import ReservationMeter from './ReservationMeter.svelte';
	let { harvest }: { harvest: HarvestRelease } = $props();
</script>

<article class="card harvest">
	<HarvestStatusBadge status={harvest.status} />
	<div>
		<p class="eyebrow">{harvest.subtitle}</p>
		<h2>{harvest.title}</h2>
		<p>{harvest.description}</p>
	</div>
	<HarvestDates {harvest} /><ReservationMeter {harvest} /><a
		class="btn btn-primary"
		href="/harvests/{harvest.slug}">View harvest</a
	>
</article>

<style>
	.harvest {
		display: grid;
		gap: 1.25rem;
		padding: 1.5rem;
	}
	.harvest h2 {
		margin: 0.3rem 0;
		font: 600 2rem/1 var(--font-display);
	}
	.harvest p {
		margin: 0.4rem 0;
		color: var(--text-secondary);
	}
</style>
