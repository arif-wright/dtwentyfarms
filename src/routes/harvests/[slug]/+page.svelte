<script lang="ts">
	import ProductCard from '$lib/components/commerce/ProductCard.svelte';
	import HarvestStatusBadge from '$lib/components/harvest/HarvestStatusBadge.svelte';
	import HarvestDates from '$lib/components/harvest/HarvestDates.svelte';
	import ReservationMeter from '$lib/components/harvest/ReservationMeter.svelte';
	import FulfillmentCards from '$lib/components/commerce/FulfillmentCards.svelte';
	let { data } = $props();
	const harvest = $derived(data.harvest);
	const timeline = [
		['Reserve', 'Choose and pay through Square when checkout opens.'],
		[
			'Evaluate',
			'After orders close, we confirm the harvest if the minimum is reached. If not, we notify customers and issue refunds through Square.'
		],
		['Plant', 'Crops are planted after customers receive harvest confirmation.'],
		['Grow', 'The shared crop batches are tended indoors.'],
		['Harvest', 'Boxes are cut and packed for the listed date.'],
		['Pick up', 'Collect during the scheduled window.']
	];
</script>

<svelte:head
	><title>{harvest.title} | D-Twenty Farms</title><meta
		name="description"
		content={harvest.description}
	/><link rel="canonical" href="https://dtwentyfarms.com/harvests/{harvest.slug}" /></svelte:head
>
<section class="detail-head">
	<div class="container">
		<HarvestStatusBadge status={harvest.status} />
		<p class="eyebrow">{harvest.subtitle}</p>
		<h1 class="page-title">{harvest.title}</h1>
		<p class="lede">{harvest.description}</p>
		<aside>
			<strong>Demonstration release</strong> These dates and products are plausible preview data, not
			a live offer or evidence of customer demand.
		</aside>
	</div>
</section>
<section class="section info">
	<div class="container info-grid">
		<div>
			<p class="eyebrow">Release details</p>
			<h2 class="section-title">The dates that matter.</h2>
		</div>
		<div>
			<HarvestDates {harvest} /><ReservationMeter {harvest} />
			<p>
				Orders close at the listed cutoff or when maximum capacity is reached. After orders close,
				customers receive confirmation if the minimum is reached. If it is not, customers are
				notified and refunded through Square during the initial release.
			</p>
		</div>
	</div>
</section>
<section class="section products-section">
	<div class="container">
		<p class="eyebrow">This release</p>
		<h2 class="section-title">Two ways to bring home the harvest.</h2>
		<div class="products">
			{#each harvest.products as product}<ProductCard {product} {harvest} />{/each}
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
		<p class="eyebrow">From reservation to pickup</p>
		<h2 class="section-title">A clear growing timeline.</h2>
		<ol class="timeline">
			{#each timeline as item, i}<li>
					<span>{i + 1}</span>
					<div>
						<h3>{item[0]}</h3>
						<p>{item[1]}</p>
					</div>
				</li>{/each}
		</ol>
	</div>
</section>
<section class="section fulfill">
	<div class="container">
		<p class="eyebrow">Pickup policy</p>
		<h2 class="section-title">Fulfillment stays focused.</h2>
		<FulfillmentCards />
	</div>
</section>

<style>
	.detail-head {
		padding: 5rem 0;
		background: radial-gradient(
			circle at 80% 20%,
			color-mix(in oklch, var(--color-radish) 16%, transparent),
			transparent 30%
		);
	}
	.detail-head h1 {
		margin: 0.75rem 0 1.25rem;
	}
	.detail-head > .container {
		display: grid;
		gap: 0.7rem;
	}
	.detail-head aside {
		max-width: 700px;
		margin-top: 1rem;
		padding: 1rem;
		border-left: 4px solid var(--color-harvest);
		background: var(--surface-muted);
	}
	.info {
		background: var(--color-canopy);
		color: white;
	}
	.info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}
	.info :global(dt),
	.info :global(small),
	.info p {
		color: color-mix(in oklch, white 70%, transparent);
	}
	.info :global(dl),
	.info :global(dl div) {
		border-color: color-mix(in oklch, white 20%, transparent);
	}
	.products-section {
		background: var(--surface-muted);
	}
	.products {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-top: 2rem;
	}
	.timeline {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		list-style: none;
		padding: 0;
		margin-top: 2rem;
	}
	.timeline li {
		display: flex;
		gap: 1rem;
		padding: 1.25rem;
		border-top: 1px solid var(--border);
	}
	.timeline span {
		display: grid;
		place-items: center;
		flex: none;
		width: 2.2rem;
		height: 2.2rem;
		border-radius: 50%;
		background: var(--color-harvest);
		font-weight: 800;
	}
	.timeline h3 {
		margin: 0;
		font: 600 1.25rem var(--font-display);
	}
	.timeline p {
		color: var(--text-secondary);
	}
	.fulfill {
		background: var(--surface-muted);
	}
	@media (max-width: 760px) {
		.info-grid,
		.products,
		.timeline {
			grid-template-columns: 1fr;
		}
	}
</style>
