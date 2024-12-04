import { FooterBrand } from "./footer-brand";
import { FooterLinks } from "./footer-links";

const quickLinks = [
  { label: "Products", href: "/products" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Solutions", href: "/solutions" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];
export function Footer() {
  return (
    <footer className="bg-[#252422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterBrand />

          <FooterLinks title="Quick Links" links={quickLinks} />
          <FooterLinks title="Legal" links={legalLinks} />

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-[#CCC5B9]">contact@sucetastech.com</li>
              <li className="text-[#CCC5B9]">+91 8329687438</li>
            </ul>
          </div>
        </div>

        <div className="text-xs mt-8 pt-8 border-t border-[#403D39] text-center">
          <p className="text-[#CCC5B9]">
            &copy; {new Date().getFullYear()} Sucetas Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
