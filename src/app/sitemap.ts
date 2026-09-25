import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "", priority: 1, freq: "weekly" as const },
    { path: "/menu", priority: 0.9, freq: "weekly" as const },
    { path: "/bar", priority: 0.8, freq: "monthly" as const },
    { path: "/gallery", priority: 0.7, freq: "monthly" as const },
    { path: "/visit", priority: 0.8, freq: "monthly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" as const },
    { path: "/brand", priority: 0.2, freq: "yearly" as const },
  ];
  return routes.map((r) => ({
    url: SITE.url + r.path,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
