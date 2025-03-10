import Link from "next/link";

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
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-dark-200 hover:text-dark-400 text-sm"
            >
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
