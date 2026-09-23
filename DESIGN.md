---
name: Wedding Organizer — Rundown Hari-H
description: One-page wedding organizer site laid out as a printed run-of-show / call sheet.
colors:
  paper: "#f0f1ee"
  paper-deep: "#e2e4de"
  table: "#1b1d1b"
  table-deep: "#141614"
  ink: "#1b1d1b"
  ink-muted: "#5b6059"
  table-ink: "#eef0ea"
  table-muted: "#9aa096"
  hairline: "#c9cdc5"
  hairline-table: "#33372f"
  cue: "#dbe24a"
  film: "#2f6b57"
typography:
  display:
    fontFamily: "'Anybody Variable', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 6.6vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    fontVariation: "font-stretch 70%; uppercase"
  headline:
    fontFamily: "'Familjen Grotesk Variable', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "clamp(1.65rem, 4.4vw, 2.625rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  item:
    fontFamily: "'Anybody Variable', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.28
    fontVariation: "font-stretch 82%"
  body:
    fontFamily: "'Familjen Grotesk Variable', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "'Anybody Variable', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
    fontVariation: "font-stretch 75%; uppercase"
  folio:
    fontFamily: "'Anybody Variable', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.2em"
    fontVariation: "font-stretch 66%; uppercase"
  cue-time:
    fontFamily: "'Anybody Variable', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "font-stretch 70%; tabular-nums"
rounded:
  none: "0px"
spacing:
  sheet-max: "1180px"
  sheet-padding-inline: "clamp(1.25rem, 4vw, 2rem)"
  gutter: "clamp(4.25rem, 13vw, 8.5rem)"
  row-padding-block: "clamp(1.75rem, 4vw, 2.75rem)"
  block-padding: "clamp(3.5rem, 9vw, 6.5rem) clamp(2.5rem, 6vw, 4.5rem)"
  measure: "62ch"
components:
  action-line:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 3px"
  action-line-hover:
    textColor: "{colors.ink}"
  action-band:
    backgroundColor: "{colors.table}"
    textColor: "{colors.cue}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px clamp(1.25rem, 4vw, 2rem)"
    height: "44px"
  action-band-floating:
    backgroundColor: "{colors.table}"
    textColor: "{colors.cue}"
    rounded: "{rounded.none}"
    padding: "12px clamp(1.25rem, 4vw, 2rem) max(0.75rem, env(safe-area-inset-bottom))"
  kop:
    backgroundColor: "{colors.table}"
    textColor: "{colors.table-ink}"
    rounded: "{rounded.none}"
    height: "52px min"
  cue-chip:
    textColor: "{colors.table-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 2px"
    height: "44px min"
  plate:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.none}"
  plate-on-ink:
    backgroundColor: "{colors.table-deep}"
    rounded: "{rounded.none}"
---

# Design System: Wedding Organizer — Rundown Hari-H

## Overview

**Creative North Star: "The Call Sheet on Cool Paper"**

The page is not a wedding brochure with information attached; it is the wedding organizer's own working document, printed on cool off-white paper and handed to the couple. Every section is a row of a run of show: a time in the left gutter, a cue name under it, and the content of that cue to the right. The reader is meant to feel the same calm they'd feel reading a schedule that somebody competent already wrote — the evidence of execution is the layout itself, not a hero photograph.

Two grounds only. The continuous sheet is cool paper `#f0f1ee` with near-black green ink `#1b1d1b`; ink appears as a printed band for the kop, the confirmation row, and the colophon, never as a second page colour that alternates section by section. One highlighter yellow exists and it is under a strict quota (see Colors). Radius is zero everywhere except drawn registration marks. Nothing floats: rules, not shadows, do the structural work.

Type carries the same split as the document. A condensed variable grotesque (Anybody) speaks for anything that is *data* — times, cue names, folios, labels, durations, service numbers — always uppercase, tabular, and squeezed. A calm workhorse grotesque (Familjen Grotesk) speaks for anything that is *prose*. Serif is not available in this world; it belongs to the previous direction and to the category's default wedding look, both of which this system rejects on purpose.

**Key Characteristics:**
- The row is the grid: gutter (time + cue) and body (content) at every section, no other page skeleton.
- One authored motion — the stage manager's marker travels the gutter once as a row reaches reading position.
- Absence is a designed state: an unfilled photo slot is a labelled plate at final ratio, never a stock or generated stand-in.
- Everything that reads as a fact must be visible in the HTML; nothing is invented to fill a layout.

## Colors

The palette is a photocopier's: cool paper, near-black ink, one fluorescent cue, one confirmed green. It is deliberately unsaturated and unromantic — the register of a production document, not a wedding.

### Primary
- **Cue Highlighter** (`#dbe24a`, token `select`): the fluorescent band printed *behind* the active cue's time, and the text colour of the single confirmation action. Quota-bound, see The Two Marks Rule.
- **Confirmed Green** (`#2f6b57`, token `film`): one tick on one plate, plus hover underline on FAQ questions and the text caret. It means "this is settled", never "click me".

