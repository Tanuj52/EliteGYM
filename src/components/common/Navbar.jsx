// src/components/common/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // For active route tracking

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 shadow-xl"
            : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      />

      <nav className="relative container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-bold text-white z-50 transition-all ${
              isScrolled ? "scale-95" : "scale-100"
            }`}
          >
            <span className="text-[#FFD700] drop-shadow-gold">ELITE</span>
            <span className="font-light">GYM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`text-white/90 hover:text-[#FFD700] transition-all group text-sm uppercase tracking-wider ${
                  isActivePath(path) ? "text-[#FFD700]" : ""
                }`}
              >
                {name}
                <span
                  className={`block h-0.5 bg-[#FFD700] transition-transform origin-left duration-300 ${
                    isActivePath(path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <button
              className="ml-4 bg-[#FFD700] text-black px-6 py-2.5 rounded-lg 
                         hover:bg-[#FFB700] transition-all duration-300 
                         text-sm uppercase tracking-wider font-semibold
                         hover:shadow-lg hover:shadow-[#FFD700]/20"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button - Keeping original animation */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white z-50 p-2 relative w-8 h-8"
            aria-label="Mobile menu"
          >
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all ${
                isMenuOpen ? "rotate-45 top-1/2" : "top-1/3"
              }`}
            />
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all ${
                isMenuOpen ? "opacity-0" : "top-1/2"
              }`}
            />
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all ${
                isMenuOpen ? "-rotate-45 top-1/2" : "top-2/3"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg p-8">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-white/90 hover:text-[#FFD700] transition-all text-2xl font-light hover:scale-105 ${
                isActivePath(path) ? "text-[#FFD700]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
          <button
            className="mt-8 bg-[#FFD700] text-black px-8 py-3 rounded-lg
                       hover:bg-[#FFB700] transition-all duration-300 
                       text-lg font-semibold hover:shadow-lg 
                       hover:shadow-[#FFD700]/20"
          >
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
