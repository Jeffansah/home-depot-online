import { footerLinks } from "@/app/lib/data/footer-links";
import FooterColumn from "./footer-column";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="border-light-50 border-t">
      <div className="boxed px-8">
        <div className="grid grid-cols-1 gap-8 py-24 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn
            title={footerLinks.customerService.title}
            links={footerLinks.customerService.links}
          />
          <FooterColumn
            title={footerLinks.company.title}
            links={footerLinks.company.links}
          />
          <FooterColumn
            title={footerLinks.legal.title}
            links={footerLinks.legal.links}
          />
          <FooterColumn
            title={footerLinks.profile.title}
            links={footerLinks.profile.links}
          />
        </div>
      </div>
      <div className="border-light-50 border-t py-8">
        <div className="boxed flex items-center justify-between px-8">
          <p className="text-dark-200 text-xs">
            © {new Date().getFullYear()} Home Depot Online. All rights
            reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
