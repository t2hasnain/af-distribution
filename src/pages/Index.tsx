import React from 'react';
import Navigation from '../components/Navigation';
import HeroSlider from '../components/HeroSlider';
import FounderSection from '../components/FounderSection';
import ProductTypes from '../components/ProductTypes';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { ArrowRight, Package, Globe, Truck } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Package,
      title: 'Quality Products',
      description: 'Premium imported products including pampers, perfumes, soaps, and personal care items.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive import/export network connecting Karachi with international markets.'
    },
    {
      icon: Truck,
      title: 'Reliable Distribution',
      description: 'Efficient distribution channels ensuring timely delivery across Pakistan.'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '923356916802';
    const message = 'Hello! I would like to get a quote for A_F Distribution products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSlider />
      
      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
              Why Choose <span className="text-gradient">A_F Distribution</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up">
              Your trusted partner for premium import/export services in Karachi, 
              bringing quality products to Pakistani markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="floating-card group text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-12 h-12 md:w-16 md:h-16 text-purple-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
      </section>

      <FounderSection />
      <ProductTypes />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-10 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-2xl md:rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust A_F Distribution 
              for their import/export needs across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-primary hover:scale-105 text-white w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
              >
                <span>Get Quote on WhatsApp</span>
              </button>
              <button className="glass hover-glow text-white w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold">
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
