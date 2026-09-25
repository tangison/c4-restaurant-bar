import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";
import { SWRegister } from "@/components/site/sw-register";
import { OrderDock } from "@/components/site/order-dock";
import { ScrollTop } from "@/components/site/scroll-top";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "C4 Restaurant & Bar | Braai, Grill & Bar in Swakopmund",
    template: "%s | C4 Restaurant & Bar",
  },
  description:
    "Flame-grilled plates, pap and chakalaka, seafood and ice-cold draught on the corner of Aaron Edward and Kovambo Nujoma Street, Swakopmund. Order or book on WhatsApp.",
  keywords: [
    "restaurant Swakopmund",
    "braai Swakopmund",
    "bar Swakopmund",
    "takeaway Swakopmund",
    "food Swakopmund",
    "C4 Restaurant and Bar",
    "restaurant near me Swakopmund",
    "Namibian food Swakopmund",
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: SITE.name,
    title: "C4 Restaurant & Bar | Braai, Grill & Bar in Swakopmund",
    description:
      "Flame-grilled plates, pap and chakalaka and ice-cold draught on the corner of Aaron Edward and Kovambo Nujoma Street, Swakopmund. Order on WhatsApp.",
    locale: "en_NA",
    images: [
      {
        url: "/og-c4.jpg",
        width: 1200,
        height: 630,
        alt: "C4 Restaurant & Bar, Swakopmund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C4 Restaurant & Bar | Swakopmund",
    description:
      "Braai, grill and bar on the corner of Aaron Edward and Kovambo Nujoma Street, Swakopmund. Order on WhatsApp.",
    images: ["/og-c4.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#223A6C",
  width: "device-width",
  initialScale: 1,
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": siteUrl + "/#restaurant",
  name: SITE.name,
  legalName: SITE.legalName,
  url: siteUrl,
  image: [siteUrl + "/og-c4.jpg", siteUrl + "/photos/hero-patio.webp"],
  logo: siteUrl + "/brand/logo-navy-800.png",
  description:
    "Casual restaurant and bar in Swakopmund. Flame-grilled plates, pap and chakalaka, seafood, takeaway boxes and a full bar on a shaded patio.",
  telephone: SITE.phoneLandlineIntl,
  email: SITE.email,
  servesCuisine: ["Namibian", "Grill", "Seafood", "Braai"],
  priceRange: "N$55 - N$290",
  currenciesAccepted: "NAD",
  paymentAccepted: "Cash, Card",
  menu: siteUrl + "/menu",
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.streetAddress,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: "NA",
  },
  postOfficeBoxNumber: "91466",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "22:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        {children}
        <OrderDock />
        <ScrollTop />
        <SWRegister />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </body>
    </html>
  );
}
