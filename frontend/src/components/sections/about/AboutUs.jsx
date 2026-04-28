import React from 'react'

const AboutUs = () => {
  return (
    <section className="py-24 bg-white-50 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-between min-h-[600px]">
            <div className="space-y-8">
              <h2 className="text-[48px] font-normal text-black-400">
                Who We <span className="font-bold text-black-800">Are?</span>
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

            <div className="mt-12">
              <p className="text-[34px] italic font-medium text-black-400 leading-[1.3]">
                Our focus remains on delivering <br />
                <span className="font-semibold text-black-800">practical, scalable</span>, and <br />
                <span className="font-bold text-black-800">reliable</span> systems that align with real business needs.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 h-[600px] rounded-[2px] overflow-hidden">
            <img 
              src="/about-us-who.png" 
              alt="Who We Are" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
