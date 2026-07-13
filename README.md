# D-Twenty Farms

Production foundation for a one-person, grow-to-order microgreens business in Boerne, Texas. Phase 1 is a polished public storefront and typed harvest-release system. It does **not** pretend to provide live ordering, inventory, email, accounts, refunds, or production tracking.

## Architecture and stack

- SvelteKit + Svelte 5: one server-capable codebase for public pages and future application routes
- TypeScript strict mode: domain and integration contracts
- Vite: development/build system
- Tailwind CSS v4 + CSS custom properties: CSS-first tokens and build layer
- Bits UI: installed for future accessible headless interactions; Phase 1 uses semantic native disclosure/navigation controls
- Zod: contact and signup schemas
- Vitest: domain unit tests
- Playwright: critical public-flow browser tests
- ESLint + Prettier: static quality and formatting
- `@sveltejs/adapter-node`: dynamic server deployment; this is not a permanent static export
- pnpm: package manager

The public site, future accounts, operator tools, APIs, checkout, and webhooks remain in one SvelteKit application. UI imports typed local data; business rules live in domain modules; private integrations live under `src/lib/server` and cannot enter client bundles.

## Setup

Requires Node 20+ and pnpm 10+.

```sh
pnpm install
cp .env.example .env
pnpm dev
```

Commands: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm check`, `pnpm lint`, `pnpm format`, `pnpm test`, and `pnpm test:e2e`.

## Environment variables

`PUBLIC_SITE_URL` and `PUBLIC_CONTACT_EMAIL` are safe public configuration. Variables without `PUBLIC_` are server-only. Never expose Square tokens, webhook keys, Supabase service-role keys, a residential address, pickup access instructions, or customer information. `.env.example` lists conventions only; Phase 1 reads no live credentials.

## Folder structure

```text
src/lib/components/       brand, commerce, harvest, layout, shared UI
src/lib/config/           public site configuration
src/lib/data/             typed Phase 1 harvests and products
src/lib/domain/           commerce and harvest types/rules
src/lib/schemas/          Zod form schemas
src/lib/server/           future repositories, services, Square/Supabase adapters
src/lib/utils/            formatting helpers
src/routes/               public pages and SEO endpoints
tests/                    Playwright tests
docs/                     product and technical roadmaps
```

## Editing releases and products

Edit `src/lib/data/harvests.ts` for release dates, status, thresholds, capacity, pickup window, publication, and included products. Edit `src/lib/data/products.ts` for names, pricing (integer cents), rotation, quantities, uses, activity, limits, and checkout URLs. Do not scatter release data through pages.

Harvest statuses are `upcoming`, `open`, `threshold-met`, `sold-out`, `canceled`, and `completed`. Checkout is enabled only when all conditions are true: status is `open`, checkout mode is `square-link`, the product is active, the release is not full, and the product has a valid HTTPS checkout URL.

To activate a verified Square-hosted link, set `squareCheckoutUrl` on the product and `checkoutMode: 'square-link'` on the release. Confirm the Square item, amount, pickup wording, refund policy, and link ownership before publishing. Current links are intentionally `null`.

## Design system

`src/app.css` contains CSS-first Tailwind v4 tokens for canopy, sprout, soil, harvest, radish, cream, ink, semantic surfaces/text/borders, radii, shadows, motion, typography, and focus behavior. The visual direction is editorial, food-led, warm, and geometric. See `docs/design-system.md`.

## Phase 1 limitations

Typed data is local and the August release is explicitly fictional demonstration content. Reservation counts are not presented as demand. Contact and email interfaces do not submit. Threshold evaluation, customer notification, and refunds are manual. There is no database, auth, cart, native checkout, Square API, Supabase, live inventory, customer dashboard, operator dashboard, analytics, or email provider.

## Roadmaps

Supabase eventually owns application data, Auth, Storage, and Realtime. RLS must isolate customers, orders, crop assignments/photos, and pickup details. Square eventually owns financial processing via the Web Payments SDK plus server APIs and verified webhooks. See `docs/database-roadmap.md` and `docs/commerce-roadmap.md`.

Customer work should follow commerce integrity: accounts and order history, authorized pickup details, shared crop-batch updates, then harvest passes/preferences. Operator work should start with real fulfillment and crop planning, then racks/trays, task generation, yield/costs, and profitability—never fabricated metrics.

## Deployment

Build with `pnpm build`; run the Node adapter output with `node build`. Configure the canonical production URL, TLS, server-only secrets, persistent logging, backups, monitoring, and platform-specific proxy headers. Public routes are prerendered today, while the adapter preserves dynamic server capability for future APIs/accounts/webhooks.

## Security

Security headers are set in `src/hooks.server.ts`. CSP currently permits inline styles/scripts required by the compiled app; tighten it with nonces/hashes before payment embedding. Future forms need server validation, bot protection, and rate limiting. Square webhooks require signature verification against the raw body, idempotency, replay resistance, and audit logs. Exact pickup information must be queried server-side only for authenticated customers with eligible paid orders.

## Provisional assets and copy

- Original inline D20/sprout mark and text wordmark
- SVG crop/product illustrations and initial/favicon treatment
- `MW` grower portrait placeholder
- Fictional August release dates, pricing, quantities, varieties, and limits
- Draft privacy policy and terms requiring business/legal review
- Canonical domain and contact email placeholders

## Prelaunch

Complete `docs/launch-checklist.md`. At minimum: approve identity and photography; verify business/product/legal/food-safety copy; replace demo dates; configure owned Square links; test payments/refunds; connect contact and email providers; add business contact channels; approve policies; confirm pickup workflow without public address exposure; test all target devices; configure production domain, monitoring, and analytics consent.
