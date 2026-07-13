# Customer journey and offer review

## End-to-end customer flow

### 1. Landing and understanding the offer

The hero answers the first questions quickly: D-Twenty sells small-batch microgreens in Boerne, harvests are limited, and pickup is scheduled. “View the Next Harvest” is the right primary action. The illustration signals plants but not the freshness, portion, or real-life food experience that photography would provide.

### 2. Recognizing a preorder

“Grown to order,” the shop introduction, release dates, and disabled checkout state make it clear that this is not ready-now inventory. The shop expresses this most directly. The homepage could eventually say “Preorder for the August 21 harvest” in the featured heading or CTA when real dates are active.

### 3. Understanding the minimum

The corrected copy now explains the full outcome: payment occurs at reservation, the minimum is evaluated after orders close, the customer then receives confirmation if it is met, and otherwise receives notice and a Square refund during the initial release. This should remain one reusable policy statement so future edits do not drift across pages.

“Threshold” is accurate but unfamiliar retail language. Pair it with “minimum 8 paid reservations needed to grow this harvest” wherever space permits. The progress meter must not imply live demand until it is backed by verified order data.

### 4. Comparing products

The distinction is understandable but incomplete:

|                      | Critical Roll Sampler                                    | Weekly Harvest Box                                |
| -------------------- | -------------------------------------------------------- | ------------------------------------------------- |
| Published quantity   | Three 1.5 oz portions; 4.5 oz total                      | Approximately 6 oz total                          |
| Demonstration price  | $18                                                      | $24                                               |
| Implied unit price   | $4/oz                                                    | $4/oz                                             |
| Best current purpose | First-time tasting, variety comparison, separate flavors | More volume for several meals, simpler weekly use |
| Implied packaging    | Likely three compartments or containers                  | Likely one larger container or mix                |

The weekly box is 33% larger and 33% more expensive, so there is no demonstrated volume value. That is not necessarily wrong—packaging and crop costs may justify it—but “generous” can create an expectation of a value advantage. Do not finalize either price until seed, medium, labor, yield, crop loss, packaging, payment fee, and tax assumptions are known.

The sampler’s three separate portions are a meaningful differentiator only if packaging actually keeps varieties separate. If the sampler is mixed, rewrite the quantity and purpose. The weekly box needs a stronger repeat-customer promise, such as a dependable amount for several meals, while the sampler should explicitly welcome first-time buyers.

### 5. Dates, payment, confirmation, and guarantee

Harvest and pickup now both render as August 21, 2026. The original defect came from parsing a date-only pickup value as UTC and displaying it in Central Time; the pickup value now contains an explicit Central offset, and chronology validation prevents a pickup before harvest.

Payment timing is described in FAQ and process copy, but it should be repeated adjacent to a live checkout button: “Pay now through Square for this future harvest.” The harvest is not guaranteed at payment time. Confirmation arrives after the order window closes if the minimum is met. The current site does not specify the notification channel; before launch, state whether confirmation/refund notice arrives by email, SMS, or both and ensure Square/contact data supports that promise.

### 6. Pickup, courier, and private instructions

The distinction is strong: D-Twenty does not deliver, scheduled pickup is primary, and the customer may arrange and pay for a courier. The general Cloud Trails area is public while the residential address remains private. Corrected public copy says instructions are sent after the harvest is confirmed. Before checkout launches, define missed pickup, courier identification, late courier, handoff, and food-temperature responsibilities.

### 7. Attempting checkout

The disabled “Checkout coming soon” state is honest and visually clear. The preview notice explains why. For a real upcoming release, show the open date on the disabled CTA (“Checkout opens Aug 3”) rather than the less actionable “coming soon.” A sold-out release should retain product details, replace the purchase CTA with “Join the next harvest list,” and make capacity state prominent.

## Remaining ambiguity to resolve before live sales

- Are the sampler portions physically separated, and what containers are used?
- Is the weekly box a mixed blend or separate varieties?
- Are listed ounces minimum net weight, target weight, or approximate packed weight?
- What notification channel confirms or cancels a harvest?
- How long should a Square refund take to appear, without overpromising bank timing?
- What happens when a customer or courier misses the pickup window?
- Does the pickup address arrive in D-Twenty email, Square receipt/custom field, or a later customer account?
- Are substitutions allowed, and how materially may the expected rotation change?

## Crop journey as the differentiator

### Public preview

Keep the concise public sequence: Reserved → Confirmed → Seeded → Under the lights → Harvested → Ready for pickup. Label it as an example journey, not live tracking. Add one real, approved crop photograph and a short grower note when source material exists; do not manufacture updates.

### Future logged-in experience

Associate order items with shared crop batches. A customer sees only batches contributing to their order, with variety, batch code, seeded date, current stage, estimated harvest, approved photo, timestamp, and grower note. Use “part of the batch growing for your box,” never “your tray,” unless production truly dedicates a tray.

Useful update cadence is event-based, not daily: confirmation, seeding, first light/uncovering, nearly ready, harvest/pack, and pickup ready. Distinguish estimated dates from actual events and show delay/cancellation messages in the same timeline.

### Photos and grower notes

Photos should be batch-linked, timestamped, screened for private location metadata, and reusable across every authorized order supplied by that batch. Notes should be short and specific: stage, visible change, timing, and any approved substitution or delay. Avoid generic automated enthusiasm that weakens trust.

### Private pickup readiness

“Ready for pickup” may reveal the private address, window, pickup code/pass, courier flag, and handling instructions only when the customer is authenticated and the order meets the paid/confirmed policy. Public progress pages and notification previews must never contain the street address or access details.

Do not implement the dashboard until real batch, order, authorization, and notification behavior exists.
