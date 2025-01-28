import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import TeamSection from '../components/TeamSection';

function Home() {

    const HeroSection = () => {
        return (
            <>
            <section className="relative w-full h-screen flex items-center justify-center text-center">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./herobg.webp')" }}>
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
                </div>
        
                {/* Content */}
                <div className="relative z-10 max-w-2xl px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white">We Develop Experiences </h1>
                <p className="text-xl text-white mt-2"><TypeAnimation
                    sequence={[
                        'Web Development',
                        1000,
                        'UI/UX Design',
                        1000,
                        'Graphics Design',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ color: '#fff', display: 'inline-block', fontWeight: 'bold' }}
                    repeat={Infinity}
                    /></p>
                <button className="mt-6 px-6 py-3 text-lg font-medium bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                    Read More
                </button>
                </div>
            </section>
            
            <TeamSection />
            </>
        );
      };
      
  return (
    <div><HeroSection /></div>
  )
}

export default Home