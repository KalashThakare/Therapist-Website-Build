"use client";
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(2); // Third item is open by default

  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "No, but a superbill is provided for self-submission."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required."
    }
  ];

  const toggleFAQ = (index: React.SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="h-full bg-[#bddade] py-6 px-4 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3f4945] mb-8 sm:mb-10 md:mb-12">
          Frequently Asked Questions
        </h1>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-400">
              {/* Question */}
              <button
                className="w-full py-4 sm:py-5 md:py-6 flex justify-between items-center text-left transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#3f4945] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#3f4945] transform transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#3f4945] transform transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-4 pr-8 sm:pb-5 sm:pr-9 md:pb-6 md:pr-10">
                  <p className="text-[#3f4945] text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;