<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	const faqs = [
		[
			'How does grow-to-order work?',
			'A harvest opens with a small menu, cutoff, minimum threshold, and maximum capacity. Customers reserve a future harvest. If the minimum is reached, crops are planted and grown for the listed pickup date.'
		],
		[
			'When am I charged?',
			'During Phase 1, payment is completed through Square when you reserve. Checkout is not yet enabled on this preview site.'
		],
		[
			'What is the minimum preorder threshold?',
			'It is the smallest number of paid reservations needed for a release to proceed. Each harvest page publishes its own threshold.'
		],
		[
			'What happens if the threshold is not reached?',
			'Customers are notified and refunded through Square. Threshold evaluation, notifications, and refunds are handled manually during the initial release.'
		],
		[
			'What happens when the maximum is reached?',
			'The release closes to new reservations. Production capacity is deliberately limited; Phase 1 does not pretend to show live counts.'
		],
		[
			'When will my order be ready?',
			'Your harvest page lists the harvest date, pickup date, and one controlled pickup window.'
		],
		[
			'Where is pickup?',
			'Pickup is in the Cloud Trails area of Boerne. Exact directions are provided only for an eligible confirmed order.'
		],
		[
			'Why is the exact address private?',
			'D-Twenty operates from a home-based indoor growing studio. Keeping the residential address out of public pages protects household and customer privacy.'
		],
		[
			'Does D-Twenty deliver?',
			'No. D-Twenty Farms does not currently provide owner-operated delivery.'
		],
		[
			'Can I arrange courier pickup?',
			'Yes. You may arrange courier pickup during the scheduled fulfillment window. Courier arrangements and charges are your responsibility.'
		],
		[
			'How long do microgreens remain fresh?',
			'Freshness varies by variety and handling. Use them promptly; product-specific guidance will be included with confirmed orders.'
		],
		[
			'How should they be stored?',
			'Keep microgreens refrigerated in their closed container. Keep them dry and wash immediately before use if instructed on the package.'
		],
		[
			'Can I request a specialty variety?',
			'Specialty varieties may occasionally be available for larger preorders. Minimum quantities, seed availability, and additional lead time apply.'
		],
		[
			'What happens if there is a quality problem?',
			'Because microgreens are perishable, returns cannot be accepted. If an order is damaged or does not meet our quality standards, contact D-Twenty Farms within 24 hours with a photo so the issue can be reviewed for replacement, refund, or store credit.'
		],
		[
			'Can a harvest be delayed or canceled?',
			'Yes. Growing is biological and quality comes first. If timing or quality changes materially, affected customers will be contacted with the available resolution, which may include a new date or refund.'
		],
		[
			'Will I eventually be able to follow my crops online?',
			'That is the plan. A future customer experience will connect orders to shared crop batches and show useful stages and grower updates. Live tracking is not available in Phase 1.'
		]
	];
</script>

<svelte:head
	><title>Frequently Asked Questions | D-Twenty Farms</title><meta
		name="description"
		content="Answers about grow-to-order reservations, pickup, courier arrangements, storage, quality, and future crop updates."
	/><link rel="canonical" href="https://dtwentyfarms.com/faq" /></svelte:head
>
<PageHeader
	eyebrow="Frequently asked"
	title="Clear answers, before you reserve."
	intro="The first release is deliberately simple and manually managed. Here is exactly what that means for ordering and pickup."
/>
<section class="section faq">
	<div class="container accordion">
		{#each faqs as faq, i}<details open={i === 0}>
				<summary><span>{faq[0]}</span><b aria-hidden="true">+</b></summary>
				<p>{faq[1]}</p>
			</details>{/each}
	</div>
</section>

<style>
	.faq {
		padding-top: 2rem;
	}
	.accordion {
		max-width: 900px;
	}
	details {
		border-bottom: 1px solid var(--border);
	}
	summary {
		display: flex;
		min-height: 4rem;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		cursor: pointer;
		font: 600 1.2rem var(--font-display);
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary b {
		font: 400 1.5rem var(--font-sans);
		transition: transform var(--duration-fast);
	}
	details[open] summary b {
		transform: rotate(45deg);
	}
	details p {
		max-width: 760px;
		margin: 0 0 1.5rem;
		color: var(--text-secondary);
	}
</style>
