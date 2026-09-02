import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

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
  const location = useLocation();

  const getLinkProps = (to: string) => {
    const [pathname, hash] = to.split("#");
    const targetHash = hash ? `#${hash}` : "";

    const isSamePath =
      location.pathname === pathname ||
      (pathname === "/" && location.pathname === "/");

    if (isSamePath && location.hash === targetHash) {
      return {
        to: { pathname, hash: targetHash },
        state: { instantaneous: false },
      };
    }

    return {
      to: { pathname, hash: targetHash },
      state: isSamePath ? undefined : { instantaneous: true },
    };
  };

  return (
    <footer style={{ backgroundColor: "#0f1c2e" }} className="text-white">
      <div className="px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <img
              src={Logo}
              alt="NannyBay"
              width={746}
              height={430}
              className="h-12 w-auto object-contain object-left"
            />
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Simplifying Life, One Home At A Time.
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-700 cursor-pointer"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col gap-4">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#93C5FD" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.hash ? (
                    <Link
                      {...getLinkProps(link.to)}
                      className="text-sm transition hover:text-white text-left cursor-pointer block"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-sm transition hover:text-white cursor-pointer block"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 flex flex-col gap-4">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#93C5FD" }}
            >
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    {...getLinkProps(service.to)}
                    className="text-sm transition hover:text-white text-left cursor-pointer block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#93C5FD" }}
            >
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              {contactDetails.map((item, i) => {
                const isEmail = item.type === "email";
                const isPhone = item.type === "phone";

                let linkHref = "";
                if (isEmail) linkHref = `mailto:${item.text}`;
                if (isPhone) linkHref = `tel:${item.text.replace(/\s+/g, "")}`;

                if (isEmail || isPhone) {
                  return (
                    <li key={i}>
                      <a
                        href={linkHref}
                        className="flex items-start gap-3 text-sm transition hover:text-white cursor-pointer group"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        <span
                          className="mt-[2px] transition group-hover:text-blue-300"
                          style={{ color: "#93C5FD" }}
                        >
                          {renderContactIcon(item.type)}
                        </span>
                        <span className="group-hover:underline">
                          {item.text}
                        </span>
                      </a>
                    </li>
                  );
                }

                return (
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
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-6 md:px-16 py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
            © {new Date().getFullYear()} NannyBay. All Rights Reserved.
          </p>
          <p
            className="text-xs italic"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Simplifying Life, One Home At A Time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
