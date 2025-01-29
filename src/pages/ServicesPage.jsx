import React from 'react';
import { 
  Code, 
  Palette, 
  Globe, 
  Zap,
  Users,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Smartphone,
  ShoppingCart,
  Search,
  PenTool
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';


const ServicesPage = () => {

    const navigate = useNavigate()

    const mainServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies",
      features: [
        "Full-stack Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Development"
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered interfaces that are beautiful, intuitive, and loved by users.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems"
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: "Graphics Design",
        description: "Eye-catching visuals that tell your brand story.",
        features: [
          "Brand Identity Design",
          "Social Media Graphics",
          "Marketing Materials",
          "Print Design"
        ],
        color: "from-orange-400 to-red-400"
      },
    // {
    //   icon: <Globe className="w-8 h-8" />,
    //   title: "Digital Marketing",
    //   description: "Strategic marketing to grow your online presence",
    //   features: [
    //     "SEO Optimization",
    //     "Social Media Marketing",
    //     "Content Strategy",
    //     "Analytics & Reporting"
    //   ],
    //   color: "from-green-400 to-emerald-400"
    // }
  ];

  const additionalFeatures = [
    { icon: <Monitor />, text: "Responsive Design" },
    { icon: <Smartphone />, text: "Mobile-First Approach" },
    { icon: <ShoppingCart />, text: "E-commerce Integration" },
    { icon: <Search />, text: "SEO Optimization" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-12 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your digital presence with our comprehensive suite of services. 
            We combine creativity, technology, and strategy to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300`}></div>
              <div className="relative p-8 bg-gray-900 rounded-2xl">
                <div className="flex flex-col h-full">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} w-fit`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mt-6 mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button > */}
                    <NavLink to={`/portfolio/${index}`} className="mt-auto px-6 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 font-medium flex items-center justify-center space-x-2 group/btn hover:from-cyan-300 hover:to-purple-300 transition-all">
                        <span>See portfolio</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </NavLink>
                  {/* </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-300">
            We deliver excellence through our comprehensive approach
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div key={index} 
                 className="relative group p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-400/10 group-hover:from-cyan-400/20 group-hover:to-purple-400/20 transition-all">
                  <div className="text-cyan-400 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <span className="text-lg font-medium text-gray-100">
                  {feature.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-sm p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our expert services and dedicated team.
            </p>
            <button className="px-8 py-4 rounded-xl cursor-pointer bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 font-medium hover:from-cyan-300 hover:to-purple-300 transition-all flex items-center space-x-2 mx-auto">
              <span onClick={() => navigate('/contact')}>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;