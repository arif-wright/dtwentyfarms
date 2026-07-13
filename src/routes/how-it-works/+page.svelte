<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	const steps = [
		[
			'Reserve and pay',
			'Choose from the release’s small menu and complete payment through a secure Square-hosted checkout link.'
		],
		[
			'Threshold check',
			'After orders close, the minimum is evaluated. Customers receive confirmation if it is reached. If it is not, customers are notified and refunded through Square during the initial release.'
		],
		[
			'Harvest confirmed',
			'When the threshold is reached, D-Twenty confirms the release and plants the crop plan.'
		],
		['We grow', 'Shared crop batches are grown indoors for the listed harvest date.'],
		[
			'Harvest and pack',
			'Microgreens are cut and packed for scheduled fulfillment—not held as open-ended inventory.'
		],
		[
			'Pick up',
			'Collect in the Cloud Trails area during the listed window, or arrange your own courier.'
		]
	];
</script>

<svelte:head
	><title>How Grow-to-Order Works | D-Twenty Farms</title><meta
		name="description"
		content="Learn how D-Twenty Farms reservations, harvest thresholds, growing, pickup, and customer-arranged courier fulfillment work."
	/><link rel="canonical" href="https://dtwentyfarms.com/how-it-works" /></svelte:head
>
<PageHeader
	eyebrow="How it works"
	title="Your box begins with a reservation."
	intro="You are preordering a specific future harvest. That lets one grower plan a focused crop, confirm demand before planting, and harvest for one clear pickup date."
/>
<section class="section">
	<div class="container flow">
		{#each steps as step, i}<article>
				<span>{String(i + 1).padStart(2, '0')}</span>
				<div>
					<h2>{step[0]}</h2>
					<p>{step[1]}</p>
				</div>
			</article>{/each}
	</div>
</section>
<section class="section manual">
	<div class="container manual-grid">
		<div>
			<p class="eyebrow">Initial release operations</p>
			<h2 class="section-title">Human-managed on purpose.</h2>
		</div>
		<div>
			<p class="lede">
				Threshold evaluation and refunds are handled manually during the initial release. The site
				does not claim automatic capacity, inventory, payment, email, or refund synchronization.
			</p>
			<p>
				This keeps the first launch operationally honest while D-Twenty proves the release model.
				Future phases will add server-verified capacity and Square synchronization behind the same
				customer experience.
			</p>
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
		<p class="eyebrow">At pickup</p>
		<h2 class="section-title">One place. One window. Clear instructions.</h2>
		<div class="grid-3">
			<article class="card">
				<h3>Cloud Trails area</h3>
				<p>The public site names only the general pickup area in Boerne.</p>
			</article>
			<article class="card">
				<h3>Private details</h3>
				<p>
					The exact residential address and access instructions are sent after your harvest is
					confirmed.
				</p>
			</article>
			<article class="card">
				<h3>Courier welcome</h3>
				<p>
					You may arrange and pay for courier pickup within the scheduled window. D-Twenty does not
					deliver.
				</p>
			</article>
		</div>
	</div>
</section>

<style>
	.flow {
		max-width: 850px;
	}
	.flow article {
		display: grid;
		grid-template-columns: 90px 1fr;
		gap: 1.5rem;
		padding: 2rem 0;
		border-top: 1px solid var(--border);
	}
	.flow span {
		font: 600 2.6rem var(--font-display);
		color: var(--color-radish);
	}
	.flow h2 {
		margin: 0;
		font: 600 2rem var(--font-display);
	}
	.flow p {
		color: var(--text-secondary);
	}
	.manual {
		background: var(--color-harvest);
	}
	.manual-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}
	.grid-3 {
		margin-top: 2rem;
	}
	.card {
		padding: 1.5rem;
		box-shadow: none;
	}
	.card h3 {
		font: 600 1.4rem var(--font-display);
	}
	.card p {
		color: var(--text-secondary);
	}
	@media (max-width: 760px) {
		.manual-grid {
			grid-template-columns: 1fr;
		}
		.flow article {
			grid-template-columns: 55px 1fr;
		}
	}
</style>
