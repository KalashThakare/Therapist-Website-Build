'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#fff0ec] border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>559.749.4803</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#DDF5F0] border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm text-gray-700">
          <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full relative">
                    <div className="absolute inset-1 bg-green-600 rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  Central Valley Hypnotherapy And Wellness Center
                </span>
              </Link>
            </div>
        </div>
      </div> */}

      {/* navbar */}
      <nav className="bg-[#e5ecf1] shadow-sm border-b">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
    
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/hypnotherapies" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                Testimonials
              </Link>
              <Link 
                href="/testimonials" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                Rates & FAQs
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                Areas Served
              </Link>
              <Link 
                href="/rates-insurance" 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              
              <Link 
                href="/consultation" 
                className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <Link 
                  href="/hypnotherapies" 
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/blog" 
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link 
                  href="/testimonials" 
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rates & FAQs
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Areas Served
                </Link>
                <Link 
                  href="/rates-insurance" 
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/consultation" 
                  className="flex items-center space-x-2 mx-3 mt-3 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;