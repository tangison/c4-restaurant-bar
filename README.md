# C4 Restaurant & Bar, Swakopmund

The official website for C4 Restaurant & Bar CC, on the corner of Aaron Edward and Kovambo Nujoma Street, Swakopmund, Namibia. WhatsApp-first: every call to action opens a pre-filled WhatsApp chat, so orders and bookings are two taps away.

Made by Tangison Studio.

## Stack

- Next.js 16 (App Router) and TypeScript
- Tailwind CSS 4 with the C4 brand tokens from the approved brand guide
- Poppins typeface
- No database and no forms: the site is static content plus WhatsApp deep links, which keeps every page fast on mobile data

## Run it

```bash
npm install
npm run dev
```

## Edit the content

Everything a owner may need to change lives in one file: `src/data/site.ts`.

- **Phone numbers and WhatsApp line**: `SITE.whatsapp` controls every WhatsApp link. It holds the number in international format without the plus sign, for example `264837837780`. If the WhatsApp line is the 081 number, change that one value.
- **Menu and prices**: the `MENU` array. Each group is a tab on the page; each item has a name, description and price in Namibian dollars. Add or remove items freely.
- **Bar price list**: the `BAR.drinks` array.
- **Hours**: `SITE.hours`. Confirm the current hours before going live.
- **FAQ answers**: the `FAQS` array.
- **Gallery photos**: the `GALLERY` array.

Photos and the logo live in `public/photos` and `public/brand`. The provenance of every image is recorded in `public/assets-manifest.json`.

## Deploy

The site deploys on Vercel. Push to `main` and Vercel builds and publishes automatically.

## Design system

See `DESIGN.md` for the documented visual system: colors, type, spacing, components and the rules that keep the site consistent (the blue never speaks on navy, grey hairlines, flat navy fields, WhatsApp as the exit).
