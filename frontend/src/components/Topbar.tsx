"use client";
import { MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div>
        <div className="bg-[#fff0ec] border-b border-gray-200 py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-700">
            <div className="flex items-center space-x-1">
              <PhoneCall className="w-4 h-4" />
              <span>(323) 555-0192</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar