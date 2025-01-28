import React from 'react';
import { Github, Linkedin, Dribbble, ExternalLink, Briefcase } from 'lucide-react';

const TeamCard = ({ imgSrc, name, position, portfolioLink, github, linkedin, behance }) => {
  const isDesigner = position.toLowerCase().includes('designer');

  return (
    <div className="group relative w-72 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Image Container with overlay */}
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <img 
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          src={imgSrc} 
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="mt-1 text-sm font-medium text-gray-500">{position}</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          {/* Show GitHub for developers, Behance for designers */}
          {isDesigner ? (
            behance && (
              <a 
                href={behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <Dribbble size={20} />
              </a>
            )
          ) : (
            github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <Github size={20} />
              </a>
            )
          )}
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <Linkedin size={20} />
            </a>
          )}
          <a
            href={portfolioLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center space-x-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            <span>Portfolio</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};


const TeamSection = () => {
  const teamMembers = [
    {
      imgSrc: '/api/placeholder/400/320',
      name: 'Sagnik Majumder',
      position: 'Full Stack Web Developer',
      portfolioLink: 'https://portfolio1.com',
      github: 'https://github.com/SM0718',
      linkedin: 'https://www.linkedin.com/in/sagnik-majumder-bbbb96200/'
    },
    {
      imgSrc: '/api/placeholder/400/320',
      name: 'Sara Sharma',
      position: 'UI/UX Designer',
      portfolioLink: 'https://portfolio2.com',
      behance: 'https://www.behance.net/sarasharma6',
      linkedin: 'https://www.linkedin.com/in/sara-sharma-8b4436326/'
    },
    {
      imgSrc: '/api/placeholder/400/320',
      name: 'Apu Sheikh',
      position: 'Graphics Designer',
      portfolioLink: 'https://portfolio3.com',
      behance: 'https://behance.net/apu',
      linkedin: 'https://linkedin.com/in/apu'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Passionate professionals crafting amazing experiences
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            {...member}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;