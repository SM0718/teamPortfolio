import React from 'react';
import { Mail, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const links = [
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "/contact" },
    { text: "Services", href: "/services" },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Github className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 px-6 sm:px-8 lg:px-12">
      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/50"></div>
      
      <div className="relative mx-auto max-w-7xl py-12">
        <div className="flex flex-col items-center space-y-10">
          {/* Logo Section */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-25"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Agripad
              </h2>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 text-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group flex items-center justify-center sm:justify-start text-gray-300 hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                <span>{link.text}</span>
              </a>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            {/* Email Button */}
            <a
              href="mailto:contact@company.com"
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative flex items-center space-x-2 rounded-full bg-gray-900 px-6 py-3 text-sm text-white">
                <Mail className="w-4 h-4" />
                <span>contact@company.com</span>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-gray-400">
                © {year} Agripad. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
