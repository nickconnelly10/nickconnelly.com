import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Nicholas Connelly.",
  path: "/contact/",
});

const links = [
  { href: "mailto:nickconnelly10@gmail.com", label: "nickconnelly10@gmail.com" },
  {
    href: "https://www.linkedin.com/in/nicholas-connelly",
    label: "LinkedIn",
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-3xl mx-auto container-padding section-padding">
        <h1 className="font-light text-gray-900 leading-tight mb-10 pb-4 border-b border-gray-200">
          Contact
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-10">
          Whether it&apos;s health, finance, or anything else in between, I enjoy connecting with others.
        </p>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900"
                {...("external" in link
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
                {"external" in link ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
