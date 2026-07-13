<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import ProductCard from '$lib/components/commerce/ProductCard.svelte';
	import HarvestStatusBadge from '$lib/components/harvest/HarvestStatusBadge.svelte';
	import HarvestDates from '$lib/components/harvest/HarvestDates.svelte';
	import ReservationMeter from '$lib/components/harvest/ReservationMeter.svelte';
	import FulfillmentCards from '$lib/components/commerce/FulfillmentCards.svelte';
	import { featuredHarvest } from '$lib/data/harvests';
</script>

<svelte:head
	><title>Shop the Next Harvest | D-Twenty Farms</title><meta
		name="description"
		content="Reserve a small-batch microgreen box for a future D-Twenty Farms harvest in Boerne."
	/><link rel="canonical" href="https://dtwentyfarms.com/shop" /></svelte:head
>
<PageHeader
	eyebrow="The storefront"
	title="Choose your harvest box."
	intro="This is a preorder for a future harvest—not immediately available inventory. Every release has a cutoff, a minimum threshold, and a firm production limit."
/>
{#if featuredHarvest}<section class="section shop">
		<div class="container">
			<aside class="preview" role="note">
				<strong>Preview release</strong><span
					>The dates and availability below are demonstration content. Checkout is not connected.</span
				>
			</aside>
			<div class="context">
				<div>
					<HarvestStatusBadge status={featuredHarvest.status} />
					<h2>{featuredHarvest.title}</h2>
					<p>{featuredHarvest.description}</p>
				</div>
				<div>
					<HarvestDates harvest={featuredHarvest} /><ReservationMeter harvest={featuredHarvest} />
				</div>
			</div>
			<div class="products">
				{#each featuredHarvest.products.filter((p) => p.active) as product}<ProductCard
						{product}
						harvest={featuredHarvest}
					/>{/each}
			</div>
			<div class="square">
				<strong>Secure checkout, when enabled</strong>
				<p>
					Orders will initially be completed securely through Square-hosted checkout. No payment
					details are collected by this website. Checkout links have not yet been configured.
				</p>
			</div>
		</div>
	</section>
	<section class="section policies">
		<div class="container">
			<p class="eyebrow">Before you reserve</p>
			<h2 class="section-title">Clear terms for a small harvest.</h2>
			<div class="policy-grid">
				<article>
					<h3>Threshold policy</h3>
					<p>
						A minimum of {featuredHarvest.minimumReservations} paid reservations is required. After orders
						close, customers receive confirmation if the minimum is reached. If it is not, customers are
						notified and refunded through Square during the initial release.
					</p>
				</article>
				<article>
					<h3>Capacity</h3>
					<p>
						Production closes at {featuredHarvest.maximumReservations} boxes or at the published cutoff,
						whichever comes first. No live reservation count is displayed in this preview.
					</p>
				</article>
				<article>
					<h3>Quality policy</h3>
					<p>
						Perishable products cannot be returned. Report damage or a quality issue within 24 hours
						with a photo for review.
					</p>
				</article>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="container">
			<p class="eyebrow">Fulfillment</p>
			<h2 class="section-title">One controlled pickup window.</h2>
			<FulfillmentCards />
		</div>
	</section>{/if}

<style>
	.shop {
		padding-top: 2rem;
	}
	.preview {
		display: flex;
		gap: 1rem;
		margin-bottom: 1.5rem;
		padding: 1rem;
		border-left: 4px solid var(--color-harvest);
		background: var(--surface-muted);
	}
	.context {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		padding: 2rem;
		border-radius: 1.5rem;
		background: var(--color-canopy);
		color: white;
	}
	.context h2 {
		margin: 0.7rem 0;
		font: 600 2.5rem/1 var(--font-display);
	}
	.context p {
		color: color-mix(in oklch, white 72%, transparent);
	}
	.context :global(dt),
	.context :global(small) {
		color: color-mix(in oklch, white 65%, transparent);
	}
	.context :global(dl),
	.context :global(dl div) {
		border-color: color-mix(in oklch, white 20%, transparent);
	}
	.products {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-top: 2rem;
	}
	.square {
		margin-top: 1.5rem;
		padding: 1rem 1.25rem;
		border: 1px solid var(--border);
		border-radius: 1rem;
	}
	.square p {
		margin: 0.2rem 0;
		color: var(--text-secondary);
	}
	.policies {
		background: var(--surface-muted);
	}
	.policy-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-top: 2rem;
	}
	.policy-grid article {
		padding: 1.5rem;
		background: white;
		border-radius: 1rem;
	}
	.policy-grid h3 {
		font: 600 1.4rem var(--font-display);
	}
	.policy-grid p {
		color: var(--text-secondary);
	}
	@media (max-width: 760px) {
		.context,
		.products,
		.policy-grid {
			grid-template-columns: 1fr;
		}
		.preview {
			display: grid;
		}
	}
</style>
