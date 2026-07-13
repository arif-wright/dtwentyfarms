<script lang="ts">
	import { featuredHarvest } from '$lib/data/harvests';
	import HarvestStatusBadge from '$lib/components/harvest/HarvestStatusBadge.svelte';
	import HarvestDates from '$lib/components/harvest/HarvestDates.svelte';
	import ReservationMeter from '$lib/components/harvest/ReservationMeter.svelte';
	import ProductCard from '$lib/components/commerce/ProductCard.svelte';
	import { formatDate } from '$lib/utils/format';
	const steps = [
		['01', 'Reserve', 'Choose a box and pay for a future harvest.'],
		['02', 'Harvest confirmed', 'The release proceeds after its minimum is reached.'],
		['03', 'We grow', 'Crops are planted and tended for your pickup date.'],
		['04', 'Pick up', 'Collect during one simple scheduled window.']
	];
	const uses = ['Eggs', 'Breakfast tacos', 'Burgers', 'Sandwiches', 'Salads', 'Rice bowls'];
	const reasons = [
		['Small batch', 'One rack initially, with production kept deliberately limited.'],
		['Boerne grown', 'Grown locally in a dedicated indoor growing studio.'],
		['Scheduled fresh', 'Harvested and packed for a specific fulfillment date.'],
		['Less guesswork', 'Grow-to-order helps reduce speculative, unsold inventory.']
	];
</script>

<svelte:head>
	<title>Small-Batch Microgreens in Boerne | D-Twenty Farms</title><meta
		name="description"
		content="Limited microgreen harvests, grown to order and available for scheduled pickup in Boerne, Texas."
	/><link rel="canonical" href="https://dtwentyfarms.com/" /><meta
		property="og:title"
		content="Small-Batch Microgreens Grown in Boerne"
	/><meta property="og:description" content="Limited harvests, grown to order." />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "D-Twenty Farms",
			"description": "Small-batch microgreens grown to order in Boerne, Texas.",
			"areaServed": { "@type": "City", "name": "Boerne" },
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Boerne",
				"addressRegion": "TX",
				"addressCountry": "US"
			},
			"url": "https://dtwentyfarms.com"
		}
	</script>
