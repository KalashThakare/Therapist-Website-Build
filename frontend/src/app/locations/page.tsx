"use client";
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { MapPin, Phone, Calendar, Settings } from 'lucide-react';
import { div } from 'motion/react-client';

const TherapyLocations = () => {
    const locations = [
        {
            name: "Richmond, VA",
            description: "Located in Richmond, VA, our practice offers convenient in-person therapy sessions.",
            address: "4913 Fitzhugh Avenue, Suite 102, Richmond, VA 23230",
            phone: "(323) 555-0192",
            distance: null
        },
        {
            name: "Ashland, VA",
            description: "Providing in-person therapy services in Ashland, VA.",
            address: null,
            phone: "(323) 555-0192",
            distance: "approx ~13 miles away from office in Richmond, VA"
        },
        {
            name: "Mechanicsville, VA",
            description: "Offering in-person therapy options for families in Mechanicsville.",
            address: null,
            phone: "(323) 555-0192",
            distance: "approx ~12 miles away from office in Richmond, VA"
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="w-full bg-gray-50 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Locations
                        </h1>
                        <p className="text-md md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We provide comprehensive therapy services across multiple locations, offering both in-person and online sessions to best serve your needs.
                        </p>
                    </div>

                    {/* Locations Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md  p-8 hover:shadow-md transition-shadow duration-200"
                            >
                                {/* Location Header */}
                                <h2 className="text-2xl font-bold text-[#283f44] mb-4">
                                    {location.name}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {location.description}
                                </p>

                                {/* Location Details */}
                                <div className="space-y-4 mb-8">
                                    {location.address && (
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm leading-relaxed">
                                                {location.address}
                                            </span>
                                        </div>
                                    )}

                                    {location.distance && (
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm leading-relaxed">
                                                {location.distance}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">
                                            {location.phone}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    <button  className="w-full bg-[#283f44] hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Schedule
                                    </button>

                                    <button className="w-full bg-transparent hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 transition-colors duration-200 flex items-center justify-center gap-2">
                                        <Settings className="w-4 h-4" />
                                        Services
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TherapyLocations;