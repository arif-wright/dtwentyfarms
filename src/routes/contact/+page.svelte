<script lang="ts">
	import { dev } from '$app/environment';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import { contactSchema } from '$lib/schemas/forms';
	let errors = $state<Record<string, string>>({});
	let attempted = $state(false);
	function validate(event: SubmitEvent) {
		event.preventDefault();
		attempted = true;
		const form = new FormData(event.currentTarget as HTMLFormElement);
		const result = contactSchema.safeParse(Object.fromEntries(form));
		errors = {};
		if (!result.success)
			for (const issue of result.error.issues) {
				const key = String(issue.path[0]);
				if (!errors[key]) errors[key] = issue.message;
			}
	}
</script>

<svelte:head
	><title>Contact | D-Twenty Farms</title><meta
		name="description"
		content="Ask D-Twenty Farms about an upcoming harvest, pickup, courier collection, specialty preorder, or existing order."
	/><link rel="canonical" href="https://dtwentyfarms.com/contact" /></svelte:head
>
<PageHeader
	eyebrow="Contact the grower"
	title="Questions? Ask Michael directly."
	intro="Questions about an upcoming harvest, pickup, or an existing order? Send a message and D-Twenty Farms will respond within one business day once the form connection is live."
/>
<section class="section contact">
	<div class="container contact-grid">
		<aside>
			<p class="eyebrow">Good to know</p>
			<h2>One operator, one inbox.</h2>
			<p>This form is an interface preview. It does not currently send or store your message.</p>
			<dl>
				<dt>Public location</dt>
				<dd>Boerne, Texas</dd>
				<dt>Pickup area</dt>
				<dd>Cloud Trails area</dd>
				<dt>Typical response goal</dt>
				<dd>Within one business day after launch</dd>
			</dl>
		</aside>
		<form novalidate onsubmit={validate}>
			<label for="name">Name</label><input
				id="name"
				name="name"
				autocomplete="name"
				aria-invalid={!!errors.name}
				aria-describedby={errors.name ? 'name-error' : undefined}
			/>{#if errors.name}<small id="name-error" class="error">{errors.name}</small>{/if}<label
				for="email">Email address</label
			><input
				id="email"
				name="email"
				type="email"
				autocomplete="email"
				aria-invalid={!!errors.email}
				aria-describedby={errors.email ? 'email-error' : undefined}
			/>{#if errors.email}<small id="email-error" class="error">{errors.email}</small>{/if}<label
				for="category">What can we help with?</label
			><select id="category" name="category"
				><option value="">Choose a category</option><option value="existing-order"
					>Existing order</option
				><option value="upcoming-harvest">Upcoming harvest</option><option value="courier-pickup"
					>Courier pickup</option
				><option value="specialty-preorder">Specialty preorder</option><option value="general"
					>General question</option
				></select
			>{#if errors.category}<small class="error">Choose an inquiry category.</small>{/if}<label
				for="message">Message</label
			><textarea
				id="message"
				name="message"
				rows="7"
				aria-invalid={!!errors.message}
				aria-describedby={errors.message ? 'message-error' : undefined}
			></textarea>{#if errors.message}<small id="message-error" class="error"
					>{errors.message}</small
				>{/if}<button class="btn btn-primary" type="submit">Review message</button
			>{#if dev || attempted}<p class="notice" role="status">
					<strong>Form submission is not yet connected.</strong> No message or personal information has
					been sent.
				</p>{/if}
		</form>
	</div>
</section>

<style>
	.contact {
		padding-top: 2rem;
	}
	.contact-grid {
		display: grid;
		grid-template-columns: 0.7fr 1.3fr;
		gap: 4rem;
	}
	.contact aside {
		padding: 2rem;
		border-radius: 1.5rem;
		background: var(--color-harvest);
		align-self: start;
	}
	.contact aside h2 {
		font: 600 2rem var(--font-display);
	}
	dl {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}
	dt {
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	dd {
		margin: 0;
	}
	form {
		display: grid;
		gap: 0.45rem;
	}
	label {
		margin-top: 0.7rem;
		font-weight: 750;
	}
	input,
	select,
	textarea {
		width: 100%;
		border: 1px solid var(--border-strong);
		border-radius: 0.65rem;
		background: white;
		padding: 0.8rem;
	}
	textarea {
		resize: vertical;
	}
	.error {
		color: oklch(44% 0.19 25);
		font-weight: 700;
	}
	.notice {
		padding: 1rem;
		border-left: 4px solid var(--color-harvest);
		background: var(--surface-muted);
	}
	.btn {
		width: max-content;
		margin-top: 1rem;
	}
	@media (max-width: 760px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
