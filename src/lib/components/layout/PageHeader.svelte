<script lang="ts">
	let { eyebrow, title, intro }: { eyebrow: string; title: string; intro: string } = $props();
</script>

<header class="page-head">
	<div class="container">
		<p class="eyebrow">{eyebrow}</p>
		<h1 class="page-title">{title}</h1>
		<p class="lede">{intro}</p>
	</div>
</header>

<style>
	.page-head {
		padding: clamp(4rem, 9vw, 7rem) 0 3rem;
		background: radial-gradient(
			circle at 88% 10%,
			color-mix(in oklch, var(--color-harvest) 32%, transparent),
			transparent 28%
		);
	}
	h1 {
		max-width: 850px;
		margin: 0.7rem 0 1.25rem;
	}
</style>
