import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { socialLinks } from "@/app/lib/data/footer-links";

const iconMap = {
  Instagram,
  Facebook,
  Twitter,
};

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 text-xs">
      <span className="text-light-200 selection:bg-dark-400 font-medium selection:text-white">
        Follow us
      </span>
      <div className="flex items-center gap-2">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.name as keyof typeof iconMap];
          return (
            <Link key={link.name} href={link.href}>
              <Icon
                size={16}
                className="fill-dark-400 hover:fill-dark-200 text-white transition-all duration-100"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
