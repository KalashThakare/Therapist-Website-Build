"use client"
import React from 'react';
import { Sparkles } from 'lucide-react';

const ScheduleConsultation = () => {
  return (
    <div className="bg-[#274044] py-19 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Section - Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#bcdbda] leading-tight">
              Schedule A<br />
              Consultation
            </h2>
          </div>

          {/* Center Section - Description */}
          <div className="flex-1 text-center justify-between items-center lg:text-left max-w-2xl">
            <p className="text-lg md:text-xl text-[#bcdbda] leading-relaxed">
              Ellie Shumaker is currently accepting new clients. Available for 
              online and in-person sessions.
            </p>
          </div>

          {/* Right Section - CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-700 transition-all duration-300 flex items-center gap-2">
              <Sparkles />
              Start Healing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleConsultation;