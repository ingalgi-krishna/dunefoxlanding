import { Twitter, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: "https://twitter.com/dunefox", icon: Twitter, label: "Twitter" },
  {
    href: "https://instagram.com/dunefox",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/dunefox",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://youtube.com/dunefox", icon: Youtube, label: "YouTube" },
  { href: "https://facebook.com/dunefox", icon: Facebook, label: "Facebook" },
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          className="text-[#CCC5B9] hover:text-[#EB6C33] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{label}</span>
        </Link>
      ))}
    </div>
  );
}
