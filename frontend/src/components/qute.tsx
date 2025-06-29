import React from 'react';

const MatthewQuote = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 sm:px-8">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left side - Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="/candle.gif" alt="Candle animation" className="bg-amber-50 w-full max-w-md" />
        </div>

        {/* Right side - Quote */}
        <div className="w-full lg:w-1/2 lg:pl-8 text-right">
          <div className="px-2 sm:px-6">
            <p className="trelative flex-1 text-3xl md:text-4xl xl:text-5xl px-4 text-center font-bold  text-teal-700 !text-darkMain1">
              "Come to me, all who labor and are heavy laden, and I will give you rest."
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-teal-700 font-medium">
              — Matthew 11:28
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatthewQuote;
