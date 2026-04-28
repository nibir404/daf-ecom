import React from 'react'

const AboutUs = () => {
  return (
    <section className="py-[120px] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-[200px]">
        <div className="flex flex-col md:flex-row gap-[60px] items-center w-[1520px]">
          {/* Text Content (640px width) */}
          <div className="w-[640px] flex flex-col justify-between h-[600px] shrink-0">
            <div className="space-y-8">
              <h2 className="text-[48px] font-normal text-black-400">
                Who We <span className="font-bold text-black-900">Are?</span>
              </h2>
              <div className="space-y-6 text-[16px] text-black-400 leading-[1.6]">
                <p>
                  Daffodil Web & E-Commerce is one of the leading IT-enabled service providers in Bangladesh, with a history dating back to 2000. Over the years, we have built a strong reputation by delivering dependable solutions and maintaining long-term relationships with our clients.
                </p>
                <p>
                  As part of our continued growth, we have expanded our capabilities by integrating broader digital expertise, allowing us to deliver more comprehensive solutions across web platforms, e-commerce systems, and business applications.
                </p>
              </div>
            </div>

            <div className="">
              <p className="text-[34px] italic font-medium text-black-400 leading-[1.3]">
                Our focus remains on delivering <br />
                <span className="font-semibold text-black-900">practical, scalable</span>, and <br />
                <span className="font-bold text-black-900">reliable</span> systems that align with real business needs.
              </p>
            </div>
          </div>

          {/* Image Content (820px width) */}
          <div className="w-[820px] h-[600px] relative shrink-0">
            <div className="relative z-10 rounded-[2px] overflow-hidden h-full">
              <img 
                src="/aboutpage/WhoWeAreImg.png" 
                alt="Daffodil team working" 
                className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
