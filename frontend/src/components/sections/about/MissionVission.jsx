import React from 'react'

const MissionVission = () => {
  return (
    <section className="py-[120px] bg-black-900 text-white-50 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-[200px]">
        <div className="flex flex-col md:flex-row items-center justify-between w-[1520px] h-[600px]">
          {/* Left Content (Mission & Vision Title) - 760px */}
          <div className="flex-1 flex flex-col items-start space-y-4 max-w-[760px]">
            <h2 className="text-[48px] font-normal leading-tight text-[#acacac]">
              Our <span className="font-bold text-[#fefefe]">Mission</span> and <span className="font-bold text-[#fefefe]">Vision</span>
            </h2>
            <p className="text-[16px] text-white-700 max-w-[400px]">
              Guided by long-term relationships and continuous improvement.
            </p>
          </div>

          {/* Right Content (Details) - 760px */}
          <div className="flex-1 flex flex-col justify-between h-full max-w-[760px]">
            {/* Vision */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-[#5be1d1] border border-[#f2f2f2] rounded-[30px]">
                <span className="text-[14px] font-medium text-[#265f58]">Vision</span>
              </div>
              <p className="text-[34px] italic font-normal leading-[43px] text-[#fefefe]">
                To achieve excellence in customer service through strong coordination across teams and consistent delivery standards.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-[#ceae65] border border-[#f2f2f2] rounded-[30px]">
                <span className="text-[14px] font-medium text-[#57492a]">Mission</span>
              </div>
              <p className="text-[34px] italic font-normal leading-[43px] text-[#fefefe]">
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
