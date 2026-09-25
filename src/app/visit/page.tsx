import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
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
      <main className="pt-20">
        <Faq />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
