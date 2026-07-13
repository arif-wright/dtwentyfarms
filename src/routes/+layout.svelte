<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import { site } from '$lib/config/site';
	let { children } = $props();
</script>

<svelte:head
	><meta name="theme-color" content="#163d2b" /><meta
		property="og:site_name"
		content={site.name}
	/><meta property="og:type" content="website" /><meta
		name="twitter:card"
		content="summary_large_image"
	/><link rel="icon" href="/favicon.svg" /><link
		rel="manifest"
		href="/site.webmanifest"
	/></svelte:head
>
<SiteHeader />
<main id="main">{@render children()}</main>
<SiteFooter />
