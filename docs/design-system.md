# Design system

The system is food-first, editorial, warm, and premium without rustic farm clichés. Forest canopy anchors trust; cream creates warmth; harvest gold and radish add appetite and energy; D20 geometry appears only in the provisional mark, dividers, framing, and small status details.

Tokens live in `src/app.css` and map CSS custom properties into Tailwind v4 theme variables. Use semantic surface, text, border, focus, and status roles instead of raw values in components. Display typography uses a locally resolved Georgia/Fraunces-style editorial fallback; interface text uses local Arial/Inter-style sans fallback so Phase 1 makes no third-party font request.

Type scales use `clamp()` to avoid mobile overflow. Containers cap at 74rem. Cards use restrained radii and shadows. Controls have at least practical 48px targets and visible radish focus rings. Motion is short and functional; reduced-motion preferences disable it.

All current illustration, logo, wordmark, favicon, and portrait treatments are provisional original assets. Replace them with approved identity, original crop photography, packaging images, and a real grower portrait without changing component contracts.
