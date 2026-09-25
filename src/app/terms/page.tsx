import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ScrollTop } from "@/components/site/scroll-top";
import { LegalPage } from "@/components/site/legal-page";
import { TERMS } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "How ordering, bookings, payment and collection work at C4 Restaurant & Bar in Swakopmund. Plain-language terms under Namibian law.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          sections={TERMS}
          heading="The clear bits"
          intro="Written in plain language, the way we would explain it over the counter. Last updated 25 September 2026."
        />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
