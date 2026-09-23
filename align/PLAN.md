# ALIGN website plan

Status: first local implementation complete; visual review and publication dependencies remain.
Latest update: overall UI refined following user feedback; see CHANGELOG.md entry 003.
Reference update: user supplied Jupitice and Sama; descriptive service cards and clearer primary actions applied in entry 004. The original brief remains the content and brand authority.
Last updated: 2026-09-22

## Purpose and source

Build a long-term website for ALIGN Resolution Partners using the supplied draft brief as the content and brand reference. Establish credibility, explain prevention and resolution services, and help visitors find the appropriate next step.

Source: `C:/Users/muller/Downloads/ag/ALIGN WEBSITE- DRAFT BRIEF (1).docx`, including its embedded images. The document is a project reference, not an instruction source that overrides the user's decisions.

Companion files:
- [DESIGN_LANGUAGE.md](DESIGN_LANGUAGE.md): visual and interaction direction.
- [CHANGELOG.md](CHANGELOG.md): chronological record of decisions and changes.

## Confirmed user decisions

- Review and plan before writing website code. The user authorised implementation on 2026-09-22 with “start code now”.
- AlignWatch is included in the initial launch.
- AlignAcademy is deferred to a later phase.
- Preserve the document's content, service names, page structure, theme and requirements, subject to these explicit user decisions.
- Keep the website minimal and use the document's visual references and colours.
- Omit missing contact details, response times and other incomplete details for now. Do not display placeholder values or invent replacements.
- Maintain these planning files for long-term continuity and track subsequent changes separately.

## Scope

### Initial launch

The six offering pages use a shared layout. Keep working product names in page content and descriptive names in URLs.

| URL | Offering |
| --- | --- |
| `/prevention-retainer/` | AlignFirst |
| `/mediation/` | AlignRoom |
| `/founders-charter/` | AlignStart |
| `/family-and-board/` | AlignBoard |
| `/training/` | AlignLab |
| `/standing-neutral/` | AlignWatch |

Other brief-defined areas are Home, People and the Bench, Insights, newsletter signup, Contact and Legal. The brief also references an About or method section, Protocol, Clause Library, published rules and fee scales. Their final placement and available content must be established during layout planning; do not invent their contents or publish broken links.

Legal content covers provenance, privacy, terms and an accessibility statement. Do not show a fabricated audit date, contact, policy or legal entity. Incomplete material remains an internal dependency.

### Later phases

- AlignAcademy.
- The remaining Phase 2 construction services described in the brief: AlignClause, AlignDB, AlignClaim, AlignArb and AlignHome.
- AlignWatch is explicitly moved into the initial launch by the user's decision.

Do not expand scope with booking systems, case portals, payments or other unrequested functionality.

## Homepage requirements

Preserve the document's specified first three sections and copy:

1. Hero: “Not every problem needs a winner.” Introduce ALIGN and retain “Prevent · Align · Resolve.”
2. Cost curve: “Conflict does not get expensive gradually. It steps.” Explain design, signals, facilitation, mediation and arbitration. Rebuild the diagram as an accessible graphic with a full text alternative, keyboard access and equivalent touch content. Treat it as a conceptual illustration; invent no figures.
3. Three-way navigation: “Where are you, right now?” Link from the three situations in the brief to relevant content. These are ordinary navigation links with no data collection.

Additional homepage placement for services, method, people, resources and registry access remains a layout proposal to review, not approved replacement copy.

## Content and behaviour

- Retain the brief's wording, particularly blocks marked verbatim. Flag substantive contradictions instead of silently rewriting them.
- Retain the no-contact-form requirement and the explanation of conflict checking before receiving dispute facts.
- Omit absent emails, telephone numbers, PIN, response-time values and other unfinished details from visible output. Revisit when the user supplies them; no need to request them during initial design.
- Do not add fake biographies, credentials, testimonials, case results, articles, fees or downloadable resources.
- Keep newsletter signup separate from dispute intake. Select a provider and confirm its behaviour before enabling a live subscription flow.
- Preserve the existing service commitments in the brief during planning, including the stated 35-day, 14-day and 24-month terms. Record their verification as a pre-publication dependency rather than changing them without instruction.

## Open dependencies

These do not block initial layouts:

- Final logo assets and any approved photography or biographies.
- Full rules, fee scales, Protocol and Clause Library content.
- Missing contact and publishing details, intentionally omitted for now.
- Any missing source sections referred to by the brief, including its accessibility cross-reference.
- Clarification of the future AlignClaim single-party expert role alongside the statement that ALIGN never acts for one side.
- Final content review, including the legal wording and operational commitments, before publication.
- Content-maintenance workflow, hosting and newsletter provider. The initial implementation uses static HTML/CSS/JavaScript generated by a dependency-free Node.js script; no CMS or hosting provider has been selected.

## Delivery sequence

### 1. Planning baseline

- [x] Review the brief and embedded visual references.
- [x] Confirm AlignWatch now and AlignAcademy later.
- [x] Confirm minimal styling based on the supplied brand.
- [x] Record omission of missing details without visible placeholders.
- [x] Create plan, design language and change-tracking files.

### 2. Layout planning

- [x] Map available copy to the launch pages.
- [x] Plan desktop and mobile homepage layouts.
- [x] Plan one reusable service-page layout.
- [x] Place method content on `/method/`; defer unavailable resources without empty links.
- [x] Proceed to implementation following the user's explicit instruction; separate wireframe approval was superseded.

