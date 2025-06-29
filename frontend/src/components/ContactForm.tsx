"use client";
import React, { useState } from 'react';
import { Info, CircleAlert } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#bddade] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Card */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Office Information */}
            <div className="bg-[#bddade] text-gray-800 p-6 sm:p-8 lg:p-12">
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Our Office</h2>
                  <div className="text-gray-800 space-y-2 text-base sm:text-lg">
                    <p>4913 Fitzhugh Avenue</p>
                    <p>Suite 102</p>
                    <p>Richmond</p>
                    <p>VA 23230</p>
                    <p className="mt-3 font-medium">Richmond, VA</p>
                  </div>
                  <button className="mt-4 sm:mt-6 bg-slate-600 text-[#bddade] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
                    View on Google Maps
                  </button>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Hours</h2>
                  <div className="text-gray-800 space-y-3 text-base sm:text-lg">
                    <div className="flex">
                      <span>Monday:</span>
                      <span>12:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex">
                      <span>Tuesday:</span>
                      <span>12:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex">
                      <span>Wednesday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Contact</h2>
                  <p className="text-gray-800 text-base sm:text-lg">
                    <span className="font-medium">Phone:</span> (757) 474-5262
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 lg:p-12  bg-[#f4f4fb] rounded-xl border border-black flex justify-center items-center ">
              <div className=" mx-auto">
                <div className=' flex flex-col justify-center items-center text-center'>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Simply fill out the brief fields below and Ellie will be in touch
                    with you soon, usually within one business day. This form is
                    safe, private, and completely free.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 234-5678"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can I help you?"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-vertical text-gray-900"
                    />
                  </div>

                  {/* reCAPTCHA Section */}
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      id="recaptcha"
                      className="w-5 h-5 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                    />
                    <label htmlFor="recaptcha" className="text-sm text-gray-700 flex-1">
                      I'm not a robot
                    </label>
                    <div className="flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-300 rounded">
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 text-lg"
                  >
                    Send Message
                  </button>
                  <div className="p-1">
                    <p className="text-black flex items-start gap-1 text-sm leading-snug">
                      <span>
                        <Info className="text-black mt-0.5 w-4 h-4" />
                      </span>
                      <span>
                        By submitting, you confirm you are 18+ and agree to our{' '}
                        <span className="underline">Privacy Policy & TOS</span> and to receive emails & texts from Serena Blake.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#f4f4fb] border border-black mt-10 rounded-lg p-5'>
          <div className='flex gap-1'>
            <CircleAlert className='mb-1 text-red-600' />
            <span className='text-red-600 font-bold text-lg'>Please Note:</span>
          </div>
          <h2 className='text-lg text-blue-600'>
            I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for <span className='font-bold'>out-of-network benefits</span> with your insurance company.
          </h2>
        </div>

      </div>
    </div>
  );
}