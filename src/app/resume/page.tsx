import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: "Professional background and experience for Nicholas Connelly.",
  path: "/resume/",
});

const RESUME_URL = "/resume/nicholas-connelly-resume.pdf";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <h1 className="font-light text-gray-900 leading-tight mb-10 pb-4 border-b border-gray-200">
          Resume
        </h1>
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            aria-label="Open resume in new tab"
          >
            Open
          </a>
          <a href={RESUME_URL} download="nicholas-connelly-resume.pdf" className="btn-secondary text-sm">
            Download
          </a>
        </div>
        <div className="hidden lg:pointer-fine:block border border-gray-200">
          <iframe
            src={`${RESUME_URL}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-screen border-0"
            title="Nicholas Connelly Resume"
          />
        </div>
        <p className="lg:pointer-fine:hidden mt-6 text-gray-600 text-sm">
          Use the buttons above to open or download the PDF.
        </p>
      </div>
    </div>
  );
}
