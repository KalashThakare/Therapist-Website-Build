"use client";
import React from 'react';

const Blogs = () => {
  return (
    <div className="h-full bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#363c39] mb-6">
            Latest Blogs
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover helpful insights and strategies from Ellie Shumaker to improve your 
            relationships and personal well-being.
          </p>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="mb-8">
            <svg 
              className="w-24 h-24 text-gray-300 mx-auto mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
              />
            </svg>
          </div>
          <p className="text-xl text-gray-500 font-medium">
            No posts available at the moment.
          </p>
          <p className="text-gray-400 mt-2">
            Check back soon for new insights and articles!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;