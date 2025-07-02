"use client";
import React, { useState, useEffect } from 'react';
import { X, Star, Phone } from 'lucide-react';

interface HealingJourneyPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
  delayMinutes?: number; 
  autoShow?: boolean; 
}

export const Popup = ({ 
  isOpen = false, 
  onClose,
  delayMinutes = 2, 
  autoShow = true 
}: HealingJourneyPopupProps) => {
  const [showPopup, setShowPopup] = useState(isOpen);
  const [hasShownBefore, setHasShownBefore] = useState(false);

  useEffect(() => {
    if (!autoShow || hasShownBefore || isOpen) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
      setHasShownBefore(true);
    }, delayMinutes * 60 * 1000); 

    return () => clearTimeout(timer);
  }, [autoShow, delayMinutes, hasShownBefore, isOpen]);

  useEffect(() => {
    setShowPopup(isOpen);
  }, [isOpen]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    onClose?.();
  };

  const handleGetInTouch = () => {
    console.log("Get in touch clicked");
    // Add your contact logic here
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4">
     
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-2 sm:mx-4 relative animate-fadeIn max-h-[95vh] overflow-y-auto">
       
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors z-20 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          type="button"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#274044] mb-2 pr-8">
              Ready to Start Your Healing Journey?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">

            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <img
                  src="/serenBlake.jpg"
                  alt="Professional counselor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <p className="text-[#274044] text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                Take the first step toward personal growth, deeper connections, and inner peace in Los Angeles, CA. Reach out to explore how professional counseling can support you.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">Top Rated</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  <span className="font-medium">8+ Years Experience</span>
                  <span className="mx-1 sm:mx-2">•</span>
                  <span className="underline cursor-pointer hover:text-gray-800">Media Mentions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleClose}
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              Close
            </button>
            <button
              onClick={handleGetInTouch}
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 bg-[#274044] hover:bg-[#1e2d31] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};