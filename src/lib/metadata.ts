import type { Metadata } from "next";

const OG_IMAGE = {
  // 1200x630 share card cropped from the home hero photo, rotation baked in (the original
  // is 4.2 MB with an EXIF rotation that some link-preview scrapers ignore).
  url: "/images/nick/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Nicholas Connelly",
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: {
  title?: string;
  description: string;
  path: string;
  absoluteTitle?: string;
}): Metadata {
  const displayTitle = absoluteTitle ?? (title ? `${title} | Nicholas Connelly` : "Nicholas Connelly");

  return {
    ...(absoluteTitle
      ? { title: { absolute: absoluteTitle } }
      : title
        ? { title }
        : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: displayTitle,
      description,
      url: path,
      siteName: "Nicholas Connelly",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [OG_IMAGE.url],
      creator: "@nicklutk",
    },
  };
}