</svelte:head>
{#if featuredHarvest}<aside class="announcement">
		<a href="/harvests/{featuredHarvest.slug}"
			><strong>{featuredHarvest.status === 'upcoming' ? 'Next release' : 'Now open'}:</strong>
			{featuredHarvest.title} · Harvest {formatDate(featuredHarvest.harvestAt, {
				month: 'short',
				day: 'numeric'
			})} <span>View release →</span></a
		>
	</aside>{/if}
<section class="hero">
	<div class="container hero-grid">
		<div>
			<p class="eyebrow">Limited harvests, grown to order</p>
			<h1 class="display">Small-Batch <em>Microgreens</em> Grown in Boerne</h1>
			<p class="lede">
				Limited harvests, grown to order and available through scheduled pickup in the Cloud Trails
				area.
			</p>
			<div class="actions">
				<a
					class="btn btn-primary"
					href={featuredHarvest ? `/harvests/${featuredHarvest.slug}` : '/harvests'}
					>View the Next Harvest</a
				><a class="btn btn-secondary" href="/how-it-works">See How It Works</a>
			</div>
		</div>
		<div class="hero-art" aria-label="Provisional illustrated microgreen harvest">
			<div class="sun"></div>
			<img src="/images/hero-crop.svg" alt="Stylized illustration of a lush microgreen crop" /><span
				class="stamp">Grown in<br /><strong>Boerne</strong><br />Texas</span
			>
		</div>
	</div>
</section>
{#if featuredHarvest}<section class="section featured">
		<div class="container">
			<div class="section-intro">
				<div>
					<p class="eyebrow">Next harvest</p>
					<h2 class="section-title">A release with a reason to gather.</h2>
				</div>
				<p class="lede">
					Reserve before the cutoff. We plant after the release reaches its eight-box minimum, with
					only sixteen boxes available.
				</p>
			</div>
			<article class="harvest-panel">
				<div class="harvest-copy">
					<HarvestStatusBadge status={featuredHarvest.status} />
					<h3>{featuredHarvest.title}</h3>
					<p>{featuredHarvest.description}</p>
					<HarvestDates harvest={featuredHarvest} /><ReservationMeter harvest={featuredHarvest} /><a
						class="btn btn-secondary"
						href="/harvests/{featuredHarvest.slug}">Explore this harvest</a
					>
				</div>
				<div class="product-mini">
					{#each featuredHarvest.products as product}<ProductCard
							{product}
							harvest={featuredHarvest}
						/>{/each}
				</div>
			</article>
		</div>
	</section>{/if}
<section class="section process">
	<div class="container">
		<p class="eyebrow">How grow-to-order works</p>
		<h2 class="section-title">Freshness starts with a reservation.</h2>
		<div class="steps">
			{#each steps as step}<article>
					<span>{step[0]}</span>
					<h3>{step[1]}</h3>
					<p>{step[2]}</p>
				</article>{/each}
		</div>
	</div>
</section>
<section class="section food">
	<div class="container food-grid">
		<div>
			<p class="eyebrow">Built for real meals</p>
			<h2 class="section-title">A little green.<br />A lot more plate.</h2>
			<p class="lede">
				Microgreens bring color, texture, and fresh flavor to the food you already make.
			</p>
		</div>
		<div class="uses">
			{#each uses as use, i}<div><span>0{i + 1}</span><strong>{use}</strong></div>{/each}
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
		<p class="eyebrow">Why D-Twenty</p>
		<h2 class="section-title">Intentionally small. Carefully timed.</h2>
		<div class="reasons">
			{#each reasons as reason}<article>
					<span>◆</span>
					<h3>{reason[0]}</h3>
					<p>{reason[1]}</p>
				</article>{/each}
		</div>
	</div>
</section>
<section class="section connection">
	<div class="container connect-grid">
		<div>
			<p class="eyebrow">The growing connection</p>
			<h2 class="section-title">Follow your harvest from seed to pickup.</h2>
			<p class="lede">
				The long-term D-Twenty experience will connect customers with the shared crop batches
				supplying their orders. For now, this preview shows the journey we are building toward.
			</p>
			<a class="btn btn-secondary" href="/how-it-works">Follow the process</a>
		</div>
		<ol>
			{#each ['Reserved', 'Confirmed', 'Seeded', 'Under the lights', 'Harvested', 'Ready for pickup'] as stage, i}<li
				>
					<span>{i + 1}</span>{stage}
				</li>{/each}
		</ol>
	</div>
</section>
<section class="section grower">
	<div class="container grower-grid">
		<div class="portrait"><span>MW</span><small>Provisional portrait area</small></div>
		<div>
			<p class="eyebrow">Meet the grower</p>
			<h2 class="section-title">One grower. One focused growing studio.</h2>
			<p class="lede">
				D-Twenty Farms is a small indoor growing operation in Boerne, Texas, operated by Michael
				Wright. Each release is planned, grown, harvested, and packed from a dedicated indoor
				growing studio.
			</p>
			<a class="btn btn-secondary" href="/about">About D-Twenty</a>
		</div>
	</div>
</section>
<section class="section pickup">
	<div class="container pickup-grid">
		<div>
			<p class="eyebrow">Simple fulfillment</p>
			<h2 class="section-title">Pick up close to home.</h2>
		</div>
		<div class="pickup-card">
			<h3>Scheduled pickup</h3>
			<p>
				Pickup is available in the Cloud Trails area of Boerne. The exact address and instructions
				are provided after an eligible order is confirmed.
			</p>
		</div>
		<div class="pickup-card">
			<h3>Customer-arranged courier</h3>
			<p>
				Arrange courier pickup during the scheduled window at your own expense. D-Twenty Farms does
				not currently provide delivery.
			</p>
		</div>
	</div>
</section>
<section class="signup">
	<div class="container signup-inner">
		<div>
			<p class="eyebrow">Harvest list</p>
			<h2>Be first to know when the next harvest opens.</h2>
		</div>
		<form onsubmit={(e) => e.preventDefault()}>
			<label for="signup-email">Email address</label>
			<div>
				<input
					id="signup-email"
					name="email"
					type="email"
					required
					placeholder="you@example.com"
				/><button class="btn btn-primary" type="submit">Join the list</button>
			</div>
			<small>Email signup is being prepared; no submission is sent yet.</small>
		</form>
	</div>
</section>

<style>
	.announcement {
		background: var(--color-harvest);
		text-align: center;
		font-size: 0.86rem;
		font-weight: 650;
	}
	.announcement a {
		display: block;
		padding: 0.65rem 1rem;
		text-decoration: none;
	}
	.announcement span {
		margin-left: 0.6rem;
		text-decoration: underline;
	}
	.hero {
		overflow: hidden;
		padding: clamp(4rem, 8vw, 7.5rem) 0;
	}
	.hero-grid {
		display: grid;
		grid-template-columns: 1.12fr 0.88fr;
		align-items: center;
		gap: 4rem;
	}
	.hero h1 {
		margin: 0.75rem 0 1.5rem;
	}
	.hero em {
		color: var(--color-radish);
		font-style: italic;
	}
	.actions {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-top: 2rem;
	}
	.hero-art {
		position: relative;
		min-height: 520px;
		border-radius: 12rem 12rem 1.5rem 1.5rem;
		background: var(--color-canopy);
		overflow: hidden;
	}
	.hero-art img {
		position: absolute;
		inset: auto -5% 0;
		width: 110%;
	}
	.sun {
		position: absolute;
		top: 10%;
		right: 10%;
		width: 13rem;
		height: 13rem;
		border-radius: 50%;
		background: var(--color-harvest);
		opacity: 0.9;
	}
	.stamp {
		position: absolute;
		left: 1rem;
		top: 44%;
		display: grid;
		place-items: center;
		width: 7rem;
		height: 7rem;
		border-radius: 50%;
		background: var(--color-cream);
		text-align: center;
		font-size: 0.7rem;
		line-height: 1.3;
		transform: rotate(-8deg);
		box-shadow: var(--shadow-soft);
	}
	.stamp strong {
		font-family: var(--font-display);
		font-size: 1.2rem;
	}
	.featured {
		background: var(--surface-muted);
	}
	.section-intro {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 3rem;
		margin-bottom: 2.5rem;
	}
	.section-intro h2 {
		max-width: 560px;
		margin: 0.5rem 0 0;
	}
	.section-intro .lede {
		max-width: 430px;
	}
	.harvest-panel {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: 2rem;
		padding: 2rem;
		border-radius: 2rem;
		background: var(--surface-raised);
		box-shadow: var(--shadow-soft);
	}
	.harvest-copy {
		display: grid;
		align-content: start;
		gap: 1.25rem;
	}
	.harvest-copy h3 {
		margin: 0;
		font: 600 2.25rem/1 var(--font-display);
	}
	.harvest-copy p {
		margin: 0;
		color: var(--text-secondary);
	}
	.product-mini {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.process {
		background: var(--color-canopy);
		color: white;
	}
	.process .eyebrow {
		color: var(--color-harvest);
	}
	.process h2 {
		max-width: 700px;
	}
	.steps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin-top: 3rem;
	}
	.steps article {
		padding: 1.25rem;
		border-left: 1px solid color-mix(in oklch, white 20%, transparent);
	}
	.steps span {
		font: 600 2.2rem var(--font-display);
		color: var(--color-harvest);
	}
	.steps h3 {
		font: 600 1.3rem var(--font-display);
	}
	.steps p {
		color: color-mix(in oklch, white 72%, transparent);
	}
	.food {
		background: var(--color-harvest);
	}
	.food-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	.uses {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-top: 1px solid var(--color-soil);
	}
	.uses div {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.2rem 0.5rem;
		border-bottom: 1px solid var(--color-soil);
	}
	.uses span {
		font-size: 0.7rem;
	}
	.uses strong {
		font: 600 1.4rem var(--font-display);
	}
	.reasons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin-top: 2.5rem;
	}
	.reasons article {
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: 1rem;
	}
	.reasons span {
		color: var(--color-radish);
	}
	.reasons h3 {
		font: 600 1.35rem var(--font-display);
	}
	.reasons p {
		color: var(--text-secondary);
	}
	.connection {
		background: var(--surface-muted);
	}
	.connect-grid {
		display: grid;
		grid-template-columns: 1fr 0.8fr;
		gap: 4rem;
		align-items: center;
	}
	.connect-grid ol {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.connect-grid li {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid var(--border-strong);
		font-weight: 750;
	}
	.connect-grid li span {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: var(--color-canopy);
		color: white;
		font-size: 0.75rem;
	}
	.grower-grid {
		display: grid;
		grid-template-columns: 0.75fr 1.25fr;
		gap: 4rem;
		align-items: center;
	}
	.portrait {
		display: grid;
		place-items: center;
		aspect-ratio: 4/5;
		border-radius: 12rem 12rem 1.5rem 1.5rem;
		background: linear-gradient(150deg, var(--color-canopy), var(--color-sprout));
		color: white;
	}
	.portrait span {
		font: 600 clamp(5rem, 12vw, 9rem) var(--font-display);
		opacity: 0.7;
	}
	.portrait small {
		align-self: end;
		padding: 1rem;
	}
	.pickup {
		background: var(--color-ink);
		color: white;
	}
	.pickup-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr 1fr;
		gap: 1rem;
	}
	.pickup .eyebrow {
		color: var(--color-harvest);
	}
	.pickup-card {
		padding: 1.5rem;
		border: 1px solid color-mix(in oklch, white 20%, transparent);
		border-radius: 1.5rem;
	}
	.pickup-card h3 {
		font: 600 1.4rem var(--font-display);
	}
	.pickup-card p {
		color: color-mix(in oklch, white 70%, transparent);
	}
	.signup {
		padding: 3rem 0;
		background: var(--color-radish);
		color: white;
	}
	.signup-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}
	.signup h2 {
		margin: 0.3rem 0;
		font: 600 clamp(1.8rem, 4vw, 3rem)/1 var(--font-display);
	}
	.signup .eyebrow {
		color: white;
	}
	.signup label {
		display: block;
		font-size: 0.8rem;
		font-weight: 800;
	}
	.signup form > div {
		display: flex;
		gap: 0.5rem;
		margin: 0.4rem 0;
	}
	.signup input {
		min-width: 0;
		flex: 1;
		border: 0;
		border-radius: 999px;
		padding: 0.8rem 1rem;
	}
	.signup small {
		color: white;
	}
	@media (max-width: 900px) {
		.hero-grid,
		.harvest-panel,
		.food-grid,
		.connect-grid,
		.grower-grid {
			grid-template-columns: 1fr;
		}
		.hero-art {
			min-height: 420px;
		}
		.product-mini {
			grid-template-columns: 1fr 1fr;
		}
		.reasons,
		.steps {
			grid-template-columns: 1fr 1fr;
		}
		.pickup-grid {
			grid-template-columns: 1fr 1fr;
		}
		.pickup-grid > div:first-child {
			grid-column: 1/-1;
		}
	}
	@media (max-width: 600px) {
		.section-intro,
		.signup-inner {
			display: grid;
			grid-template-columns: 1fr;
		}
		.product-mini,
		.reasons,
		.steps,
		.pickup-grid {
			grid-template-columns: 1fr;
		}
		.pickup-grid > div:first-child {
			grid-column: auto;
		}
		.hero-art {
			min-height: 350px;
		}
		.signup form > div {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
