"use client";
import React from 'react'
import Navbar from '@/components/navbar';
import HowIHelp from '@/components/HowIHelp';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ChevronRight } from "lucide-react"

const Services = () => {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-10 flex flex-wrap items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl'>
        <Link href={"/"} className='text-slate-800'>Home</Link>
        <ChevronRight className='text-slate-800' />
        <span className='text-slate-800'>Therapies</span>
      </div>

      <HowIHelp />
      <Footer />
    </div>
  )
}

export default Services;