<script lang="ts">
	import BrandMark from './BrandMark.svelte';
	let { inverse = false }: { inverse?: boolean } = $props();
</script>

<span class:inverse class="wordmark"
	><BrandMark size={38} /><span><strong>D-Twenty</strong><small>FARMS · BOERNE</small></span></span
>

<style>
	.wordmark {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		color: var(--color-canopy);
	}
	.wordmark.inverse {
		color: white;
	}
	.wordmark strong {
		display: block;
		font-family: var(--font-display);
		font-size: 1.25rem;
		line-height: 1;
	}
	.wordmark small {
		display: block;
		margin-top: 0.2rem;
		font-size: 0.56rem;
		font-weight: 800;
		letter-spacing: 0.16em;
	}
	.wordmark :global(svg) {
		flex: none;
	}
</style>
