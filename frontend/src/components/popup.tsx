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

  const handleClose = () => {
    setShowPopup(false);
    onClose?.();
  };

  const handleGetInTouch = () => {
    console.log("Get in touch clicked");
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 ">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#274044] mb-2">
              Ready to Start Your Healing Journey?
            </h2>
          </div>

          {/* Content Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-full rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <img
                  src="/serenBlake.jpg"
                  alt="Professional counselor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[#274044] text-base sm:text-lg leading-relaxed mb-4">
                Take the first step toward personal growth, deeper connections, and inner peace in Los Angeles, CA. Reach out to explore how professional counseling can support you.
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">Top Rated</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">40+ Years Experience</span>
                  <span className="mx-2">•</span>
                  <span className="underline cursor-pointer hover:text-gray-800">Media Mentions</span>
                </div>
              </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleGetInTouch}
              className="flex-1 px-6 py-3 bg-[#274044] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};