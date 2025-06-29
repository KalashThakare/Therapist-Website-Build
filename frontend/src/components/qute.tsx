import React from 'react';

const MatthewQuote=()=> {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full flex items-center justify-between">
        {/* Left side - Illustration */}
        <div className="flex-1 flex justify-center">
          <img src="/candle.gif" alt="" className='bg-amber-50'/>
        </div>
        
        {/* Right side - Quote */}
        <div className="flex-1 pl-16">
          <div className="text-right">
            <p className="text-4xl font-thin text-teal-700 leading-relaxed mb-4 italic">
              "Come to me, all who labor and are heavy laden, and I will give you rest."
            </p>
            <p className="text-2xl font-serif text-teal-700 font-medium">
              — Matthew 11:28
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatthewQuote;