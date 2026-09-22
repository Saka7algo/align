# ALIGN website changelog

Track meaningful decisions, documentation, design, implementation and verification changes here. Append future entries at the top of the history, using a date and sequence number. Do not replace previous entries or report planned work as completed.

## Entry format

Each entry should include:

- Date and change ID.
- Type: decision, documentation, design, implementation or fix.
- What changed and why.
- Affected files or areas.
- Verification performed and any remaining limitation.

## History

### 2026-09-22 — 009 — Remove graph stage selector

Type: UI simplification.

Removed the five-column stage selector shown in the user's screenshot and its dependent description panel. Removed the unused selector JavaScript and styles. Kept the graph and its labels; mobile now displays stage names on the graph instead of markers that depended on the removed row. The graph remains responsive without horizontal scrolling.

Affected files: `site/build.mjs`, `site/app.js`, both stylesheets and generated output. Verification: build, generated-page checks and JavaScript syntax check passed.

### 2026-09-22 — 008 — Fit the graph without scrolling

Type: responsive fix.

Removed the graph's forced minimum width and horizontal scroll region. The full five-step graph now fits its container. Desktop retains labels above the steps; phones use numbered markers that match the readable stage names and descriptions directly below, avoiding tiny text. Removed the obsolete keyboard scroll stop and scrolling instruction.

Affected files: `site/build.mjs`, `site/refinements.css` and generated output. Verification: build and generated-page checks passed.

### 2026-09-22 — 007 — Label the escalation graph

Type: design and implementation.

Added all five stage names and their short descriptions above the corresponding graph steps, as requested in the user's screenshot. Kept the existing interactive controls and text alternative. The labelled graphic scrolls horizontally on narrow screens to keep its text legible, with a focusable scroll region for keyboard access.

Affected files: `site/build.mjs`, `site/refinements.css` and generated output. Verification: build and generated-page checks passed. The separately planned mobile hero refinement remains unimplemented.

### 2026-09-22 — 006 — Plan mobile hero refinement

Type: planning only.

Reviewed the user's supplied mobile screenshot and recorded a proposed mobile hero layout in PLAN.md: smaller supporting illustration, controlled heading scale, reduced gaps, comfortable body copy and button sizing, and responsive validation criteria. Preserve the original brand and copy. No website source or generated pages changed in this entry.

### 2026-09-22 — 005 — Remove section label numbering

Type: design.

Removed the numeric prefixes from the homepage section labels: Before the Dispute, The Cost of Waiting, Your Starting Point and Our Services, following the user's request. Stage, pathway and service-card numbers remain unchanged.

Affected files: `site/build.mjs` and generated output. Verification: build and generated-page checks passed.

### 2026-09-22 — 004 — Apply user-supplied website references

Type: design and implementation.

