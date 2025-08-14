import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo1.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 transition-colors duration-300 ${
      isActive
        ? "text-orange-500 font-bold"
        : "text-black hover:text-orange-500"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
    { path: "/clients", label: "Clients" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <nav
        className={`bg-white shadow-md fixed w-full top-0 left-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full px-6 flex items-center justify-between h-[90px]">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="FuGen Logo" className="h-16 w-auto" />
          </NavLink>

          {/* Desktop Menu */}
          {!isMobileView && (
            <div className="flex gap-8 text-base font-semibold">
              {menuItems.map((item) => (
                <NavLink key={item.path} to={item.path} className={navLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobileView && (
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMobileMenuOpen && isMobileView && (
          <div className="absolute left-0 w-full z-40" style={{ top: "100%" }}>
            <div className="w-full bg-[#080c29] py-6 px-6 shadow-md">
              <nav className="flex flex-col gap-5">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white text-lg font-medium hover:text-orange-400 ${
                        isActive ? "text-orange-400 font-bold" : ""
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
