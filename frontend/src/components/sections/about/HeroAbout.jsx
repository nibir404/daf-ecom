import React from 'react'

const HeroAbout = () => {
  return (
    <section className="hero-section relative w-full min-h-[820px] bg-black-900 overflow-hidden pt-20">
      {/* Background Image with Pattern */}
      <div className="absolute inset-0 opacity-20 flex items-center justify-center">
        <img 
          src="/about-hero-bg.png" 
          alt="pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Flare Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1921px] h-[409px] pointer-events-none">
        <img 
          src="/about-hero-flare.svg" 
          alt="flare" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1520px] mx-auto px-6 md:px-0 relative z-10 flex flex-col justify-center min-h-[740px]">
        <div className="max-w-[934px]">
          <h1 className="text-[48px] md:text-[64px] font-normal text-white-50 leading-[1.1] mb-6">
            Over Two Decades of <span className="font-bold">Experience</span>, <br />
            <span className="font-bold text-orange-600">Evolving</span> for The Future
            <span className="inline-block align-middle ml-4">
               <img src="/about-hero-accent.png" alt="accent" className="h-[45px] w-auto inline-block rounded-[2px]" />
            </span>
          </h1>
          
          <p className="text-[18px] md:text-[20px] text-white-50/80 leading-[1.6] max-w-[868px]">
            Since 2000, Daffodil Web & E-Commerce has supported businesses with reliable digital solutions, 
            building long-term relationships through consistent delivery and practical execution.
          </p>
        </div>

        <div className="mt-auto pb-20 flex justify-end">
           <p className="text-[18px] md:text-[20px] text-white-50/80 leading-[1.6] max-w-[614px] text-right">
            Today, with expanded capabilities across web platforms, commerce systems, and advanced digital solutions, 
            we continue to help organizations grow with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
