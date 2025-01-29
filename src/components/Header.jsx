import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div className="w-screen px-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-700"></div>
            <img
              onClick={() => navigate('/')}
              className="relative w-[125px] cursor-pointer object-cover group-hover:border-gray-600 transition-all duration-300"
              src="/./agriLogo.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                      : "text-gray-400 hover:text-gray-200"
                  } before:content-[''] before:absolute before:block before:w-full 
                  before:h-[2px] before:bottom-[-4px] before:left-0 before:bg-gradient-to-r 
                  before:from-cyan-400 before:to-purple-400 before:scale-x-0 
                  before:origin-left hover:before:scale-x-100 before:transition-transform 
                  before:duration-300 before:ease-in-out
                  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Hire Us Button (Desktop) */}
          <div className="hidden md:block ml-auto">
            <a
              href="/contact"
              className="relative inline-flex group items-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <span className="relative inline-flex items-center px-8 py-3 rounded-full bg-gray-900 border border-gray-700 text-gray-100 font-medium transition-all duration-300 group-hover:border-gray-600">
                Hire us
                <svg className="ml-2 -mr-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 hover:text-white p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 cursor-pointer focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden flex flex-col items-center space-y-4 overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact" },
            { to: "/services", label: "Services" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                    : "text-gray-400 hover:text-gray-200"
                } before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                before:bottom-[-4px] before:left-0 before:bg-gradient-to-r 
                before:from-cyan-400 before:to-purple-400 before:scale-x-0 
                before:origin-left hover:before:scale-x-100 before:transition-transform 
                before:duration-300 before:ease-in-out
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Hire Us Button (Mobile) */}
          <button className="relative inline-flex group items-center">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <span className="relative px-6 py-2 rounded-full bg-gray-900 border border-gray-700 text-gray-100 font-medium transition-all duration-300 group-hover:border-gray-600">
              Hire Us
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;