import React from 'react'
import { ArrowRight, Code, Rocket, Palette, Megaphone } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import TeamSection from '../components/TeamSection';
import HireUsSection from '../components/HireUsSection';
function Home() {

    const HeroSection = () => {

        const services = [
            { icon: <Code className="w-6 h-6" />, text: 'Web Development' },
            { icon: <Palette className="w-6 h-6" />, text: 'UI/UX Design' },
            { icon: <Rocket className="w-6 h-6" />, text: 'Graphics Design' },
            { icon: <Megaphone className="w-6 h-6" />, text: 'Digital Marketing' }
          ];


        return (
            <>
            <section className="relative min-h-screen flex items-center justify-center text-center pt-20 overflow-hidden bg-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: "url('./herobg.webp')" }}>
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 mx-auto">
        {/* Main Heading with Gradient */}
        <div className="relative">
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-25"></div> */}
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              We Create Experiences
            </h1>
          </div>
        </div>

        {/* Animated Text */}
        <div className="text-xl md:text-2xl text-gray-300 mt-4 h-12">
          <TypeAnimation
            sequence={services.map(service => [service.text, 1000]).flat()}
            wrapper="span"
            speed={50}
            className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            repeat={Infinity}
          />
        </div>

        {/* Service Cards with Enhanced Visibility */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-8">
  {services.map((service, index) => (
    <div key={index} className="group relative cursor-pointer h-full">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative p-6 rounded-xl bg-gray-800 flex flex-col items-center space-y-4 transform group-hover:-translate-y-1 transition duration-300 h-full">
        {/* Icon container with gradient background */}
        <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-400/10 group-hover:from-cyan-400/20 group-hover:to-purple-400/20 transition-all duration-300">
          <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
            {service.icon}
          </div>
        </div>
        {/* Service text */}
        <span className="text-base font-medium text-gray-100 group-hover:text-white transition-colors flex-grow">
          {service.text}
        </span>
        {/* Learn More text */}
        <span className="text-sm text-cyan-400 group-hover:text-white flex items-center space-x-1 transition-colors">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  ))}
</div>


        {/* CTA Button */}
        <button className="mt-8 px-8 py-4 text-lg font-medium rounded-xl 
                         bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900
                         hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
                         flex items-center justify-center space-x-2 mx-auto group">
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
            
            <HireUsSection />

            <TeamSection />
            </>
        );
      };
      
  return (
    <div><HeroSection /></div>
  )
}

export default Home