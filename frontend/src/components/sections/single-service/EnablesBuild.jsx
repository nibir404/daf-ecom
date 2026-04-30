import React from 'react'

const EnablesBuild = () => {
  const capabilities = [
    "Customer-facing platforms with complex user flows",
    "Multi-device applications with synchronized experiences",
    "Data-driven dashboards and control panels",
    "Transactional systems with reliability requirements",
    "Internal tools that replace manual workflows",
    "Platforms that connect multiple services and data sources",
    "Systems that require continuous iteration and scaling"
  ]

  return (
    <section className="w-full py-10 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1520px] px-6 xl:px-0">
        {/* Header Section */}
        <div className="mb-[60px] flex flex-col items-center text-center">
          <h2 className="max-w-[698px] text-[32px] md:text-[48px] leading-[1.2] tracking-tight text-black-400">
            What This <span className="font-bold text-black-900">Enables</span> You to <span className="font-bold text-black-900">Build</span>
          </h2>
          <p className="mt-[10px] max-w-[648px] text-[16px] leading-[26px] text-black-400">
            We focus on systems that support real business operations—not isolated features.
          </p>
        </div>

        {/* List Content */}
        <div className="mx-auto max-w-[700px] flex flex-col w-full">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start md:items-center gap-[16px] py-[20px] border-b border-white-600 last:border-none"
            >
              <div className="shrink-0 size-[16px] text-black mt-1 md:mt-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12L8 8L4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12L12 8L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[18px] md:text-[24px] font-semibold italic text-black leading-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnablesBuild
