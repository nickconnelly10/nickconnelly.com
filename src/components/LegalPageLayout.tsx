import Link from 'next/link';
import { ReactNode } from 'react';

export default function LegalPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <article className="max-w-3xl mx-auto container-padding section-padding">
        <div className="card">
          {children}
          <Link
            href="/"
            className="inline-block mt-8 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
}
