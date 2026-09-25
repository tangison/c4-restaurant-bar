"use client";

import { useEffect, useState } from "react";
import { ORDER_MSG, waLink } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";

export function WhatsAppFloat() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={waLink(ORDER_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with C4 Restaurant and Bar on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-c4-wa text-white shadow-[0_10px_30px_-10px_rgba(26,46,87,0.55)] transition-[background-color,transform,opacity] duration-300 hover:bg-c4-wa-deep ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}
