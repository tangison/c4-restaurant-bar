import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Story } from "@/components/site/story";
import { MenuSection } from "@/components/site/menu-section";
import { Bar } from "@/components/site/bar";
import { Gallery } from "@/components/site/gallery";
import { Faq } from "@/components/site/faq";
import { Visit } from "@/components/site/visit";
import { Footer } from "@/components/site/footer";
import { OrderDock } from "@/components/site/order-dock";
import { ScrollTop } from "@/components/site/scroll-top";

export default function Home() {
  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-c4-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to the menu
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <MenuSection />
        <Bar />
        <Gallery />
        <Faq />
        <Visit />
      </main>
      <Footer />
      <OrderDock />
      <ScrollTop />
    </>
  );
}
