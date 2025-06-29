"use client"
import React from 'react';
import Image from 'next/image';

const HowIHelp = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 right-20 hidden lg:block">
        <Image
          src="/plant.jpg"
          alt="Decorative plant"
          width={200}
          height={200}
          className="opacity-100"
        />
      </div>
      <div className="max-w-6xl mx-auto z-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            How I Help
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8  mx-aut">
          {/* Individual Counseling Card */}
          <div className="bg-[#bddade] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-black">
            <div className="mb-6">
              <div className="relative w-full h-48 rounded-sm overflow-hidden">
                <Image
                  src="/recovery.jpg"
                  alt="Woman in peaceful contemplation outdoors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">
                Christian Individual<br />
                Counseling in Richmond,<br />
                VA
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                Discover Peace, Purpose, and God's Truth in Richmond, VA.
              </p>
              
              <button className="w-full hover:bg-white/70 text-slate-700 font-semibold py-3 px-6 rounded-xl border border-black transition-all duration-300 hover:shadow-md">
                Learn More
              </button>
            </div>
          </div>

          {/* Couples Counseling Card */}
          <div className="bg-[#bddade] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-black">
            <div className="mb-6">
              <div className="relative w-full h-48 rounded-sm overflow-hidden">
                <Image
                  src="/holding.jpg"
                  alt="Couple reading together in a peaceful setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">
                Christian Couples<br />
                Counseling in Richmond,<br />
                VA
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                Heal Your Relationship, Grow Closer to God Together in Richmond.
              </p>
              
              <button className="w-full hover:bg-white/70 text-slate-700 font-semibold py-3 px-6 rounded-xl border border-black transition-all duration-300 hover:shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowIHelp;