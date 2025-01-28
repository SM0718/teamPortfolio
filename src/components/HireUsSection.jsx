import React from 'react';

const HireUsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Work with us
        </h2>
        
        {/* Subheading */}
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          We'd love to hear from you! Get in touch and let's talk about what we can do for you.
        </p>
        
        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block rounded-full bg-black px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105 hover:shadow-lg"
          >
            Hire us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireUsSection;