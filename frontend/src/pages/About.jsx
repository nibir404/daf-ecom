import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CTA from '../components/sections/home/CTA'
import AboutUs from '../components/sections/about/AboutUs'
import HeroAbout from '../components/sections/about/HeroAbout'
import MissionVission from '../components/sections/about/MissionVission'
import Differentiate from '../components/sections/about/Differentiate'
import HowWeWork from '../components/sections/about/HowWeWork'
import OurTeam from '../components/sections/about/OurTeam'
import ClientsAndWorks from '../components/sections/about/ClientsAndWorks'
import Careers from '../components/sections/about/Careers'

function About() {
  return (
    <MainLayout>
      <Navbar/>
      <HeroAbout/>
      <AboutUs/>
      <Differentiate/>
      <HowWeWork/>
      <MissionVission/>
      <OurTeam/>
      <ClientsAndWorks/>
      <Careers/>
      <CTA/>
      <Footer/>
    </MainLayout>
  )
}

export default About