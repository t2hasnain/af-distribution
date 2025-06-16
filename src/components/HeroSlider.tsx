import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Award } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop',
      title: 'Premium Import & Export',
      subtitle: 'Leading distribution company in Karachi, connecting global markets',
      highlight: 'Since 2015'
    },
    {
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1920&h=1080&fit=crop',
      title: 'Quality Personal Care Products',
      subtitle: 'Pampers, soaps, wipes, and premium personal care essentials',
      highlight: '500+ Products'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
      title: 'Trusted by Retailers',
      subtitle: 'Reliable distribution network across Pakistan',
      highlight: '1000+ Clients'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 py-20 md:py-0">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl md:rounded-3xl p-6 md:p-12 backdrop-blur-xl">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="flex items-center space-x-2 bg-gradient-primary rounded-full px-3 py-1 md:px-4 md:py-2">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-white" />
                <span className="text-white text-xs md:text-sm font-medium">{slides[currentSlide].highlight}</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-up">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 animate-fade-in">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up">
              <button className="bg-gradient-primary hover:scale-105 text-white w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
                View Our Products
              </button>
              <button className="glass hover-glow text-white w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mr-2" />
                  <span className="text-2xl md:text-3xl font-bold text-white">1000+</span>
                </div>
                <p className="text-sm md:text-base text-gray-400">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mr-2" />
                  <span className="text-2xl md:text-3xl font-bold text-white">500+</span>
                </div>
                <p className="text-sm md:text-base text-gray-400">Products</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mr-2" />
                  <span className="text-2xl md:text-3xl font-bold text-white">8+</span>
                </div>
                <p className="text-sm md:text-base text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 glass hover-glow rounded-full p-2 md:p-3 text-white z-20"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 glass hover-glow rounded-full p-2 md:p-3 text-white z-20"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
