import React from 'react';
import { Code, Users, Check, ChevronRight, Zap, Workflow, Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-gray-100 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(32,_224,_255,_0.15),_transparent_50%)]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="relative inline-block">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-25"></div> */}
              <h1 className="font-ulm relative py-3 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                Crafting Digital Excellence
              </h1>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              We're a passionate trio of digital creators bringing together development, design, and visual artistry to build exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-ulm text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              To deliver innovative digital solutions that combine technical excellence, intuitive design, and creative flair. We believe in creating not just websites, but digital experiences that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      {/* Team Values */}
      <div className="relative py-16 sm:py-24 bg-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Innovation First",
                description: "We stay ahead of the curve, embracing new technologies and creative approaches to solve complex problems."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaborative Spirit",
                description: "Our diverse skills complement each other, allowing us to tackle projects from every angle."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Quality Driven",
                description: "Every project receives our full attention, ensuring every detail meets and exceeds your expectations."
              }
            ].map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-gray-600 transition duration-300">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-4 text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-25"></div>
              <div className="relative p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <h2 className="font-ulm text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose Us?
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  As a tight-knit team of three specialists, we offer a unique blend of expertise:
                </p>
                <ul className="mt-6 space-y-4 text-gray-300">
                  {[
                    "Full-stack development capabilities for robust, scalable solutions",  
                    "User-centered UI/UX design that delights and engages",  
                    "Creative graphic design that captures attention and communicates effectively",  
                    "Agile project management for timely, efficient, and seamless delivery.",  
                    
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ChevronRight className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group mt-12 lg:mt-0">
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-25"></div>
              <div className="relative p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <h2 className="font-ulm text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Process
                </h2>
                <p className="mt-5 text-lg text-gray-300">
                  We believe in a collaborative approach that brings together our diverse skills to create exceptional results:
                </p>
                <ul className="mt-6 space-y-4 text-gray-300">
                  {[
                    "Deep understanding of your needs and objectives",
                    "Collaborative ideation and strategy development",
                    "Iterative design and development with regular feedback",
                    "Thorough testing and refinement",
                    "Launch and continued support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10"></div>
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl py-2 font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent sm:text-4xl">
              Ready to bring your vision to life?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Let's collaborate to create something extraordinary together.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="relative inline-flex group items-center"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                <span className="relative inline-flex items-center px-8 py-3 rounded-full bg-gray-900 border border-gray-700 text-gray-100 font-medium transition-all duration-300 group-hover:border-gray-600">
                  Get in Touch
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;