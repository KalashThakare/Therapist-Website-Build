"use client";
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Testimonials from '@/components/Testimonials';
import Topbar from '@/components/Topbar';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Info, Phone, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    time: string
}

const testimonials = [

    {
        description:
            "There was a time when anxiety ruled my days — constant overthinking, sleepless nights, and a feeling of being stuck. Working with Ilah gave me tools to manage my stress and reclaim peace in my life. I genuinely feel lighter and more in control now.",
        User: "C.R",
    },
    {
        description:
            "My relationship was falling apart, and communication had completely broken down. Ilah provided a safe, neutral space where both of us could speak openly. Her support helped us rebuild trust and brought understanding back into our relationship.",
        User: "T.W",
    },
    {
        description:
            "I used to feel overwhelmed by even the smallest things—tight chest, racing thoughts, and constant tension. Ilah's sessions gave me tools to calm my mind and regulate my emotions. For the first time in years, I feel in control of my anxiety.",
        User: "E.P",
    },
    {
        description:
            "My relationship was going through a rough patch, and I didn’t know how to communicate without conflict. Ilah created a safe space where both of us felt heard. Her guidance helped us reconnect and understand each other deeply.",
        User: "O.R",
    },
    {
        description:
            "After years of carrying trauma, I finally felt safe enough to open up during my sessions with Ilah. She never rushed the process, and her compassion helped me begin to heal. I'm no longer defined by my past.",
        User: "S.D",
    }
];

const TherapistContact = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
        time: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [agreed, setAgreed] = useState(false);


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


            const res = await fetch('/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const result = await res.json();

            // Success
            toast.success('Message sent successfully! Dr. Blake will contact you within one business day.');

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
        <div>
            <Toaster
                position="top-center"
                expand={true}
                richColors
            />
            <Topbar />
            <Navbar />
            <div className="w-full bg-gray-50 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Therapist Info */}
                        <div className="space-y-8">

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



                        <div>

                            <div className='w-full flex justify-center items-center'>
                                <button className=" bg-teal-100 hover:bg-teal-200 text-teal-800 font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 border border-teal-200">
                                    <PhoneCall className="w-5 h-5" />
                                    Call Dr. Serena Blake
                                </button>
                            </div>

                            <div className='m-10 flex justify-center'>
                                <h1 className='font-bold text-[#1b242c] text-xl'>OR</h1>
                            </div>

                            <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-2xl max-w-md mx-auto">

                                <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">Get In Touch</h2>

                                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                                    Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day.
                                    This form is safe, private, and completely free.
                                </p>

                                <div className="space-y-4">

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1 text-sm">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1 text-sm">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="you@example.com"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1 text-sm">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="(555) 234-5678"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-sm"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-vertical text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1 text-sm">Preferred time to reach you</label>
                                        <input
                                            type="text"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleInputChange}
                                            placeholder="time"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-sm"
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <input
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


                                    <button
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
                                    </button>

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

                        </div>


                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50 py-16 px-4">
                <div className="max-w-7xl mx-auto mb-16">
                    <div className="rounded-lg bg-[#fcf3cc] text-black px-4 py-2 sm:px-6 md:px-8 lg:px-10 mb-5 inline-block">
                        <h2 className="text-xs sm:text-sm font-light">
                            Client Success Stories & Testimonials
                        </h2>
                    </div>
                    <h1 className="text-5xl md:text-5xl font-bold text-[#345048] mb-6">
                        What Former Clients Say
                    </h1>
                    <p className="text-lg text-gray-600 mx-auto mb-8">
                        Here's what former clients have had to say about working with Serena Blake
                    </p>

                </div>

                <div className="relative overflow-hidden max-w-5xl mx-auto">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                        cardBgColor='#bddade'
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TherapistContact;