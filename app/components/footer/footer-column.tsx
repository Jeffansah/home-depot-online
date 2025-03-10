import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-sm font-medium uppercase">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href} className="max-w-max">
            <Link
              href={link.href}
              className="group text-light-200 hover:text-dark-400 flex items-center text-sm"
            >
              <span className="relative flex items-center">
                <ArrowRight className="absolute left-0 h-4 w-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100" />
                <span className="selection:bg-dark-400 transition-transform duration-200 group-hover:translate-x-5 selection:text-white">
                  {link.label}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
