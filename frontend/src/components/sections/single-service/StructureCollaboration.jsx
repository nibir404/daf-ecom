import React from 'react'

const StructureCollaboration = () => {
  const models = [
    {
      title: "Defined Delivery Model",
      desc: "For projects with clear scope and predictable outcomes.",
      icon: "/singleservice/webdev/align-horizontal-justify-start.svg"
    },
    {
      title: "Integrated Team Model",
      desc: "For companies that need continuous development with tight collaboration.",
      icon: "/singleservice/webdev/align-horizontal-center.svg"
    },
    {
      title: "Adaptive Model",
      desc: "For products that evolve based on user feedback and changing priorities.",
      icon: "/singleservice/webdev/align-horizontal-justify-end.svg"
    }
  ]

  return (
    <section className="w-full bg-white py-10 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1520px] px-6 xl:px-0">
        {/* Header */}
        <div className="mb-[60px] flex flex-col items-center text-center">
          <h2 className="max-w-[698px] text-[32px] md:text-[48px] leading-[1.2] tracking-tight text-black-400">
            Structured <span className="font-bold text-black-900">Collaboration</span>,<br className="hidden md:block" />
            <span className="font-bold text-black-900">Not</span> Just Outsourcing
          </h2>
          <p className="mt-[10px] max-w-[648px] text-[16px] leading-[26px] text-black-400">
            We align our working model with how your product evolves.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row gap-[10px] items-stretch w-full">
          {models.map((model, index) => (
            <div 
              key={index} 
              className="flex-1 bg-white-300 p-6 md:p-[40px] flex flex-col items-center text-center gap-6 md:gap-[40px]"
            >
              {/* Icon Container */}
              <div className="size-[60px] bg-white-50 rounded-[10px] flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.15)] border-2 border-white/40">
                <img 
                  src={model.icon} 
                  alt={model.title} 
                  className="size-[30px]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[20px] font-medium text-black leading-tight">
                  {model.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-black-400 max-w-[280px] mx-auto">
                  {model.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StructureCollaboration
