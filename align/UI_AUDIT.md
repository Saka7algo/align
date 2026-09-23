# ALIGN accessibility and responsive audit

Date: 2026-09-23. Audit only; no implementation changes.

## Implementation integrity verdict

Pass on manual inspection: the shared templates, navy/sage palette, neutral illustration, service names and prevention-first content form a coherent product-specific system. The bundled Impeccable detector could not run: its engine is not installed and its cache directory is not writable. No automated detector clearance is claimed.

## Audit health

These are provisional engineering scores, not a WCAG conformance certification.

| Dimension | Score | Evidence |
|---|---:|---|
| Accessibility | 3/4 | Semantic links, headings, landmarks and menu state; chart equivalence needs improvement |
| Performance | 4/4 | Static HTML, small local script, system fonts, one 64 KB logo; no runtime framework or external font requests |
| Responsive design | 2/4 | Pages reflow, but chart text becomes very small and captions disappear |
| Theming | 3/4 | Core tokens are shared; several surface colours remain literal values |
| Implementation integrity | 3/4 | Coherent implementation; chart differs from documented mobile treatment |
| **Total** | **15/20** | **Good; address weak dimensions** |

Three verified findings: P0: 0, P1: 0, P2: 3, P3: 0. No confirmed WCAG AA failure is asserted from these bounded checks.

## Findings

### [P2] Chart labels shrink to approximately 7.5px on narrow phones

- Location: `site/refinements.css:37`, `site/refinements.css:144`; homepage cost curve in `site/build.mjs:28`.
- Category: Responsive / Accessibility.
- Evidence: At a 320px browser viewport, the SVG rendered 268.225px wide. Its 1000-unit viewBox scales the 28px stage labels to 7.51 CSS pixels. At 390px, they are about 9.25px. At 768px, the restored 17px captions render at about 11.26px. The mobile screenshot confirms extremely small labels.
- Impact: Users must magnify the graph to identify stages; low-vision users are particularly affected.
- Standard: Readability defect; WCAG does not prescribe a universal minimum font size, so small text alone is not an AA violation.
- Recommendation: Put stage names in normal HTML at readable sizes and provide a stacked mobile legend or stage list. Keep the graphic responsive without scaling its only labels down with it.
- Suggested command: `/impeccable adapt`.

### [P2] Mobile chart removes explanatory content without a visible equivalent

- Location: `site/refinements.css:145`; chart generation in `site/build.mjs:28`.
- Category: Responsive / Accessibility / Implementation integrity.
- Evidence: Below 701px, all `.graph-stage-caption` elements use `display: none`. This removes “Clause + charter”, “Early warning”, “A neutral in the room”, “Formal, post-breakdown” and “Formal determination”. No HTML legend replaces them. The SVG accessible description provides a useful high-level summary, but does not retain all stage-caption relationships. The accessibility tree exposes that summary as one image rather than a stage list.
- Impact: Phone users receive less explanatory information than desktop users. Assistive-technology users cannot inspect the complete stage explanation as structured text.
- Standard: Content parity and text-equivalent concern; a formal non-text-content/reflow conformance determination requires assessing which details are essential.
- Recommendation: Add one ordered HTML list containing all five stage names and descriptions, available at every width. Preserve the existing SVG summary. This also implements the readable mobile stage treatment promised in `DESIGN_LANGUAGE.md`.
- Suggested command: `/impeccable adapt`.

### [P2] Footer links have shallow touch targets

- Location: `site/style.css:1` (`.footer-top>a:last-child`, `.footer-bottom`); `site/refinements.css:69`, `site/refinements.css:188`.
- Category: Responsive / Accessibility.
- Evidence: At 320px, “The registry” measures approximately 268×22.4px and “The neutral side of the table” approximately 268×20.8px. The shared footer repeats on every page.
- Impact: Short target height makes tapping less forgiving for users with limited dexterity.
- Standard: Below the audit's 44×44px recommendation. This is not automatically a WCAG AA target-size failure: spacing exceptions must be considered, and these links have generous surrounding space.
- Recommendation: Give these anchors a minimum block size of 44px with inline-flex alignment and suitable vertical padding.
- Suggested command: `/impeccable adapt`.

## Patterns and positive findings

The chart is the main systemic gap: it scales graphic geometry and labels together, then hides detail to fit mobile. One structured HTML legend can address both chart findings. Small targets are concentrated in the shared footer.

Preserve the semantic anchors and native menu button, `aria-expanded`/`aria-controls`, labelled navigation, skip link, image descriptions, focus-visible styles and reduced-motion handling. Enter opens the mobile navigation; Escape closes it and returns focus to the button. Hidden navigation is absent from the collapsed accessibility tree. Main text colours use darker alternatives to the original sage. Static pages and local assets keep the delivery lightweight.

## Verification and limits

- Inspected source templates, both CSS files, JavaScript and existing product/design notes.
- Rendered homepage at 320, 390, 768 and 1440px viewport widths; no horizontal overflow in these samples.
- Checked all eight other content routes at 320px; no horizontal overflow. Browser scrollbar reduced the content width to 305px in these narrow tests.
- Visually inspected mobile homepage, mobile chart, desktop chart and mobile standing-neutral page.
- Existing `node site/check.mjs` passed for all 10 HTML documents, including 404: local links/assets, one H1 and existing content exclusions.
- Engine-dependent context loading and detector were attempted but unavailable. Existing DESIGN_LANGUAGE.md and PLAN.md supplied context; PRODUCT.md and DESIGN.md were absent.
- Not tested: screen-reader software, 200% text-only enlargement, forced-colour mode, mobile hardware, performance timings/Core Web Vitals, full interaction coverage or formal WCAG conformance. Performance/theming scores reflect source inspection only. Dark mode is not a stated requirement and its absence is not treated as a defect.
- Registry contact details are an explicitly deferred project dependency, so their omission is not counted as an accessibility or responsive regression.

## Recommended actions

1. **[P2] `/impeccable adapt`**: Add readable stage labels and a complete HTML chart legend, then enlarge shared footer targets.
2. **`/impeccable audit`**: Verify corrected widths, keyboard behavior and text enlargement.
3. **`/impeccable polish`**: Final visual consistency pass after functional corrections.

You can ask me to run these one at a time, all at once, or in any order you prefer. Re-run `/impeccable audit` after fixes to reassess the score.