Reviewed the rendered [Jupitice products page](https://jupitice.com/products) and [Sama homepage](https://www.sama.live/) supplied by the user.

- Adapted Jupitice's descriptive offering cards for the six ALIGN services, using existing brief content and a responsive three/two/one-column layout.
- Applied a clearer primary-action treatment inspired by Sama to the starting-point link and registry navigation.
- Retained ALIGN's source colours, service names, copy and no-form policy. No external brand assets or performance claims were reused.
- Updated the design reference record.

Affected files: `site/build.mjs`, `site/refinements.css`, generated output, PLAN.md, DESIGN_LANGUAGE.md and CHANGELOG.md.

Verification: build and all generated-page checks passed. Inspected desktop service cards and mobile layout, confirmed six cards and no horizontal page overflow at the tested desktop/390px widths, and verified Enter-key navigation to AlignWatch. Website remains local.

### 2026-09-22 — 003 — Overall UI refinement

Type: design and implementation.

Responded to the user's screenshot review and request to fix the overall UI.

- Replaced the hero's absolute-positioned illustration and fixed minimum height with a responsive grid. Both party circles stay fully visible, clear of the text and divider.
- Removed the repeated company caption beneath the illustration and reduced excess space below the hero.
- Aligned the header, sections and footer to a common maximum content width; tightened section transitions throughout.
- Refined heading scales, paragraph widths, service-page proportions and mobile service rows.
- Made the curve axis label horizontal and readable, enlarged stage descriptions, and retained keyboard interaction.
- Improved focus contrast on dark backgrounds and gave menu/link controls more comfortable targets.
- Preserved source content and the navy/sage brand surfaces. Used a darker sage derivative for italic text to improve contrast.

Affected files: `site/build.mjs`, `site/refinements.css`, generated `site/dist/`, `site/README.md`, PLAN.md, DESIGN_LANGUAGE.md and CHANGELOG.md. The separate refinement stylesheet is loaded after the original base stylesheet.

Verification: build and all ten generated-page checks passed. Visually inspected the homepage at desktop, 768px tablet and 390px mobile widths, plus mobile services and AlignWatch. No horizontal page overflow on the checked homepage widths or mobile AlignWatch. Verified mobile menu opening/closing after navigation and the cost curve's Enter-key interaction. Full accessibility certification is not claimed.

### 2026-09-22 — 002 — First local website implementation

Type: implementation, design and documentation.

The user instructed “start code now”, superseding the separate pre-code wireframe review step.

- Added a dependency-free static website under `site/`, with generated output in `site/dist/`.
- Built the homepage, six service pages including AlignWatch, method page, registry page and 404 page.
- Used the supplied logo, navy and sage, a minimal editorial layout and the single red-neutral metaphor.
- Added mobile navigation, keyboard focus styles, reduced-motion support and an interactive cost curve with text equivalent.
- Omitted missing details and unprovided content instead of displaying placeholders or dead links. No intake form or live newsletter integration was added.
- Updated PLAN.md and DESIGN_LANGUAGE.md with current implementation status and provisional typography/background/red tokens.

Affected files: `site/package.json`, `site/build.mjs`, `site/style.css`, `site/app.js`, `site/assets/align-logo.jpeg`, `site/favicon.svg`, `site/server.mjs`, `site/check.mjs`, `site/README.md`, generated `site/dist/`, and the three project records.

Verification: build succeeded; checks passed for ten HTML documents covering local links/assets, a single H1 per page, absence of missing-detail placeholders/intake forms/AlignAcademy. Local homepage returned HTTP 200. Inspected desktop homepage and 390px mobile homepage/AlignWatch; checked mobile menu navigation and cost-curve mouse-click and Enter-key interaction. Checked homepage and AlignWatch for horizontal page overflow at the mobile viewport; none found. Adjusted hero illustration clearance and mobile curve label sizing after inspection.

Remaining: user visual review, full accessibility audit, remaining content-dependent pages/resources, contact details and publication. No deployment occurred.

### 2026-09-22 — 001 — Planning baseline

Type: decision and documentation.

Created the long-term planning records following the user's request:

- `PLAN.md`: scope, source reference, confirmed decisions, dependencies, delivery milestones and maintenance rules.
- `DESIGN_LANGUAGE.md`: minimal visual direction, supplied colours, brand metaphor, layout and interaction requirements.
- `CHANGELOG.md`: persistent change history and entry convention.

Recorded decisions from the conversation:

- AlignWatch is included now; AlignAcademy is deferred.
- Preserve the document's content, structure, theme and colours, subject to explicit user decisions.
- Use a minimal design.
- Omit missing details for now without visible placeholders.
- Continue planning before website coding.

Verification: checked the records against the reviewed source text, embedded brand/homepage images and the user's subsequent decisions. Confirmed all three Markdown files exist and their relative cross-links resolve. No website implementation, browser tests or deployment has occurred.

Remaining: review layout plans, select implementation tools and resolve content dependencies when needed. Exact red/background colour tokens and fonts are not yet selected.
