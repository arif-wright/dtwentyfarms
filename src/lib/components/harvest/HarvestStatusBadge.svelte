<script lang="ts">
	import type { HarvestStatus } from '$lib/domain/harvests/types';
	import { statusLabel } from '$lib/domain/harvests/rules';
	let { status }: { status: HarvestStatus } = $props();
</script>

<span class="badge {status}"><span></span>{statusLabel[status]}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		width: max-content;
		border-radius: 999px;
		padding: 0.35rem 0.7rem;
		background: var(--surface-muted);
		font-size: 0.73rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.badge span {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background: var(--color-harvest);
	}
	.open span,
	.threshold-met span {
		background: var(--color-sprout);
	}
	.sold-out span,
	.canceled span {
		background: var(--color-radish);
	}
	.completed span {
		background: var(--text-muted);
	}
</style>
