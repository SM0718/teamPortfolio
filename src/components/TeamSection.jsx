import React from 'react';
import { Github, Linkedin, Dribbble, ExternalLink } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TeamCard = ({ imgSrc, name, position, portfolioLink, github, linkedin, behance, index }) => {
  const isDesigner = position.toLowerCase().includes('designer');

  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur opacity-25 transition-all duration-300 group-hover:opacity-50"></div>
      <div className="relative w-72 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 transition-all duration-300 hover:border-gray-600">
        {/* Image Container with overlay */}
        <div className="relative mb-6 overflow-hidden rounded-xl">
          <img 
            className="h-64 w-full grayscale object-cover transition-transform duration-300 group-hover:scale-105" 
            src={imgSrc} 
            alt={name}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {name}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-400">{position}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {isDesigner ? (
              behance && (
                <a 
                  href={behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                >
                  <Dribbble className="w-5 h-5" />
                </a>
              )
            ) : (
              github && (
                <a 
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                >
                  <Github className="w-5 h-5" />
                </a>
              )
            )}
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {/* <a
              href={portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
            > */}
              <NavLink to={`portfolio/${index}`}
              className={"ml-auto inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:from-cyan-300 hover:to-purple-300"}
              
              >
                <span>Portfolio</span>
                <ExternalLink className="w-4 h-4" />
              </NavLink>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      imgSrc: './sagnik.webp',
      name: 'Sagnik Majumder',
      position: 'Full Stack Web Developer',
      portfolioLink: 'https://portfolio1.com',
      github: 'https://github.com/SM0718',
      linkedin: 'https://www.linkedin.com/in/sagnik-majumder-bbbb96200/'
    },
    {
      imgSrc: './sara.webp',
      name: 'Sara Sharma',
      position: 'UI/UX Designer',
      portfolioLink: 'https://portfolio2.com',
      behance: 'https://www.behance.net/sarasharma6',
      linkedin: 'https://www.linkedin.com/in/sara-sharma-8b4436326/'
    },
    {
      imgSrc: './apu.webp',
      name: 'Apu Sheikh',
      position: 'Graphics Designer',
      portfolioLink: 'https://portfolio3.com',
      behance: 'https://behance.net/apu',
      linkedin: 'https://linkedin.com/in/apu'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="relative">
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-25"></div> */}
            <div className="relative">
              <h2 className="font-ulm text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Passionate professionals crafting amazing experiences
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;