import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ScrollTop } from "@/components/site/scroll-top";
import { LegalPage } from "@/components/site/legal-page";
import { PRIVACY } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What C4 Restaurant & Bar does and does not collect on this website, and how your WhatsApp orders and bookings are handled.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          sections={PRIVACY}
          heading="Your details, kept simple"
          intro="No accounts, no ad trackers, no data selling. Here is exactly what happens with your information. Last updated 25 September 2026."
        />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
