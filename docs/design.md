# Design: Anderson Carl

## Point of view

People facing a UK visa, settlement or appeal decision, often worried, often reading on a phone and sometimes in a second language. The site should feel like an established London practice: calm, serious and plain spoken, never salesy.

## Reference

Winner: [Justice Delivered with Integrity](https://dribbble.com/shots/25426615-Law-firm-website-hero-section), Jubayer.
A claret panel, one very large serif headline, a short paragraph, a black and white photo beside it, and almost nothing else. Claret is the colour of English legal tradition, so it fits a Chancery Lane practice. It has a clear hierarchy, it works with real content, and it has none of the tells in `design-rules.md`.

Runners-up:
- [Legal Clarity, Westbridge](https://dribbble.com/shots/27727404-Premium-Law-Firm-Legal-Services-Website-Design), Hatypo Studio. Strong and editorial, but the giant condensed capitals shout. That's wrong for anxious clients.
- [Ashworth](https://dribbble.com/shots/27677984-Law-Firm-Website-Legal-Services-Landing-Page-Lawyer-portfolio). Calm, but it has a centred hero, and a lime badge fights the green.

Also viewed and rejected (20 in all, from searches for law firm, immigration, visa consultancy and legal services sites): purple palettes, staged stock photos of invented attorneys, fake statistics and testimonials, teal glow on black, and centred heroes over statue photos.

Copied: the claret `#602C38` and its shade `#5D2834`, near-white `#FDFDFD`, the charcoal greys `#171819` to `#535455`, the large high-contrast serif at regular weight, the small sans, square panels and photos, circular outline icon buttons, an underlined text link, the hairline rule in the header, and the photo caption in the corner.

Changed, and why:
- The portrait becomes a photo of the Royal Courts of Justice on the Strand, near the firm's address. The firm has no photo of a real solicitor yet, and the rules forbid inventing one.
- The shot is only a hero, so the content sections use the near-white ground with charcoal text, and claret for the hero, page headers and the closing call to action.
- The shot's sans looks like Inter, so this uses Instrument Sans, which is close but has more character.
- Buttons are pills, to match the shot's circular controls.

## Signature detail

The section sign. Services and the steps of the process are numbered `§ 01`, `§ 02` and so on, the way a statute numbers its sections. It's used for those two lists only, not on every heading.

## Tokens

In `src/app/globals.css` (CSS variables) and `tailwind.config.ts`. Engineers use only these.

| Token | Value | Use |
| --- | --- | --- |
| `claret-700` | `#602C38` | Brand panels, primary buttons on paper, links |
| `claret-800` | `#4E232D` | Hover on claret buttons |
| `claret-900` | `#3B1A22` | Pressed |
| `claret-50` | `#F6EEF0` | Hover row tint |
| `paper` | `#FDFDFD` | Page ground |
| `stone` | `#F3F2F0` | Quiet secondary surface |
| `ink-900` | `#171819` | Headings and strong text |
| `ink-700` | `#353637` | Body text |
| `ink-500` | `#535455` | Secondary text (7.4:1 on paper) |
| `line` | `#E1E1E1` | Rules |
| cream on claret | `#FDFDFD`, muted at 80% | Text on claret (11:1 at full) |

Type: Source Serif 4, regular, with optical sizing, for display and headings. Instrument Sans 400, 500 and 600 for everything else.
Scale: display `clamp(3rem, 7.5vw, 6.75rem)` at a line height of 0.95, page title `clamp(2.5rem, 5.5vw, 4.5rem)`, h2 `clamp(2rem, 3.6vw, 3rem)`, h3 1.5rem, body 1.0625rem at 1.6, small 0.875rem.
Shape: radius 0 for panels and photos, 999px for buttons and icon circles.
Space: sections 64px on phones and 112px on desktop. Container 1200px with 24px or 40px gutters.

## Components from 21st.dev

Editorial service list: [ibrandify/editorial-service-list](https://21st.dev/@ibrandify/components/editorial-service-list). MIT, no extra dependencies listed.
- Structure: numbered rows between hairlines. A small number on the left, a large title, a short descriptor on the right, and a chevron.
- Used for: the service lists on the home and services pages.
- Restyled: the titles use the serif, the numbers use the section sign, and each row is a link to its service page rather than an accordion. On hover the title moves 8px right, turns claret, and the arrow circle fills. Built by hand, with no Tailwind defaults left.

Considered: [ln-dev7/faqs-02](https://21st.dev/@ln-dev7/components/faqs-02) (MIT, lucide-react) for the FAQs. Native `details` and `summary` do the same job with less code and work without JavaScript, so we use those.
Considered and left out: [felipemenezes098/hero-08](https://21st.dev/@felipemenezes098/components/hero-08). It needs `motion` for one effect, which isn't worth it.

## Spline scenes

None. The community results are characters and toys, and a 3D object on a solicitor's site would cost trust and speed for no benefit.

## Flows

1. Get in touch (the main goal): any page, then the "Message us on WhatsApp" button opens WhatsApp with a prefilled message. Email and phone are on Contact and in the footer.
2. Check what the firm handles: home, then a service row, then the service page and its call to action.
3. Answer a worry before contacting: FAQs, then contact.

## Screens

### Home
- Hero: claret, split. On the left: the headline, one line and one button, plus the circular "see services" arrow. On the right: the Royal Courts photo in black and white, running to the edge, with its caption in the corner. On phones the photo stacks below at 4:5.
- What we help with: the editorial list of all six services.
- How it works: four steps in columns (stacked on phones), each with a hairline and a `§` number.
- Closing call to action: claret, one serif line, one sentence and one button.

### Services
Claret page header, then one editorial list per category.

### Service page
Claret header with "All services", then the category and title. Below that, the article in a 68-character column, and on desktop a sticky aside on stone with the call to action and links to other services.

### FAQs
Claret header, then a `details` accordion. Each question is in the serif, with a plus in a circle that turns into a minus.

### About
Claret header, three principles numbered `§ 01` to `§ 03`, then a short regulation note.

### Contact
Claret header, then three channels as large rows: WhatsApp (the button), email and phone. The address is below them.

### Privacy and terms
Claret header, then prose.

### States
- Links and buttons have hover, keyboard focus (a 2px claret or cream outline, offset 3px) and pressed states.
- The FAQ rows have open and closed states.
- If the photo fails to load, the panel shows `ink-700`, so the caption still reads.
- There is no loading or empty state: the site is static, and every list comes from files at build time.

## Copy

- Hero: "Straight answers on UK immigration." Then: "London solicitors for visas, settlement and appeals. We tell you your real chances before you pay us anything." Button: "Message us on WhatsApp".
- Header button: "WhatsApp us".
- Closing: "Talk to a solicitor before you apply." Then: "A short consultation can save months of delay. We'll tell you honestly where you stand."
- The rest keeps the existing copy, which already follows the rules.

## Needs the owner

- The contact form sent nowhere, so it's removed. If the firm wants a form, it needs a service to send it (Formspree, Resend or similar), which means an account.
- The regulation note is still a placeholder. The SRA number must be added before launch.
- A real photo of the solicitor could replace the Royal Courts photo later.

## Assumptions

- The live Next.js pages act as the design preview, since the same person designs and builds. Writing a separate HTML copy would be thrown away.
- `impeccable` isn't installed on this machine, so the audit is done by hand against its bar, and recorded in `docs/design-audit.md`.
