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
        <div className="min-h-screen bg-[#bddade] py-16 px-4">
            <div className="max-w-7xl mx-auto mb-16">
                <div className="rounded-lg bg-[#fcf3cc] text-black px-4 py-2 sm:px-6 md:px-8 lg:px-10 mb-5 inline-block">
                    <h2 className="text-xs sm:text-sm font-light">
                        Client Success Stories & Testimonials
                    </h2>
                </div>
                <h1 className="text-5xl md:text-5xl font-bold text-gray-800 mb-6">
                    What Former Clients Say
                </h1>
                <p className="text-lg text-gray-600 mx-auto mb-8">
                    Here's what former clients have had to say about working with Serena Blake
                </p>

            </div>

            <div className="relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
};

export default Testimonials;