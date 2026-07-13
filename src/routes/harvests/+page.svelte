<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import HarvestCard from '$lib/components/harvest/HarvestCard.svelte';
	import { harvests } from '$lib/data/harvests';
	const current = harvests.filter((h) =>
		['open', 'threshold-met', 'sold-out', 'upcoming'].includes(h.status)
	);
	const completed = harvests.filter((h) => h.status === 'completed');
</script>

<svelte:head
	><title>Harvest Releases | D-Twenty Farms</title><meta
		name="description"
		content="See current and upcoming grow-to-order microgreen harvest releases in Boerne."
	/><link rel="canonical" href="https://dtwentyfarms.com/harvests" /></svelte:head
>
<PageHeader
	eyebrow="Harvest releases"
	title="Small menus. Specific dates."
	intro="Each release is its own growing plan: a focused menu, a reservation threshold, a capacity limit, and one scheduled pickup window."
/>
<section class="section listing">
	<div class="container">
		<h2 class="section-title">Current & upcoming</h2>
		{#if current.length}<div class="grid">
				{#each current as harvest}<HarvestCard {harvest} />{/each}
			</div>{:else}<div class="empty">
				<h3>No release is open right now.</h3>
				<p>Join the harvest list on the homepage for the next announcement.</p>
			</div>{/if}
		<h2 class="section-title archive">Past harvests</h2>
		{#if completed.length}<div class="grid">
				{#each completed as harvest}<HarvestCard {harvest} />{/each}
			</div>{:else}<div class="empty">
				<h3>The archive starts after our first completed release.</h3>
				<p>No fictional harvest history is shown.</p>
			</div>{/if}
	</div>
</section>

<style>
	.listing {
		padding-top: 2rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-top: 1.5rem;
	}
	.archive {
		margin-top: 4rem;
	}
	.empty {
		margin-top: 1.5rem;
		padding: 2rem;
		border: 1px dashed var(--border-strong);
		border-radius: 1rem;
	}
	.empty h3 {
		font: 600 1.4rem var(--font-display);
	}
	.empty p {
		color: var(--text-secondary);
	}
	@media (max-width: 760px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
