'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 120;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); 
  };

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#fff0ec] border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <PhoneCall className="w-4 h-4" />
            <span>(323) 555-0192</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
          </div>
        </div>
      </div>

      {/* navbar */}
      <nav className="bg-[#e5ecf1] shadow-sm border-b">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
    
            {/* for Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/services" 
                className="text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
              >
                Services
              </Link>
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                About
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                className="text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleSmoothScroll(e, 'faq')}
                className="text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                Rates & FAQs
              </a>
              <Link 
                href="/locations" 
                className="text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
              >
                Areas Served
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              
              <Link 
                href="/consultation" 
                className="flex items-center space-x-2 bg-white border border-gray-700 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
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

          {/*for Mobile */}
          <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            {/* Backdrop */}
            <div 
              className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
              }`}
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            <div className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              
              <div className="flex justify-end p-4 border-b">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="px-4 py-6 space-y-1">
                <Link 
                  href="/services" 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200 cursor-pointer"
                >
                  About
                </a>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200 cursor-pointer"
                >
                  Testimonials
                </a>
                <a 
                  href="#faq" 
                  onClick={(e) => handleSmoothScroll(e, 'faq')}
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200 cursor-pointer"
                >
                  Rates & FAQs
                </a>
                <Link 
                  href="/locations" 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Areas Served
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/consultation" 
                  className="flex items-center space-x-2 mx-0 mt-6 bg-green-600 hover:bg-green-700 rounded-lg px-4 py-3 text-white font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;