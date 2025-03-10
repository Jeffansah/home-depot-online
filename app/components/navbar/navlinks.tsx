"use client";

import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "My account",
    href: "/my-account",
  },
];

const Navlinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex items-center gap-10">
      {links.map((link: { label: string; href: string }) => (
        <Link
          href={link.href}
          key={link.label}
          className={`selection:bg-dark-400 text-xs tracking-[0.15em] uppercase selection:text-white ${
            isActive(link.href) ? "text-dark-400 font-medium" : "text-dark-50"
          } hover:text-dark-400 transition-colors duration-100 ease-in-out`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
