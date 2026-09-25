import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Bar } from "@/components/site/bar";
import { Footer } from "@/components/site/footer";

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
      <main className="pt-20">
        <Bar />
      </main>
      <Footer />
    </>
  );
}
