import { Flame } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "./social-links";

export function FooterBrand() {
  return (
    <div>
      <Link href="/" className="flex items-center space-x-2">
        <Flame className="h-8 w-8 text-[#EB6C33]" />
        <span className="text-2xl font-bold text-white">Dunefox</span>
      </Link>
      <p className="mt-4 text-[#CCC5B9]">
        Empowering businesses with intelligent automation solutions.
      </p>
      <div className="mt-6">
        <SocialLinks />
      </div>
    </div>
  );
}
