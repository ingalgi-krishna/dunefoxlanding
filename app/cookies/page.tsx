import { LegalLayout } from "@/components/legal-layout";

export const metadata = {
  title: "Cookie Policy - Dunefox",
  description: "Learn about how Dunefox uses cookies and similar technologies",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="March 20, 2024">
      <section className="prose prose-orange max-w-none">
        <h2>What are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device when you
          visit our website. They help us provide you with a better experience
          by remembering your preferences, analyzing how you use our site, and
          helping with our marketing efforts.
        </p>

        <h2>Types of Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They
          enable basic functions like page navigation and access to secure areas
          of the website. The website cannot function properly without these
          cookies.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          We use analytics cookies to understand how visitors interact with our
          website. These cookies help us measure the number of visitors, see
          which pages are the most popular, and understand how visitors move
          around the site.
        </p>

        <h3>Marketing Cookies</h3>
        <p>
          These cookies are used to track visitors across websites. The
          intention is to display ads that are relevant and engaging for the
          individual user.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all
          cookies that are already on your computer and you can set most
          browsers to prevent them from being placed. If you do this, however,
          you may have to manually adjust some preferences every time you visit
          a site and some services and functionalities may not work.
        </p>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in technology, legislation, our operations, or as we otherwise
          determine is necessary or appropriate.
        </p>
      </section>
    </LegalLayout>
  );
}