### Neutral
- **Cool Paper** (`#f0f1ee`, token `paper`): the page ground and the reading surface.
- **Paper Deep** (`#e2e4de`, token `paper-deep`): plate fill on paper — a sheet slightly denser than the page it sits on.
- **Printed Ink** (`#1b1d1b`, token `ink` / `table`): body text on paper, and the ground of the kop, confirmation band, and colophon.
- **Table Deep** (`#141614`, token `table-deep`): plate fill inside an ink band.
- **Ink Muted** (`#5b6059`, token `ink-muted`): labels, folios, cue labels, secondary data on paper.
- **Table Ink / Table Muted** (`#eef0ea` / `#9aa096`): the same two roles inverted inside an ink band.
- **Hairline / Hairline Table** (`#c9cdc5` / `#33372f`): the only structural marks — 1px rules that separate rows, plates, and captions.

### Named Rules
**The Two Marks Rule.** Cue Highlighter appears exactly twice on the page: the active cue band in the gutter, and the one confirmation action line. Never as a border, background wash, heading colour, or hover decoration. If a third yellow thing appears, one of the first two is removed.

**The No-Romance Rule.** No cream, gold, terracotta, blush, or pastel wedding register. Warmth comes from the couple's own photography, not from the palette.

## Typography

**Display Font:** Anybody Variable (fallback Arial Narrow) — condensed, uppercase, tabular.
**Body Font:** Familjen Grotesk Variable (fallback Helvetica Neue).
**Label/Mono Font:** none distinct; Anybody at `font-stretch 66–82%` does the data work.

**Character:** the pairing is a form and its handwriting. Data is set tight, tall, uppercase and numerically aligned so a schedule scans in one pass; prose is set generously and quietly so it can actually be read on a phone.

**Hierarchy**
- **Display** (700, `clamp(2.1rem, 6.6vw, 4.25rem)`, lh 0.98, stretch 70%, uppercase, max 15ch): exactly one per page — the H1 in the 00.00 row, and on the 404.
- **Headline** (600, `clamp(1.65rem, 4.4vw, 2.625rem)`, lh 1.12, max 26ch): every section's H2, in the reading face.
- **Item** (700, `1.0625rem`, lh 1.28, stretch 82%): named entities — service names, process steps, ledger items.
- **Body / Lede** (400, `1.0625rem`, `1.125rem` at md, lh 1.68, measure 62ch): prose.
- **Label / Strip** (600, `0.75rem`, tracking `0.1em`, uppercase): data atoms and notes.
- **Folio** (700, `0.6875rem`, tracking `0.2em`, stretch 66%, uppercase): edge codes — sheet numbers, plate dimensions.
- **Cue Time** (700, `1.125rem`, lh 1, tabular, stretch 70%): the gutter clock, the page's loudest data voice.

### Named Rules
**The Face Follows Function Rule.** If the string is a value (time, count, dimension, number, cue word) it is Anybody condensed uppercase. If it is a sentence a human will read, it is Familjen Grotesk. A sentence in condensed uppercase is a failure, not a style.

**The Whole Step Rule.** Type sizes move on whole steps from the token scale; no in-between size appears mid-build to "make it fit".

## Layout

The page is one sheet, `max-width 1180px`, `padding-inline clamp(1.25rem, 4vw, 2rem)`. Inside it the only grid is the cue row: `grid-template-columns: var(--gutter) minmax(0, 1fr)` with `--gutter: clamp(4.25rem, 13vw, 8.5rem)`, a 1px hairline above each row and below the last, and `padding-block clamp(1.75rem, 4vw, 2.75rem)`.

Below 768px the row collapses to a single column and the gutter becomes an inline header for that row (time and cue word on one baseline), so the schedule still reads top-to-bottom without a second layout.

The kop is sticky ink at the top of the document; on phones its cue chips wrap onto their own full-width scrolling line rather than widening the page. Anchored rows carry `scroll-mt-28` so a chip jump lands below the kop.

Evidence plates break the column deliberately: the hero and featured plates pull `-ms-10` / `-ms-6` into the gutter on large screens, which is the form's own way of saying "this is the master cue".

**The Row Is The Grid Rule.** No section introduces a new page skeleton. New content becomes another cue row, or a sub-grid inside a row's body.

## Elevation & Depth

Flat by decision. There is no `box-shadow` anywhere in the system; depth is entirely tonal — paper `#f0f1ee` under plate `#e2e4de`, ink `#1b1d1b` under plate `#141614` — plus 1px hairlines that behave like printed rules. Blur, backdrop-filter, and glass are absent: the page must survive a slow phone connection and a small screen.

**The Rules Not Shadows Rule.** Separation is drawn with a hairline or a tonal step. If a component needs a shadow to look separated, its ground is wrong.

## Shapes

Zero radius on every rectangular object: rows, plates, captions, action bands, links. The only curved marks in the system are drawn, not typed — the square bracket pair hugging a cue time (`::before`/`::after` on `.cue-mark`, 7px rules), the four dashed registration ticks inside an empty plate, and the single green tick path. No pills, no badges, no circular selection marks, no floral or botanical ornament.

Borders are always 1px and always a hairline token, never a coloured or tinted stroke, and never a hard 2px+ frame around a content block.

