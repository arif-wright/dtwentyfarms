<script lang="ts">
	let { size = 42 }: { size?: number } = $props();
</script>

<!-- Provisional original D20/sprout mark. Replace after final identity work. -->
<svg
	width={size}
	height={size}
	viewBox="0 0 48 48"
	role="img"
	aria-label="D-Twenty Farms provisional mark"
>
	<path d="M24 3 43 17l-7 23H12L5 17 24 3Z" fill="none" stroke="currentColor" stroke-width="2.5" />
	<path
		d="m5 17 19 7 19-7M12 40l12-16 12 16M24 3v21"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		opacity=".65"
	/>
	<path
		d="M24 22c0-7 4-10 10-10-1 6-4 9-10 10Zm0 0c-1-5-4-7-9-7 1 5 4 7 9 7Z"
		fill="currentColor"
	/>
</svg>
