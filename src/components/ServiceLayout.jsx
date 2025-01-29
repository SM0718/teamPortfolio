import React from 'react';
import { ArrowLeft, CheckCircle2, Code, Palette, Globe, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Shared Layout Component
const ServiceLayout = ({ title, description, icon, color, children }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* <div className={`absolute inset-0 bg-gradient-to-r ${color}/10`}></div> */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">
          <button 
            onClick={() => navigate('/services')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className='cursor-pointer'>Back to Services</span>
          </button>

          <div className="flex items-center space-x-6 mb-8">
            <div className={`p-4 rounded-xl bg-gradient-to-r ${color} w-fit`}>
              {icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        {children}
      </div>
    </div>
  );
};

// Shared ServiceCard Component
const ServiceCard = ({ service, color }) => (
  <div className="relative group">
    <div className={`absolute mt-12 -inset-0.5 bg-gradient-to-r ${color} rounded-xl blur opacity-20 group-hover:opacity-75 transition duration-300`}></div>
    <div className="relative mt-12 p-8 bg-gray-800/90 rounded-xl h-full">
      <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
      <p className="text-gray-300 mb-8 text-lg">{service.description}</p>
      <ul className="space-y-4 ">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-1" />
            <span className="text-gray-300 text-lg">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Web Development Page
export const WebDevelopmentPage = () => {
  const services = [
    {
      title: "Full-stack Development",
      description: "End-to-end web applications built with modern technologies like React, Node.js, and Python.",
      features: [
        "Custom web application development",
        "Database design and optimization",
        "RESTful API development",
        "Cloud infrastructure setup and management",
        "Performance optimization"
      ]
    },
    {
      title: "E-commerce Solutions",
      description: "Scalable online stores that drive sales and provide excellent user experience.",
      features: [
        "Custom e-commerce platform development",
        "Payment gateway integration",
        "Inventory management systems",
        "Order processing automation",
        "Analytics and reporting dashboards"
      ]
    },
    {
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging web applications that work offline.",
      features: [
        "Offline functionality",
        "Push notifications",
        "App-like experience",
        "Cross-platform compatibility",
        "Improved performance and loading times"
      ]
    }
  ];

  return (
    <ServiceLayout 
      title="Web Development"
      description="We build robust, scalable, and secure web applications using cutting-edge technologies and best practices."
      icon={<Code className="w-8 h-8" />}
      color="from-blue-400 to-cyan-400"
    >
      <div className="grid lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            color="from-blue-400 to-cyan-400" 
          />
        ))}
      </div>
    </ServiceLayout>
  );
};

// UI/UX Design Page
export const UIUXDesignPage = () => {
  const services = [
    {
      title: "User Interface Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      features: [
        "Custom interface design",
        "Responsive layouts",
        "Interactive prototypes",
        "Visual design systems",
        "Micro-interactions and animations"
      ]
    },
    {
      title: "User Experience Design",
      description: "Research-driven design that puts users first and drives engagement.",
      features: [
        "User research and analysis",
        "Information architecture",
        "User flow optimization",
        "Usability testing",
        "Interaction design"
      ]
    },
    {
      title: "Design Systems",
      description: "Comprehensive design systems that ensure consistency and scalability.",
      features: [
        "Component libraries",
        "Style guides",
        "Design tokens",
        "Documentation",
        "Design-to-code collaboration"
      ]
    }
  ];

  return (
    <ServiceLayout 
      title="UI/UX Design"
      description="We create beautiful, intuitive, and user-centered designs that drive engagement and deliver results."
      icon={<Palette className="w-8 h-8" />}
      color="from-purple-400 to-pink-400"
    >
      <div className="grid lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            color="from-purple-400 to-pink-400" 
          />
        ))}
      </div>
    </ServiceLayout>
  );
};

// Graphics Design Page
export const GraphicsDesignPage = () => {
  const services = [
    {
      title: "Brand Identity Design",
      description: "Comprehensive brand identity systems that make you stand out.",
      features: [
        "Logo design",
        "Brand guidelines",
        "Color palettes",
        "Typography selection",
        "Brand collateral design"
      ]
    },
    {
      title: "Marketing Materials",
      description: "Eye-catching marketing materials that drive engagement.",
      features: [
        "Social media graphics",
        "Digital advertisements",
        "Email templates",
        "Presentation design",
        "Infographics"
      ]
    },
    {
      title: "Print Design",
      description: "Professional print materials that leave a lasting impression.",
      features: [
        "Business cards",
        "Brochures and flyers",
        "Packaging design",
        "Posters and banners",
        "Magazine and book layouts"
      ]
    }
  ];

  return (
    <ServiceLayout 
      title="Graphics Design"
      description="We create stunning visuals that tell your brand story and capture your audience's attention."
      icon={<PenTool className="w-8 h-8" />}
      color="from-orange-400 to-red-400"
    >
      <div className="grid lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            color="from-orange-400 to-red-400" 
          />
        ))}
      </div>
    </ServiceLayout>
  );
};

// Digital Marketing Page
export const DigitalMarketingPage = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Data-driven SEO strategies that improve your search rankings.",
      features: [
        "Keyword research and analysis",
        "On-page optimization",
        "Technical SEO",
        "Content strategy",
        "Link building"
      ]
    },
    {
      title: "Social Media Marketing",
      description: "Engaging social media campaigns that build community.",
      features: [
        "Social media strategy",
        "Content creation",
        "Community management",
        "Paid social campaigns",
        "Analytics and reporting"
      ]
    },
    {
      title: "Content Marketing",
      description: "Strategic content that drives traffic and conversions.",
      features: [
        "Content strategy",
        "Blog writing",
        "Email marketing",
        "Lead magnet creation",
        "Content performance analysis"
      ]
    }
  ];

  return (
    <ServiceLayout 
      title="Digital Marketing"
      description="We help you grow your online presence and reach your target audience through strategic digital marketing."
      icon={<Globe className="w-8 h-8" />}
      color="from-green-400 to-emerald-400"
    >
      <div className="grid lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            color="from-green-400 to-emerald-400" 
          />
        ))}
      </div>
    </ServiceLayout>
  );
};

// export { ServiceLayout, WebDevelopmentPage, UIUXDesignPage, GraphicsDesignPage, DigitalMarketingPage };