<script lang="ts">
	import type { HarvestRelease } from '$lib/domain/harvests/types';
	import { reservationProgress } from '$lib/domain/harvests/rules';
	let { harvest }: { harvest: HarvestRelease } = $props();
	const progress = $derived(reservationProgress(harvest));
</script>

<div class="meter">
	<div class="labels">
		<strong>Reservation model</strong><span
			>{harvest.minimumReservations} minimum / {harvest.maximumReservations} maximum</span
		>
	</div>
	<div
		class="track"
		role="progressbar"
		aria-label="Demonstration reservation progress"
		aria-valuenow={progress}
		aria-valuemin="0"
		aria-valuemax="100"
	>
		<span style:width="{progress}%"></span><i
			style:left="{(harvest.minimumReservations / harvest.maximumReservations) * 100}%"
		></i>
	</div>
	{#if harvest.demonstration}<small>Preview release — no live customer demand is shown.</small>{/if}
</div>

<style>
	.meter {
		display: grid;
		gap: 0.55rem;
	}
	.labels {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 0.82rem;
	}
	.labels span,
	small {
		color: var(--text-muted);
	}
	.track {
		position: relative;
		height: 0.6rem;
		border-radius: 999px;
		background: var(--surface-muted);
		overflow: hidden;
	}
	.track span {
		display: block;
		height: 100%;
		background: var(--color-sprout);
	}
	.track i {
		position: absolute;
		top: 0;
		width: 2px;
		height: 100%;
		background: var(--color-ink);
	}
</style>
