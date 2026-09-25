import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { MenuSection } from "@/components/site/menu-section";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Menu: Braai, Mains & Takeaway in Swakopmund",
  description:
    "Flame-grilled braai plates, oxtail stew, fresh hake and takeaway boxes. Tap a plate, order on WhatsApp, collect at the counter or eat on the patio.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <MenuSection />
      </main>
      <Footer />
    </>
  );
}
