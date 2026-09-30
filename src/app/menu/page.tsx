import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { PageHead } from "@/components/site/page-head";
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
      <main>
        <PageHead
          title="The menu"
          line="Four menus, one kitchen. Tap a plate to start a WhatsApp order, or build the whole list. Prices in Namibian dollars."
        />
        <MenuSection />
      </main>
      <Footer />
    </>
  );
}
