---
name: "C4 Restaurant & Bar"
description: "Single-page site for a Swakopmund braai-and-bar corner venue: whole navy color fields, honest photography, and WhatsApp-first actions."
colors:
  c4-navy: "#223a6c"
  c4-navy-deep: "#1a2e57"
  c4-grey: "#bcbbb9"
  c4-paper: "#f7f6f3"
  c4-ink: "#1e2430"
  c4-blue: "#2c79b4"
  c4-blue-deep: "#23608f"
  c4-wa: "#25d366"
  c4-wa-deep: "#1da851"
  white: "#ffffff"
  surface-warm: "#eceae6"
  hairline: "#e3e1dc"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "2.25rem (3rem at sm, 3.4rem at lg)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1.875rem (2.25rem at sm)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "0.875rem (tag chips 0.6875rem)"
    fontWeight: 600
    letterSpacing: "0.025em"
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  gutter: "1.25rem (1.5rem at sm)"
  section-y: "5rem (6rem at sm)"
  section-gap: "3rem (4rem at lg)"
  block: "2rem"
  tight: "1rem"
components:
  button-whatsapp-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.c4-navy}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
    typography: "600 1rem Poppins"
  button-whatsapp-white-hover:
    backgroundColor: "{colors.c4-grey}"
  button-navy-pill:
    backgroundColor: "{colors.c4-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    typography: "600 0.875rem Poppins"
  button-navy-pill-hover:
    backgroundColor: "{colors.c4-navy-deep}"
  button-outline-white:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
    typography: "500 1rem Poppins"
  button-outline-navy:
    backgroundColor: "transparent"
    textColor: "{colors.c4-navy}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    typography: "600 0.875rem Poppins"
  menu-tab-selected:
    backgroundColor: "{colors.c4-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  menu-tab:
    backgroundColor: "transparent"
    textColor: "{colors.c4-navy}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  tag-chip:
    backgroundColor: "{colors.c4-paper}"
    textColor: "{colors.c4-navy}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
  photo-frame:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
  whatsapp-float:
    backgroundColor: "{colors.c4-wa}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: "56px"
---

# Design System: C4 Restaurant & Bar

## Overview

**Creative North Star: "The Navy Corner"**

The system reads as a corner venue told in navy fields and honest photographs: Swakopmund's braai-and-bar corner where WhatsApp is the waiter. Whole sections are owned by single color fields. Navy #223a6c carries the hero panel, the bar band and the footer; warm paper #f7f6f3 and white carry the food sections; real premises and plate photography do the persuading inside generous frames with thin grey hairlines. The palette is the client brand kit applied at architectural scale: navy is a field color before it is a button color, and the accent blue is kept scarce and small.

Density is generous and calm. Section rhythm runs 80px (96px at sm), the hero splits 45 percent navy panel to 55 percent photo floor to ceiling, and type is one geometric family, Poppins, with tight-tracked 700 display lines over quiet 400 body copy. Depth is nearly absent: three navy-tinted shadows exist, and all three are bound to state rather than rest. The craft bar named during the build was wearecollins.com, judged on craft and polish, never on borrowing its visual identity.

Confirmed rejections, held in the code by construction: no gradient text, no glass or blur surfaces, no uniform card grids, no white-card restaurant template of small photos and icon grids, and no forms or accounts. Every action routes to WhatsApp or a phone call.

**Key Characteristics:**
- Whole-section color fields: navy bookends and one navy band (bar), warm paper and white food sections.
- One type family, Poppins (400 to 800); display lines at 700 with -0.03em tracking and 1.04 line-height.
- A pill silhouette everywhere: buttons, menu tabs, tag chips, slider dots, icon buttons, the floating WhatsApp button (9999px radius).
- Photos in 16px-radius overflow-hidden frames with 1px hairlines (grey at 40 percent on light, white at 15 percent on navy).
- Menu prices set with dotted leaders and tabular numerals.
- One scroll-reveal system and one hero crossfade with slow zoom; prefers-reduced-motion disables both.
- WhatsApp green reserved for the floating button alone.

## Colors

The palette is a three-part brand kit (navy, grey, signal blue) extended with warm paper, ink, and WhatsApp green, applied in whole fields rather than sprinkled accents.

