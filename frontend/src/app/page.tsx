import React from 'react'
import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import HowWeHelp from '@/components/HowWeHelp';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowWeHelp />
      <Testimonials />
      <About />
    </div>
  )
}

export default Home;