import React from 'react';
import { ArrowRight, Code, Zap, Users, Clock, Shield, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HireUsSection = () => {

  const navigate = useNavigate()

  const differentiators = [
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: "Technical Excellence",
      description: "Our team of senior designers and developers brings multiple years of experience in building scalable, modern applications using cutting-edge technologies."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Rapid Delivery",
      description: "We maintain quick turnaround times without compromising quality, using agile methodologies and efficient development practices."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring transparent communication and alignment with your business goals."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Security First",
      description: "We implement industry-leading security practices and follow strict compliance standards to protect your data and users."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Innovation Focus",
      description: "We stay ahead of technology trends, bringing innovative solutions and fresh perspectives to your challenges."
    },
    {
      icon: <Star className="w-6 h-6 text-blue-400" />,
      title: "End-to-End Service",
      description: "From initial concept to ongoing maintenance, we provide comprehensive support throughout your project lifecycle."
    }
  ];

  return (
    <section className="bg-gray-900 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-ulm text-4xl pb-4 font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent sm:text-5xl">
              Why Choose Us?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              We don't just build software – we create lasting solutions that drive your business forward. Here's what sets us apart:
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="relative group p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="p-2 w-fit rounded-lg bg-gray-900/50 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300 mb-8">
              Ready to transform your ideas into reality? Let's create something extraordinary together.
            </p>
            <div
              className="relative inline-flex group items-center"
            >
              <div className="absolute  -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <span onClick={() => navigate('/pricing')} className="relative cursor-pointer inline-flex items-center px-8 py-3 rounded-full bg-gray-900 border border-gray-700 text-gray-100 font-medium transition-all duration-300 group-hover:border-gray-600">
                View Pricing
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0">
          <div className="w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HireUsSection;