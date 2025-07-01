'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, Sparkles, PhoneCall, ChevronDown } from 'lucide-react';
import { ServicesDropdown, AreasDropdown } from './dropdown'; // Adjust import path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Fix hydration by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (!isClient) return;
    
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100); // Small delay to ensure page is loaded
    }
  }, [pathname, isClient]);

  const scrollToSection = (targetId: string) => {
    if (!isClient) return;
    
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

    if (!isClient) return;

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

  // Enhanced navigation with loading
  const handleNavigation = (href: string, callback?: () => void) => {
    if (!isClient) return;
    
    setIsLoading(true);
    setLoadingProgress(0);

    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setLoadingProgress(0);
            if (callback) callback();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    setTimeout(() => {
      router.push(href);
    }, 400);
  };

  const LoadingOverlay = () => (
    <div
      className={`fixed inset-0 flex justify-center items-center z-[9999] transition-all duration-300 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      style={{ backgroundColor: '#bddade' }}
    >
      <div className="text-center">
        {/* Loading Bar Container */}
        <div className="w-80 h-10  border-4 border-[#30494d] bg-opacity-20 rounded-full overflow-hidden shadow-lg relative p-1">
          {/* Loading Bar Fill */}
          <div
            className="h-full rounded-xl transition-all duration-100 ease-out relative overflow-hidden"
            style={{
              backgroundColor: '#274044',
              width: `${loadingProgress}%`
            }}
          >

          </div>
        </div>
      </div>
    </div>
  );

  // Don't render interactive elements until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="w-full sticky top-0 z-50">
        <nav className="bg-[#e5ecf1] shadow-sm border-b">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center h-16">
              {/* Logo only during SSR */}
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-full p-3 w-fit">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div>
                      <Link href={"/"}>
                        <div className="text-teal-700 font-semibold text-sm">Serena Blake</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <>
      {/* Loading Overlay */}
      <LoadingOverlay />

      <div className="w-full sticky top-0 z-50">
        {/* navbar */}
        <nav className="bg-[#e5ecf1] shadow-sm border-b">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center h-16">

              {/* for Desktop */}
              <div className="hidden lg:flex items-center space-x-8 justify-center">
                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 w-fit">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <div>
                        <Link href={"/"}>
                          <div className="text-teal-700 font-semibold text-sm">Serena Blake</div>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Dropdown */}
                <ServicesDropdown onNavigate={handleNavigation} />

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

                {/* Areas Dropdown */}
                <AreasDropdown onNavigate={handleNavigation} />

                <button
                  onClick={() => handleNavigation('/contact')}
                  className="text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
                  suppressHydrationWarning
                >
                  Contact
                </button>

                <button
                  onClick={() => handleNavigation('/contact')}
                  className="flex items-center space-x-2 bg-white border border-gray-700 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started</span>
                </button>
              </div>

              <div className="lg:hidden flex justify-between gap-10">

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 w-fit">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <div>
                        <Link href={"/"}>
                          <div className="text-teal-700 font-semibold text-sm">Serena Blake</div>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-green-600 focus:outline-none"
                  suppressHydrationWarning
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/*for Mobile */}
            <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
              {/* Backdrop */}
              <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              ></div>

              <div className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>

                <div className="flex justify-end p-4 border-b">

                  <div className="flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 w-fit">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <div>
                        <Link href={"/"}>
                          <div className="text-teal-700 font-semibold text-sm">Serena Blake</div>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    suppressHydrationWarning
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="px-4 py-6 space-y-1">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavigation('/services');
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                    suppressHydrationWarning
                  >
                    How I Help
                  </button>
                  <a
                    href="#about"
                    onClick={(e) => handleSmoothScroll(e, 'about')}
                    className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200 cursor-pointer"
                  >
                    About Me
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
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavigation('/locations');
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                    suppressHydrationWarning
                  >
                    Areas Served
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavigation('/contact');
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                    suppressHydrationWarning
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;