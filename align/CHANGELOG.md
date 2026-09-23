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

### 2026-09-23 — 025 — Remove the added SVG illustrations

Type: user-requested reversal.

Removed the nine new page illustrations, six service-card symbols, their helper module and layout styles. Restored the plain introductions and original service-card index/arrow presentation. Preserved the original homepage circles, cost chart, logos and all earlier content and interaction changes. Rebuilt the website; all ten generated-page checks passed. Supersedes entry 024.

### 2026-09-23 — 024 — Add content-led SVG illustrations

Type: approved plan implementation.

Added nine original primary illustrations for the six service pages, method, contact and 404, plus six simplified homepage service symbols. Local inline SVGs share navy/sage colours, restrained red neutral accents and non-scaling strokes. Shared introduction layouts place artwork beside copy at desktop widths and below copy on smaller screens, keeping headings full-width. Short viewports use smaller artwork. The existing homepage hero and all current content removals are preserved.

Affected files: site/illustrations.mjs, site/build.mjs, site/refinements.css, generated output and planning/design documentation. Build and all ten generated-page checks passed; all 16 SVG elements parsed as valid XML. Assertions checked route coverage, decorative semantics, prior removals and asset budgets. Primary illustrations are 531–899 bytes. Browser rendering was not tested because the prior approval restriction remains unresolved.

### 2026-09-23 — 023 — Plan content-led SVG illustrations

Type: planning only.

Created SVG_ILLUSTRATION_PLAN.md covering all nine content pages, the 404 page and shared sections. Defined navy/sage artwork, limited semantic use of red, page-specific concepts, desktop/mobile placement, accessibility rules and a phased implementation sequence. Based on current source and earlier screenshots; no new visual verification claimed. No website source, assets or generated output changed.

### 2026-09-23 — 022 — Track the services navigation highlight

Type: navigation fix.

The Our services links in the header and footer now expose aria-current="location" while the services section occupies the viewport reading position, and clear when scrolling away. Tracking handles scrolling in either direction, resizing, fragment changes and restored page positions. Active navigation underlines now apply at desktop and mobile widths. Clarification was offered; implementation proceeded with the navigation-highlight interpretation.

Build, all 10 generated-page checks and JavaScript syntax passed. An isolated Node test of the scroll-state code passed section entry/exit, reverse scrolling, resize, fragment changes, restored position, animation-frame coalescing and pages without the services section. This was a logic test, not a browser-rendering test; live browser verification remains blocked by the earlier approval restriction.

### 2026-09-23 — 021 — Remove the footer tagline

Type: requested content removal.

Removed “Prevent · Align · Resolve” beneath the footer logo on all pages. Retained the logo, contact details, location and navigation. Rebuilt the site; all 10 generated-page checks passed.

### 2026-09-23 — 020 — Use the supplied logo in the footer

Type: requested brand update.

Replaced the footer's text wordmark with the existing ALIGN logo image, using the header's crop and proportions. Retained the home link, accessible name and contact layout. The footer image loads lazily. Rebuilt the site and verified all 10 generated pages and their local assets.

### 2026-09-23 — 019 — Add contact details and simplify the footer

Type: requested content and design update.

Added align.resolution@gmail.com and +91 8138960482 as mailto/tel links in the shared footer. Organized the footer into brand, Contact us and Find us columns with a separate navigation row. Columns collapse at tablet and phone widths; contact and navigation links have at least 44px target heights. Retained the supplied location and existing brand colours. All 10 generated pages passed build/link checks and assertions for the contact URLs and unique footer heading IDs. Live browser verification remains unavailable under the earlier approval restriction.

### 2026-09-23 — 018 — Remove mediation timing claim

Type: requested copy edit.

Removed “First session within 35 days of intake — you can hold us to the number because we printed it.” from the mediation service copy and its generated metadata. The introduction retains the sentence about published rules and fee scale. Rebuilt the site; all 10 generated-page checks passed.

### 2026-09-23 — 017 — Simplify the prevention-retainer page

Type: requested content and layout edits.

Replaced the AlignFirst headline with “The Line is set before the foundation is poured”, following the later replacement comment for the same heading. Removed its audience and engagement fields, the “Designing the dispute clause” section and the registry-note section. Kept the introduction, appointment description and related-service links. The remaining appointment content now uses a single column, with spacing before related services. These template exceptions apply only to prevention-retainer.

