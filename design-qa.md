# Design QA — SIMAV landing

## Comparison target

- Source visual truth: `C:\Users\alobu\.codex\generated_images\01a01daa-9417-7ce3-b65d-69ad5cfe65cc\exec-854a2b33-afe5-4317-bcf4-3dcfbc2f6781.png`
- Browser-rendered implementation: `C:\Users\alobu\Desktop\vida\proyectos\Simav\landing-project\qa\implementation-astro-final.png`
- Responsive implementation: `C:\Users\alobu\Desktop\vida\proyectos\Simav\landing-project\qa\implementation-astro-mobile.png`
- State: default landing page, dark theme, no modal open.

## Viewport and normalization

- Source visual pixels: 864 x 1821. It represents a conceptual 1440px-wide desktop marketing page compressed to the generated-image canvas.
- Desktop implementation pixels and CSS viewport: 1440 x 2800 at device scale factor 1. The capture viewport is taller than the document; the blank navy area after the footer is capture canvas, not page content, and was excluded from composition judgment.
- Mobile implementation pixels and CSS viewport: 500 x 1800 at device scale factor 1, within the implemented mobile breakpoint.
- Density normalization: no 2x density mismatch. Comparison was made by matching the implementation to the source's intended 1440px desktop composition rather than scaling the source's compressed raster literally.

## Full-view comparison evidence

The source and final Astro capture were opened together in one comparison view. The implementation preserves the selected direction's dominant composition: full-bleed nighttime city hero, left-aligned condensed headline, cyan surveyed route, restrained amber severity signal, floating evidence record, centered three-step flow, equal split between documentary road evidence and MVP outputs, bright cyan pilot band, and compact dark footer.

## Focused region evidence

- Hero: verified readable headline wrapping, dark negative space, route imagery, evidence-card proportions, navigation, cyan/amber emphasis, and button hierarchy against the source.
- MVP split: verified the pothole image subject and crop, six-row information density, thin dividers, icon weight, scope note, and cyan pilot transition.
- Mobile: verified menu control, stacked CTAs, evidence card, section reflow, legible text, and absence of visible horizontal overflow at the mobile breakpoint.

## Required fidelity surfaces

- Fonts and typography: passed. Barlow Condensed recreates the narrow display hierarchy; Space Grotesk carries readable body and UI copy; IBM Plex Mono matches technical labels and evidence metadata. Weight, wrapping, line height, and hierarchy align with the source.
- Spacing and layout rhythm: passed. Hero, process, evidence split, CTA, and footer proportions follow the source. Mobile stacking keeps the original information order and maintains comfortable tap targets.
- Colors and visual tokens: passed. Midnight navy, off-white, electric cyan, muted blue-gray, and amber severity are mapped consistently through CSS variables. The moving grid remains deliberately low contrast.
- Image quality and asset fidelity: passed. Three dedicated generated raster assets match the source art direction and are used at appropriate crops. Product icons come from the Phosphor icon library through Astro Icon; no placeholder imagery or custom-drawn SVG assets remain.
- Copy and content: passed. Spanish copy covers the smartphone sensor, computer vision, GPS, date, evidence, severity, pilot intent, and explicit exclusion of traffic lights from the initial MVP.

## Interaction and runtime verification

- Framework: Astro 5.14.1 static build.
- Images loaded: all browser images complete with non-zero natural dimensions.
- Navigation: `#producto`, `#mvp`, and `#piloto` anchors verified.
- Pilot journey: CTA opens modal; required form submits to visible success state; close action removes the modal state and restores body scrolling.
- Responsive navigation: mobile menu control is present at the verified breakpoint.
- Browser console: zero errors in the final interactive run.
- Browser layout metrics in the interactive run: viewport width 756px, document scroll width 741px, no horizontal document overflow.
- Production checks: `npm run build` passed and `npm run test:sites` passed 4/4.

## Comparison history

1. Initial implementation matched the selected visual, but used the starter's React/Vite runtime instead of the user-required Astro framework. Classified P1 because it violated a hard implementation constraint. Fixed by migrating the page, interactions, icon rendering, scripts, and build configuration to Astro while preserving the visual output.
2. Initial browser console check reported one missing favicon request. Classified P2 polish/runtime issue. Fixed with an explicit real PNG favicon asset; the final console check reports zero errors.
3. Final Astro capture was compared again with the source. No actionable P0, P1, or P2 differences remain. The implementation adds a functional pilot modal and explicit out-of-scope note; both support the brief without changing the selected visual hierarchy.

## Findings

- No actionable P0, P1, or P2 findings remain.
- P3: the generated mock uses a slightly more compressed vertical rhythm in the process and MVP sections. The implementation's additional breathing room improves real-page readability and responsive behavior, so this is accepted as an intentional production adaptation.

## Implementation checklist

- [x] Preserve selected visual hierarchy and color system.
- [x] Use generated image assets and a coherent icon library.
- [x] Implement in Astro.
- [x] Add accessible navigation, modal, form, success, focus, and reduced-motion states.
- [x] Verify desktop and mobile rendering.
- [x] Pass production build and Sites packaging tests.

## Follow-up polish

- Optional P3: replace the temporary evidence-image favicon with a dedicated SIMAV brand mark when an official logo asset exists.

final result: passed
