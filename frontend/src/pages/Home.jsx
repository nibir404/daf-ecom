import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Hero from '../components/sections/home/Hero'
import Credibility from '../components/sections/home/Credibility'
import States from '../components/sections/home/State'
import ProblemWeSolve from '../components/sections/home/ProblemWeSolve'
import EarlyStart from '../components/sections/home/EarlyStart'
import Services from '../components/sections/home/Services'
import CaseStudies from '../components/sections/home/CaseStudies'
import HowItWorks from '../components/sections/home/HowItWorks'
import TechStack from '../components/sections/home/TechStack'
import WhyChooseUs from '../components/sections/home/WhyChooseUS'
import Pricing from '../components/sections/home/Pricing'
import Testimonials from '../components/sections/home/Testimonials'
import FAQ from '../components/sections/home/FAQ'
import CTA from '../components/sections/home/CTA'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AIFloatingBar from '../components/sections/home/AIFloatingBar'

function Home() {
  return (
    <MainLayout>
      <Navbar/>
      <Hero />
      <Credibility/>
      <States/>
      <ProblemWeSolve/>
      <EarlyStart/>
      <Services/>
      <CaseStudies/>
      <HowItWorks/>
      <TechStack/>
      <WhyChooseUs/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Footer/>
      <AIFloatingBar />
    </MainLayout>
  )
}

export default Home