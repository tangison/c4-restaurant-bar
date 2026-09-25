// C4 Restaurant & Bar: single source of truth for every fact on the site.
// Owner-supplied facts come from Mr BK (2026-09-24). Items marked ASSUMPTION
// need owner confirmation; edit here and the whole site follows.

export const SITE = {
  name: "C4 Restaurant & Bar",
  legalName: "C4 Restaurant & Bar CC",
  tagline: "The braai corner of Swakopmund",
  // ASSUMPTION: production URL, updated at deploy time for canonical + schema
  url: "https://c4-restaurant-bar.vercel.app",
  // Owner-supplied contact facts
  phonePrimary: "083 783 7780",
  phonePrimaryIntl: "+264837837780",
  phoneSecondary: "081 400 6471",
  phoneSecondaryIntl: "+264814006471",
  // ASSUMPTION: primary WhatsApp line (first owner number). Swap here if needed.
  whatsapp: "264837837780",
  whatsappDisplay: "083 783 7780",
  email: "c4restaurantbar@gmail.com",
  streetAddress: "Corner of Aaron Edward and Kovambo Nujoma Street",
  locality: "Swakopmund",
  region: "Erongo Region",
  country: "Namibia",
  postal: "P.O. Box 91466, Klein Windhoek",
  // ASSUMPTION: hours to confirm with owner
  hours: "Open daily from 11:00. Kitchen till 21:00, bar till late.",
  hoursSchema: ["Mo-Su 11:00-22:00"],
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const ORDER_MSG =
  "Hi C4 Restaurant & Bar! I would like to place an order, please.";
export const BOOK_MSG =
  "Hi C4 Restaurant & Bar! I would like to book a table, please.";

export const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "The Bar", href: "#bar" },
  { label: "Gallery", href: "#gallery" },
  { label: "Good to know", href: "#faq" },
  { label: "Find us", href: "#visit" },
];

export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  tag?: string;
};

export type MenuGroup = {
  id: string;
  label: string;
  icon: string; // 3D icon file in /icons3d
  photo: string;
  note: string;
  items: MenuItem[];
};

// Prices are market-related estimates calibrated to casual Swakopmund dining
// (The Tug a la carte and Strand Hotel menus were the upper anchors, Sept 2025).
// ASSUMPTION band: owner confirms or adjusts before sign-off. One file edits all.
export const MENU: MenuGroup[] = [
  {
    id: "starters",
    label: "Starters & salads",
    icon: "cutlery",
    photo: "/photos/menu-starters.webp",
    note: "Made in our kitchen, cooked to order.",
    items: [
      { name: "Golden calamari strips", desc: "Tender calamari, light fried, tartar dip and lemon.", price: 85 },
      { name: "Chicken wings (6)", desc: "Grilled or crispy, chakalaka or BBQ dip.", price: 80 },
      { name: "Squid & pineapple platter", desc: "Grilled squid rings, fresh pineapple, house dip. Good for sharing.", price: 120, tag: "To share" },
      { name: "Loaded wedges", desc: "Potato wedges, cheese sauce, spring onion.", price: 65 },
      { name: "Greek salad", desc: "Feta, olives, cucumber, tomato, onion.", price: 75 },
      { name: "House salad", desc: "Seasonal greens with our dressing.", price: 55 },
    ],
  },
  {
    id: "braai",
    label: "From the braai",
    icon: "flame-grill",
    photo: "/photos/menu-braai.webp",
    note: "Over the coals, the way Swakopmund likes it.",
    items: [
      { name: "Boerewors & pap", desc: "Coiled wors off the grill, pap and chakalaka.", price: 95, tag: "House favourite" },
      { name: "Braai platter for two", desc: "Wors, lamb chops, ribs, pap and two salads. Built to share.", price: 290, tag: "To share" },
      { name: "Lamb chops (3)", desc: "Flame-grilled, salt and lemon.", price: 165 },
      { name: "Pork ribs (500g)", desc: "Slow basted, finished on the grill, chips on the side.", price: 155 },
      { name: "T-bone (400g)", desc: "Grilled to your liking, chips or pap.", price: 185 },
      { name: "Steak sizzler", desc: "250g steak still hissing, onion rings and veg on the plate.", price: 170 },
      { name: "Half chicken", desc: "Flame-grilled with our chilli basting, chips and salad.", price: 125 },
    ],
  },
  {
    id: "mains",
    label: "Mains & stews",
    icon: "cloche-plate",
    photo: "/photos/menu-mains.webp",
    note: "Plated meals, home-style portions.",
    items: [
      { name: "Oxtail stew", desc: "Slow-cooked till the spoon bends, rice or pap.", price: 150, tag: "House favourite" },
      { name: "Beef stew & rice", desc: "Carrot and potato in the pot, the old way.", price: 115 },
      { name: "Chicken schnitzel", desc: "Crumbed and fried, chips and salad. Cheese and mushroom sauce +N$20.", price: 115 },
      { name: "Fish & chips", desc: "Flaky hake in a crisp batter, chips, house salad.", price: 125 },
      { name: "Line fish of the day", desc: "Whatever came in fresh. Ask us on WhatsApp.", price: 165 },
      { name: "C4 loaded chips", desc: "Chips under mince and cheese sauce. A meal on its own.", price: 85 },
      { name: "C4 burger", desc: "Beef patty, cheese, salad and our sauce, chips alongside.", price: 105 },
      { name: "Chicken pasta", desc: "Grilled chicken strips in a creamy sauce.", price: 105 },
    ],
  },
  {
    id: "takeaway",
    label: "Takeaway & breakfast",
    icon: "coffee-cup",
    photo: "/photos/menu-takeaway.webp",
    note: "Order on WhatsApp, collect at the counter.",
    items: [
      { name: "Breakfast box", desc: "Eggs, wors, bacon, beans, tomato and bread. From 11:00 too.", price: 85 },
      { name: "Mince omelette", desc: "Three eggs, savoury mince, spinach on the side.", price: 75 },
      { name: "Meat & pap box", desc: "The daily meat with pap and chakalaka, packed to go.", price: 95 },
      { name: "Braai pack for two", desc: "Wors, chops, pap and chakalaka, ready for the fire at home.", price: 220, tag: "To share" },
      { name: "Wors roll", desc: "A whole coil in fresh bread with onion relish.", price: 55 },
      { name: "Coffee", desc: "Filter, bottomless for early tables.", price: 28 },
    ],
  },
];

