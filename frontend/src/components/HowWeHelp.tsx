"use client";
import React, { JSX, useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, CheckCircle, Clock, Target, Heart, Zap, Brain } from 'lucide-react';

interface ServiceItem {
    id: string;
    title: string;
    icon: string;
    description: string;
    expanded: boolean;
    image: {
        src: string;
        alt: string;
        bgColor: string;
        badges: Array<{
            text: string;
            icon: JSX.Element;
            color: string;
        }>;
    };
}

const HowWeHelp: React.FC = () => {
    const [services, setServices] = useState<ServiceItem[]>([
    {
        id: 'anxiety-stress-management',
        title: 'Anxiety & Stress Management',
        icon: '😌',
        description: 'Transform your relationship with stress and anxiety through targeted hypnotherapy and IEMT techniques. Our proven methods help rewire your brain\'s stress response, providing lasting relief from panic attacks, generalized anxiety, and overwhelming stress.',
        expanded: true,
        image: {
            src: '/overcomeSexual.jpg',
            alt: 'Anxiety & Stress Management',
            bgColor: 'from-blue-200 to-blue-300',
            badges: [
                { text: 'Rapid Anxiety Relief', icon: <Heart className="w-4 h-4" />, color: 'text-blue-700 bg-blue-100' },
                { text: 'Stress Response Retraining', icon: <Brain className="w-4 h-4" />, color: 'text-purple-700 bg-purple-100' },
                { text: 'Natural Calming Techniques', icon: <CheckCircle className="w-4 h-4" />, color: 'text-green-700 bg-green-100' }
            ]
        }
    },
    {
        id: 'relationship-counseling',
        title: 'Relationship Counseling',
        icon: '💕',
        description: 'Strengthen your connections and heal relationship wounds through specialized therapy. Address communication barriers, trust issues, and emotional intimacy challenges. Our approach helps couples and individuals build healthier, more fulfilling relationships.',
        expanded: false,
        image: {
            src: '/couple.jpg',
            alt: 'Relationship Counseling',
            bgColor: 'from-pink-200 to-rose-300',
            badges: [
                { text: 'Improved Communication', icon: <Heart className="w-4 h-4" />, color: 'text-pink-700 bg-pink-100' },
                { text: 'Trust Building', icon: <Target className="w-4 h-4" />, color: 'text-rose-700 bg-rose-100' },
                { text: 'Emotional Healing', icon: <CheckCircle className="w-4 h-4" />, color: 'text-green-700 bg-green-100' }
            ]
        }
    },
    {
        id: 'trauma-recovery',
        title: 'Trauma Recovery',
        icon: '🌱',
        description: 'Heal from past trauma using advanced IEMT (Integral Eye Movement Therapy) techniques - a powerful alternative to traditional EMDR. Process traumatic memories safely and effectively, allowing you to reclaim your life and move forward with confidence.',
        expanded: false,
        image: {
            src: '/phobia.jpg',
            alt: 'Trauma Recovery',
            bgColor: 'from-emerald-200 to-teal-300',
            badges: [
                { text: 'IEMT Therapy', icon: <Brain className="w-4 h-4" />, color: 'text-emerald-700 bg-emerald-100' },
                { text: 'Safe Memory Processing', icon: <Heart className="w-4 h-4" />, color: 'text-teal-700 bg-teal-100' },
                { text: 'Lasting Recovery', icon: <CheckCircle className="w-4 h-4" />, color: 'text-green-700 bg-green-100' }
            ]
        }
    },
]);

    const toggleService = (id: string) => {
        setServices(prev => prev.map(service =>
            service.id === id
                ? { ...service, expanded: !service.expanded }
                : { ...service, expanded: false }
        ));
    };

    const activeService = services.find(service => service.expanded) || services[0];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="pl-6 mb-16">
                    <h1 className="text-5xl  text-emerald-900 mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                        How I Help
                    </h1>
                </div>

                {/* Main Content Grid - Two columns on large screens, single column on mobile */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Services List */}
                    <div className="space-y-1">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="rounded-none border-b border-gray-100 transition-all duration-200 overflow-hidden"
                            >
                                <div
                                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => toggleService(service.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xl">{service.icon}</span>
                                            <h3 className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                                                {service.title}
                                            </h3>
                                        </div>
                                        <div className={`transition-transform duration-300 ${service.expanded ? 'rotate-180' : 'rotate-0'}`}>
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        service.expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <div className="mt-6 space-y-4 border-t border-gray-100 pt-4">
                                            <p className="text-gray-600 leading-relaxed text-sm transform transition-transform duration-500">
                                                {service.description}
                                            </p>
                                            
                                            {/* Mobile Image */}
                                            <div className="lg:hidden">
                                                <div className={`bg-gradient-to-br rounded-2xl p-6 h-64 flex items-center justify-center relative overflow-hidden transition-all duration-500`}>
                                                    {/* Main Image */}
                                                    <div className="absolute inset-4 rounded-xl overflow-hidden">
                                                        <img
                                                            src={service.image.src}
                                                            alt={service.image.alt}
                                                            className="w-full h-full object-cover transition-all duration-500"
                                                        />
                                                    
                                                    </div>

                                                    <div className="absolute top-4 right-4 space-y-2">
                                                        {service.image.badges.map((badge, index) => (
                                                            <div
                                                                key={index}
                                                                className={`${badge.color} backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center space-x-2 shadow-md text-xs transition-all duration-500`}
                                                                style={{
                                                                    animationDelay: `${index * 0.2}s`,
                                                                    animation: service.expanded ? 'fadeInSlide 0.6s ease-out forwards' : ''
                                                                }}
                                                            >
                                                                {badge.icon}
                                                                <span className="font-medium">{badge.text}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="inline-flex items-center px-6 py-2.5 bg-gray-700 text-white text-sm rounded-full hover:bg-gray-800 shadow-sm transform transition-transform duration-300">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                Schedule Free Consultation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop */}
                    <div className="hidden lg:block">
                        <div className={`bg-gradient-to-br  rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden transition-all duration-500`}>
                            {/* Main Image */}
                            <div className="absolute inset-4 rounded-2xl overflow-hidden">
                                <img
                                    src={activeService.image.src}
                                    alt={activeService.image.alt}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />

                            </div>

                            <div className="absolute top-6 right-6 space-y-3">
                                {activeService.image.badges.map((badge, index) => (
                                    <div
                                        key={index}
                                        className={`${badge.color} backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 shadow-md`}
                                        style={{
                                            animationDelay: `${index * 0.2}s`,
                                            animation: 'fadeInSlide 0.6s ease-out forwards'
                                        }}
                                    >
                                        {badge.icon}
                                        <span className="text-xs font-medium">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Button */}
                <div className="fixed bottom-8 right-8 z-50">
                    <button className="w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white rounded-full relative">
                            <div className="absolute inset-1 bg-white rounded-full"></div>
                        </div>
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInSlide {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default HowWeHelp;