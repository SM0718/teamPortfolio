import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md px-4">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://avatar.iran.liara.run/public"
          alt="Logo"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "text-purple-500 after:scale-100"
                    : "hover:text-purple-400"
                } after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-purple-500 after:scale-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-100`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Hire Us Button (Desktop) */}
        <div className="hidden md:block ml-auto">
          {/* <div className="mt-10"> */}
          <a
            href="/contact"
            className="inline-block rounded-full bg-black px-8 py-3 text-base font-medium text-white transition-transform hover:scale-105 hover:shadow-lg"
          >
            Hire us
          </a>
        {/* </div> */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-purple-500 cursor-pointer focus:outline-none"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden flex flex-col items-center space-y-4 bg-white overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
            className={({ isActive }) =>
              `relative text-lg font-medium transition-all duration-300 ${
                isActive
                  ? "text-purple-500 after:scale-100"
                  : "hover:text-purple-400"
              } after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-purple-500 after:scale-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-100`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Hire Us Button (Mobile) */}
        <button className="bg-purple-500 cursor-pointer text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition-all duration-300">
          Hire Us
        </button>
      </div>
    </div>
  );
};

export default Header;
