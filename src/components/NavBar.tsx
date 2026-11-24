import Link from "next/link";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <nav aria-label="Primary" className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto h-16 px-4 md:px-8">
        <div className="text-lg font-normal text-gray-900">
          <Link href="/">Nicholas Connelly</Link>
        </div>

        <NavLinks variant="desktop" />
        <NavLinks variant="mobile" />
      </div>
    </nav>
  );
}
