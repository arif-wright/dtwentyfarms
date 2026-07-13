# Database roadmap

Planned Supabase PostgreSQL entities: `profiles`, `customers`, `customer_preferences`, `addresses`, `products`, `crop_varieties`, `harvest_releases`, `harvest_products`, `reservations`, `orders`, `order_items`, `payments`, `refunds`, `subscriptions`, `harvest_passes`, `pickup_windows`, `pickup_passes`, `crop_batches`, `crop_batch_assignments`, `racks`, `shelves`, `trays`, `tray_events`, `crop_updates`, `crop_photos`, `notifications`, `quality_incidents`, and `audit_logs`.

A crop batch may supply many order items; one order may receive products from multiple batches through assignments. Public harvest content is separated from customer/order records. Pickup details are separate private records. Production cost and profitability data is operator-only.

Supabase Row Level Security is mandatory. Customers may read only their profile, eligible orders, associated shared crop batches/approved photos, and pickup records revealed by payment/fulfillment policy. Operators receive scoped roles. Service-role credentials run only on the server. Storage policies mirror database authorization; signed URLs are short-lived. Realtime channels must not broaden row access.

Migrations should add constraints, indexes, status enums/checks, timestamps, immutable financial identifiers, and audit triggers where appropriate. Capacity reservation must be transactional and concurrency-tested.
