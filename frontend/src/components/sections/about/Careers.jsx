import React from 'react'

const Careers = () => {
  return (
    <section className="py-24 bg-black-900 text-white-50 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 xl:px-0">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Icon/Badge */}
          <div className="w-[60px] h-[60px] bg-white-50 rounded-[10px] flex items-center justify-center border-2 border-white/40 shadow-lg">
            <img src="/aboutpage/job-search.svg" alt="job search" className="w-[30px] h-[30px]" />
          </div>

          {/* Title and Subtitle */}
          <div className="space-y-4">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white-50">Careers</h2>
            <p className="text-[16px] text-white-50/60 max-w-[577px] mx-auto">
              Building a team focused on growth, collaboration, and continuous learning.
            </p>
          </div>

          {/* Core Message */}
          <p className="text-[32px] md:text-[48px] font-normal leading-tight max-w-[1048px]">
            We are committed to creating an environment where individuals can grow their skills and contribute to meaningful digital solutions.
          </p>

          {/* Call to Action */}
          <p className="text-[20px] md:text-[24px] font-medium text-white-50/60">
            If you are interested in working on impactful projects and developing your expertise, explore opportunities to{" "}
            <span className="text-white-50 font-bold underline cursor-pointer hover:text-orange-600 transition-colors">
              join our team.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Careers
