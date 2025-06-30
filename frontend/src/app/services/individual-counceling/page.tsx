"use client";
import About from '@/components/About';
import FAQ from '@/components/Faq';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Testimonials from '@/components/Testimonials';
import HeroSectionUI from '@/components/ui/hero-ui';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { BookHeart, BookOpen, Calendar, CheckCircle, ChevronDown, Clock, Heart, Info, Phone, PhoneCall, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import React, { JSX, useState } from 'react'

interface ServiceItem {
    id: string;
    title: string;
    icon: JSX.Element;
    description: string;
    expanded: boolean;
    details: string;
    buttonText: string;
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

const page = () => {
  const services = [
        {
            title: 'Feelings of Unworthiness',
            description: 'You know what the Bible says, but still feel like you\'re not enough. Shame and guilt cloud your self-image and make it hard to believe you\'re truly loved.',
            borderColor: 'border-l-green-400'
        },
        {
            title: 'Persistent Anxiety or Sadness',
            description: 'You\'re stuck in worry, fear, or emotional heaviness that keeps you from living freely. You want faith to speak louder than fear.',
            borderColor: 'border-l-green-400'
        },
        {
            title: 'Feeling Distant From God',
            description: 'Your faith feels dry or confused. You\'re not sure how to hear God clearly anymore or what His plan is for your life.',
            borderColor: 'border-l-green-400'
        },
        {
            title: 'Wounds From the Past',
            description: 'Old hurts continue to affect your thoughts, habits, and relationships. You\'re ready for healing — not just coping.',
            borderColor: 'border-l-green-400'
        }
    ];

    const features = [
        { icon: <UserCheck className="w-5 h-5 text-yellow-300" />, text: 'Personalized, Christ-Centered Care' },
        { icon: <Heart className="w-5 h-5 text-red-600" />, text: 'Compassionate, Non-Judgmental Space' },
        { icon: <BookHeart className="w-5 h-5 text-green-400" />, text: 'Faith + Therapy = Healing' },
        { icon: <ShieldCheck className="w-5 h-5 text-sky-500" />, text: 'Over 35 Years of Experience' }
    ];

    const [serviceList, setServices] = useState<ServiceItem[]>([
        {
            id: 'christian-cbt',
            title: 'Christian Cognitive Behavioral Therapy (CBT)',
            icon: <BookOpen className="w-5 h-5 text-blue-600" />,
            description: 'Identify and replace unhealthy thinking patterns using CBT techniques infused with biblical truths to restore clarity, hope, and peace.',
            expanded: true,
            details: 'Through biblical wisdom and proven techniques, we help you overcome inner struggles and reconnect with your true identity in Christ. Our approach combines evidence-based CBT methods with scriptural foundations to provide lasting transformation.',
            buttonText: 'Learn More About Faith-Integrated CBT'
        },
        {
            id: 'healing-prayer',
            title: 'Healing Prayer & Identity Work',
            icon: <Sparkles className="w-5 h-5 text-yellow-600" />,
            description: 'Discover your true identity in Christ through guided prayer sessions and biblical identity work that addresses root causes of emotional wounds.',
            expanded: false,
            details: 'Experience the transformative power of healing prayer combined with identity work rooted in Scripture. We address deep-seated wounds and help you understand who you are in God\'s eyes.',
            buttonText: 'Explore Healing Prayer Sessions'
        },
        {
            id: 'spiritual-exploration',
            title: 'Creative Spiritual Exploration',
            icon: <Heart className="w-5 h-5 text-pink-600" />,
            description: 'Explore your relationship with God through creative expressions, journaling, and spiritual practices designed to deepen your faith journey.',
            expanded: false,
            details: 'Engage with your spirituality through various creative mediums and practices. This approach helps you connect with God in new and meaningful ways while addressing personal growth.',
            buttonText: 'Begin Creative Spiritual Journey'
        }
    ]);

    const toggleService = (id: string) => {
        setServices(prev => prev.map(service =>
            service.id === id
                ? { ...service, expanded: !service.expanded }
                : { ...service, expanded: false }
        ));
    };

  return (
    <div className=''>
        <Navbar />
        <HeroSectionUI 
          mainHeading='Faith-Based Therapy for Anxiety, Identity & Inner Healing in Richmond, VA'
          subtitle="Discover Peace, Purpose, and God's Truth in Richmond, VA."
          backgroundImage='/recovery.jpg'
        />
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Header Badge */}
                        <div className="inline-block">
                            <span className="bg-[#bddade] text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                                Christian Therapy for Personal Struggles | Richmond, VA
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-5">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" >
                                Struggling With Anxiety, Unworthiness, or Spiritual Confusion?
                            </h1>
                            
                            <p className="text-gray-700 text-lg leading-relaxed">
                                You were created in the image of God — but life's wounds can obscure that truth. Counseling helps you rediscover who you are in Christ.
                            </p>
                        </div>

                        {/* Services List */}
                        <div className="space-y-3">
                            {services.map((service, index) => (
                                <div key={index} className={`border-l-4 ${service.borderColor} bg-[#f6f3f5] p-6 rounded-l-2xl rounded-lg shadow-sm`}>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button className="px-5 py-3 bg-[#283f44] text-white rounded-md hover:bg-gray-700 transition-colors duration-200 font-medium">
                                Find Healing Through Christ
                            </button>
                            <button className="px-5 py-3 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium">
                                See How I Work
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative mt-5">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="/healing.jpg"
                                alt="Person in contemplative prayer"
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                <h2 className="text-white text-2xl lg:text-3xl font-bold mb-6">
                                    You Are God's Masterpiece — Let's Uncover That Truth
                                </h2>
                                
                                {/* Feature Badges */}
                                <div className="grid grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3 text-white">
                                            <div className="text-yellow-400">
                                                {feature.icon}
                                            </div>
                                            <span className="text-sm font-medium">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="text-sm text-gray-600 mb-2 bg-[#dee9fc] inline-block p-2 rounded-lg">
                        Counseling for Individuals | Maplewood Drive, LA
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        A Faith-Based Path Toward<br />
                        <span className="text-gray-800">Wholeness</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Through biblical wisdom and proven techniques, Ellie helps you overcome inner 
                        struggles and reconnect with your true identity in Christ.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Hero Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="/hands.jpg"
                                    alt="Hands reaching toward light through foliage"
                                    className="w-full h-80 lg:h-96 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Services List */}
                    <div className="order-1 lg:order-2 space-y-1  ">
                        {serviceList.map((service) => (
                            <div
                                key={service.id}
                                className=" overflow-hidden transition-all duration-300 border-b-1"
                            >
                                <div
                                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => toggleService(service.id)}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <div className={`transition-transform duration-300 ${
                                            service.expanded ? 'rotate-180' : 'rotate-0'
                                        }`}>
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        service.expanded ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <button className="inline-flex items-center px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors duration-200">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {service.buttonText}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="min-h-screen bg-[#dee9fc] py-16 px-4">
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
                            cardBgColor='#f9fafb'
                        />
                    </div>
                </div>

        <About bgColor='#dee9fc' />

        <FAQ />

        <div className='w-full bg-[#dee9fc]'>

          <div className="space-y-6 max-w-xl mx-auto bg-[#dee9fc] p-5">

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
                            <div className="bg-white border-1 border-black rounded-xl p-8 shadow-2xl">
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

        

        <Footer />

    </div>
  )
}

export default page