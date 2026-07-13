# Asset inventory and replacement plan

All current brand and product visuals are provisional original assets. No final logo artwork or original food photography is present.

## Brand assets

| Asset                  | Location                                    | Current use                      | Status                                                           |
| ---------------------- | ------------------------------------------- | -------------------------------- | ---------------------------------------------------------------- |
| Inline D20/sprout mark | `src/lib/components/brand/BrandMark.svelte` | Header, footer, wordmark         | Provisional original SVG; needs final identity review            |
| Text wordmark          | `src/lib/components/brand/Wordmark.svelte`  | Header and footer                | Live text plus provisional mark; not a final exported logo suite |
| Public favicon         | `static/favicon.svg`                        | Browser/manifest icon            | Provisional geometric mark                                       |
| Scaffold favicon       | `src/lib/assets/favicon.svg`                | Not referenced by current layout | Remove or reconcile when final favicon ships                     |
| Manifest               | `static/site.webmanifest`                   | Install/browser metadata         | Functional; icon remains provisional                             |

Needed final variants: full mark, horizontal lockup, icon-only D20, monochrome, small favicon, packaging-label lockup, and source files with spacing/minimum-size rules.

## Illustration and photography

| Asset                      | Location                          | Purpose            | Review                                                                                      |
| -------------------------- | --------------------------------- | ------------------ | ------------------------------------------------------------------------------------------- |
| Hero crop illustration     | `static/images/hero-crop.svg`     | Large hero visual  | Memorable silhouette and palette; too abstract to demonstrate freshness or product reality  |
| Critical Roll illustration | `static/images/critical-roll.svg` | Sampler card       | Communicates “bowl/variety,” not portion separation, packaging, scale, or real crop texture |
| Weekly box illustration    | `static/images/weekly-box.svg`    | Weekly box card    | Communicates “box,” but may set a packaging expectation before packaging is chosen          |
| `MW` portrait block        | CSS in homepage/about routes      | Grower placeholder | Clearly provisional and visually dominant, especially at tablet width                       |

There are no raster crop photos, packaging photos, plated food photos, studio photos, or grower portraits.

## Typography assets

`src/app.css` declares Fraunces/Inter names but resolves them through local Georgia/Arial fallbacks; no font files are bundled and no third-party font request is made. Rendering can vary by operating system. Decide whether to license/self-host final WOFF2 files or formally adopt a system stack, then retest line wrapping at all target widths.

## Recommended photography shot list

1. Macro hero crop with real radish/broccoli/pea texture and controlled negative space for copy.
2. Each final product in its actual closed and open packaging, with a hand or common object for scale.
3. Sampler portions shown separately if that is the actual offer.
4. Weekly box contents shown honestly as mixed or separated.
5. Microgreens on eggs, breakfast tacos, sandwiches, burgers, salads, and rice bowls.
6. Michael in the growing studio without revealing residential access, address markers, vehicle plates, documents, or private household details.
7. Batch journey images: seeded, germinating, uncovered, under lights, nearly ready, cut, packed.

Record crop, batch/date, photographer, usage rights, alt-text intent, and approval status for every photograph. Strip location metadata before publication.

## Screenshot artifacts

The review set under `artifacts/screenshots/` contains 15 PNG captures: five desktop/laptop, two tablet, four mobile, and four interaction states. They are review evidence, not public brand assets. Regenerate with `pnpm capture:review` against a running production preview, or set `BASE_URL` to an accessible deployment.

## Replacement priority

1. Real product and plated-use photography.
2. Real grower portrait.
3. Final packaging decision and accurate quantity imagery.
4. Final D20/sprout identity and favicon suite.
5. Final self-hosted or system typography decision.

Avoid adding stock microgreen photography that does not match the sold varieties, portions, or growing setup; it would increase polish while reducing credibility.
