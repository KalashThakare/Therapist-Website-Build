"use client";
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

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


const Testimonials = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
                    What Former Clients Say
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    Here's what former clients have had to say about working with Serena Blake
                </p>
                
                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg shadow-sm p-4 max-w-xs mx-auto">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-sm">G</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Google Rating</p>
                            <div className="flex items-center space-x-1">
                                <span className="text-orange-500 font-bold">5.0</span>
                                <div className="flex space-x-1">
                                    <span className="text-orange-400">★★★★★</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    );
};

export default Testimonials;