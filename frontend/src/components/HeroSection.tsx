'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '1.jpg',
    '2.jpg',
  ];

  //auto image changing

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
      </div>

      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-6 leading-tight lg:whitespace-nowrap">
            Discover Life-Changing Hypnotherapy in Visalia
          </h1>

          {/* Subheading */}
          <div className="flex justify-center items-center text-center mb-8">
            <div className="max-w-lg">
              <p className="text-xl sm:text-2xl text-white font-serif">
                Your mind holds the power to change - let's awaken it together.
                <span className="mt-2 text-lg sm:text-xl font-light">
                  Expert hypnotherapy sessions designed to help you overcome challenges and embrace a brighter future.
                </span>
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="flex items-center space-x-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-white font-medium">Top Rated</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
            <div className="text-white font-medium">5/5 Google</div>
            <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
            <div className="text-white font-medium">15+ Media Mentions</div>
          </div>

          <Link 
            href="/consultation" 
            className="inline-flex items-center space-x-3 bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule Free Consultation</span>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;