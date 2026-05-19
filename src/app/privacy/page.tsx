import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ImportantDisclaimer from '../../components/ImportantDisclaimer';
import LegalPageLayout from '../../components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy - Nicholas Connelly',
  description: 'Privacy policy for nickconnelly.com.',
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
        Privacy Policy
      </h1>
      <p className="text-gray-600 mb-6">
        <strong>Last updated:</strong> May 2026
      </p>

      <ImportantDisclaimer />

      <Section title="1. Information We Collect">
        <p className="text-gray-600 mb-4">
          This is a personal website. We collect minimal information:
        </p>
        <ul className="list-disc ml-8 mb-4 space-y-2 text-gray-600">
          <li>
            <strong>Usage Data:</strong> Basic analytics to understand how the site is used
          </li>
          <li>
            <strong>Contact Information:</strong> Only when you voluntarily reach out
          </li>
          <li>
            <strong>No Sensitive Data:</strong> We do not collect or store personal health or
            financial account information through this site
          </li>
        </ul>
      </Section>

      <Section title="2. How We Use Information">
        <p className="text-gray-600 mb-4">Any information we collect is used solely for:</p>
        <ul className="list-disc ml-8 mb-4 space-y-2 text-gray-600">
          <li>Improving site content and experience</li>
          <li>Responding to inquiries</li>
          <li>Website analytics and performance monitoring</li>
        </ul>
      </Section>

      <Section title="3. Content Disclaimer">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded text-gray-700">
          <strong>INFORMATIONAL ONLY:</strong> Content on this site reflects personal views and
          experiences. It is not medical, financial, or legal advice. Consult qualified
          professionals before making health or financial decisions.
        </div>
        <ul className="list-disc ml-8 mb-4 space-y-2 text-gray-600">
          <li>Content is not a substitute for professional advice</li>
          <li>Individual results and outcomes may vary</li>
          <li>We do not guarantee accuracy of third-party links or references</li>
        </ul>
      </Section>

      <Section title="4. Data Security">
        <p className="text-gray-600 mb-4">
          We implement reasonable security measures to protect any information we collect.
          However, no internet transmission is completely secure.
        </p>
      </Section>

      <Section title="5. Third-Party Links">
        <p className="text-gray-600 mb-4">
          This site may link to third-party websites (e.g., Substack, LinkedIn, external
          projects). We are not responsible for the privacy practices of those sites.
        </p>
      </Section>

      <Section title="6. Children&apos;s Privacy">
        <p className="text-gray-600 mb-4">
          We do not knowingly collect information from children under 13. If you are under 13,
          please do not use this site.
        </p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p className="text-gray-600 mb-4">
          We may update this privacy policy from time to time. Material changes will be
          reflected on this page with an updated date.
        </p>
      </Section>

      <Section title="8. Contact Us">
        <p className="text-gray-600 mb-4">
          Questions about this policy? Contact{' '}
          <a
            href="mailto:nickconnelly10@gmail.com"
            className="text-gray-800 underline hover:text-gray-600"
          >
            nickconnelly10@gmail.com
          </a>
          .
        </p>
      </Section>

      <Section title="9. Legal Jurisdiction">
        <p className="text-gray-600 mb-4">
          This privacy policy is governed by applicable laws. By using this site, you agree
          to resolve disputes in the appropriate jurisdiction.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
