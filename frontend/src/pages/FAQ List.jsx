import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Navbar from '../components/layout/Navbar'
import HeroFAQ from '../components/sections/faq-list/Hero-FAQ'
import TotalFAQ from '../components/sections/faq-list/TotalFAQ'
import CTA from '../components/sections/home/CTA'
import Footer from '../components/layout/Footer'

function FAQPage() {
  return (
    <MainLayout>
      <Navbar />
      <HeroFAQ />
      <TotalFAQ />
      <CTA />
      <Footer />
    </MainLayout>
  )
}

export default FAQPage