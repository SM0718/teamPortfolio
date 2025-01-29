import React from 'react';
import { ArrowRight } from 'lucide-react';

const HireUsSection = () => {
  return (
    <section className="bg-gray-900 py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Gradient container */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-25"></div>
          <div className="relative">
            {/* Main Heading */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent sm:text-5xl">
              Work with us
            </h2>
           
            {/* Subheading */}
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              We'd love to hear from you! Get in touch and let's talk about what we can do for you.
            </p>
           
            {/* CTA Button */}
            <div className="hidden md:block ml-auto my-4">
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

          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HireUsSection;