## Components

### Action line (`.cue-link`)
- **Shape:** square, no fill; a 1px hairline under the text as its underline.
- **Type:** label role, uppercase condensed, `0.8125rem`, tracking `0.1em`, ink on paper.
- **Behavior:** a `→` glyph is printed by `::before`, so the direction is part of the type, not an icon. Hover/focus moves the underline from hairline to ink. Used for the hero's "buka urutan lengkap", per-service WhatsApp questions, and the 404's way home.
- **On ink:** inside the kop the same component takes `text-table-ink`; it never takes the highlighter.

### Action band (`WaButton variant="band" | "floating"`)
- **Shape:** full-width flat ink bar, `min-height 44px`, no radius, hairline-table rule on top.
- **Color:** ink ground, Cue Highlighter text — the second and last permitted use of the highlighter.
- **Content:** left-aligned action sentence, right-aligned `→`. `floating` is the same band pinned to the bottom, `md:hidden`, with `env(safe-area-inset-bottom)` padding, and it is the *only* sticky element on mobile.
- **Absence:** with no configured number the component renders nothing at all; the confirmation row then prints the honest "aksi belum aktif" note instead of a dead link.

### Navigation (`.kop` + `.cue-chips`)
- **Style:** sticky ink band, `min-block-size 3.25rem`, sheet name as folio at the left, cue chips right-aligned.
- **Chips:** time above/next to the section word, muted table ink, 44px hit target, no pill and no background. Hover/focus brightens the text and paints a 2px Cue Highlighter underline — the only accent the nav is allowed.
- **Mobile:** chips wrap to their own line and scroll horizontally with the scrollbar hidden.

### Cue row (`.cue-row`, `.cue-mark`, `.cue-meta`)
- **Gutter cell:** `cue-time` over `cue-label`, bracketed by drawn square rules; the active row prints the highlighter band behind the time.
- **Meta rail:** `dl.cue-meta` with `dt` at `0.625rem` folio and `dd` at `0.8125rem` tabular — how a real call sheet prints PIC and durasi.
- **Signature motion:** `cue-ignite` + `cue-bracket` on `animation-timeline: view()` across `cover 18% → 46%`, inside `prefers-reduced-motion: no-preference` and `@supports (animation-timeline: view())`. Where scroll-driven animation is unavailable, the first cue stays lit statically. Rows are fully legible with JS and animation absent; the motion is a marker travelling the gutter once, never a per-element hover effect.

### Frame plate (`.plate`, `.plate-empty`, `.plate-caption`)
- **Style:** 1px hairline frame, tonal fill (`paper-deep` on paper, `table-deep` in ink), media at final `aspect-ratio` with `width`/`height` reserved so nothing shifts when the client's photography arrives.
- **Empty state:** centred `strip` reading "NN · menunggu aset klien" over a `folio` of the final pixel dimensions, with dashed registration ticks inset 8px on all four corners. An empty plate is a stated system state, not an apology, and is never filled with stock, generated, or illustrated imagery.
- **Caption:** hairline-topped row — plate number and caption at the left, dimension mark or the single green `plate-tick` at the right.

### FAQ note (`.faq-item`)
- **Style:** native `<details name="faq">` exclusive accordion, no script. Summary is a three-column grid (number / question / mark) with a 44px minimum row; `+` becomes `−` when open.
- **Hover/focus:** the question gains a 2px underline in Confirmed Green at `0.3em` offset. Answers are body prose at the reading measure.

### Ledger list (rundown rows)
- **Style:** hairline-topped rows of `cue-time` + `h-item` + `cue-label` with a right-aligned `cue-meta`. Times are illustrative structure and always printed next to the note that says so (`runSheet.note`), never presented as a real couple's schedule.

## Do's and Don'ts

### Do:
- **Do** keep the stabilo count at two per page (The Two Marks Rule) and count it again after any new CTA.
- **Do** render every section as a cue row with a time and a cue word in the gutter, collapsing to an inline header under 768px.
- **Do** reserve final pixel dimensions and `aspect-ratio` on every media slot so the layout is finished before the assets arrive.
- **Do** label illustrative data honestly: cue times and ledger rows are printed with the "contoh urutan" note attached.
- **Do** keep interactive targets at 44px minimum (`.cue-chip`, `.min-h-11` bands, `.faq-item summary`).
- **Do** let WhatsApp CTAs disappear entirely when no number is configured, and print the reason in the confirmation row.

### Don't:
- **Don't** use serif type, cream/gold/terracotta palettes, red selection circles, or the previous direction's warm-paper register.
- **Don't** add cards, pills, badges, blur, glassmorphism, gradient text, or any `box-shadow`.
- **Don't** round a corner. Radius zero is the whole form language except drawn marks.
- **Don't** alternate paper and ink section to section; ink is reserved for kop, confirmation, colophon.
- **Don't** put a kicker/eyebrow above a heading — the gutter's cue word already does that job.
- **Don't** invent names, dates, couple counts, prices, testimonials, service areas, or photography. Empty and labelled beats fabricated.
- **Don't** add a second motion system, a lightbox, a carousel, or client-side data fetching.
