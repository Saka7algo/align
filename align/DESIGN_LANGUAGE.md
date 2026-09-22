# ALIGN design language

Status: agreed brand direction implemented in a first local version; user visual review pending.
Last updated: 2026-09-22

## Design intent

A minimal, calm and credible institutional website rooted in the supplied ALIGN brief. Use whitespace, clear hierarchy and precise typography to make the content easy to read. The prevention-first message and neutrality should remain evident throughout.

## Colour

| Colour | Value | Use |
| --- | --- | --- |
| Navy | `#17324D` | Primary text, structural elements and strong surfaces |
| Sage | `#6F8F72` | Secondary brand surfaces and the second party in the visual metaphor |
| Warm light background | Match the document's references; exact token pending | Main page background |
| Red | Match the document's reference; exact token pending | Single neutral element within the two-party metaphor |

Navy and sage values are explicitly present in the source images. Do not invent a supposedly source-approved hex value for the background or red. Verify contrast for each actual text/background pairing; brand colours are not automatically suitable for small text.

## Brand metaphor and assets

The two large colour masses represent the two parties. The small red element between them represents the neutral. Preserve that relationship. Do not scatter red dots, red buttons or red decorative accents across the site.

Use the supplied ALIGN logo as the reference; do not redraw, recolour or replace its identity without a specific decision. Keep the logo distinct from the red-neutral illustration, since the supplied logo has its own treatment.

The surveying/alignment metaphor belongs in the method content and subtle layout structure. Avoid repeating it as ornament throughout the site.

## Typography

- Keep the type system small, readable and consistent.
- Match the restrained character of the supplied references; exact fonts remain undecided.
- Use clear differences between page titles, section headings, standfirsts and body text.
- Keep paragraph line lengths comfortable and avoid dense blocks or excessive all-caps text.
- Preserve the wording and emphasis of the brief rather than replacing it with generic marketing slogans.

## Layout

- Use generous whitespace, a consistent grid and disciplined alignment.
- Make content hierarchy carry the design; avoid unnecessary card grids, heavy shadows and visual clutter.
- Use a restrained number of navy or sage surfaces so the light background remains dominant.
- Create a consistent service-page template while allowing the supplied text to determine section length.
- Adapt columns, spacing and typography for mobile without hiding essential content.
- Keep navigation straightforward and resource links descriptive.

## Imagery and diagrams

- Refer to the supplied two-party compositions for brand imagery.
- Do not add generic courtroom imagery or unverified team photographs.
- Recreate the cost curve as a crisp responsive graphic, rather than using the brief's screenshot as the final component.
- Preserve the five stages and source meaning, with readable labels and a complete text equivalent.
- Do not add numerical costs or implied research evidence that the brief does not supply.

## Interaction

- Use restrained motion only when it improves clarity; respect reduced-motion settings.
- Make all controls keyboard accessible with visible focus states.
- Provide cost-curve explanations on focus and touch as well as hover.
- Implement the three visitor pathways as links within labelled navigation, not a form or questionnaire.
- Do not implement a dispute contact form. Explain the conflict-check sequence as supplied.
- Show real links and contact methods only when their destinations or details exist.
- Keep newsletter signup separate from registry contact and collect no dispute facts through it.

## Content presentation

Keep product names on pages and descriptive service names in URLs. Preserve the brief's confident, direct voice and verbatim copy. Missing details are omitted for now, without visible placeholders. Do not introduce fabricated content to fill empty sections.

The initial service scope includes AlignWatch and excludes AlignAcademy. See [PLAN.md](PLAN.md) for the complete scope and dependencies.

## Review criteria

Before accepting a layout, check that it:

- Clearly resembles the supplied brand references.
- Uses the specified navy and sage accurately.
- Keeps the red neutral element meaningful and limited.
- Feels minimal at desktop and mobile sizes.
- Preserves the document's content and navigation intent.
- Provides readable contrast, keyboard access and equivalent touch interactions.
- Contains no unfinished placeholder details.

Record approved changes to these rules in [CHANGELOG.md](CHANGELOG.md).

## Initial implementation choices

## Additional references supplied by the user

Reviewed on 2026-09-22:

- [Jupitice products](https://jupitice.com/products): a compact page introduction and descriptive solution cards with direct links. Adapted this structure to ALIGN's six existing offerings, using short descriptions from the brief.
- [Sama](https://www.sama.live/): clear audience navigation, a split introduction and a prominent primary action. Adapted the action hierarchy to the existing starting-point link and registry navigation.

These references supplement the original brief. ALIGN retains its navy/sage identity, neutral metaphor, original service content and no-contact-form rule. No third-party photos, testimonials, statistics or claims are imported. The homepage service catalogue now uses three columns on desktop, two on tablet and one on mobile; related services retain compact rows. This is a deliberate exception to the earlier preference against unnecessary card grids: the cards now provide useful service descriptions.

## Implementation details

The first version uses Georgia for editorial headings and Trebuchet MS with Segoe UI fallback for body text, without external font requests. Navy and sage retain the exact source values. Warm paper `#F7F7F2` and neutral red `#B84032` are implementation approximations of the references, not newly approved brand specifications.

The supplied logo is retained as a local image. The hero's two-party composition is CSS geometry, with one small red neutral. Service pages share one content-driven template. On mobile, cost-curve stage controls become readable full-width rows. These choices may be refined after user review.

The overall UI refinement uses a content-driven hero grid rather than absolute illustration positioning or a fixed hero height. Shared gutters cap the reading area at 1200px. Mobile service rows stack the service description below its name. Headings and section gaps are reduced to create clearer transitions. Source sage remains `#6F8F72` on brand shapes; italic text uses the darker derivative `#59775C` for readability on the light background. The illustration caption appears once, and the baseline carries only “Prevent · Align · Resolve”.
