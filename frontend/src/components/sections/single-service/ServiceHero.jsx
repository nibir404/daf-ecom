import React from 'react'
import Button from '../../ui/Button'

const ServiceHero = ({ data }) => {
  return (
    <section className="relative w-full overflow-hidden pt-[60px] pb-[40px] h-[900px] bg-no-repeat">
      {/* Background Flare - Bottom Positioned as per Figma */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] pointer-events-none z-0">
        <img 
          src="/singleservice/webdev/SingleServiceWebHero.png" 
          alt="" 
          className="w-full opacity-100"
        />
      </div>

      <div className="max-w-[1520px] mx-auto px-6 xl:px-0 relative text-center z-10">
        {/* Content Wrapper */}
        <div className="mx-auto max-w-[1100px] mb-20">
          <h1 className="mb-6 text-[32px] md:text-[48px] lg:text-[64px] leading-[1.2] tracking-tight text-black-400">
            <span className="font-bold text-black-900">Web</span> & <span className="font-bold text-black-900">Mobile</span> Applications Built to Withstand Real Usage
          </h1>
          <p className="mx-auto mb-10 max-w-[850px] text-[20px] leading-[1.5] text-black-400/80">
            We design and engineer digital products that remain stable under growth, adapt to changing requirements, and deliver consistent performance across platforms.
          </p>

          <div className="flex items-center justify-center gap-[16px]">
            <Button variant="primary" size="lg">
              {data.primaryCTA}
            </Button>
            <span className="text-[20px] text-black-400/60 font-sf-pro">or</span>
            <Button 
              variant="tertiary" 
            >
              {data.tertiaryCTA}
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServiceHero
