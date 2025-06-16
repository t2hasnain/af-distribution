import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                Welcome to A_F Distribution. These Terms of Service ("Terms") govern your use of our website and services provided by A_F Distribution ("we", "us", or "our"). By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
              <p className="text-gray-300">
                Our services are designed to facilitate the import and distribution of premium products in Pakistan. You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Account Registration</h3>
              <p className="text-gray-300">
                Some portions of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Prohibited Activities</h3>
              <p className="text-gray-300">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Interfere with the operation of our services</li>
                <li>Attempt to gain unauthorized access to any portion of our services</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Products and Services</h2>
              <p className="text-gray-300">
                All descriptions of products and pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Pricing and Payment</h3>
              <p className="text-gray-300">
                All prices are in Pakistani Rupees (PKR) unless otherwise specified. We reserve the right to correct any pricing errors. Payment terms are as specified at the time of ordering.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Orders and Delivery</h3>
              <p className="text-gray-300">
                We aim to process orders promptly, but delivery times may vary based on location and product availability. We do not guarantee specific delivery dates and are not responsible for delays outside our control.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300">
                All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of A_F Distribution or our content suppliers and is protected by Pakistani and international copyright laws.
              </p>
              <p className="text-gray-300 mt-4">
                You may not reproduce, distribute, modify, display, or use any of our content without our prior written consent.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-300">
                To the fullest extent permitted by law, A_F Distribution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>Your use of or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Indemnification</h2>
              <p className="text-gray-300">
                You agree to indemnify, defend, and hold harmless A_F Distribution and our officers, directors, employees, agents, and representatives from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at:
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

export default Terms; 