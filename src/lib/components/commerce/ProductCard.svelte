<script lang="ts">
	import type { Product } from '$lib/domain/commerce/types';
	import type { HarvestRelease } from '$lib/domain/harvests/types';
	import { formatPrice } from '$lib/utils/format';
	import { canCheckout, checkoutLabel } from '$lib/domain/harvests/rules';
	let { product, harvest }: { product: Product; harvest: HarvestRelease } = $props();
	const available = $derived(canCheckout(harvest, product));
</script>

<article class="card product">
	<img src={product.image} alt={product.imageAlt} loading="lazy" />
	<div class="body">
		<div class="top">
			<div>
				<p class="eyebrow">{product.subtitle}</p>
				<h3>{product.name}</h3>
			</div>
			<strong class="price">{formatPrice(product.priceInCents)}</strong>
		</div>
		<p>{product.shortDescription}</p>
		<p class="quantity">{product.quantityLabel}</p>
		<div class="chips">
			{#each product.flavorProfile as note}<span>{note}</span>{/each}
		</div>
		<p class="detail">
			<strong>Rotation:</strong>
			{product.includedVarieties.join(', ')}<br /><strong>Try it on:</strong>
			{product.suggestedUses.join(', ')}
		</p>
		{#if available}<a
				class="btn btn-primary"
				href={product.squareCheckoutUrl!}
				target="_blank"
				rel="noopener noreferrer">{checkoutLabel(harvest, product)}</a
			>{:else}<button class="btn btn-primary" disabled>{checkoutLabel(harvest, product)}</button
			>{/if}<small>Limit {product.maximumPerCustomer} per customer for this release.</small>
	</div>
</article>

<style>
	.product img {
		width: 100%;
		height: 230px;
		object-fit: cover;
		background: var(--surface-muted);
	}
	.body {
		display: grid;
		gap: 1rem;
		padding: 1.4rem;
	}
	.top {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	.top h3 {
		margin: 0.25rem 0 0;
		font-family: var(--font-display);
		font-size: 1.65rem;
		line-height: 1;
	}
	.price {
		font-family: var(--font-display);
		font-size: 1.35rem;
	}
	.body p {
		margin: 0;
		color: var(--text-secondary);
	}
	.quantity {
		font-weight: 750;
		color: var(--color-canopy) !important;
	}
	.chips {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}
	.chips span {
		border-radius: 999px;
		background: var(--surface-muted);
		padding: 0.25rem 0.6rem;
		font-size: 0.75rem;
	}
	.detail {
		font-size: 0.87rem;
	}
	.btn {
		width: 100%;
	}
	small {
		text-align: center;
		color: var(--text-muted);
	}
</style>
