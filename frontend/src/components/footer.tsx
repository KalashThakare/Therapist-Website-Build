"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {Mail, Phone} from "lucide-react";

const Footer: React.FC = () => {
  const router = useRouter();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // We're on home page, scroll directly
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 120;
        const elementPosition = element.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // We're on a different page, navigate to home with hash
      router.push(`/#${targetId}`);
    }
  };

  return (
    <footer className="bg-[#244344] text-gray-300 py-12 px-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="bg-white rounded-full p-3 w-fit mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-teal-700 font-semibold text-sm">Serena</div>
                    <div className="text-teal-700 font-semibold text-sm">Blake</div>
                    <div className="text-xs text-gray-600">LICENSED CLINICAL</div>
                    <div className="text-xs text-gray-600">SOCIAL WORKER</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-400">★</span>
              <span className="font-semibold text-sm underline hover:no-underline">Top Rated</span>
              <span>•</span>
              <span className='font-semibold text-sm underline hover:no-underline'>Testimonials</span>
              <span>•</span>
              <span className='font-semibold text-sm underline hover:no-underline'>Media Mentions</span>
            </div>

            <div className="mb-4">
              <p className="text-sm leading-relaxed">
                1287 Maplewood Drive, Los Angeles, CA 90026
              </p>
            </div>

            <div className="flex mb-4 gap-2">
                <Phone className='size-4'/>
              <p className="text-sm">
                  (323) 555-0192
              </p>
            </div>

            <div className="flex mb-4 gap-2">
                <Mail className='size-4'/>
              <p className="text-sm">
                  serena@blakepsychology.com
              </p>
            </div>

            <div className="bg-blue-600 text-white px-3 py-2 rounded text-xs font-medium w-fit">
              ✓ VERIFIED BY Psychology Today
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white hover:underline transition-colors scroll-smooth">
                  Get In Touch
                </Link>
              </li>
              <li>
                <a 
                  href="/#testimonials" 
                  onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="/#about" 
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="/#faq" 
                  onClick={(e) => handleSmoothScroll(e, 'faq')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  FAQ's
                </a>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Therapies
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Blogs
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Areas Served */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">AREAS SERVED</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Richmond, LA</li>
              <li className="text-gray-300">Ashland, LA</li>
              <li className="text-gray-300">Mechanicsville, LA</li>
              <li className="text-gray-300">Lakeside, LA</li>
              <li className="text-gray-300">East Highland Park, LA</li>
              <li className="text-gray-300">Short Pump, LA</li>
              <li className="text-gray-300">Highland Springs, LA</li>
              <li className="text-gray-300">Glen Allen, LA</li>
              <li className="text-gray-300">Sandston, LA</li>
              <li className="text-gray-300">Bon Air, LA</li>
              <li className="text-gray-300">Chester, LA</li>
              <li className="text-gray-300">Midlothian, LA</li>
              <li className="text-gray-300">Moseley, LA</li>
              <li className="text-gray-300">Hopewell, LA</li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/individual-counseling" className="text-gray-300 hover:text-white transition-colors">
                  Individual Counseling in Maplewood Drive, LA
                </Link>
              </li>
              <li>
                <Link href="/couples-counseling" className="text-gray-300 hover:text-white transition-colors">
                  Couples Counseling in Maplewood Drive, LA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom URL */}
        <div className="text-center mt-8 pt-10 border-t border-white">
          <p className="text-sm text-gray-400 font-bold">
            Serena Blake © Copyright 2024. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400">
            Credits to freepik for media www.freepik.com People illustrations by Storyset
          </p>
          <p className="text-sm text-gray-400 underline">
            Privacy Policy & Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;