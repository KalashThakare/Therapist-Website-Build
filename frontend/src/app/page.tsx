import React from 'react'
import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import HowWeHelp from '@/components/HowWeHelp';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import StatsSection from '@/components/stats';
import HowIHelp from '@/components/HowIHelp';
import ScheduleConsultation from '@/components/ScheduleConsultation';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowIHelp />
      <ScheduleConsultation />
      <About />
      <Testimonials />
    </div>
  )
}

export default Home;