### Primary
- **Corner Navy** (#223a6c): the brand primary and the loudest voice on the page. Owns whole fields: the hero panel, the bar section, the fixed header, and the hero facts strip edge. Also the heading and price color on light sections, and the primary button color on light backgrounds. The viewport themeColor meta is #223A6C, so mobile browser chrome tints navy.
- **Deep Navy** (#1a2e57): navy one step down. The facts strip under the hero, the footer, the navy pill hover state, and the tint base for every shadow on the site (all three shadows use rgba(26,46,87,...)).

### Secondary
- **Fence Grey** (#bcbbb9): the brand secondary. Nav links at rest on navy, body copy on navy fields, the dotted price leader on light, the scrollbar thumb, and every photo-frame hairline at 40 percent opacity.
- **Signal Blue** (#2c79b4): supporting accent, links and small marks only. The global focus ring (2px outline), the FAQ plus icon, visit-section icon glyphs, the input caret, and the ring token. It appears on light backgrounds and thin marks, never as text on navy.
- **Deep Signal** (#23608f): one darker step of the accent for small glyphs on light (visit icons, FAQ icon).

### Tertiary
- **WhatsApp Green** (#25d366): reserved exclusively for the floating WhatsApp button. **WhatsApp Deep** (#1da851) is its hover step. No other surface, button, or text uses green.

### Neutral
- **Warm Paper** (#f7f6f3): the page background and the food-section fields (story, gallery, visit); selection text color on navy highlight; tag chip background.
- **Ink** (#1e2430): body text on light, dropped to 60 to 80 percent opacity for supporting copy; item descriptions, notes, FAQ answers.
- **White** (#ffffff): text on navy, primary pill buttons on navy, menu and FAQ section fields, gallery card and map card backgrounds.
- **Warm Surface** (#eceae6): scrollbar track and the secondary and muted token pair.
- **Bone Line** (#e3e1dc): the default border token, the quiet hairline inherited by every element on light.

### Named Rules
**The Blue Never Speaks on Navy Rule.** Signal blue (#2c79b4) is for focus rings, small glyphs, and links on light backgrounds. On navy fields, text is white or fence grey, never blue.

**The Grey Hairline Rule.** Every border on the site is a thin grey or white line at reduced opacity: fence grey at 40 percent (#bcbbb9) on light, white at 10 to 40 percent on navy. No black borders, no heavy strokes, no full-strength outlines.

## Typography

**Display Font:** Poppins (fallback system-ui, sans-serif), loaded via next/font at 400, 500, 600, 700 and 800, exposed as the --font-poppins variable.
**Body Font:** Poppins, same stack.
**Label/Mono Font:** none; labels are Poppins 600 uppercase.

**Character:** One rounded-geometric house face does everything, per the Tangison web standard. Display lines are tight and certain; body copy stays soft at 1.625 line-height; the only decoration is case (uppercase labels) and tracking, never a second family.

### Hierarchy
- **Display** (700, 2.25rem to 3.4rem by breakpoint, line-height 1.04, tracking -0.03em): the hero headline and, through the shared display utility, every section heading. White on navy, navy on paper.
- **Headline** (700, 1.875rem to 2.25rem, line-height 1.04, tracking -0.03em): section headings at rest scale, identical voice to Display one step smaller.
- **Title** (600, 1rem): menu item names, FAQ questions, prices, and button labels. Ink on light, white on navy.
- **Body** (400, 1rem and 0.875rem, line-height 1.625): paragraphs, item descriptions, FAQ answers, capped at max-w-prose (about 65ch).
- **Label** (600, 0.875rem, tracking 0.025em, uppercase): fact keys in the story and visit lists. Tag chips run the same treatment at 0.6875rem (11px).

### Named Rules
**The Tight Display Rule.** Every display line is Poppins 700 at -0.03em tracking and 1.04 line-height, white on navy or corner navy on paper. No other tracking is allowed at display sizes, and no other family is allowed anywhere.

## Layout

One user-visible page: fixed navy header (64px tall), hero, facts strip, story, menu, bar, gallery, FAQ, visit, footer, plus a floating WhatsApp button that enters after 900ms. Content lives in a 72rem (1152px) max-width container with 20px side padding (24px at sm). Sections breathe 80px vertically (96px at sm), and split grids gap 48px (64px at lg). Anchored sections carry a 4rem scroll margin to clear the fixed header.

The hero is a two-column split at lg: 45 percent navy panel (reversed logo lockup, headline, grey sub-line, white WhatsApp pill, outline menu link, call links) against 55 percent photo running to the section bottom with a minimum height of calc(100svh - 4rem). On mobile the navy panel stacks above a 288px tall photo (384px at sm). A deep-navy facts strip closes the section with address, hours, and a WhatsApp link separated by middots.

The menu panel splits 38 percent sticky photo column (sticky at 6rem below the header) against the plate list. FAQ splits a 34 percent intro column against the accordion. The gallery breaks the container: a full-bleed horizontal rail with scroll snap, 256px cards (288px at sm), hidden scrollbars, and a 2rem edge fade mask at lg. The page alternates fields for rhythm: deep navy strip, paper story, white menu, navy bar, paper gallery, white FAQ, paper visit, deep navy footer. Breakpoints are the Tailwind defaults the build actually uses: sm 640px (gutters and type step up), md 768px (nav collapses to an accordion menu), lg 1024px (all splits engage).

## Elevation & Depth

The system is flat by default and reads depth from color fields and hairlines, not from shadow. Three shadows exist and all are tinted deep navy rather than black; none appears on a resting surface.

### Shadow Vocabulary
- **Nav Scrolled** (`box-shadow: 0 6px 24px -12px rgba(26,46,87,0.7)`): attaches the fixed header to the page once scroll passes 8px.
- **Card Lift** (`box-shadow: 0 16px 32px -20px rgba(34,58,108,0.5)`): gallery cards on hover only, paired with a 4px rise.
- **Float Presence** (`box-shadow: 0 10px 30px -10px rgba(26,46,87,0.55)`): the floating WhatsApp button, permanent while visible.

### Named Rules
**The Flat Field Rule.** Surfaces are flat at rest. Shadows answer state only (scroll, hover, float presence), and every shadow is tinted deep navy, never pure black.

## Shapes

The form language is pill plus frame. Interactive controls are always full pills (9999px radius): buttons, menu tabs, tag chips, slider dots, icon buttons, and the floating WhatsApp button. Photos and composed cards sit in 16px-radius (2xl) overflow-hidden frames; gallery cards and FAQ items use the 16px xl step, and the scale steps down through 12px (lg), 10px (md) and 8px (sm) for smaller scaffolded surfaces. Strokes are 1px hairlines per the Grey Hairline Rule. Two recurring drawn forms: the dotted price leader (a 2px dotted rule nudged up 4px) and the plus icon built from two 20px rounded bars that rotates 45 degrees into a cross when a FAQ item opens. Images clip inside their frames with object-cover; nothing else clips.

## Components

### Buttons
Character: quiet pills that swap background color on hover, never lift, never glow.
- **Shape:** full pill (9999px radius).
- **Primary on navy:** white pill, corner navy text, padding 14px x 24px, Poppins 600 1rem, WhatsApp glyph inline at 20px. Hover swaps to fence grey (#bcbbb9).
- **Primary on light:** navy pill, white text, padding 12px x 24px, Poppins 600 0.875rem. Hover swaps to deep navy (#1a2e57). Used for section-level CTAs (menu, FAQ, visit).
- **Secondary on navy:** transparent pill, 1px border white at 40 percent, white text, padding 14px x 24px. Hover raises border to full white. The header runs smaller versions: a white order pill (16px x 8px padding) and an outlined phone pill.
- **Secondary on light:** transparent pill, 1px border fence grey at 50 percent (navy at 30 percent for the directions button), navy text, padding 12px x 24px. Hover raises the border to navy; the small per-item order chip additionally fills navy and flips text white.
- **Hover / Focus:** color transitions at 150 to 300ms; focus-visible is always a 2px signal blue outline offset 2px, per the global rule.

### Menu Tabs and Chips
- **Style:** pill chips, padding 10px x 20px, Poppins 600 0.875rem. Selected: navy fill, white text, plus a 24px 3D icon from the brand icon set. Unselected: transparent, 1px fence-grey border at 50 percent, navy text.
- **State:** one selected at a time (role tablist with aria-selected); hover only raises the border to navy.

### Menu Price Rows
- **Style:** baseline-aligned row, item name in Ink 600 1rem, dotted leader filling the middle (2px dotted fence grey, translated up 4px, minimum 24px wide), price in corner navy 600 1rem with tabular numerals. On navy (bar list) the leader turns white at 25 percent and text goes white.
- **State:** static rows; the order chip beside each item is the action.

### Photo Frames and Cards
- **Corner Style:** 16px radius, overflow hidden.
- **Background:** white cards on light sections; transparent frames elsewhere.
- **Shadow Strategy:** none at rest; Card Lift shadow on gallery hover only (see Elevation & Depth).
- **Border:** 1px fence grey at 40 percent on light, white at 15 percent on navy.
- **Internal Padding:** zero inside frames; 20px captions below or beside (map card caption strip).

### FAQ Accordion
- **Style:** 16px-radius items stacked 10px apart. Closed: transparent with no border. Open: warm paper fill with the standard grey hairline.
- **State:** question in navy 600 1rem; the two-bar plus icon (deep signal) rotates 45 degrees to a cross; the answer expands via a grid-rows 0fr to 1fr transition at 300ms; answer text is ink at 70 percent, 0.875rem.

### Navigation
- **Style:** fixed 64px navy bar, reversed logo at 44px height, links in fence grey 500 0.875rem turning white on hover, white order pill and outlined phone pill at the right.
- **Mobile:** below md the links fold into an accordion that grows max-height at 300ms, each row hairline-separated in white, closing with a full-width white WhatsApp pill.
- **State:** after 8px of scroll the bar gains the Nav Scrolled shadow.

### Hero Slider (signature)
Three real photos crossfading on a 5200ms interval: the outgoing and incoming slides fade over 1.1s ease-in-out while the active image zooms slowly from scale 1.02 to 1.1 over 7s (cubic-bezier(0.22, 0.61, 0.36, 1)). Dots sit bottom right: inactive 10px white at 50 percent, active 28px solid white, all pills with a 300ms width transition. Slider dots and facts strip sit above the photo field.

### Scroll Reveal (signature)
One orchestrated reveal for the whole page, applied to section headings, copy blocks, and photo frames. Blocks start 26px low at opacity 0 and rise for 0.7s on cubic-bezier(0.16, 1, 0.3, 1), with optional 0.12s and 0.24s second and third beats. An IntersectionObserver fires once per block at 15 percent visibility (rootMargin 0px 0px -40px 0px). Content stays visible without JavaScript, and prefers-reduced-motion disables the effect entirely.

### WhatsApp Float
A 56px WhatsApp green circle, bottom right at 20px, white glyph at 28px, Float Presence shadow, enters 900ms after load with a 300ms rise and fade, deepens to WhatsApp Deep on hover. It is the only green element on the page.

### Inputs / Fields
None exist. The site has no forms or inputs by design: every ask, order, and booking routes to WhatsApp links or tel links. Caret and focus tokens remain themed (signal blue) for any future field.

### Browser Surfaces
Selection is navy with warm paper text; the scrollbar is 10px with a warm surface track, fence grey pill thumb (2px warm surface border) deepening to navy on hover; focus-visible outlines are 2px signal blue at 2px offset; the caret is signal blue; html scrolls smooth.

### Named Rules
**The WhatsApp Exit Rule.** Every section ends in a WhatsApp pill or link (hero, menu group and each menu item, bar, FAQ, visit), backed by the persistent float. A section without a WhatsApp exit is incomplete.

## Do's and Don'ts

### Do:
- **Do** set text on navy fields in white or fence grey (#bcbbb9, or the same grey at reduced opacity for supporting copy); keep signal blue (#2c79b4) for focus rings, small glyphs, and links on light backgrounds.
- **Do** put every photo in an overflow-hidden 16px-radius frame with a 1px hairline: fence grey at 40 percent on light, white at 15 percent on navy.
- **Do** set prices in rows with the dotted leader (2px dotted #bcbbb9 on light, white at 25 percent on navy) and tabular numerals, price in corner navy on light and white on navy.
- **Do** end every section with a WhatsApp pill CTA, glyph left of the label, and keep the message pre-filled from the shared link builder.
- **Do** animate entrances through the one reveal system (0.7s, cubic-bezier(0.16, 1, 0.3, 1), 26px rise, optional 0.12s or 0.24s delays) and honor prefers-reduced-motion by disabling reveals, crossfade, and zoom.
- **Do** own whole sections with single fields: navy for the hero panel, bar, and footer band; warm paper or white for food sections; deep navy for the strip and footer.
- **Do** keep the pill silhouette for anything interactive and the 16px frame for anything photographic.

### Don't:
- **Don't** use accent blue (#2c79b4) as text on navy fields; white or grey only.
- **Don't** add shadows to resting surfaces; shadows are state responses only (scrolled nav, card hover, floating button), and always deep-navy tinted.
- **Don't** use gradient text, glass or blur surfaces, or uniform card grids; the system refuses the white-card restaurant template.
- **Don't** recolor or redraw the logos; the reversed logo sits on navy, the full logo on light, and nothing else takes their place.
- **Don't** use WhatsApp green anywhere except the floating button; every other CTA is a navy or white pill.
- **Don't** introduce a second type family or loosen display tracking; Poppins 400 to 800 with -0.03em display tracking is the whole type system.
