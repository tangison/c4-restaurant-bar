import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Gallery } from "@/components/site/gallery";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Gallery: Plates From the C4 Kitchen",
  description:
    "Straight from our kitchen and the patio in Swakopmund: braai platters, stews, takeaway boxes and the plates that keep the corner busy.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
