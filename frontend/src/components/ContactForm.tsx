"use client";
import React, { useState } from 'react';
import { Info, CircleAlert, AlertCircle, PhoneCall } from "lucide-react";
import { toast, Toaster } from 'sonner';
import HydrationSafeButton from './hydration-safe';
import { div } from 'motion/react-client';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  time: string;
}


export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Add success state


  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone.trim()) return true; // Phone is optional
    const phoneRegex = /^[\+]?[(]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };




  const validateForm = (): boolean => {
    // Check if name is empty
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }

    // Check if name is too short
    if (formData.name.trim().length < 2) {
      toast.error('Name must be at least 2 characters long');
      return false;
    }

    // Check if email is empty
    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return false;
    }

    // Check if email is valid
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    // Check phone if provided
    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return false;
    }

    if (!formData.time) {
      toast.error("Please enter prefered time to reach you")
    }

    return true;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!agreed) {
      toast.error('Please agree to be contacted before submitting.');
      return false;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for backend
      const submitData = {

      };


      // const res = await fetch('/api/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(submitData),
      // });

      // if (!res.ok) {
      //   throw new Error(`HTTP error! status: ${res.status}`);
      // }

      // const result = await res.json();

      // Success
      toast.success('Message sent successfully! Dr. Blake will contact you within one business day.');

      // Set success state to show the success message
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        time: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again or call directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#bddade] py-12 px-4 sm:px-6 lg:px-8">
      <Toaster
        position="top-center"
        expand={true}
        richColors
      />

      <div className="max-w-7xl mx-auto">
        {/* Main Content Card */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
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
                  <HydrationSafeButton className="mt-4 sm:mt-6 bg-slate-600 text-[#bddade] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
                    View on Google Maps
                  </HydrationSafeButton>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Hours</h2>
                  <div className="text-gray-800 space-y-3 text-base sm:text-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span>Monday (Virtual via Zoom):</span>
                      <span>1:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center ">
                      <span>Tuesday (In-person):</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span>Wednesday (Virtual via Zoom):</span>
                      <span>1:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center ">
                      <span>Thursday (In-person):</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span>Friday (Virtual via Zoom):</span>
                      <span>1:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                </div>


                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Contact</h2>
                  <p className="text-gray-800 text-base sm:text-lg flex gap-1">
                    <span className="font-medium"><PhoneCall /></span> (323) 555-0192
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form or Success Message */}
            <div className=" flex justify-center items-center">

              {isSubmitted ? (
                // Success Message
                <div className='bg-gray-50 border-2 border-black rounded-xl p-5 mt-6 shadow-2xl h-fit max-w-md mx-auto justify-center flex-col'>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#345048] mb-2">
                      <h2>Get In Touch</h2>
                    </div>
                    <p className="text-gray-600 mb-2 text-sm sm:text-base">
                      Simply fill out the brief fields below and Serena will be in touch with you soon,
                      usually within one business day. This form is safe, private, and completely free.
                    </p>
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                      ☺️ Thank you! Serena will get back to you soon
                    </h2>
                  </div>
                </div>


              ) : (
                // Contact Form
                <div className='bg-gray-50 border-2 border-black rounded-xl p-5 mt-6 shadow-2xl h-fit max-w-md mx-auto'>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">Get In Touch</h2>

                  <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                    Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day.
                    This form is safe, private, and completely free.
                  </p>

                  <div className="space-y-4">

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Name</label>
                      <input
                        suppressHydrationWarning={true}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Email</label>
                      <input
                        suppressHydrationWarning={true}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Phone</label>
                      <input
                        suppressHydrationWarning={true}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 234-5678"
                        className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="What brings you here?"
                        className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-vertical text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">Preferred time to reach you</label>
                      <input
                        suppressHydrationWarning={true}
                        type="text"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        placeholder="time"
                        className="w-full px-3 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-sm"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        suppressHydrationWarning={true}
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />

                      <label className="text-xs text-gray-700">
                        I agree to be contacted by Dr. Serena Blake via email or phone.
                      </label>
                    </div>


                    <HydrationSafeButton
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm
              ${isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-teal-600 hover:bg-teal-700 text-white'}
            `}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </HydrationSafeButton>

                    <div className="p-1">
                      <p className="text-black flex items-start gap-1 text-xs leading-snug">
                        <span><Info className="text-black mt-0.5 w-3 h-3" /></span>
                        <span>
                          By submitting, you confirm you are 18+ and agree to our{' '}
                          <span className="underline">Privacy Policy & TOS</span> and to receive emails & texts from Serena Blake.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#f4f4fb] border border-black mt-10 rounded-lg p-5">
          <div className="flex gap-1">
            <CircleAlert className="mb-1 text-red-600" />
            <span className="text-red-600 font-bold text-base sm:text-lg">Please Note:</span>
          </div>
          <h2 className="text-base sm:text-lg text-blue-600 mt-2">
            I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for <span className="font-bold">out-of-network benefits</span> with your insurance company.
          </h2>
        </div>

      </div>
    </div>
  );
}