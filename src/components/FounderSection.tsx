
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const FounderSection = () => {
  const leaders = [
    {
      name: 'Ahmed Farooq',
      title: 'Founder & Chairman',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      description: 'Visionary leader with 15+ years in international trade and distribution.',
      socialLinks: [
        { icon: Linkedin, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Mail, href: '#' }
      ]
    },
    {
      name: 'Fatima Khan',
      title: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      description: 'Strategic operations expert driving growth and excellence in every aspect.',
      socialLinks: [
        { icon: Linkedin, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Mail, href: '#' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Meet Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up">
            The visionary minds behind A_F Distribution's success story
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`floating-card text-center group ${
                index === 0 ? 'lg:transform lg:translate-y-8' : ''
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all duration-300"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
              <p className="text-purple-400 font-semibold mb-4">{leader.title}</p>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md mx-auto">
                {leader.description}
              </p>
              
              <div className="flex justify-center space-x-4">
                {leader.socialLinks.map((social, socialIndex) => (
                  <a
                    key={socialIndex}
                    href={social.href}
                    className="glass hover-glow rounded-full p-3 text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default FounderSection;
