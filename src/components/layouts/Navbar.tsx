import Logo from "../../assets/images/universal/navlogo.webp";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import services from "../../data/home/services";

const navItems = [
  { label: "Home", to: "/#hero", pathname: "/" },
  { label: "About", to: "/#about", pathname: "/" },
  {
    label: "Services",
    to: "/services",
    pathname: "/services",
    hasDropdown: true,
  },
  // { label: "Bookings", to: "/booking", pathname: "/booking" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      if (isScrolled) {
        setMenuOpen(false);
        setDesktopDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close everything on selection actions
  const handleLinkClick = () => {
    setMenuOpen(false);
    setDesktopDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  const checkIsSamePage = (to: string) => {
    const [pathname] = to.split("#");
    return (
      location.pathname === pathname ||
      (pathname === "/" && location.pathname === "/")
    );
  };

  const getLinkColorClass = (item: (typeof navItems)[0]) => {
    const isCurrentRoute = location.pathname === item.pathname;

    const isActive =
      item.label === "Home"
        ? isCurrentRoute && (location.hash === "#hero" || !location.hash)
        : item.label === "About"
          ? isCurrentRoute && location.hash === "#about"
          : isCurrentRoute;

    if (scrolled || menuOpen) {
      return isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600";
    }

    return isActive
      ? "text-blue-400 font-semibold"
      : "text-white/80 hover:text-white";
  };

  return (
    <>
      <nav
        /* parent nav fixed height at h-16 md:h-20 */
        className={`fixed top-0 left-0 w-full z-50 h-16 md:h-20 px-5 md:px-6 py-2 md:py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo Container */}
        <Link
          to="/#hero"
          state={{ instantaneous: !checkIsSamePage("/#hero") }}
          onClick={handleLinkClick}
          className="cursor-pointer flex items-center h-full"
        >
          <img
            src={Logo}
            alt="NannyBay"
            className="h-10 md:h-20 w-auto max-h-full object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isSamePage = checkIsSamePage(item.to);

            if (item.hasDropdown) {
              return (
                <li
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      to={item.to}
                      state={{ instantaneous: !isSamePage }}
                      onClick={handleLinkClick}
                      className={`transition-all duration-300 font-medium ${getLinkColorClass(item)}`}
                    >
                      {item.label}
                    </Link>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        desktopDropdownOpen ? "rotate-180" : ""
                      } ${scrolled ? "text-gray-600" : "text-white/80"}`}
                    />
                  </div>

                  {/* Desktop Floating Menu Wrapper */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-1 w-56 transition-all duration-200 ${
                      desktopDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                      {services.map((svc) => {
                        const IconComponent = svc.icon;
                        const isSvcSamePage = checkIsSamePage(svc.path);
                        return (
                          <Link
                            key={svc.title}
                            to={svc.path}
                            state={{ instantaneous: !isSvcSamePage }}
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 font-medium"
                          >
                            <IconComponent
                              size={16}
                              style={{ color: svc.iconColor }}
                            />
                            {svc.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li
                key={item.label}
                className="rounded-lg active:bg-blue-50 transition-colors duration-150 py-2"
              >
                <Link
                  to={item.to}
                  state={{ instantaneous: !isSamePage }}
                  onClick={handleLinkClick}
                  className={`block w-full transition-all duration-300 font-medium cursor-pointer ${getLinkColorClass(item)}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <Link
          to="/services#housekeeping"
          state={{ instantaneous: !checkIsSamePage("/services#housekeeping") }}
          className={`hidden md:block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer text-center ${
            scrolled || menuOpen
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-white text-white hover:bg-white hover:text-gray-800"
          }`}
        >
          Book a Cleaning Service
        </Link>

        {/* Mobile — Hamburger */}
        <button
          className="md:hidden p-2 rounded-md transition cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} color={scrolled || menuOpen ? "#1f2937" : "white"} />
          ) : (
            <Menu size={24} color={scrolled ? "#1f2937" : "white"} />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu Container */}
      <div
        className={`fixed top-[64px] md:top-[80px] left-0 w-full z-40 transition-all duration-300 md:hidden overflow-y-auto max-h-[calc(100vh-64px)] ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(255,255,255,0.98)" }}
      >
        <ul className="flex flex-col px-5 py-4 gap-4">
          {navItems.map((item) => {
            const isSamePage = checkIsSamePage(item.to);
            const isCurrentRoute = location.pathname === item.pathname;
            const isActive =
              item.label === "Home"
                ? isCurrentRoute &&
                  (location.hash === "#hero" || !location.hash)
                : item.label === "About"
                  ? isCurrentRoute && location.hash === "#about"
                  : isCurrentRoute;

            if (item.hasDropdown) {
              return (
                <li key={item.label} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between w-full">
                    <Link
                      to={item.to}
                      state={{ instantaneous: !isSamePage }}
                      className={`font-medium text-base transition-colors duration-300 cursor-pointer ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "text-gray-800"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setMobileDropdownOpen((prev) => !prev)}
                      className="p-2 -mr-2 text-gray-600 cursor-pointer"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Nested Mobile Accordion Block */}
                  <div
                    className={`grid transition-all duration-300 overflow-hidden ${
                      mobileDropdownOpen
                        ? "grid-rows-[1fr] opacity-100 mt-1"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden flex flex-col gap-3 pl-4 border-l border-gray-200">
                      {services.map((svc) => {
                        const SvcIcon = svc.icon;
                        const isSvcSamePage = checkIsSamePage(svc.path);
                        return (
                          <Link
                            key={svc.title}
                            to={svc.path}
                            state={{ instantaneous: !isSvcSamePage }}
                            onClick={handleLinkClick}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 font-medium py-1"
                          >
                            <SvcIcon
                              size={14}
                              style={{ color: svc.iconColor }}
                            />
                            {svc.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  state={{ instantaneous: !isSamePage }}
                  className={`font-medium text-base transition-colors duration-300 cursor-pointer block ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          {/* Mobile CTA Link */}
          <li className="pt-2 border-t border-gray-100">
            <Link
              to="/services#housekeeping"
              state={{
                instantaneous: !checkIsSamePage("/services#housekeeping"),
              }}
              className={`font-semibold text-base transition-colors duration-300 cursor-pointer block ${
                location.pathname === "/services" &&
                location.hash === "#housekeeping"
                  ? "text-blue-600"
                  : "text-blue-600 hover:text-blue-700"
              }`}
              onClick={handleLinkClick}
            >
              Book a Cleaning Service
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/10 backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