Verification: build and all 10 generated-page checks passed. Assertions confirmed the new heading and all requested removals; every other generated HTML page remained byte-for-byte unchanged. Browser verification was not attempted while the prior browser approval restriction remains unresolved.

### 2026-09-23 — 016 — Simplify the hero copy

Type: requested content edit.

Removed “HiLITE Business Park” from the hero introduction, which now ends “practice in Kozhikode.” Removed the hero's “Prevent · Align · Resolve” baseline and its divider, with bottom padding retained for section spacing. Footer and registry content remain unchanged. Build and all 10 generated-page checks passed; generated HTML assertions confirmed both hero removals. Browser verification was not repeated because browser approval remains blocked.

### 2026-09-23 — 015 — Follow the current stage while scrolling

Type: requested interaction.

Added scroll-driven highlighting to the phone/tablet stage list, using the stage nearest the reading position. Native scrolling remains uninterrupted; the current item exposes aria-current="step". Build, generated-page checks and JavaScript syntax passed. Browser validation was blocked by automatic approval review and remains unverified.

### 2026-09-23 — 014 — Place mobile illustration before the action

Type: requested layout adjustment.

Moved the standalone illustration and caption between the introductory paragraph and the starting-point button on phones. Preserved desktop placement. Updated responsive CSS and rebuilt output. Build and all 10 generated-page checks passed; verified text → illustration → button order at 320 and 395px, with no horizontal overflow at those widths or 1440px.

### 2026-09-23 — 013 — Restore the separate hero illustration

Type: user-requested restoration.

Restored the standalone two-party illustration and its caption below the mobile hero button, matching the supplied reference. Desktop again places the illustration beside the copy. Removed the inline headline SVG and restored the earlier headline and introduction layout. Retained the mobile navigation, accessibility and service-layout improvements. Supersedes entries 011 and 012. Rebuilt the site; all 10 generated-page checks passed.

### 2026-09-23 — 012 — Combine the symbol and hero headline

Type: design and implementation.

At the user's request, merged the two-party symbol into the headline beside “winner.” using a responsive inline SVG. Preserved the complete headline as accessible text; the redundant illustration is decorative. Removed the separate hero illustration block and moved its caption to the baseline. Desktop uses one broad headline composition with the introduction and action below; mobile wraps naturally. Supersedes entry 011's standalone symbol placement. Build and all 10 generated-page checks passed; 320, 390, 768 and 1440px layouts showed no horizontal overflow.

### 2026-09-23 — 011 — Place the brand symbol above the mobile headline

Type: design and implementation.

Moved the two-party symbol to the top of the mobile hero, centered below the navigation header and above the headline. Reduced it to 180px wide so it introduces the brand without dominating the opening. Kept the ALIGN wordmark in the header and the desktop symbol beside the hero copy. Updated site/refinements.css and rebuilt site/dist. Build and all 10 generated-page checks passed; 320, 390, 430 and 1440px layouts had no horizontal overflow. Inspected the mobile result visually.

### 2026-09-23 — 010 — Mobile experience redesign

Type: design, implementation and verification.

Implemented the earlier mobile hero plan with a compact logo/menu header, smaller supporting illustration and content-sized spacing. Added sticky mobile navigation with explicit Menu/Close states, Escape/outside/focus-exit dismissal, breakpoint reset, active-page indication and working navigation when JavaScript is unavailable. Same-page navigation and skip links move focus to their destinations. Enlarged shared navigation, footer and back-link targets.

Replaced scaled chart text on phones/tablets with a non-interactive ordered progression containing every stage name, caption and description. Kept the desktop SVG and did not restore the removed selector. Simplified mobile service discovery into full-width editorial link rows and refined service-page type sizes. Original brand and service copy remain intact.

Affected files: site/build.mjs, site/refinements.css, site/app.js, generated site/dist, PLAN.md, DESIGN_LANGUAGE.md and MOBILE_REDESIGN.md. Build, all 10 generated-page checks and JavaScript syntax check passed. Browser checks covered 320–1440px responsive widths, all six service journeys, three starting-point links, approach/registry navigation, keyboard and focus behavior, landscape, script failure and a 200% root-font-size fixture. Temporary fixtures were removed. True browser zoom, text-only browser enlargement and real-device screen-reader testing remain unverified. Registry contact details remain an existing publication dependency.

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
