import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ServiceHero from '../components/sections/services/ServiceHero'
import AllServiceCards from '../components/sections/services/AllServiceCards'
import ServiceCTA from '../components/sections/services/ServiceCTA'

const Services = () => {
  return (
    <MainLayout>
      <Navbar />
      <ServiceHero />
      <AllServiceCards />
      <ServiceCTA />
      <Footer />
    </MainLayout>
  )
}

export default Services
