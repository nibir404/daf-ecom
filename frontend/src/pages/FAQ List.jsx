import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Navbar from '../components/layout/Navbar'
import HeroFAQ from '../components/sections/faq-list/Hero-FAQ'
import ListFAQ from '../components/sections/faq-list/ListFAQ'
import CTA from '../components/sections/home/CTA'
import Footer from '../components/layout/Footer'

function FAQPage() {
  return (
    <MainLayout>
      <Navbar />
      <HeroFAQ />
      <ListFAQ />
      <CTA />
      <Footer />
    </MainLayout>
  )
}

export default FAQPage