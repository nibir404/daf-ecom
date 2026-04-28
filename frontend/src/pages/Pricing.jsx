import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Pricing = () => {
  return (
    <MainLayout>
      <Navbar />
      <div className="py-32 text-center bg-white-50 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-[64px] font-bold text-black-800 mb-6">Pricing Plans</h1>
        <p className="text-[20px] text-black-400 max-w-2xl">
          Transparent pricing for businesses of all sizes. 
          Full page coming soon.
        </p>
      </div>
      <Footer />
    </MainLayout>
  )
}

export default Pricing
