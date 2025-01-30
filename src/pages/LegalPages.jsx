import React, { useState } from 'react';
import { Shield, Book, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LegalPages = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const TabButton = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeTab === id
          ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900'
          : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <NavLink
          to="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-200 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </NavLink>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <TabButton id="privacy" icon={Shield} label="Privacy Policy" />
          <TabButton id="terms" icon={Book} label="Terms of Use" />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {activeTab === 'privacy' ? (
            <div className="space-y-8">
              <h1 className="text-3xl font-ulm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-300">
                  <h3 className="text-xl font-medium text-gray-200">1.1 Personal Information</h3>
                  <p>
                    We collect information that you provide directly to us, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information</li>
                    <li>Account credentials</li>
                    <li>Payment information</li>
                    <li>Communication preferences</li>
                    <li>Profile information</li>
                  </ul>

                  {/* <h3 className="text-xl font-medium text-gray-200">1.2 Automatically Collected Information</h3>
                  <p>
                    When you use our services, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Device information and identifiers</li>
                    <li>Usage data and interactions</li>
                    <li>Location information</li>
                    <li>Cookies and similar technologies</li>
                  </ul> */}
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use the collected information for various purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions</li>
                    {/* <li>Sending notifications and updates</li> */}
                    <li>Improving our services</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">3. Data Sharing and Disclosure</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers and partners</li>
                    <li>Legal authorities when required</li>
                    <li>Other users with your consent</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">4. Your Rights and Choices</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You have certain rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and update your information</li>
                    {/* <li>Delete your account</li> */}
                    <li>Opt-out of communications</li>
                    <li>Data portability</li>
                  </ul>
                </div>
              </section>
            </div>
          ) : (
            <div className="space-y-8">
              <h1 className="text-3xl font-ulm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Terms of Use
              </h1>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    By accessing or using our services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                  </p>
                </div>
              </section>

              {/* <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">2. User Accounts</h2>
                <div className="space-y-4 text-gray-300">
                  <h3 className="text-xl font-medium text-gray-200">2.1 Account Creation</h3>
                  <p>
                    To access certain features of our services, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                  </p>

                  <h3 className="text-xl font-medium text-gray-200">2.2 Account Security</h3>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </div>
              </section> */}

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">2. Intellectual Property</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    All content, features, and functionality available through our services are owned by us, our licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">3. Prohibited Activities</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use our services for any illegal purpose</li>
                    <li>Transmit harmful code or materials</li>
                    <li>Impersonate any person or entity</li>
                    <li>Interfere with the proper functioning of the services</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">4. Limitation of Liability</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Last Updated */}
        <div className="mt-12 text-sm text-gray-400">
          Last updated: January 30, 2025
        </div>
      </div>
    </div>
  );
};

export default LegalPages;