import { LegalLayout } from "@/components/legal-layout";

export const metadata = {
  title: "Terms of Service - Dunefox",
  description: "Read about the terms and conditions for using Dunefox services",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 20, 2024">
      <section className="prose prose-orange max-w-none">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using Dunefox's website and services, you accept and
          agree to be bound by these Terms of Service. If you do not agree to
          these terms, you should not use our services.
        </p>

        <h2>Use of Services</h2>
        <h3>Account Registration</h3>
        <p>
          To access certain features of our services, you may need to create an
          account. You are responsible for maintaining the confidentiality of
          your account credentials and for all activities that occur under your
          account.
        </p>

        <h3>Acceptable Use</h3>
        <p>
          You agree to use our services only for lawful purposes and in
          accordance with these Terms. You agree not to:
        </p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe upon intellectual property rights</li>
          <li>Transmit harmful code or materials</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with other users' use of the services</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content, features, and functionality of our services are owned by
          Dunefox and are protected by international copyright, trademark, and
          other intellectual property laws.
        </p>

        <h2>Service Modifications</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of
          our services at any time without notice. We will not be liable if any
          part of the services becomes unavailable.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Dunefox shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages resulting from your use or inability to use our services.
        </p>

        <h2>Termination</h2>
        <p>
          We may terminate or suspend your access to our services immediately,
          without prior notice, for any breach of these Terms. Upon termination,
          your right to use the services will immediately cease.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify
          users of any material changes. Your continued use of our services
          following such modifications constitutes your acceptance of the
          updated Terms.
        </p>
      </section>
    </LegalLayout>
  );
}
