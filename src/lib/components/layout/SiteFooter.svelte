<script lang="ts">
	import Wordmark from '$lib/components/brand/Wordmark.svelte';
</script>

<footer>
	<div class="container footer">
		<div>
			<Wordmark inverse />
			<p>Limited harvests, grown to order.</p>
		</div>
		<div>
			<strong>Explore</strong><a href="/shop">Shop</a><a href="/how-it-works">How it works</a><a
				href="/about">About</a
			>
		</div>
		<div>
			<strong>Details</strong><a href="/faq">FAQ</a><a href="/contact">Contact</a><a href="/privacy"
				>Privacy</a
			><a href="/terms">Terms</a>
		</div>
		<div>
			<strong>Pickup</strong>
			<p>Cloud Trails area<br />Boerne, Texas</p>
			<small>Exact instructions follow an eligible confirmed order.</small>
		</div>
	</div>
	<div class="container bottom">
		<span>© {new Date().getFullYear()} D-Twenty Farms</span><span
			>Fresh flavor. Local harvest. Critical freshness.</span
		>
	</div>
</footer>

<style>
	footer {
		padding: 4rem 0 1.5rem;
		background: var(--color-canopy);
		color: white;
	}
	.footer {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1.5fr;
		gap: 2.5rem;
	}
	.footer div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.55rem;
	}
	.footer a {
		color: color-mix(in oklch, white 82%, transparent);
		text-decoration: none;
	}
	.footer p,
	.footer small {
		margin: 0;
		color: color-mix(in oklch, white 72%, transparent);
	}
	.bottom {
		display: flex;
		justify-content: space-between;
		margin-top: 3rem;
		padding-top: 1.25rem;
		border-top: 1px solid color-mix(in oklch, white 18%, transparent);
		font-size: 0.78rem;
		color: color-mix(in oklch, white 65%, transparent);
	}
	@media (max-width: 760px) {
		.footer {
			grid-template-columns: 1fr 1fr;
		}
		.footer > div:first-child,
		.footer > div:last-child {
			grid-column: 1/-1;
		}
		.bottom {
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
