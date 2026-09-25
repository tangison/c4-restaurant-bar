"use client";

import { useEffect, useState } from "react";

export function ScrollTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(p);
      setVisible(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const R = 20;
  const C = 2 * Math.PI * R;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className={`fixed bottom-5 left-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-c4-navy shadow-[0_10px_28px_-12px_rgba(2,26,64,0.55)] ring-1 ring-c4-grey/50 transition-[opacity,transform] duration-300 hover:bg-c4-paper ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-12 w-12 -rotate-90" aria-hidden="true">
        <circle cx="24" cy="24" r={R} fill="none" stroke="#e3e1dc" strokeWidth="3" />
        <circle
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="#032b63"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
          className="ring-progress"
        />
      </svg>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
