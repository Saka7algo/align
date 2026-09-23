# ALIGN mobile redesign

Current placement (entry 014): mobile order is headline → introductory text → standalone symbol and caption → primary action. Desktop placement is unchanged. Verified at 320 and 395px, with desktop overflow checked at 1440px.

Current update (entry 013): restored the standalone two-party illustration and its caption below the mobile hero button, with the desktop illustration beside the copy. The user requested the old style; this supersedes the placement experiments below. Navigation, readable chart stages and touch-target improvements remain intact.

Latest update (entry 012): the symbol is now integrated beside “winner.” inside the hero headline on desktop and mobile. The complete headline remains HTML text, and the SVG is decorative. Its caption appears in the baseline. This supersedes the standalone 180px/230px placements documented below. Build/page checks and 320, 390, 768 and 1440px overflow checks passed.

Implemented locally on 2026-09-23. Scope: the current homepage, six service pages, approach, registry and shared 404 shell. No publishing or new contact backend.

Subsequent placement update: the two-party symbol is now 180px wide and centered above the mobile headline, below the header, at the user's request. This replaces the initial 230px illustration below the action. Desktop placement remains unchanged; the update passed build/page checks and responsive checks at 320, 390, 430 and 1440px.

## Direction and user flow

Preserve ALIGN's calm editorial character, supplied logo, navy/sage palette and existing service copy. Prioritize reading and choosing the appropriate service on a phone.

Primary journey: homepage → Find your starting point → one of three situations → service detail → registry/conflict-check guidance. Direct service browsing remains available from navigation and the homepage catalogue. The registry's actual email/phone is still unavailable; this remains a launch dependency, not a functioning enquiry submission channel.

## Review and implemented changes

| Before / problem | Change | Functional reason |
|---|---|---|
| Large illustration prolonged the mobile opening | 230px supporting illustration, 36–44px fluid headline, smaller gaps | Keeps message and primary action prominent |
| Menu was available only at the top; hidden if script failed | Compact sticky header; navigation stays expanded without JS | Access services from long pages and survive script failure |
| Menu state could persist across viewport changes | Reset state on breakpoint crossing; Menu/Close labels, Escape, outside-click and focus-exit dismissal | Predictable navigation with keyboard or touch |
| Same-page navigation could hide the focused link | Focus moves to the destination; scroll offset accounts for header | Keeps keyboard position meaningful |
| Mobile chart labels were approximately 7.5px; descriptions disappeared | Semantic ordered stage progression below 1001px, with all captions and descriptions | Readable at normal size; no selector or hover dependency |
| Large repeated mobile service cards | Separated editorial rows with complete descriptions and one full-row link | Easier scanning with broad tap targets |
| Footer links were approximately 21–22px high | At least 44px; navigation and primary action at least 48px | More forgiving touch interaction |
| Long service introductions dominated narrow screens | 18px relative body/standfirst sizing and restrained headline scale | Comfortable reading without removing content |

## Style and states

- Navy #17324D, sage #6F8F72, paper #F7F7F2, neutral red #B84032. Original logo retained.
- Georgia headings, Trebuchet MS/Segoe UI body; no font downloads.
- Phone gutters scale from 20 to 32px. Content determines height.
- Focus outlines, native links/buttons, active navigation state and reduced-motion styles retained.
- Chart titles are 24px on phone/tablet; descriptions 16px and captions 14px at the default root size. All stage text also remains accessible alongside the desktop SVG.
- Existing menu button is a disclosure, not a modal: keyboard focus is free to leave it, closing the panel. Navigation can scroll within short viewports.

## Verification

| Check | Result |
|---|---|
| Build and JavaScript syntax | Passed |
| Generated HTML checks | All 10 documents passed local links/assets, one H1 and existing content restrictions |
| Homepage reflow | No horizontal overflow at requested widths 320, 375, 390, 430, 700, 701, 768, 1000, 1001 and 1440px; browser rounded the 701/1001 overrides to 702/1002 |
| All six service links and return links | Clicked successfully at 320px; every service page fits without horizontal overflow |
| Three starting-point pathways | Opened prevention-retainer, standing-neutral and mediation as intended |
| Approach and registry | Navigation succeeded; both fit at 320px and expose active-page state |
| Phone touch targets | No visible anchor/button below 44px on homepage or six service pages |
| Desktop navigation targets | All three measured 48px |
| Keyboard menu | Enter opens; Tab enters navigation; Escape closes and restores button focus; tabbing out closes panel |
| Anchor and skip-link focus | Focus reaches main, starting-point section and services section |
| Sticky-header anchor clearance | Services section settles about 120px below viewport top; header bottom approximately 77px |
| Short landscape | At 640×320 the open menu ends around 266px, within the viewport |
| Script failure fixture | Navigation remains visible; menu toggle is hidden; all three links at least 48px; no overflow at 320px |
| 200% root-font-size fixture | Root font measured 32px; no main/header elements overflowed horizontally at 320px; menu remained usable |
| Visual inspection | Phone hero, expanded menu, chart progression, service catalogue, approach page, landscape menu and desktop hero inspected |

The temporary no-script and large-text HTML fixtures were removed after testing. The 200% root-font fixture is not equivalent to browser text-only enlargement: legacy pixel-sized text does not scale in that fixture. Actual browser zoom shortcuts had no effect in the preview, so true 200% browser zoom is unverified. No real-device, screen-reader-software, forced-colour or formal WCAG conformance claim is made.

The previous audit's three findings are addressed in the implementation. UI_AUDIT.md remains the historical baseline rather than being rewritten as a new audit score.

## Files

- `site/build.mjs`: semantic chart progression, focusable navigation destinations and menu label.
- `site/refinements.css`: mobile hierarchy, chart presentation, service rows and touch-target sizing.
- `site/app.js`: progressive menu behavior and focus handling.
- `site/dist/`: rebuilt static output.

Preview: http://127.0.0.1:4173/ while the local server is running.
