import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useParams } from 'react-router-dom';

const PortfolioPage = () => {
 
    const { position } = useParams();
  const positionIndex = parseInt(position, 10); // Convert string to number

  const roles = [
    "Full Stack Web Developer",
    "UI/UX Designer",
    "Graphics Designer"
  ];

  const names = [
    "Sagnik",
    "Sara",
    "Apu"
  ];

  const member = roles[positionIndex] || "";

  const getPortfolioItems = () => {
    switch (member) {
      case 'Full Stack Web Developer':
        return [
          {
            name: "E-Commerce Platform",
            description: "Custom Shopify store with advanced features",
            image: "/api/placeholder/400/300",
            link: "https://project1.com"
          },
          {
            name: "Social Media Dashboard",
            description: "MERN stack application with real-time updates",
            image: "/api/placeholder/400/300",
            link: "https://project2.com"
          },
          {
            name: "Task Management System",
            description: "React & Node.js based project management tool",
            image: "/api/placeholder/400/300",
            link: "https://project3.com"
          },
          {
            name: "Restaurant Ordering System",
            description: "Full-stack application with payment integration",
            image: "/api/placeholder/400/300",
            link: "https://project4.com"
          }
        ];
      case 'UI/UX Designer':
        return [
          {
            name: "Finance App Design",
            description: "Mobile banking application UI/UX",
            image: "/api/placeholder/400/300",
            link: "https://project1.com"
          },
          {
            name: "E-learning Platform",
            description: "Comprehensive website design for online education",
            image: "/api/placeholder/400/300",
            link: "https://project2.com"
          },
          {
            name: "Health & Fitness App",
            description: "Mobile app design for workout tracking",
            image: "/api/placeholder/400/300",
            link: "https://project3.com"
          },
          {
            name: "Travel Website Redesign",
            description: "Modern UI refresh for travel platform",
            image: "/api/placeholder/400/300",
            link: "https://project4.com"
          }
        ];
      case 'Graphics Designer':
        return [
          {
            name: "Tech Startup Branding",
            description: "Complete brand identity package",
            image: "/api/placeholder/400/300",
            link: "https://project1.com"
          },
          {
            name: "Restaurant Menu Design",
            description: "Print and digital menu designs",
            image: "/api/placeholder/400/300",
            link: "https://project2.com"
          },
          {
            name: "Event Poster Series",
            description: "Marketing materials for music festival",
            image: "/api/placeholder/400/300",
            link: "https://project3.com"
          },
          {
            name: "Corporate Identity Package",
            description: "Logo and stationery design",
            image: "/api/placeholder/400/300",
            link: "https://project4.com"
          }
        ];
      default:
        return [];
    }
  };

  const portfolioItems = getPortfolioItems();

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur opacity-25"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {names[position]}'s Portfolio
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                {member.position}
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-25 transition-all duration-300 group-hover:opacity-50"></div>
              <div className="relative rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 overflow-hidden transition-all duration-300 hover:border-gray-600">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;