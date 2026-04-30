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
          loading="lazy"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/40 via-transparent to-black-900" />
      </div>

      <div className="max-w-[1520px] mx-auto px-6 xl:px-0 relative z-10 flex flex-col justify-start pt-[50px] min-h-[600px] md:min-h-[820px]">
        {/* Main Content Group */}
        <div className="max-w-[1000px]">
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-normal text-white-50 leading-[1.2] mb-6">
            Over Two Decades of <span className="font-bold">Experience</span>,<br className="hidden md:block" />
            <span className="font-bold">Evolving</span> for The Future
            <span className="block md:inline-block align-middle mt-4 md:mt-0 md:ml-4">
               <img 
                 src="/aboutpage/HeroTitleImg.png" 
                 alt="accent" 
                 className="h-[30px] md:h-[45px] w-[180px] md:w-[269px] object-cover rounded-[2px] opacity-80" 
                 loading="lazy"
               />
            </span>
          </h1>
          
          <p className="text-[20px] text-white-50 leading-[30px] max-w-[868px] font-normal">
            Since 2000, Daffodil Web & E-Commerce has supported businesses with reliable digital solutions, 
            building long-term relationships through consistent delivery and practical execution.
          </p>
        </div>

        {/* Bottom Right Supporting Text */}
        <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-10 lg:right-6 xl:right-0 max-w-[614px] lg:text-right">
          <p className="text-[18px] md:text-[20px] text-white-50 leading-[1.5] font-normal">
            Today, with expanded capabilities across web platforms, commerce systems, and advanced digital solutions, 
            we continue to help organizations grow with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
