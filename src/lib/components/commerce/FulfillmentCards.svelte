<div class="fulfillment">
	<article>
		<span>01</span>
		<h3>Scheduled pickup</h3>
		<p>
			Pickup is available in the Cloud Trails area of Boerne. The exact address and pickup
			instructions are provided after an eligible order is confirmed.
		</p>
	</article>
	<article>
		<span>02</span>
		<h3>Customer-arranged courier</h3>
		<p>
			Customers may arrange courier pickup during the scheduled fulfillment window. Courier
			arrangements and charges are the customer’s responsibility.
		</p>
	</article>
	<article>
		<span>03</span>
		<h3>No delivery route</h3>
		<p>
			D-Twenty Farms does not currently provide owner-operated delivery. This keeps one-person
			production focused and fulfillment predictable.
		</p>
	</article>
</div>

<style>
	.fulfillment {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	.fulfillment article {
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: 1.25rem;
		background: var(--surface-raised);
	}
	span {
		font: 600 1.4rem var(--font-display);
		color: var(--color-radish);
	}
	h3 {
		font: 600 1.35rem var(--font-display);
	}
	p {
		color: var(--text-secondary);
	}
	@media (max-width: 760px) {
		.fulfillment {
			grid-template-columns: 1fr;
		}
	}
</style>
