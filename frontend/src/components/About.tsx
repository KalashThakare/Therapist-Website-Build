import React from 'react';
import { Calendar, Star } from 'lucide-react';

interface AboutProps {
    bgColor?: string;
}

const About: React.FC<AboutProps> = ({ bgColor = "#bddade" }) => {
    return (
        <div className="py-16 px-4" style={{ backgroundColor: bgColor }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                   {/* image */}

                    <div className="flex justify-center items-center">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto">

                            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">

                                <img
                                    src="/serenBlake.jpg"
                                    alt="Dr. Serena Blake, PsyD (Clinical Psychologist)"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                    Dr. Serena Blake
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    PsyD (Clinical Psychologist)
                                </p>

                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">
                                        5 star rated on Google
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right Content */}
                    <div className="space-y-6">
                        <div className="rounded-lg bg-[#fcf3cc] text-black px-4 py-2 sm:px-6 md:px-8 lg:px-10 inline-block">
                            <h2 className="text-xs sm:text-sm font-light">
                                About Dr. Serena Blake, PsyD – Clinical Psychologist in Los Angeles, CA
                            </h2>
                        </div>


                        <h2 className="text-4xl md:text-5xl font-serif text-[#345048] leading-tight">
                            Hi I'm Dr. Serena Blake
                        </h2>

                        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with <span className="font-semibold">eight years of experience</span> and over <span className="font-semibold">500 client sessions</span>. She blends <span className="font-semibold">evidence-based approaches</span>—like <span className="font-semibold">cognitive-behavioral therapy</span> and <span className="font-semibold">mindfulness</span>—with compassionate, personalized care to help you <span className="font-semibold">overcome anxiety</span>, <span className="font-semibold">strengthen relationships</span>, and <span className="font-semibold">heal from trauma</span>. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a <span className="font-semibold">safe, supportive space</span> for you to thrive.
                            </p>

                        </div>

                        <div className="pt-4">
                            <button className="inline-flex items-center px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                <Calendar className="w-5 h-5 mr-3" />
                                Schedule Free Consultation
                            </button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default About;