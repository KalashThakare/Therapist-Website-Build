import React from 'react'
import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import HowWeHelp from '@/components/HowWeHelp';
import Testimonials from '@/components/Testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowWeHelp />
      <Testimonials />
    </div>
  )
}

export default Home;