import React from 'react'
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
      <Books />
      <Blogs />
      <FAQ />
      <MatthewQuote />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home;