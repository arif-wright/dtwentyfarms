# Commerce roadmap

## Phase 1 — hosted checkout

Products may contain verified Square-hosted HTTPS links. Checkout remains disabled until a release is open and configured. Threshold checks, notifications, and refunds are manual. Reconcile every reservation against Square before confirming planting.

## Phase 2 — durable application orders

Introduce Supabase products, releases, reservations, orders, and order items. Add server-verified catalog/pricing/capacity and transactionally reserve capacity. Build accounts and order history around real records. Keep Square-hosted checkout until reconciliation is reliable.

## Phase 3 — native branded checkout

Implement provider-neutral checkout services with Square Web Payments SDK tokenization and server-side Orders/Payments calls. Add idempotency, webhook verification, failure recovery, refunds, customer mapping, and reconciliation. Square remains financial authority; D-Twenty owns domain state and UX.

## Phase 4 — continuity products

Add stored card references through Square Cards (never raw card data), harvest passes, subscriptions, skips, credits, and expirations. Add them only after capacity, refunds, and customer support are proven.
