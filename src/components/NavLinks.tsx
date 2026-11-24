"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/health", label: "Health" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path || "/";
}

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

type NavLinksProps = {
  variant: "desktop" | "mobile";
};

export default function NavLinks({ variant }: NavLinksProps) {
  const pathname = normalizePath(usePathname());
  // The mobile menu lives in the root layout, so it is never re-mounted on navigation.
  // Close it on a link tap, an outside tap, or Escape, or it stays open over the next page.
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  useEffect(() => {
    if (variant !== "mobile") return;
    const onPointerDown = (event: PointerEvent) => {
      const menu = menuRef.current;
      if (menu?.open && !menu.contains(event.target as Node)) menu.open = false;
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const menu = menuRef.current;
      if (event.key !== "Escape" || !menu?.open) return;
      const focusWasInside = menu.contains(document.activeElement);
      menu.open = false;
      // Don't leave focus on a link that is now hidden.
      if (focusWasInside) menu.querySelector("summary")?.focus();
    };
    // Keyboard users tabbing past the last link should not leave the menu open over the page.
    const onFocusOut = (event: FocusEvent) => {
      const menu = menuRef.current;
      const next = event.relatedTarget as Node | null;
      if (menu?.open && next && !menu.contains(next)) menu.open = false;
    };
    const menu = menuRef.current;
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    menu?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      menu?.removeEventListener("focusout", onFocusOut);
    };
  }, [variant]);

  if (variant === "desktop") {
    return (
      <div className="hidden md:flex space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive(pathname, link.href) ? "nav-link-active" : "text-gray-600"}`}
            aria-current={isActive(pathname, link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <details ref={menuRef} className="md:hidden relative group">
      <summary className="list-none p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open menu</span>
        <svg
          className="w-6 h-6 group-open:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          className="w-6 h-6 hidden group-open:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </summary>

      <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200">
        <div className="py-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 transition-colors duration-200 ${
                isActive(pathname, link.href)
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
