<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
</script>

<svelte:head
	><title>About the Grower | D-Twenty Farms</title><meta
		name="description"
		content="Meet Michael Wright, the sole operator behind D-Twenty Farms in Boerne, Texas."
	/><link rel="canonical" href="https://dtwentyfarms.com/about" /></svelte:head
>
<PageHeader
	eyebrow="About D-Twenty"
	title="Small enough to stay personal."
	intro="D-Twenty Farms is a small indoor growing operation in Boerne, Texas, operated by Michael Wright."
/>
<section class="section">
	<div class="container story">
		<div class="image"><span>MW</span><small>Original grower photography planned</small></div>
		<div>
			<p class="eyebrow">The operator</p>
			<h2 class="section-title">One person, from crop plan to pickup.</h2>
			<p class="lede">
				Michael plans each release, tends the crops, packs each box, and manages the scheduled
				pickup window. D-Twenty is not presented as a larger team because it is intentionally a
				focused one-person operation.
			</p>
			<p>
				The growing space is a dedicated indoor growing studio at home. It is a production area—not
				a public farm tour or customer entrance. Exact residential details remain private.
			</p>
		</div>
	</div>
</section>
<section class="section philosophy">
	<div class="container">
		<p class="eyebrow">The approach</p>
		<h2 class="section-title">Grow what has a home.</h2>
		<div class="columns">
			<p>
				D-Twenty’s grow-to-order model begins with a limited release. A minimum threshold confirms
				that planting makes operational sense; a maximum keeps production intentionally limited.
			</p>
			<p>
				That approach reduces speculative inventory and gives every release a specific purpose,
				harvest date, and fulfillment window. Production can grow carefully when proven demand
				supports it.
			</p>
			<p>
				The long-term vision connects customers with the shared crop batches behind their
				orders—providing meaningful progress updates without pretending every box owns an individual
				tray.
			</p>
		</div>
	</div>
</section>
<section class="section vision">
	<div class="container vision-inner">
		<p class="eyebrow">Why this work</p>
		<blockquote>
			“Controlled-environment growing makes it possible to plan small, learn carefully, and bring
			the customer closer to how fresh food is grown.”
		</blockquote>
		<p>
			That curiosity—paired with practical, transparent operations—is the foundation D-Twenty is
			building from.
		</p>
	</div>
</section>

<style>
	.story {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: 4rem;
		align-items: center;
	}
	.image {
		display: grid;
		place-items: center;
		aspect-ratio: 4/5;
		border-radius: 12rem 12rem 1rem 1rem;
		background: linear-gradient(145deg, var(--color-canopy), var(--color-sprout));
		color: white;
	}
	.image span {
		font: 600 clamp(5rem, 12vw, 9rem) var(--font-display);
		opacity: 0.72;
	}
	.image small {
		align-self: end;
		padding: 1rem;
	}
	.story p:not(.eyebrow) {
		color: var(--text-secondary);
	}
	.philosophy {
		background: var(--surface-muted);
	}
	.columns {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 2rem;
	}
	.columns p {
		color: var(--text-secondary);
	}
	.vision {
		background: var(--color-harvest);
	}
	.vision-inner {
		max-width: 900px;
	}
	.vision blockquote {
		margin: 1rem 0;
		font: 600 clamp(2rem, 5vw, 4rem)/1.12 var(--font-display);
	}
	@media (max-width: 760px) {
		.story,
		.columns {
			grid-template-columns: 1fr;
		}
	}
</style>
