import React from 'react'

const MissionVission = () => {
  return (
    <section className="py-[120px] bg-black-900 text-white-50 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 xl:px-0">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0 lg:min-h-[600px]">
          {/* Left Content (Mission & Vision Title) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-4">
            <h2 className="text-[32px] md:text-[48px] font-normal leading-tight text-white-700">
              Our <span className="font-bold text-white-50">Mission</span> and <span className="font-bold text-white-50">Vision</span>
            </h2>
            <p className="text-[16px] text-white-700 max-w-[400px]">
              Guided by long-term relationships and continuous improvement.
            </p>
          </div>

          {/* Right Content (Details) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-12 lg:gap-0 lg:min-h-[600px]">
            {/* Vision */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-teal-500 border border-white-500 rounded-[30px]">
                <span className="text-[14px] font-medium text-teal-900">Vision</span>
              </div>
              <p className="text-[24px] md:text-[34px] italic font-normal leading-tight md:leading-[43px] text-white-50">
                To achieve excellence in customer service through strong coordination across teams and consistent delivery standards.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-gold-500 border border-white-500 rounded-[30px]">
                <span className="text-[14px] font-medium text-gold-900">Mission</span>
              </div>
              <p className="text-[24px] md:text-[34px] italic font-normal leading-tight md:leading-[43px] text-white-50">
                To provide effective digital solutions that ensure client satisfaction, build lasting relationships, and adapt to emerging technologies for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVission
