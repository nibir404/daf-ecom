import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ServiceHero from '../components/sections/single-service/ServiceHero'
import Credibility from '../components/sections/home/Credibility'
import WorkBeyondDemo from '../components/sections/single-service/WorkBeyondDemo'
import HiddenCost from '../components/sections/single-service/HiddenCost'
import EngineeringSystems from '../components/sections/single-service/EngineeringSystems'
import EnablesBuild from '../components/sections/single-service/EnablesBuild'
import StructureCollaboration from '../components/sections/single-service/StructureCollaboration'
import ExpectedImpact from '../components/sections/single-service/ExpectedImpact'
import FAQ from '../components/sections/home/FAQ'
import CTA from '../components/sections/home/CTA'

const SingleService = () => {
  const { serviceId } = useParams()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])

  // Mock data for Web Development (to be expanded for other services)
  const serviceData = {
    'web-development': {
      hero: {
        title: "Web & Mobile Applications Built to Withstand Real Usage",
        subtitle: "We don't just build features; we engineer resilient systems that scale with your business and survive the complexities of the real world.",
        primaryCTA: "Discuss Your Idea",
        tertiaryCTA: "See How We Work",
        image: "/singleservice/webdev/SIngleServiceWebHero.png"
      },
      faqs: [
        {
          question: "How do you ensure the scalability of the applications you build?",
          answer: "We use cloud-native architectures, modular microservices, and rigorous load testing to ensure your application can handle growth without performance degradation."
        },
        {
          question: "Do you provide ongoing support after the initial launch?",
          answer: "Yes, we offer comprehensive maintenance and evolution plans to keep your system updated, secure, and aligned with your evolving business needs."
        },
        {
          question: "What technologies do you specialize in?",
          answer: "Our core stack includes React, Node.js, Python, and cloud infrastructure like AWS/GCP, focused on building robust and maintainable engineering systems."
        },
        {
          question: "How do you handle data security and privacy?",
          answer: "Security is baked into our engineering process from day one, following industry standards like SOC2 and GDPR compliance to protect your users' data."
        },
        {
          question: "Can you modernize an existing legacy system?",
          answer: "Yes, we specialize in transitioning fragmented legacy codebases into modern, scalable engineering systems through strategic refactoring and modernization."
        },
        {
          question: "How do you integrate with our internal teams?",
          answer: "We offer various collaboration models, from fully independent delivery to integrated team extension where we work directly within your engineering workflows."
        }
      ]
    }
  }

  const currentService = serviceData[serviceId] || serviceData['web-development']

  return (
    <div className="min-h-screen bg-white-300 font-sf-pro">
      <Navbar />
      
      <main>
        <ServiceHero data={currentService.hero} />
        <Credibility showSearchBar={false} />
        <WorkBeyondDemo />
        <HiddenCost />
        <EngineeringSystems />
        <EnablesBuild />
        <StructureCollaboration />
        <ExpectedImpact />
        <div className="h-[120px] w-full" />
        <FAQ 
          faqs={currentService.faqs}
          className="pt-0 pb-0"
        />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default SingleService