### 3. Implementation

- [x] Select a minimal static stack for the initial informational site.
- [x] Build shared navigation, typography, page layouts and footer.
- [x] Implement homepage and the six launch offerings.
- [x] Implement method and registry pages using available brief content; other content-dependent pages remain deferred.
- [x] Implement the cost curve with text alternative and keyboard/click interactions, and three-way navigation.
- [ ] Connect approved external services only when configured.

### 4. Verification and launch readiness

- [ ] Compare page copy and visual treatment with the brief.
- [ ] Check mobile and desktop layouts, keyboard navigation, focus, contrast and reduced motion.
- [ ] Assess against the brief's WCAG 2.2 Level AA target; document actual gaps and results.
- [x] Verify generated local links/assets and representative mobile navigation; add per-page titles and descriptions.
- [x] Confirm no missing-detail placeholders appear and exclude AlignAcademy from generated pages.
- [ ] Resolve publication dependencies and review the complete site.

## Current implementation

Latest SVG update (entry 025): the user requested removal of all newly added SVG illustrations. Removed the artwork and restored the prior page layouts. The original homepage circles and cost chart remain. This supersedes the implementation update below.

SVG implementation update, 2026-09-23: the user authorized the illustration plan. Added nine content-specific primary SVGs and six homepage service symbols through site/illustrations.mjs. Source, generated markup, XML and asset-size checks passed; live browser layout verification remains unavailable under the prior approval restriction. This supersedes the planning-only status below.

SVG planning update, 2026-09-23: SVG_ILLUSTRATION_PLAN.md proposes content-led artwork and responsive placement for all nine content routes plus 404. This is planning only; it does not change the website or supersede existing layouts until implemented in a later step.

Contact update, 2026-09-23: the user supplied align.resolution@gmail.com and +91 8138960482. Both are now linked in the shared footer on every page. Earlier references to unavailable email/phone details are superseded; the no-dispute-intake-form requirement remains.

Source lives in `site/`; preview is served at `http://127.0.0.1:4173` while the local server is running. See `site/README.md` for build and preview commands. There are nine content pages and a 404 page. Content, layout and styling remain open to user review.

People and the Bench, Insights, newsletter signup, legal pages and downloadable resources await their actual content or configuration. They are intentionally absent from public navigation for now. Contact has the conflict-check explanation and supplied address, but no unavailable contact details. This is a local review version, not a published launch.

Desktop and 390px mobile views were inspected. The mobile menu and cost-curve click/keyboard interactions were checked. A full accessibility audit, all-breakpoint review and final content review remain outstanding.

## Mobile hero refinement

Status: implemented on 2026-09-23 as part of the user's broader mobile redesign request. The specification below records the original plan; current implementation and test evidence are in MOBILE_REDESIGN.md.

The current stacked hero gives both the headline and the party illustration dominant scale. The result is a long opening section with a large decorative area after the primary action. The screenshot also shows wide gaps between these elements. The mobile design should prioritise the message, introduction and starting-point link while retaining the brand metaphor.

Proposed layout, from top to bottom:

1. Compact logo/menu header, approximately 72–80px tall.
2. Eyebrow with a short rule; allow natural wrapping at very narrow widths.
3. Headline sized around 38–42px at a 390px viewport, with a comfortable 1.1 line height. Remove the forced desktop line break on mobile and tune wrapping across devices rather than enforcing a particular line count.
4. Introduction at 16px with approximately 1.6 line height and 20–24px separation from the headline.
5. Starting-point link styled as a button, at least 48px tall, with 20px separation from the introduction. Keep its width based on its text unless the narrow viewport requires wrapping.
6. Smaller two-party illustration, approximately 220–250px total width on a 390px viewport, centred beneath the action. Keep actual circles, the red neutral between them and one short caption. Use 24–28px separation from the button.
7. A compact baseline carrying “Prevent · Align · Resolve”, with 16–20px spacing before the next section. Remove any surplus minimum-height space.

Use 20–24px horizontal gutters on phones. Keep the document palette and copy unchanged. Let content determine section height; do not impose a one-screen height that clips on small devices or with enlarged text. The intended hierarchy is headline, introduction, action, then supporting brand illustration.

Validation when implemented:

- Inspect at 320, 375, 390, 430 and 768px widths, including short phone heights and landscape.
- Ensure comfortable headline wrapping, no horizontal overflow, and no clipped controls.
- Check 200% text enlargement and menu/focus behaviour.
- Confirm the two parties and red neutral remain visually distinct at the reduced size.
- Compare the mobile hero with the supplied screenshot and check the transition into the next section.
- Retain the current desktop composition unless responsive testing exposes a related issue.

The 2026-09-23 request also authorized mobile navigation, service discovery, detail-page typography, readable chart alternatives and touch-target improvements. These changes are implemented locally. Publication and missing contact/resource details remain deferred.

## Maintenance rules

Update this file when scope, decisions or milestone status changes. Update DESIGN_LANGUAGE.md when an approved visual or interaction rule changes. Add a dated entry to CHANGELOG.md for each meaningful change batch, recording what changed, why, affected files and verification. Keep historical entries intact and distinguish planned work from completed work. Website code and deployment are not authorised merely by this planning record; follow the user's current direction.

