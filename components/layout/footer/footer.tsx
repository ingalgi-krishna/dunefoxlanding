import { FooterBrand } from "./footer-brand";
import { FooterLinks } from "./footer-links";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-[#252422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterBrand />

          <FooterLinks title="Quick Links" links={quickLinks} />
          <FooterLinks title="Legal" links={legalLinks} />

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-[#CCC5B9]">contact@dunefox.com</li>
              <li className="text-[#CCC5B9]">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#403D39] text-center">
          <p className="text-[#CCC5B9] mb-2">A Sucetas Company</p>
          <p className="text-[#CCC5B9]">
            &copy; {new Date().getFullYear()} Dunefox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}