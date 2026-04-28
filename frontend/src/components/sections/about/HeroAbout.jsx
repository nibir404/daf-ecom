import React from 'react'

const HeroAbout = () => {
  return (
    <section className="hero-section relative w-full min-h-[820px] bg-black-900 overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/aboutpage/Heroimg.png" 
          alt="about hero background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/40 via-transparent to-black-900" />
      </div>

      <div className="max-w-[1520px] mx-auto px-6 md:px-0 relative z-10 flex flex-col justify-start pt-[80px] min-h-[820px]">
        {/* Main Content Group */}
        <div className="max-w-[1000px]">
          <h1 className="text-[48px] md:text-[64px] font-normal text-white-50 leading-[75px] mb-6">
            Over Two Decades of <span className="font-bold">Experience</span>,<br />
            <span className="font-bold">Evolving</span> for The Future
            <span className="inline-block align-middle ml-4">
               <img 
                 src="/aboutpage/HeroTitleImg.png" 
                 alt="accent" 
                 className="h-[45px] w-[269px] object-cover rounded-[2px] opacity-80" 
               />
            </span>
          </h1>
          
          <p className="text-[20px] text-white-50 leading-[30px] max-w-[868px] font-normal">
            Since 2000, Daffodil Web & E-Commerce has supported businesses with reliable digital solutions, 
            building long-term relationships through consistent delivery and practical execution.
          </p>
        </div>

        {/* Bottom Right Supporting Text */}
        <div className="absolute bottom-10 right-0 max-w-[614px] text-right">
          <p className="text-[20px] text-white-50 leading-[30px] font-normal">
            Today, with expanded capabilities across web platforms, commerce systems, and advanced digital solutions, 
            we continue to help organizations grow with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
