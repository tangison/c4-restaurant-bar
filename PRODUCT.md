# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people in and around Swakopmund, Namibia, plus tourists visiting the coast, deciding where to eat or drink, checking a menu and prices, and placing an order or booking by WhatsApp. Secondary: local event or group organizers checking the bar and patio for gatherings. Most arrive on mobile phones, often on metered mobile data.

## Product Purpose

The public website for C4 Restaurant & Bar CC. It presents the restaurant and bar, the menu with prices in Namibian dollars, the patio and premises, and routes every action (order, book, ask) through WhatsApp or a phone call. Success: a visitor decides to come or order within one screen of scrolling, and can act in two taps.

## Positioning

A Swakopmund restaurant and bar where the fire (braai and grill) and the bar are equal headline acts, with WhatsApp-first service instead of forms and accounts. The corner of Aaron Edward and Kovambo Nujoma Street is the real, verifiable location.

## Operating Context

Namibia. Currency N$ (Namibian dollar). Phone format +264. WhatsApp is the dominant messaging channel for this market. Many users browse on 3G or capped data, so the site must stay under a 500KB page-transfer budget. The business contact facts come from the owner (Mr BK) and must never drift: P.O. Box 91466 Klein Windhoek, email c4restaurantbar@gmail.com, tel 083 783 7780 and 081 400 6471, physical corner of Aaron Edward and Kovambo Nujoma Street, Swakopmund.

## Capabilities and Constraints

- Single-page site build: one user-visible route (hero, about, bar, menu, gallery, FAQ, contact, footer), per the delivery environment's build mode. Error and SEO files are infrastructure, not pages.
- WhatsApp ordering widgets: floating WhatsApp button, per-menu-item order links, and a section-level order CTA that pre-fills the message. ASSUMPTION: the primary WhatsApp number is 083 783 7780; the code keeps this in one constant so the owner can swap it in seconds if 081 400 6471 is the WhatsApp line.
- Menu prices are market-related estimates researched from Swakopmund dining prices, labelled internally as assumption until the owner confirms; the full menu lives in one data file for easy edits.
- No online payments, no accounts, no newsletter backend. No fabricated testimonials, ratings, awards, or press. ASSUMPTION: opening hours; to be confirmed by the owner before sign-off.
- Search-friendly local SEO: Restaurant structured data, NAP consistency, click-to-call links.

## Brand Commitments

- Brand guide: primary navy #223A6C, secondary grey #BCBBB9, supporting accent #2C79B4 (supporting accent only, never body text on navy; white or secondary grey for text on navy).
- Approved logo variants only: full transparent logo on light backgrounds, reversed logo on navy or dark, icon-only cup mark for tight spaces. Never recolor or redraw.
- Favicon set ships with the brand kit and goes to the site root references.
- Poppins is the house typeface for this build (Tangison web standard).
- Footer credit on every public page: "Made by Tangison Studio" linked to studio.tangison.com, with a current-year copyright line.
- Design quality bar: wearecollins.com, judged on craft and polish, not on borrowing its visual identity.

## Evidence on Hand

- 29 real premises and food photos in scripts/assets-download/C4-Complete-Package/Photos/ (Exteriors-Patio 9, Food-Starters-Salads 5, Food-Braai-Grill 7, Food-Mains-Takeaway 8), web-ready JPGs with no baked-in text or prices.
- Brand kit: logos (light, dark, icon-only at multiple sizes), full favicon set with site.webmanifest, brand palette sheet.
- Seven 3D rendered icons for menu headers and dividers (coffee, beer, cutlery, flame grill, chef hat, umbrella, cloche).
- Owner-supplied contact and address facts (see Operating Context).
- Absences that must not be fabricated: customer testimonials, Google rating or review counts, awards, press mentions, exact opening hours, registration number, and which phone line is WhatsApp.

## Product Principles

1. WhatsApp first: every section ends in a two-tap path to order or ask.
2. Honest content only: real photos, real facts, prices clearly editable, nothing invented.
3. Fast on mobile data: under 500KB transfer, images optimized, no heavy frameworks for effects that CSS can do.
4. The bar is a headliner: flame grill and bar get equal billing with the food.
5. Findable in Swakopmund: local keywords, structured data, consistent NAP everywhere.

## Accessibility & Inclusion

WCAG AA: contrast per brand rules (white or grey text on navy, never accent blue on navy), full keyboard navigation, visible focus states, alt text on every photo, labeled interactive elements, skip-to-content link.
