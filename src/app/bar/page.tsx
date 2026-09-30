import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { PageHead } from "@/components/site/page-head";
import { Bar } from "@/components/site/bar";
import { Footer } from "@/components/site/footer";
import { BAR } from "@/data/site";

export const metadata: Metadata = {
  title: "The Bar: Draught, Wine & Cocktails in Swakopmund",
  description:
    "Ice-cold Hansa and Windhoek draught, local gin, wine by the glass and cocktails at the C4 bar. Prices in Namibian dollars, patio till late.",
  alternates: { canonical: "/bar" },
};

export default function BarPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHead title={BAR.headline} line={BAR.copy} />
        <Bar />
      </main>
      <Footer />
    </>
  );
}
