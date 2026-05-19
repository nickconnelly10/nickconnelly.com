import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ImportantDisclaimer from '../../components/ImportantDisclaimer';
import LegalPageLayout from '../../components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service - Nicholas Connelly',
  description: 'Terms of service for nickconnelly.com.',
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

export default function TermsPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
        Terms of Service
      </h1>
      <p className="text-gray-600 mb-6">
        <strong>Last updated:</strong> May 2026
      </p>

      <ImportantDisclaimer />

      <Section title="1. Acceptance of Terms">
        <p className="text-gray-600 mb-4">
          By accessing nickconnelly.com, you accept and agree to these Terms of Service. If you
          do not agree, please do not use this site.
        </p>
      </Section>

      <Section title="2. Informational Purpose Only">
        <p className="text-gray-600 mb-4">
          This website shares personal perspectives on health, finance, philosophy, and related
          topics. All content is for informational and educational purposes—not professional
          advice.
        </p>
      </Section>

      <Section title="3. Content Disclaimer">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded text-gray-700">
          <strong>INFORMATIONAL ONLY:</strong> Content reflects personal views and experiences.
          It is not medical, financial, or legal advice. Consult qualified professionals before
          making decisions based on anything you read here.
        </div>
        <ul className="list-disc ml-8 mb-4 space-y-2 text-gray-600">
          <li>We do not guarantee outcomes from following site content</li>
          <li>Health- and finance-related posts are not personalized recommendations</li>
          <li>You assume responsibility for your own decisions and actions</li>
        </ul>
      </Section>

      <Section title="4. No Professional Relationship">
        <p className="text-gray-600 mb-4">
          Use of this site does not create a doctor-patient, advisor-client, or other professional
          relationship between you and the site operator.
        </p>
      </Section>

      <Section title="5. User Responsibilities">
        <p className="text-gray-600 mb-4">You agree to:</p>
        <ul className="list-disc ml-8 mb-4 space-y-2 text-gray-600">
          <li>Use this site for lawful, personal purposes</li>
          <li>Seek appropriate professional advice for medical and financial decisions</li>
          <li>Not rely solely on this content for critical decisions</li>
          <li>Understand that information is provided &quot;as is&quot; without warranties</li>
        </ul>
      </Section>

      <Section title="6. Limitation of Liability">
        <p className="text-gray-600 mb-4">To the maximum extent permitted by law, we are not liable for:</p>
        <ul className="list-disc ml-8 mb-4 space-y-2 text-gray-600">
          <li>Direct, indirect, incidental, or consequential damages</li>
          <li>Decisions made based on site content</li>
          <li>Interruption or cessation of service</li>
        </ul>
      </Section>

      <Section title="7. Indemnification">
        <p className="text-gray-600 mb-4">
          You agree to indemnify and hold harmless the site operator from claims arising from
          your use of this site or violation of these terms.
        </p>
      </Section>

      <Section title="8. Intellectual Property">
        <p className="text-gray-600 mb-4">
          Content on this site is for personal, non-commercial use unless otherwise noted. Do
          not copy or distribute content for commercial purposes without permission.
        </p>
      </Section>

      <Section title="9. Third-Party Links">
        <p className="text-gray-600 mb-4">
          This site may link to third-party websites. We are not responsible for their content,
          privacy policies, or practices.
        </p>
      </Section>

      <Section title="10. Service Availability">
        <p className="text-gray-600 mb-4">
          We strive to keep the site available but do not guarantee uninterrupted access. We may
          modify or discontinue the site at any time.
        </p>
      </Section>

      <Section title="11. Changes to Terms">
        <p className="text-gray-600 mb-4">
          We may update these terms from time to time. Continued use constitutes acceptance of
          changes posted on this page.
        </p>
      </Section>

      <Section title="12. Governing Law">
        <p className="text-gray-600 mb-4">
          These terms are governed by applicable laws. Disputes shall be resolved in the
          appropriate jurisdiction.
        </p>
      </Section>

      <Section title="13. Contact Information">
        <p className="text-gray-600 mb-4">
          Questions about these terms? Contact{' '}
          <a
            href="mailto:nickconnelly10@gmail.com"
            className="text-gray-800 underline hover:text-gray-600"
          >
            nickconnelly10@gmail.com
          </a>
          .
        </p>
      </Section>

      <Section title="14. Severability">
        <p className="text-gray-600 mb-4">
          If any provision is unenforceable, the remaining provisions remain in full effect.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
