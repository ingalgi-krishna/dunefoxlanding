import { LegalLayout } from "@/components/legal-layout";

export const metadata = {
  title: "Privacy Policy - Dunefox",
  description: "Learn about how Dunefox protects and handles your data",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 20, 2024">
      <section className="prose prose-orange max-w-none">
        <h2>Introduction</h2>
        <p>
          At Dunefox, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us
          when you:
        </p>
        <ul>
          <li>Register for an account</li>
          <li>Sign up for our newsletter</li>
          <li>Contact us for support</li>
          <li>Use our services</li>
        </ul>

        <h3>Usage Information</h3>
        <p>
          We automatically collect certain information about your device when
          you visit our website, including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Time and date of visits</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve our website and services</li>
          <li>Communicate with you</li>
          <li>Analyze usage patterns</li>
          <li>Prevent fraud</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational security
          measures to protect your information. However, no system is completely
          secure, and we cannot guarantee the absolute security of your
          information.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
          <li>Request data portability</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our practices,
          please contact us at privacy@dunefox.com.
        </p>
      </section>
    </LegalLayout>
  );
}
