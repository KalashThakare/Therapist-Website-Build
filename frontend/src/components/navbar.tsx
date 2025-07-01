'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, Sparkles, PhoneCall, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll after navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100); // Small delay to ensure page is loaded
    }
  }, [pathname]);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 120;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    
    // Check if we're on the home page
    if (pathname === '/') {
      // We're on home page, just scroll
      scrollToSection(targetId);
    } else {
      // We're on a different page, navigate to home with hash
      router.push(`/#${targetId}`);
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
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium">
                  <Link href={"/services"}>Services</Link>
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-1 w-150 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="grid grid-cols-2 p-4 space-y-4">
                    <Link 
                      href="/services/individual-counceling"
                      className="block group"
                    >
                      <div className="p-3 rounded-lg hover:bg-[#bddade] transition-colors duration-200">
                        <h3 className="font-semibold text-gray-800  transition-colors">
                          Individual Counseling in Richmond, VA
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Discover Peace, Purpose, and God's Truth in Richmond, VA.
                        </p>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/services/couple-counceling"
                      className="block group"
                    >
                      <div className="p-3 rounded-lg hover:bg-[#bddade] transition-colors duration-200">
                        <h3 className="font-semibold text-gray-800 transition-colors">
                          Couples Counseling in Richmond, VA
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Heal Your Relationship, Grow Closer to God Together in Richmond.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
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
              <div 
                className="relative"
                onMouseEnter={() => setIsAreasOpen(true)}
                onMouseLeave={() => setIsAreasOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium">
                  <Link href={"/locations"}>Areas Served</Link>
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-150 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                  isAreasOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Column 1 */}
                      <div className="space-y-3">
                        <Link href="/services" className="block group">
                          <div className="hover:bg-[#bddade] p-2 rounded transition-colors duration-200">
                            <h4 className="font-semibold text-gray-800 text-md">Richmond, VA</h4>
                            <p className="text-sm text-gray-600 mt-1">Richmond is known for its rich Civil War history, the James River rapids,...</p>
                          </div>
                        </Link>
                        
                        <Link href="/services" className="block group">
                          <div className="hover:bg-[#bddade] p-2 rounded transition-colors duration-200">
                            <h4 className="font-semibold text-gray-800 text-md">Mechanicsville, VA</h4>
                            <p className="text-sm text-gray-600 mt-1">Mechanicsville is known for its Civil War battlefields and suburban...</p>
                          </div>
                        </Link>
                        
                        <Link href="/services" className="block group">
                          <div className="hover:bg-[#bddade] p-2 rounded transition-colors duration-200">
                            <h4 className="font-semibold text-gray-800 text-md">East Highland Park, VA</h4>
                            <p className="text-sm text-gray-600 mt-1">East Highland Park is a residential suburb directly east of downtown...</p>
                          </div>
                        </Link>
                      
                      </div>
                      
                      {/* Column 2 */}
                      <div className="space-y-3">
                        <Link href="/services" className="block group">
                          <div className="hover:bg-[#bddade] p-2 rounded transition-colors duration-200">
                            <h4 className="font-semibold text-gray-800 text-md">Ashland, VA</h4>
                            <p className="text-sm text-gray-600 mt-1">Ashland is home to Randolph-Macon College and features a charming...</p>
                          </div>
                        </Link>
                        
                        <Link href="/services" className="block group">
                          <div className="hover:bg-[#bddade] p-2 rounded transition-colors duration-200">
                            <h4 className="font-semibold text-gray-800 text-md">Lakeside, VA</h4>
                            <p className="text-sm text-gray-600 mt-1">Lakeside sits just east of Richmond and is known for its proximity to maj...</p>
                          </div>
                        </Link>
                        
                        <Link href="/services" className="block group">
                          <div className="hover:bg-[#bddade] p-2 rounded transition-colors duration-200">
                            <h4 className="font-semibold text-gray-800 text-md">Short Pump, VA</h4>
                            <p className="text-sm text-gray-600 mt-1">Short Pump is a major shopping and dining district in western Henrico...</p>
                          </div>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              
              <Link 
                href="/contact" 
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
                  href="/contact" 
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