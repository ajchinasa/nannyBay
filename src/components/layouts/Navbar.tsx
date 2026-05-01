import Logo from "../../assets/images/universal/footerLogo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="NannyBay" className="h-10 w-auto object-contain" />
      </Link>

      {/* Nav Links */}
      <ul className="flex gap-6">
        {["Home", "About", "Contact"].map((item) => (
          <li key={item}>
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`transition-colors duration-300 font-medium ${
                scrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          scrolled
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-white text-white hover:bg-white hover:text-gray-800"
        }`}
      >
        Book a cleaning service
      </button>
    </nav>
  );
};

export default Navbar;
