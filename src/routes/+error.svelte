<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head><title>{page.status} | D-Twenty Farms</title></svelte:head>
<section class="section">
	<div class="container">
		<p class="eyebrow">Error {page.status}</p>
		<h1 class="page-title">This patch of the site isn’t growing.</h1>
		<p class="lede">{page.error?.message ?? 'The page could not be found.'}</p>
		<a class="btn btn-primary" href="/">Return home</a>
	</div>
</section>
