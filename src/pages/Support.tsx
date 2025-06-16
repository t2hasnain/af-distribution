
import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Clock, Search, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Support = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'How do I place an order for your products?',
      answer: 'You can place an order by contacting us through WhatsApp, phone, or email. We\'ll discuss your requirements and provide competitive pricing for bulk orders.'
    },
    {
      question: 'What products do you import and distribute?',
      answer: 'We specialize in baby care products (pampers, wipes), personal care items (soaps, perfumes), and medical supplies (underpads). All products are imported from trusted international suppliers.'
    },
    {
      question: 'Do you offer wholesale pricing?',
      answer: 'Yes! We offer competitive wholesale rates for bulk orders. The more you order, the better the pricing. Contact us for a customized quote based on your requirements.'
    },
    {
      question: 'How long does delivery take in Pakistan?',
      answer: 'Delivery times vary by location. Within Karachi: 1-2 days, other major cities: 3-5 days, remote areas: 5-7 days. We use reliable courier services for safe delivery.'
    },
    {
      question: 'Do you provide product samples?',
      answer: 'Yes, we can provide samples for bulk orders. This helps you verify product quality before placing large orders. Sample costs may apply depending on the product.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsAppClick = () => {
    const phoneNumber = '923356916802';
    const message = 'Hello! I need support regarding A_F Distribution products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'info@afdistribution.com';
    const subject = 'Support Request - A_F Distribution';
    const body = 'Hello,\n\nI need assistance with:\n\n';
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const handlePhoneClick = () => {
    window.open('tel:+923356916802');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              How Can We <span className="text-gradient">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Get the support you need for all your import/export requirements. 
              Our dedicated team is here to assist you with product inquiries, orders, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="floating-card text-center group">
              <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp Support</h3>
              <p className="text-gray-400 mb-6">
                Get instant help through WhatsApp chat
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-primary hover:scale-105 text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Chat on WhatsApp
              </button>
            </div>

            <div className="floating-card text-center group">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-gray-400 mb-6">
                Send us your questions and we'll respond within 24 hours
              </p>
              <button 
                onClick={handleEmailClick}
                className="bg-gradient-primary hover:scale-105 text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Send Email
              </button>
            </div>

            <div className="floating-card text-center group">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Phone Support</h3>
              <p className="text-gray-400 mb-6">
                Speak directly with our team
              </p>
              <button 
                onClick={handlePhoneClick}
                className="bg-gradient-primary hover:scale-105 text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Support Hours */}
          <div className="glass rounded-2xl p-8 text-center mb-20">
            <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Support Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">WhatsApp & Email</h4>
                <p className="text-gray-400">Mon-Sat: 9AM-9PM PKT</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Phone Support</h4>
                <p className="text-gray-400">Mon-Fri: 9AM-6PM PKT</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Emergency Orders</h4>
                <p className="text-gray-400">WhatsApp 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Find answers to common questions about A_F Distribution
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      selectedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {selectedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No FAQs found matching your search. Try a different term or contact us directly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Still Need Help?</h3>
              <p className="text-gray-400">Send us a message and we'll get back to you quickly</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                rows={6}
                placeholder="How can we help you?"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-primary hover:scale-105 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
