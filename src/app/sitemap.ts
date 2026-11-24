import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nickconnelly.com";
  return [
    "",
    "/projects/",
    "/resume/",
    "/contact/",
    "/health/",
    "/nest/",
    "/volunteering/",
  ].map((path) => ({
    url: `${base}${path === "" ? "/" : path}`,
    lastModified: new Date("2026-11-23"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
