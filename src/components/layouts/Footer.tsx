import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/images/universal/footerLogo.png";
import socialLinks from "../../data/footer/socialLinks";
import { quickLinks } from "../../data/footer/quickLinks";
import services from "../../data/footer/services";
import contactDetails from "../../data/footer/contactDetails";

const renderContactIcon = (type: string) => {
  switch (type) {
    case "phone":
      return <Phone size={16} strokeWidth={2} />;
    case "email":
      return <Mail size={16} strokeWidth={2} />;
    case "location":
      return <MapPin size={16} strokeWidth={2} />;
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0f1c2e" }} className="text-white">
      {/* Main Footer */}
      <div className="px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-5">
            <img
              src={Logo}
              alt="NannyBay"
              className="h-12 w-auto object-contain object-left"
            />

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Simplifying Life, One Home At A Time.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-700"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#93C5FD" }}
            >
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.hash ? (
                    <HashLink
                      smooth
                      to={link.to}
                      className="text-sm transition hover:text-white"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {link.label}
                    </HashLink>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-sm transition hover:text-white"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#93C5FD" }}
            >
              Our Services
            </h4>

            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm transition hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#93C5FD" }}
            >
              Contact Us
            </h4>

            <ul className="flex flex-col gap-4">
              {contactDetails.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[2px]" style={{ color: "#93C5FD" }}>
                    {renderContactIcon(item.type)}
                  </span>

                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-6 md:px-16 py-5"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} NannyBay. All Rights Reserved.
          </p>

          <p
            className="text-xs italic"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Simplifying Life, One Home At A Time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
