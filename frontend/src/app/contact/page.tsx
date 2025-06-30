import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Testimonials from '@/components/Testimonials';
import { Info, Phone, PhoneCall } from 'lucide-react';

const TherapistContact = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side - Therapist Info */}
                        <div className="space-y-8">
                            {/* Profile Image */}
                            <div className="w-48 h-64 bg-gray-300 rounded-lg overflow-hidden">
                                <img
                                    src="/serenBlake.jpg"
                                    alt="Ellie Shumaker, LCSW"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Introduction */}
                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                                    Dr. Serena Blake, PsyD (Clinical Psychologist)
                                </h1>

                                <h2 className="text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        <span className="font-semibold text-gray-800">Dr. Serena Blake</span> is a <span className="font-semibold text-gray-800">licensed clinical psychologist (PsyD)</span> based in <span className="font-semibold text-gray-800">Los Angeles, CA</span>, with <span className="font-semibold text-gray-800">eight years of experience</span> and over <span className="font-semibold text-gray-800">500 client sessions</span>. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her <span className="font-semibold text-gray-800">Maplewood Drive office</span> or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                                    </p>

                                </h2>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="space-y-6">

                            <div className='w-full flex justify-center items-center'>
                                <button className=" bg-teal-100 hover:bg-teal-200 text-teal-800 font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 border border-teal-200">
                                <PhoneCall className="w-5 h-5" />
                                Call Dr. Serena Blake
                            </button>
                            </div>

                            {/* OR Divider */}
                            <div className="text-center">
                                <span className="text-2xl font-bold text-gray-800">OR</span>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white border-2 border-gray-300 rounded-xl p-8 shadow-2xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                                    Get In Touch
                                </h2>

                                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                                    Simply fill out the brief fields below and Ellie will be in touch
                                    with you soon, usually within one business day. This form is
                                    safe, private, and completely free.
                                </p>

                                <div className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                                        />
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="(555) 234-5678"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={2}
                                            placeholder="How can I help you?"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-vertical"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="button"
                                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
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
            </div>
            <Testimonials />
            <Footer />
        </div>
    );
};

export default TherapistContact;