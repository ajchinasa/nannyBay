import Logo from "../../assets/images/universal/footerLogo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      if (isScrolled) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-5 md:px-6 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <img
            src={Logo}
            alt="NannyBay"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li
              key={item}
              className="rounded-lg active:bg-blue-50 transition-colors duration-150"
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`block w-full transition-colors duration-300 font-medium ${
                  scrolled
                    ? "text-gray-800 hover:text-blue-600 active:text-blue-600"
                    : "text-white/90 hover:text-white active:text-white"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <button
          className={`hidden md:block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-white text-white hover:bg-white hover:text-gray-800"
          }`}
        >
          Book a Service
        </button>

        {/* Mobile — Hamburger */}
        <button
          className="md:hidden p-2 rounded-md transition"
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-[64px] left-0 w-full z-40 transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
      >
        <ul className="flex flex-col px-5 py-4 gap-4">
          {/* Nav links */}
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-800 font-medium text-base hover:text-blue-600 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Book a Service — styled same as nav links */}
          <li>
            <Link
              to="/book"
              className="text-gray-800 font-medium text-base hover:text-blue-600 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Book a Service
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
