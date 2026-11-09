# Design audit

`impeccable` isn't installed on this machine, so this is a manual audit against its pass bar. It checked the live pages at 1440px and 390px in headless Chrome, on 2026-11-09. Install `impeccable` and rerun it to confirm.

## Scores

| Area | Score | Notes |
| --- | --- | --- |
| Accessibility | 4/4 | All text 6.8:1 or better (worst: `ink-500` on `stone`). Focus rings 10.8:1, cream on claret and the dark footer, claret on paper. Tap targets 44px or more. A skip link, `lang="en-GB"`, `aria-current` on nav, and alt text on the one photo. The FAQ uses native `details`. Reduced motion turns off smooth scrolling and transitions. |
| Theming | 4/4 | Every colour, font, radius and size comes from the tokens in `tailwind.config.ts` and `globals.css`. No Tailwind or shadcn defaults remain. |
| Responsive design | 3/4 | Every page checked at 390px and 1440px. The hero stacks and service rows reflow. Not yet checked at tablet widths (768 to 1024px). |
| Implementation integrity | Pass | Typecheck, lint and the production build pass, with no console errors on any page. The contact form that sent nowhere is removed. |
| Performance | Not scored | It doesn't count for a preview. The homepage JavaScript dropped from 23.5 kB to 5.3 kB. |

## Findings

Round 1 fixed:
- P1: footer and "Other services" links were about 24px tall on phones. Each is now 44px.
- P1: the claret focus ring disappeared on the near-black footer. It's cream there now.
- P2: the headline left "UK" on a line of its own. The display size is now capped at 6rem and the headline is balanced.
- P2: service titles were in Title Case. They're in sentence case now, ordered by how often people need them.
- P2: the footer email address wrapped mid-word. The contact column is wider.
- P2: the last process step wrapped as "follow-up". It's now titled "Submission".

Open, P3:
- The pale circles on the service and FAQ rows are 1.3:1 against the page. They're decorative, because the whole row is the control, so this passes, but a darker ring would read better.
- The privacy and terms pages are placeholder text (see "Needs the owner" in `docs/design.md`).

No P0 or P1 findings remain.
