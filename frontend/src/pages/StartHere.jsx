import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import StartHero from '../components/sections/start-here/StartHero'
import IWant from '../components/sections/start-here/IWant'
import FAQ from '../components/sections/home/FAQ'

const StartHere = () => {
  return (
    <MainLayout>
      <Navbar />
      <StartHero/>
      <IWant/>
      <div className="h-[120px] w-full bg-white" />
      <FAQ 
        className="pt-[120px] pb-0"
        title={<>Your Questions, <span className="text-black font-bold">Answered</span></>}
        subtitle="Everything you need to know about starting your digital journey with Daffodil."
        faqs={[
          {
            question: "Which plan should I choose first?",
            answer: "If you're just starting, we recommend our 'Launch' bundle which includes a domain, hosting, and professional email setup in one unified package."
          },
          {
            question: "How long does it take to go live?",
            answer: "With our instant setup bundles, you can have your domain and basic hosting environment ready in less than 15 minutes."
          },
          {
            question: "Can I upgrade my plan later?",
            answer: "Yes, all our services are designed to scale. You can move from shared hosting to a VPS or Dedicated server seamlessly as your traffic grows."
          },
          {
            question: "Do you help with migration?",
            answer: "Absolutely. If you already have a domain or website elsewhere, our technical team will handle the migration process for you at no extra cost."
          }
        ]}
      />
      <div className="h-[120px] w-full" />
      <Footer />
    </MainLayout>
  )
}

export default StartHere
