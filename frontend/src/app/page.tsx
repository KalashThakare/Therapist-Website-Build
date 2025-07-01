"use client";
import React, { useState } from 'react'
import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import HowWeHelp from '@/components/HowWeHelp';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import StatsSection from '@/components/stats';
import HowIHelp from '@/components/HowIHelp';
import ScheduleConsultation from '@/components/ScheduleConsultation';
import Books from '@/components/books';
import Blogs from '@/components/blogs';
import FAQ from '@/components/Faq';
import MatthewQuote from '@/components/qute';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/footer';
import Topbar from '@/components/Topbar';
import {Popup} from '@/components/popup'; 

const Home = () => {
 

  return (
    <div>
      <Topbar />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowIHelp />
      <ScheduleConsultation />
      
      <div id="about">
        <About />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <Books />
      <div id='blog'>
        <Blogs />
      </div>
      
         
      <div id="faq">
        <FAQ />
      </div>
      
      <MatthewQuote />
      <ContactForm />
      <Footer />

      <Popup 
        delayMinutes={1}          
        autoShow={true}                                    
      />
    </div>
  )
}

export default Home;