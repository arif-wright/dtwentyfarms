<script lang="ts">
	import Wordmark from '$lib/components/brand/Wordmark.svelte';
	import { navigation } from '$lib/config/site';
	let open = $state(false);
</script>

<a class="skip-link" href="#main">Skip to content</a>
<header>
	<div class="container nav">
		<a href="/" aria-label="D-Twenty Farms home"><Wordmark /></a>
		<nav aria-label="Primary navigation">
			{#each navigation as item}<a href={item.href}>{item.label}</a>{/each}
		</nav>
		<button
			class="menu"
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}>{open ? 'Close' : 'Menu'}</button
		>
	</div>
	{#if open}<nav id="mobile-nav" class="mobile" aria-label="Mobile navigation">
			{#each navigation as item}<a href={item.href} onclick={() => (open = false)}>{item.label}</a
				>{/each}
		</nav>{/if}
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 40;
		border-bottom: 1px solid var(--border);
		background: color-mix(in oklch, var(--background) 92%, transparent);
		backdrop-filter: blur(12px);
	}
	.nav {
		display: flex;
		min-height: 5rem;
		align-items: center;
		justify-content: space-between;
	}
	.nav > a {
		text-decoration: none;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 1.4rem;
	}
	nav a {
		font-size: 0.9rem;
		font-weight: 700;
		text-decoration: none;
	}
	nav a:hover {
		color: var(--color-radish);
	}
	.menu {
		display: none;
		border: 1px solid var(--border-strong);
		border-radius: 999px;
		background: transparent;
		padding: 0.5rem 0.9rem;
		font-weight: 700;
	}
	.mobile {
		display: none;
	}
	@media (max-width: 800px) {
		.nav nav {
			display: none;
		}
		.menu {
			display: block;
		}
		.mobile {
			display: grid;
			padding: 1rem;
			gap: 0.25rem;
			background: var(--surface-raised);
		}
		.mobile a {
			padding: 0.75rem;
			border-radius: 0.5rem;
		}
		.mobile a:hover {
			background: var(--surface-muted);
		}
	}
</style>