export const BAR = {
  headline: "Ice-cold at the bar",
  copy: "The draught is poured cold, the gin is local and the patio runs late. Match the braai with a Hansa, or start the evening with a glass of wine while the coals settle.",
  photo: "/photos/hero-bar.webp",
  drinks: [
    { name: "Hansa Draught", detail: "440ml, poured cold", price: "N$ 40" },
    { name: "Windhoek Draught", detail: "440ml", price: "N$ 45" },
    { name: "Windhoek Lager", detail: "330 / 440ml", price: "N$ 45" },
    { name: "Tafel Lager", detail: "330ml", price: "N$ 40" },
    { name: "Savanna Dry", detail: "330ml bottle", price: "N$ 50" },
    { name: "Wine by the glass", detail: "Red, white or rose", price: "N$ 50" },
    { name: "Wine by the bottle", detail: "House selection", price: "N$ 220" },
    { name: "Gin & tonic", detail: "Local gin, double shot", price: "N$ 65" },
    { name: "Cocktail of the day", detail: "Ask at the bar", price: "N$ 85" },
    { name: "Soft drinks", detail: "Cans and bottles", price: "N$ 25" },
  ],
  // ASSUMPTION: drink prices are market-related estimates for a Swakopmund bar.
};

export const GALLERY = [
  { src: "/photos/gal-01.webp", alt: "Plated salads and sides ready for service" },
  { src: "/photos/gal-05.webp", alt: "Steak sizzler with onion rings and vegetables" },
  { src: "/photos/gal-10.webp", alt: "Takeaway plates with meat, pap and corn" },
  { src: "/photos/gal-03.webp", alt: "Fresh fruit plate" },
  { src: "/photos/gal-06.webp", alt: "Braai feast platter with wors and sides" },
  { src: "/photos/gal-11.webp", alt: "Oxtail stew with rice" },
  { src: "/photos/gal-02.webp", alt: "Loaded potato wedges with dip" },
  { src: "/photos/gal-07.webp", alt: "Crumbed chicken with chips and salad" },
  { src: "/photos/gal-12.webp", alt: "Fish and chips with salad" },
  { src: "/photos/gal-04.webp", alt: "Chicken bites with dipping sauce" },
  { src: "/photos/gal-13.webp", alt: "Loaded chips with mince and cheese" },
  { src: "/photos/gal-09.webp", alt: "Omelette with mince and spinach" },
  { src: "/photos/gal-14.webp", alt: "Chicken pasta in a creamy sauce" },
  { src: "/photos/gal-08.webp", alt: "Grilled sausage with pap and salad" },
  { src: "/photos/gal-15.webp", alt: "Stew bowl with rice" },
  { src: "/photos/gal-16.webp", alt: "The C4 patio under the umbrellas" },
];

export const FAQS = [
  {
    q: "Do you take orders on WhatsApp?",
    a: "Yes, that is the fastest way. Send us what you want, we confirm the total and the prep time, and you collect at the counter or eat on the patio. You can also tap any plate on this page to start the order.",
  },
  {
    q: "Where exactly are you?",
    a: "On the corner of Aaron Edward and Kovambo Nujoma Street in Swakopmund. Look for the blue fence and the umbrellas. There is a map and a directions link in the Find us section below.",
  },
  {
    q: "Can I book a table or bring a group?",
    a: "Walk-ins sit as soon as a table is open. For groups of six or more, send us a WhatsApp the day before and we will keep the patio tables together for you.",
  },
  {
    q: "Do you do takeaway?",
    a: "Yes. Everything on the menu travels well, from the breakfast box to the braai pack for two. Order on WhatsApp and we will tell you when to collect.",
  },
  {
    q: "Are children welcome?",
    a: "Yes. Families sit on the patio, and we do half portions of most plates on request.",
  },
  {
    q: "What are your hours?",
    a: SITE.hours + " Hours can move on public holidays, so a quick WhatsApp settles it.",
  },
  {
    q: "How can I pay?",
    a: "Pay at the counter. Cash and card both work.",
  },
];

export const HERO_SLIDES = [
  { src: "/photos/hero-patio.webp", alt: "The C4 patio with its blue fence and umbrellas" },
  { src: "/photos/hero-braai.webp", alt: "Braai platter with boerewors, pap and chakalaka" },
  { src: "/photos/hero-feast.webp", alt: "The braai feast platter with all the sides" },
];
