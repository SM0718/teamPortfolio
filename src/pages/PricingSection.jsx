import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "5999",
      description: "Perfect for small businesses looking to establish their online presence",
      features: [
        "Responsive Website Design",
        "3 Custom Pages",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Mobile Optimization",
        "Social Media Integration",
        "1 Rounds of Revisions",
        "14 Days Free Support"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "9999",
      description: "Ideal for growing businesses needing advanced functionality",
      features: [
        "Everything in Starter, plus:",
        "Up to 7 Custom Pages",
        "Advanced SEO Optimization",
        "Custom Contact Forms",
        "Blog/News Section",
        "Newsletter Integration",
        "Database Integration",
        "Payment Gateway Setup",
        "Admin Dashboard",
        "30 Days Free Support",
        "Priority Support Response"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large businesses with specific needs",
      features: [
        "Everything in Professional, plus:",
        "Unlimited Custom Pages",
        "Custom Web Applications",
        "E-commerce Integration",
        "Advanced Security Features",
        "Custom API Development",
        "Database Design & Optimization",
        "Load Balancing Setup",
        "Advanced Analytics",
        "4 Months Free Support",
        "24/7 Priority Support"
      ],
      highlight: false
    }
  ];

  return (
    <section className="bg-gray-900 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-ulm text-4xl py-4 font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent sm:text-5xl mb-6">
            Transparent Pricing Plans
          </h2>
          <p className="text-lg text-gray-300">
            Choose the perfect plan for your business needs. All plans include our premium development standards and attention to detail.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
            <Info className="w-4 h-4 text-cyan-400" />
            <p className="text-sm text-gray-300">
              Domain registration and hosting charges are additional if required
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:border-gray-600 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-cyan-400/50' 
                  : 'bg-gray-800/50 border-gray-700'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-sm text-gray-400">Starting from</span>
                      <span className="text-4xl font-bold text-gray-100">₹{plan.price}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-100">Custom</span>
                  )}
                </div>
                <p className="text-gray-400 mb-8">{plan.description}</p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="relative inline-flex w-full group items-center justify-center"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                  <span className="relative w-full inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 border border-gray-700 text-gray-100 font-medium transition-all duration-300 group-hover:border-gray-600">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-8">
            Already have a domain? No problem! We'll help you set everything up with your existing domain at no extra cost.
          </p>
          <p className="text-gray-400">
            All plans include our standard quality assurance, security best practices, and responsive design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;