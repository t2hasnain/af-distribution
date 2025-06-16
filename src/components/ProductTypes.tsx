
import React from 'react';
import { Baby, Sparkles, Droplets, Shield, Heart, Package } from 'lucide-react';

const ProductTypes = () => {
  const products = [
    {
      icon: Baby,
      title: 'Baby Care',
      description: 'Premium pampers, diapers, and baby care essentials from trusted international brands.',
      image: 'https://images.unsplash.com/photo-1544362691-0dc9c2e7e80b?w=400&h=300&fit=crop'
    },
    {
      icon: Sparkles,
      title: 'Perfume Sprays',
      description: 'Luxury fragrances and perfume sprays for personal and commercial use.',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop'
    },
    {
      icon: Droplets,
      title: 'Soaps & Cleansers',
      description: 'High-quality soaps (saboon) and cleansing products for all skin types.',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop'
    },
    {
      icon: Shield,
      title: 'Underpads',
      description: 'Medical-grade underpads and protective products for healthcare facilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      icon: Heart,
      title: 'Wet Wipes',
      description: 'Antibacterial and gentle wet wipes for personal hygiene and cleaning.',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop'
    },
    {
      icon: Package,
      title: 'Custom Orders',
      description: 'Specialized import services for unique product requirements and bulk orders.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Our <span className="text-gradient">Product Range</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up">
            Comprehensive selection of premium imported products for Pakistani markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="floating-card group hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="glass rounded-full p-3">
                    <product.icon className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                {product.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ProductTypes;
