# Visual and responsive review

Reviewed July 13, 2026 against the corrected production build. The Vercel deployment URL is protected by Vercel Authentication and redirects anonymous visitors to login, so the screenshots document the same production build through the local Vercel-adapter preview. No broad redesign was performed.

## Evidence

- Desktop: [`home-1440.png`](../artifacts/screenshots/desktop/home-1440.png), [`shop-1440.png`](../artifacts/screenshots/desktop/shop-1440.png), [`harvest-1440.png`](../artifacts/screenshots/desktop/harvest-1440.png)
- Laptop: [`home-1024.png`](../artifacts/screenshots/desktop/home-1024.png), [`shop-1024.png`](../artifacts/screenshots/desktop/shop-1024.png)
- Tablet: [`home-768.png`](../artifacts/screenshots/tablet/home-768.png), [`shop-768.png`](../artifacts/screenshots/tablet/shop-768.png)
- Mobile: [`home-375.png`](../artifacts/screenshots/mobile/home-375.png), [`shop-375.png`](../artifacts/screenshots/mobile/shop-375.png), [`home-320.png`](../artifacts/screenshots/mobile/home-320.png), [`harvest-320.png`](../artifacts/screenshots/mobile/harvest-320.png)
- States: [`mobile-navigation-open.png`](../artifacts/screenshots/states/mobile-navigation-open.png), [`faq-expanded.png`](../artifacts/screenshots/states/faq-expanded.png), [`contact-validation.png`](../artifacts/screenshots/states/contact-validation.png), [`checkout-unavailable.png`](../artifacts/screenshots/states/checkout-unavailable.png)

## Overall assessment

The application feels custom to D-Twenty rather than like a farm template or SaaS landing page. Editorial serif typography, large cream fields, dark canopy sections, gold food-use panels, radish accents, and D20-derived geometry create a recognizable system. The tone is premium but approachable and the Boerne/pickup context is credible.

The experience is more operational than appetizing. That is principally an asset and copy issue: flat provisional SVGs, the `MW` portrait block, release-policy repetition, and small operational microcopy outweigh sensory cues such as leaf texture, freshness, packaging, serving context, and real food.

## Component findings

### Hero composition

At 1440 and 1024px, the asymmetric headline and arched crop frame are balanced, memorable, and immediately communicate microgreens and location. CTA hierarchy is clear. At 768px the stack remains readable, but the illustration becomes a wide visual band. At 375 and 320px the message and both actions remain above the illustration with no clipping or awkward heading wrap. Preserve this composition; replace the illustration with original photography or a photo/graphic hybrid later.

### Typography

The expressive serif and restrained sans combination is the strongest part of the identity. Display sizes scale cleanly at all requested widths. Product-card labels, reservation notes, and footer copy are dense and small on mobile; they remain readable in the capture, but the cumulative effect feels like fine print. Future refinement should remove nonessential microcopy rather than enlarge every element and lengthen the page further.

### Section rhythm

Color-block transitions establish a strong editorial cadence. Desktop spacing is generous and coherent. The homepage is long because it repeats harvest mechanics across featured harvest, process, crop journey, fulfillment, signup, and footer. On mobile this becomes a very long sequence of cards. Consolidate repeated policy detail in a later content pass while retaining the current section order.

### Color and contrast

Canopy, cream, harvest gold, and radish are distinctive and food-adjacent without becoming a generic green farm theme. Focus and error colors are visible. Disabled checkout controls read as unavailable without relying only on color. A formal automated/manual contrast audit should accompany final photography and brand colors, especially for small muted text over cream and green.

### Product and harvest presentation

The harvest context is prominent and the date/cutoff/pickup/capacity group scans well. The two product cards align cleanly on desktop and stack logically on mobile. Price and quantity receive appropriate emphasis. However, the SVG bowl and box are symbols, not evidence of freshness, portion size, or packaging. Real product-in-hand and plated-use photography is the highest-impact visual improvement.

### D20 motifs and distinctiveness

The provisional mark, faceted geometry, small status markers, “Critical Roll” name, and occasional “Critical freshness” line are enough. The site avoids fantasy decoration and should not add more game language. The geometric identity would benefit from one refined divider or crop-frame motif after the final logo is approved, not a larger theme layer.

### Footer and navigation

The desktop footer is compact relative to the page and well proportioned. At 375 and 320px it reorganizes without crowding. The mobile menu is keyboard-operable, clearly labeled, and opens as a simple push-down list with practical targets. That behavior is appropriate for this small navigation set; an overlay is unnecessary.

## Viewport-specific findings

| Width | Result                                                          | Refinement opportunity                                                                                                                 |
| ----- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1440  | Strong hierarchy and generous spacing; product comparison works | Real photography and less fine print                                                                                                   |
| 1024  | Composition remains balanced; no compressed navigation          | Harvest cards are information-dense but usable                                                                                         |
| 768   | No overflow; menu transition is appropriate                     | Hero art and provisional grower block occupy disproportionate height; contact form columns are usable but near their comfortable limit |
| 375   | Clear order, stacked products, functional footer and navigation | Long operational page; reduce repeated explanation after content is finalized                                                          |
| 320   | No clipping, horizontal scroll, or broken headings              | Product/policy density is at the practical limit; preserve short labels and avoid adding fields                                        |

## Priority recommendations

1. Commission original macro crop, packaged-product, in-hand scale, plated-use, and grower photography.
2. Confirm actual packaging before illustrating or describing separate sampler portions.
3. Replace the `MW` portrait block and provisional crop art; these are the largest sources of visual incompleteness.
4. Reduce repeated threshold/preview/Phase 1 language after integrations and policies are real.
5. Preserve the typography, palette, hero structure, card geometry, and subtle D20 treatment.

No screenshot showed a broken responsive layout or accessibility defect that justified a subjective redesign.
