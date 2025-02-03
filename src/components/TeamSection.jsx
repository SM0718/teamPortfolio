import React from 'react';
import { Github, Linkedin, Dribbble, ExternalLink } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TeamCard = ({ imgSrc, name, position, github, linkedin, behance, experience }) => {
  const isDesigner = position.toLowerCase().includes('designer');

  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur opacity-25 transition-all duration-300 group-hover:opacity-50"></div>
      <div className="relative w-full rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 transition-all duration-300 hover:border-gray-600">
        {/* Image Container */}
        <div className="relative mb-4 overflow-hidden rounded-xl pt-[100%]">
          <img 
            className="absolute inset-0 w-full h-full grayscale object-cover transition-transform duration-300 group-hover:scale-105" 
            src={imgSrc} 
            alt={name}
          />
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          {/* Basic Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {name}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-400">{position}</p>
          </div>

          {/* Experience Section */}
          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Experience</h4>
            <ul className="space-y-2">
              {experience.map((exp, index) => (
                <li key={index} className="text-sm text-gray-400">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-1.5 mr-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-gray-300">{exp.role}</p>
                      <p className="text-xs text-gray-500">{exp.company} • {exp.duration}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          {/* <div className="flex items-center space-x-4 pt-2 border-t border-gray-700">
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
          </div> */}
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
      // github: 'https://github.com/SM0718',
      // linkedin: 'https://www.linkedin.com/in/sagnik-majumder-bbbb96200/',
      experience: [
        {
          role: 'Senior Full Stack Developer',
          company: 'Bonntonn',
          duration: '2022 - 2024'
        },
        {
          role: 'Full Stack Developer',
          company: 'Digital Innovators',
          duration: '2019 - 2022'
        }
      ]
    },
    {
      imgSrc: './sara.webp',
      name: 'Sara Sharma',
      position: 'UI/UX Designer',
      // behance: 'https://www.behance.net/sarasharma6',
      // linkedin: 'https://www.linkedin.com/in/sara-sharma-8b4436326/',
      experience: [
        {
          role: 'Senior UI/UX Designer',
          company: 'Codiva Web Solutions',
          duration: '2022 - 2025'
        },
        {
          role: 'UI Designer',
          company: 'Zivaka',
          duration: '2021 - 2022'
        }
      ]
    },
    {
      imgSrc: './apu.webp',
      name: 'Apu Sheikh',
      position: 'Graphics Designer',
      // behance: 'https://behance.net/apu',
      // linkedin: 'https://linkedin.com/in/apu',
      experience: [
        {
          role: 'Senior Graphic Designer',
          company: 'Grey & White',
          duration: '2020 - 2024'
        },
        {
          role: 'Graphic Designer',
          company: 'Art & Co',
          duration: '2018 - 2020'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative">
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
        
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              {...member}
            />
          ))}
        </div>

        {/* Unified Portfolio Button */}
        <div className="text-center">
          <NavLink
            to="/portfolios"
            className="inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 px-8 py-3 text-lg font-medium text-gray-900 transition-all duration-300 hover:from-cyan-300 hover:to-purple-300"
          >
            <span>View Our Work</span>
            <ExternalLink className="w-5 h-5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;