<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
</script>

<svelte:head
	><title>Privacy Policy | D-Twenty Farms</title><meta
		name="description"
		content="Draft privacy policy for D-Twenty Farms."
	/><link rel="canonical" href="https://dtwentyfarms.com/privacy" /><meta
		name="robots"
		content="noindex"
	/></svelte:head
>
<PageHeader
	eyebrow="Draft for review"
	title="Privacy policy"
	intro="This is a practical first draft for business and legal review before launch. Effective date has not been set."
/>
<section class="section">
	<article class="container prose">
		<p>
			<strong>Status:</strong> Not final legal advice. This policy must be reviewed and updated when contact,
			email, analytics, account, Supabase, or Square integrations are activated.
		</p>
		<h2>Information we collect</h2>
		<p>
			The Phase 1 preview does not intentionally submit or store contact-form or email-signup data.
			When those services are connected, D-Twenty Farms may collect information you provide, such as
			your name, email address, inquiry category, message, order details, and communication
			preferences.
		</p>
		<h2>Payments and orders</h2>
		<p>
			Initial payments are planned to occur through Square-hosted checkout. Square processes payment
			information under its own privacy practices. D-Twenty Farms does not intend to receive or
			store full card numbers or CVV data. We may receive transaction identifiers and order
			information needed to fulfill purchases and resolve refunds.
		</p>
		<h2>Accounts and crop updates</h2>
		<p>
			Future optional accounts may store profile details, preferences, order history, crop-batch
			connections, photographs, notifications, and private pickup information. Access controls and
			Supabase Row Level Security are planned before those features launch.
		</p>
		<h2>Pickup privacy</h2>
		<p>
			The public website identifies only the general Cloud Trails area of Boerne. The exact
			residential address and access instructions will be shared only with authorized customers
			whose eligible orders require that information.
		</p>
		<h2>Email and analytics</h2>
		<p>
			Email announcements and privacy-conscious website analytics may be added later. This policy
			and consent language must be updated before activation. Customers will be offered applicable
			unsubscribe and preference controls.
		</p>
		<h2>Sharing</h2>
		<p>
			Information may be shared with service providers only as needed to operate ordering, payment,
			hosting, email, support, and fulfillment. Courier providers are selected and engaged by
			customers; customers decide what information to provide them.
		</p>
		<h2>Retention, security, and choices</h2>
		<p>
			Operational information should be retained only as long as reasonably needed for fulfillment,
			accounting, safety, dispute resolution, or legal obligations. No system can promise perfect
			security. Contact instructions for access, correction, deletion, and privacy questions must be
			added before launch.
		</p>
		<h2>Children and changes</h2>
		<p>
			The service is not directed to children. Material policy changes will be posted with a revised
			effective date.
		</p>
	</article>
</section>
