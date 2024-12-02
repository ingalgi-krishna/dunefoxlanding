import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">{title}</h4>
      <ul className="space-y-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-[#CCC5B9] hover:text-[#EB6C33] transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
