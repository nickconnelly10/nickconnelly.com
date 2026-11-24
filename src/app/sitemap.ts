import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nickconnelly.com";
  return [
    "",
    "/resume/",
    "/contact/",
    "/health/",
  ].map((path) => ({
    url: `${base}${path === "" ? "/" : path}`,
    lastModified: new Date("2026-11-23"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
