<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		href,
		children,
		variant = 'primary',
		disabled = false,
		external = false
	}: {
		href?: string;
		children: Snippet;
		variant?: 'primary' | 'secondary';
		disabled?: boolean;
		external?: boolean;
	} = $props();
</script>

{#if href && !disabled}<a
		class="btn btn-{variant}"
		{href}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}>{@render children()}</a
	>{:else}<button class="btn btn-{variant}" {disabled} type="button">{@render children()}</button
	>{/if}
