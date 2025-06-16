import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '923356916802';
    const message = 'Hello! I would like to get a quote for A_F Distribution products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Support', href: '/support', icon: Headphones },
  ];

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
      scrolled ? 'glass rounded-2xl shadow-xl' : 'glass-dark rounded-2xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="hover-glow rounded-full p-1">
            <div className="w-14 h-14 md:w-16 md:h-16 overflow-hidden rounded-full">
              <img 
                src="/aflogo.png" 
                alt="A_F Distribution Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-white hover-glow rounded-lg px-3 md:px-4 py-2 transition-all duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </Link>
            ))}
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-primary hover:scale-105 text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover-glow rounded-lg p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-dark rounded-xl p-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-gray-300 hover:text-white hover-glow rounded-lg px-4 py-3 transition-all duration-300 w-full"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-primary text-white px-4 py-3 rounded-lg w-full mt-3 hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
