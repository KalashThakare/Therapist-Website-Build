"use client"
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { div } from 'motion/react-client';
import React, { useState } from 'react';

const page = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Navbar />
            <section className="bg-gray-50 py-16 px-4 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className=" mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#30494d] mb-6">
                            Latest Blogs
                        </h2>
                        <p className="text-lg text-gray-600 max-w-150 mb-8">
                            Discover helpful insights and strategies from Ellie Shumaker to improve your
                            relationships and personal well-being.
                        </p>

                        <div className="max-w-md border-3 border-[#30494d] rounded-lg">
                            <input
                                type="text"
                                placeholder="Search blogs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3  rounded-lg focus:border-teal-500 focus:outline-none text-gray-700 placeholder-gray-500"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center min-h-[200px] border-t-1">
                        <p className="text-gray-500 text-lg">
                            No posts found. Try a different search term.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default page;