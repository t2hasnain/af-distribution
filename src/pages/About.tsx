
import React from 'react';
import { Target, Eye, Users, Award, Lightbulb, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge import/export solutions that drive your business forward.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Built on transparency and reliability, we earn your trust through consistent excellence in product quality.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success in the Pakistani market.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality is at the heart of everything we do, from product sourcing to delivery.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Faraz',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: '15+ years of experience in import/export business'
    },
    {
      name: 'Fatima Sheikh',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b950?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in supply chain management and logistics'
    },
    {
      name: 'Muhammad Hassan',
      role: 'Business Development Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Specialist in market expansion and client relations'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '923356916802';
    const message = 'Hello! I would like to get a quote for your products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              About <span className="text-gradient">A_F Distribution</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              We're a dedicated team of import/export professionals bringing quality products 
              from international markets to Pakistani consumers and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="floating-card">
              <Target className="w-12 h-12 text-purple-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To provide premium quality imported products including baby care essentials, 
                personal hygiene products, and healthcare supplies to the Pakistani market. 
                We believe in creating lasting partnerships and delivering exceptional value to every client.
              </p>
            </div>
            
            <div className="floating-card">
              <Eye className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be Pakistan's leading import/export company, setting new standards 
                for product quality and customer service while making premium international 
                products accessible to everyone across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="floating-card text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <value.icon className="w-12 h-12 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The dedicated professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="floating-card text-center group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-gray-400">Products Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust A_F Distribution 
              for their import/export needs across Pakistan.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-primary hover:scale-105 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 flex items-center space-x-2 mx-auto"
            >
              <span>Get Quote on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
