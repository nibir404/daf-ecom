import React from 'react'

const MissionVission = () => {
  return (
    <section className="py-24 bg-black-900 text-white-50 overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-[1520px] mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start md:items-center">
          {/* Left Side: Title */}
          <div className="w-full md:w-1/3">
            <h2 className="text-[40px] md:text-[48px] font-normal leading-tight mb-4">
              <span className="text-white-50/60">Our</span> <span className="font-bold">Mission</span> <br />
              <span className="text-white-50/60">and</span> <span className="font-bold text-orange-600">Vision</span>
            </h2>
            <p className="text-[16px] text-white-50/60 max-w-[320px]">
              Guided by long-term relationships and continuous improvement.
            </p>
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-2/3 space-y-16">
            {/* Vision */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-teal-500 border border-white/10 rounded-full">
                <span className="text-[14px] font-medium text-teal-900">Vision</span>
              </div>
              <p className="text-[28px] md:text-[34px] italic font-normal leading-[1.3] text-white-50">
                To achieve excellence in customer service through strong coordination across teams and consistent delivery standards.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-gold-500 border border-white/10 rounded-full">
                <span className="text-[14px] font-medium text-gold-900">Mission</span>
              </div>
              <p className="text-[28px] md:text-[34px] italic font-normal leading-[1.3] text-white-50">
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
