import React from "react";
import { Mail, Briefcase, MessageSquare, ArrowRight, Code, Zap } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Only allow numbers and limit to 10 digits
    const phoneNumber = value.replace(/\D/g, '').slice(0, 10);
    setFormData(prevState => ({
      ...prevState,
      phone: phoneNumber
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_number: formData.phone,
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_cpd8pwb',
        'template_4ef5feh',
        templateParams,
        'cQqnwiFkUYfVtrF_USENS'
      );

      alert('Thank You For Contacting Us! We will get back to you soon');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Error sending email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefitCards = [
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: "Custom Development",
      description: "From web apps to complex systems, we transform your ideas into powerful digital solutions."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Innovation & Tech",
      description: "Leverage cutting-edge technologies and modern frameworks for optimal performance."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      title: "Tech Consultation",
      description: "Get expert advice on architecture, tech stack, and digital transformation strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-20">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative">
                <h1 className="font-ulm text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Building the Future with Code
                </h1>
                <p className="mt-4 text-gray-300 text-lg">
                  Ready to bring your next big idea to life? Our team of tech experts is here to help you innovate and scale.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {benefitCards.map((card, index) => (
                <div key={index} 
                     className="group relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gray-900/50">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-100">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur opacity-25"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gray-800/50 border border-gray-700">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100 placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100 placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 py-3 rounded-l-lg border border-r-0 border-gray-700 bg-gray-900/50 text-gray-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      className="w-full px-4 py-3 rounded-r-lg bg-gray-900/50 border border-gray-700 text-gray-100 placeholder-gray-500
                               focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100 placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 py-3 px-6 rounded-lg font-medium 
                           hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center space-x-2 
                           disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
