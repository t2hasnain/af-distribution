import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-slide-up">
              A_F Distribution is committed to protecting your privacy and personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                At A_F Distribution ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300 mt-4">
                We encourage you to read this Privacy Policy carefully to understand our practices regarding your personal data and how we will treat it. By accessing or using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-300">
                We may collect personally identifiable information, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Business information</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Non-Personal Information</h3>
              <p className="text-gray-300">
                We may collect non-personal information about you whenever you interact with our website, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>Browser name</li>
                <li>Type of device</li>
                <li>Technical information about your connection to our site</li>
                <li>Pages you visit</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300">
                We may use the information we collect from you for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>To process and fulfill your orders</li>
                <li>To provide customer support</li>
                <li>To send you promotional emails about new products, special offers, or other information</li>
                <li>To improve our website and customer service</li>
                <li>To contact you regarding your order or inquiry</li>
                <li>To comply with applicable laws and regulations</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer (e.g., merger or acquisition)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to our processing of your information</li>
                <li>Withdraw consent previously provided</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-300 mt-2">
                Email: info@afdistribution.com<br />
                Phone: +92 21 1234 5678<br />
                Address: Main Market Street, Karachi, Sindh, Pakistan
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Last updated: June 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy; 