'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Star } from 'lucide-react';

const HeroSectionUI = ({ 
  backgroundImage = '/hero.jpg',
  subtitle = 'Christian Counseling Services in Richmond & Central Virginia',
  mainHeading = 'Professional Counseling for Christian Healing and Growth',
  description = 'Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.',
  stats = {
    experience: '40+ Years Experience',
    rating: 'Top Rated',
    showTestimonials: true,
    showMedia: true
  },
  buttonText = 'Start Healing Today',
  buttonLink = '/consultation'
}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="mt-2 text-lg sm:text-xl font-light text-white">
            {subtitle}
          </span>
          
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white m-5">
            {mainHeading}
          </h1>

          {/* Subheading */}
          <div className="flex justify-center items-center text-center mb-2">
            <div className="max-w-3xl">
              <p className="text-xl sm:text-2xl text-white font-serif mb-1">
                {description}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="flex items-center space-x-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-white font-medium">{stats.rating}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
            <div className="text-white font-medium">{stats.experience}</div>
            
            {stats.showTestimonials && (
              <>
                <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
                <Link href="/testimonials" className="text-white font-medium hover:text-yellow-400 transition-colors underline">
                  Testimonials
                </Link>
              </>
            )}
            
            {stats.showMedia && (
              <>
                <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
                <Link href="/media" className="text-white font-medium hover:text-yellow-400 transition-colors underline">
                  Media Mentions
                </Link>
              </>
            )}
          </div>

          <Link 
            href={buttonLink} 
            className="inline-flex items-center space-x-3 bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg"
          >
            <Star className="w-5 h-5 text-blue-600" />
            <span>{buttonText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionUI;