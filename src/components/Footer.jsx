import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Agripad
          </div>

          {/* Navigation */}
          <div className="flex space-x-6">
            <a 
              href="/about" 
              className="text-sm text-gray-300 transition-colors hover:text-white hover:underline"
            >
              About Us
            </a>
            <a 
              href="/contact" 
              className="text-sm text-gray-300 transition-colors hover:text-white hover:underline"
            >
              Contact Us
            </a>
          </div>

          {/* Email Contact */}
          <a
            href="mailto:contact@company.com"
            className="flex items-center space-x-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-white hover:text-white"
          >
            <Mail size={16} />
            <span>contact@company.com</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {year} Agripad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;