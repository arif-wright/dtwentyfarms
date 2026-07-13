# Architecture

## Boundaries

Public Svelte routes compose domain-aware components. `lib/data` is the Phase 1 repository; `lib/domain` owns types and deterministic rules; `lib/server/services` owns provider-neutral contracts; `lib/server/integrations` will implement them. UI code must not call Square or Supabase directly.

The Node adapter supports future dynamic routes. Public content is prerendered. Account, admin, API, checkout, and webhook routes remain uncreated until their phases need real behavior.

## Security model

Client bundles receive only public release and product fields. Residential address, access instructions, customer data, order/payment details, crop assignments, and internal metrics remain server-only. Future authenticated access must check an eligible paid order before returning pickup information.

Forms require server-side Zod validation, normalized inputs, abuse protection, rate limits, CSRF-aware design, and safe logging. Rate-limit keys should combine account ID where available with privacy-conscious network signals. Webhooks require raw-body signature verification, idempotency keys, event persistence, replay handling, and auditable state transitions. Never log secrets or sensitive payment payloads.

## Payment flow (future)

1. Build cart on D-Twenty.
2. Server validates products, price, capacity, cutoff, and customer limits.
3. Square Web Payments SDK tokenizes card details.
4. Client sends the one-use token to SvelteKit.
5. Server creates the Square order and submits payment.
6. Server stores D-Twenty and Square identifiers.
7. Capacity is reserved transactionally.
8. Customer receives a D-Twenty confirmation.
9. Verified webhooks reconcile payment/refund state.

Never store full card number, CVV, magnetic-stripe data, Square access tokens client-side, or raw payment tokens after use.

## Observability and audit

Record actor, action, entity, correlation ID, timestamp, and redacted before/after state for financial, capacity, pickup, support, and production changes. Monitoring should alert on webhook failures, capacity conflicts, failed refunds, and notification errors without leaking customer data.
