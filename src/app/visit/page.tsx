import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { PageHead } from "@/components/site/page-head";
import { Faq } from "@/components/site/faq";
import { Visit } from "@/components/site/visit";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Find Us: Map, Hours & Good to Know | Swakopmund",
  description:
    "C4 Restaurant & Bar sits on the corner of Aaron Edward and Kovambo Nujoma Street, Swakopmund. Map, directions, hours and the questions we hear at the counter.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHead
          title="Find us"
          line="Look for the blue fence and the umbrellas on the corner of Aaron Edward and Kovambo Nujoma Street. Parking on the sand in front."
        />
        <Faq />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
