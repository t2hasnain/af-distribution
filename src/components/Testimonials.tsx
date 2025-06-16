
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rashid Ahmed',
      role: 'Store Owner, Karachi',
      content: 'A_F Distribution has been our reliable partner for baby care products. Their quality and timely delivery keeps our customers happy.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Ayesha Khan',
      role: 'Pharmacy Chain Owner',
      content: 'Excellent service and genuine products. Their underpads and medical supplies are exactly what our healthcare clients need.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b950?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Muhammad Ali',
      role: 'Wholesale Distributor',
      content: 'Professional team, competitive prices, and consistent quality. A_F Distribution understands the Pakistani market perfectly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up">
            Trusted by retailers, pharmacies, and distributors across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`floating-card animate-float group hover:animate-none ${
                index === 1 ? 'lg:mt-8' : index === 2 ? 'lg:mt-16' : ''
              }`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-purple-500/30"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Testimonials;
