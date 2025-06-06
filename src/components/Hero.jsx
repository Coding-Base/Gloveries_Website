// src/components/Hero.js
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const heroImages = [
    "https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/hero-img-3.jpg",
    "https://themes.potenzaglobalsolutions.com/nexbiz/wp-content/uploads/2025/05/hero-img-2.jpg"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center center'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl text-center md:text-left" data-aos="fade-right">
          <span className="bg-orange-500 bg-opacity-90 text-xs font-semibold px-3 py-1 rounded-none mb-4 inline-block">
            IT Solutions Provider
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-bold mb-6 leading-tight text-white font-urbanist">
            Advanced IT Solutions For Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-lg mx-auto md:mx-0 opacity-90">
            We provide innovative technology solutions that drive business growth and enhance operational efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-black text-white px-8 py-4 rounded-none font-medium transition shadow-xl transform hover:scale-105 duration-300">
              Our Services
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-none font-medium transition shadow-xl transform hover:scale-105 duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Stats - Hidden on mobile */}
      <div className="relative z-10 bg-white shadow-2xl max-w-5xl mx-auto -mb-16 hidden md:grid" data-aos="fade-up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-4">
          {[
            { value: '250+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Expert Team Members' },
            { value: '15+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;