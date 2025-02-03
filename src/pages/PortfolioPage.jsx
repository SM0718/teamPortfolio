import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioPage = () => {
  const portfolioItems = [
    // Web Development Projects
    {
      name: "Gaari Dekho",
      description: "Custom Shopify store with advanced features",
      image: "/./sagnik/sagnik1.webp",
      link: "https://gaaridekho.netlify.app/",
      category: "Web Development"
    },
    {
      name: "Earth Store",
      description: "MERN stack application with real-time updates",
      image: "/./sagnik/sagnik2.webp",
      link: "https://earthstore.netlify.app/",
      category: "Web Development"
    },
    {
      name: "Anon Store",
      description: "React & Node.js based project management tool",
      image: "/./sagnik/sagnik3.webp",
      link: "https://anondemo.netlify.app/",
      category: "Web Development"
    },
    {
      name: "Aria Business Project",
      description: "Full-stack application with payment integration",
      image: "/./sagnik/sagnik4.webp",
      link: "https://aria-project.netlify.app/",
      category: "Web Development"
    },
    // UI/UX Design Projects
    {
      name: "Dhaba - Ciity",
      description: "Mobile banking application UI/UX",
      image: "/./sara/sara1.webp",
      link: "https://www.behance.net/gallery/203127543/Dhaba-Ciity",
      category: "UI/UX Design"
    },
    {
      name: "Viva Decor",
      description: "Comprehensive website design for online education",
      image: "/./sara/sara2.webp",
      link: "https://www.behance.net/gallery/202916751/Viva-Decor",
      category: "UI/UX Design"
    },
    {
      name: "VeggieEats",
      description: "Mobile app design for workout tracking",
      image: "/./sara/sara3.webp",
      link: "https://www.behance.net/gallery/185183811/VeggieEats",
      category: "UI/UX Design"
    },
    {
      name: "PawresQ - Pet Adoption App",
      description: "Modern UI refresh for travel platform",
      image: "/./sara/sara4.webp",
      link: "https://www.behance.net/gallery/183141803/PawresQ-Pet-Adoption-App",
      category: "UI/UX Design"
    },
    // Graphic Design Projects
    {
      name: "Flyer/Poster Design For CupCakes",
      description: "Complete brand identity package",
      image: "/./apu/apu1.webp",
      link: "https://www.behance.net/gallery/195612903/FlyerPoster-Design-For-CupCakes",
      category: "Graphic Design"
    },
    {
      name: "Harmony Blends | Brand Design",
      description: "Print and digital menu designs",
      image: "/./apu/apu2.webp",
      link: "https://www.behance.net/gallery/192674355/HARMONY-BLENDS-BRAND-DESIGN",
      category: "Graphic Design"
    },
    {
      name: "Urban Boutique's Social Media Posts",
      description: "Marketing materials for music festival",
      image: "/./apu/apu3.webp",
      link: "https://www.behance.net/gallery/190983079/URBAN-BOUTIQUES-SOCIAL-MEDIA-POSTS-CREATED",
      category: "Graphic Design"
    },
    {
      name: "Step Into Your Style",
      description: "Logo and stationery design",
      image: "/./apu/apu4.webp",
      link: "https://www.behance.net/gallery/189724341/SHOE-SOCIAL-MEDIA-AD-DESIGN",
      category: "Graphic Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative">
            <div className="relative">
              <h2 className="font-ulm text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Portfolio
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Showcasing our expertise in Web Development, UI/UX Design, and Graphic Design
              </p>
            </div>
          </div>
        </div>

        {/* Category Sections */}
        {["Web Development", "UI/UX Design", "Graphic Design"].map((category) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-100 mb-8">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems
                .filter(item => item.category === category)
                .map((item, index) => (
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
                            <h3 className="font-ulm text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                              {item.name}
                            </h3>
                            {/* <p className="mt-1 text-sm text-gray-400">{item.description}</p> */}
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;