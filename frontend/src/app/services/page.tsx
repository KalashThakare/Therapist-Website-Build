"use client";
import React from 'react'
import Navbar from '@/components/navbar';
import HowIHelp from '@/components/HowIHelp';
import Footer from '@/components/footer';
import Link from 'next/link';
import {ChevronRight} from "lucide-react"

const Services = () => {
  return (
    <div className='bg-gray-50'>
        <Navbar />
        <div className='max-w-7xl mx-auto px-16 pt-10 flex items-center '>
            <Link href={"/"} className='text-2xl text-slate-800'>Home</Link>
            <ChevronRight className='text-slate-800 text-2xl' />
            <span className='text-2xl text-slate-800'>Therapies</span>
        </div>
        <HowIHelp />
        <Footer />
    </div>
  )
}

export default Services;