"use client"
import React from 'react';

const Books = () => {
    const books = [
        {
            id: 1,
            title: "Baby Dolls & Ninja Swords: 6 True Tales of Play Therapy",
            author: "Ellie Shumaker",
            image: "/api/placeholder/300/400",
            status: "Available on Amazon",
            formats: "Formats: Kindle & Paperback",
            amazonUrl: "#"
        },
        {
            id: 2,
            title: "Frozen Tears: 15 Stories of Blindness & Hope after Abortion",
            author: "Ellie Shumaker, LCSW",
            image: "/api/placeholder/300/400",
            status: "Available on Amazon",
            formats: "Formats: Kindle & Paperback",
            amazonUrl: "#"
        },
        {
            id: 3,
            title: "99 Devotionals: Heart Reactions and Soul Stretches from the Book of Acts",
            author: "Ellie Shumaker",
            image: "/api/placeholder/300/400",
            status: "Available on Amazon",
            formats: "Format: Kindle format",
            amazonUrl: "#"
        },
        {
            id: 4,
            title: "Passion with Principle: How to Turn Romance into Lifelong Love",
            author: "",
            image: "/api/placeholder/300/400",
            status: "Coming Soon",
            formats: "Coming Soon",
            amazonUrl: null
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="rounded-lg bg-[#fcf3cc] text-black px-4 py-2 sm:px-6 md:px-8 lg:px-10 mb-5 inline-block">
                    <h2 className="text-xs sm:text-sm font-light">
                        Authored Works
                    </h2>
                </div>
                {/* Header */}
                <h1 className="text-5xl font-bold text-gray-800 mb-16">
                    Serena's Books
                </h1>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            {/* Book Cover */}
                            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                {book.id === 1 && (
                                    <div className="text-center p-6">
                                        <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">🎭</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Baby Dolls and Ninja Swords</h3>
                                        <p className="text-sm text-gray-600">6 True Tales of Play Therapy</p>
                                        <p className="text-sm text-gray-700 mt-4 font-medium">Ellie Shumaker</p>
                                    </div>
                                )}

                                {book.id === 2 && (
                                    <div className="text-center p-6 bg-gradient-to-b from-purple-200 to-orange-200">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Frozen Tears</h3>
                                        <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 opacity-70"></div>
                                        <p className="text-sm font-medium text-gray-700">15 Stories of Blindness Before & Hope After Abortion</p>
                                        <p className="text-sm text-gray-700 mt-4 font-medium">Ellie Shumaker, LCSW</p>
                                    </div>
                                )}

                                {book.id === 3 && (
                                    <div className="text-center p-6 bg-gradient-to-b from-red-800 to-red-900 text-white">
                                        <h3 className="text-lg font-bold mb-2">99 Devotionals</h3>
                                        <p className="text-sm mb-4">Heart Reactions and Soul Stretches from the Book of Acts</p>
                                        <div className="w-32 h-24 bg-orange-500 mx-auto mb-4 rounded flex items-center justify-center">
                                            <span className="text-3xl">🔥</span>
                                        </div>
                                        <p className="text-sm font-medium">Ellie Shumaker</p>
                                    </div>
                                )}

                                {book.id === 4 && (
                                    <div className="text-center p-6 bg-gray-200">
                                        <div className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                                            Coming Soon
                                        </div>
                                        <p className="text-lg font-medium text-gray-600">Cover Image Coming Soon</p>
                                    </div>
                                )}
                            </div>

                            {/* Book Info */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                                    {book.title}
                                </h3>

                                <div className="space-y-2 mb-6 flex-grow">
                                    <p className="text-sm text-gray-600">{book.status}</p>
                                    <p className="text-sm text-gray-600">{book.formats}</p>
                                </div>

                                {/* View on Amazon Button */}
                                {book.amazonUrl ? (
                                    <button
                                        className="w-full bg-[#bbdbdb] text-[#35586d] font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mt-auto"
                                        onClick={() => window.open(book.amazonUrl, '_blank')}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.045 18.02c9.001 6.636 20.722 4.668 27.017-1.634.686-.686.686-1.808 0-2.495-.686-.686-1.808-.686-2.495 0-4.668 4.668-13.254 6.123-19.877.961-.686-.519-1.634-.378-2.153.378-.519.686-.378 1.635.378 2.154l.13.088c.304.22.668.343 1.045.343.378 0 .742-.123 1.045-.343l-.09-.452zm23.91-6.636c-.686-.686-1.809-.686-2.495 0-1.982 1.982-4.841 3.437-8.279 3.437s-6.297-1.455-8.279-3.437c-.686-.686-1.809-.686-2.495 0-.686.686-.686 1.809 0 2.495 2.495 2.495 6.123 4.157 10.774 4.157s8.279-1.662 10.774-4.157c.686-.686.686-1.809 0-2.495zm-19.36-8.794c.686-.686.686-1.809 0-2.495-.686-.686-1.809-.686-2.495 0-1.982 1.982-3.089 4.668-3.089 7.506s1.107 5.524 3.089 7.506c.686.686 1.809.686 2.495 0 .686-.686.686-1.809 0-2.495-1.296-1.296-2.013-3.089-2.013-5.011s.717-3.715 2.013-5.011z" />
                                        </svg>
                                        <span>View on Amazon</span>
                                    </button>
                                ) : (
                                    <button
                                        className="w-full bg-gray-400 text-white font-medium py-3 px-4 rounded-lg cursor-not-allowed mt-auto"
                                        disabled
                                    >
                                        Coming Soon
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Books;