'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const backgroundImages = [
    '/hero.jpg',
  ];

  const rotatingTexts = [
    'Greater Purpose in Your Life Direction',
    'Deeper Spiritual Connection',
    'Healing from Past Trauma',
    'Stronger Relationships',
    'Inner Peace and Joy',
    'Clarity in Life Decisions'
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

  //auto text changing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % rotatingTexts.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

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

            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
            
          </div>
        ))}
        
      </div>

      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="mt-2 text-lg sm:text-xl font-light text-white">
                  Christian Counseling Services in Richmond & Central Virginia
                </span>
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white m-5 ">
            Professional Counseling for Christian Healing and Growth
          </h1>

          {/* Subheading */}
          <div className="flex justify-center items-center text-center mb-2">
            <div className="max-w-3xl">
              <p className="text-xl sm:text-2xl text-white font-serif mb-1">
                Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
              </p>
              <span className="mt-2 text-lg sm:text-xl font-bold text-white">
                  I want to work with you for…
              </span>
            </div>
          </div>

          {/* Animated Rotating Text */}
          <div className="mb-2 h-16 flex items-center justify-center">
            <div className="relative w-full max-w-4xl h-full overflow-hidden">
              {rotatingTexts.map((text, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out transform ${
                    index === currentTextIndex 
                      ? 'translate-y-0 opacity-100' 
                      : index < currentTextIndex 
                        ? '-translate-y-full opacity-0' 
                        : 'translate-y-full opacity-0'
                  }`}
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-300 text-center px-4">
                    ✨ {text}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="flex items-center space-x-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-white font-medium">Top Rated</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
            <div className="text-white font-medium">40+ Years Experience</div>
            <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
            <Link href="/testimonials" className="text-white font-medium hover:text-yellow-400 transition-colors underline">
              Testimonials
            </Link>
            <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
            <Link href="/media" className="text-white font-medium hover:text-yellow-400 transition-colors underline">
              Media Mentions
            </Link>
          </div>

          <Link 
            href="/contact" 
            className="inline-flex items-center space-x-3 bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg"
          >
            <Star className="w-5 h-5 text-blue-600" />
            <span>Start Healing Today</span>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;