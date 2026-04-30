import React from 'react'

const ExpectedImpact = () => {
  const impacts = [
    {
      id: "01",
      title: "Systems remain stable under increasing load",
      description: "As user traffic, data volume, or transactions grow, the system continues to perform without slowdowns or failures. This ensures consistent availability during peak usage, preventing revenue loss and user drop-offs."
    },
    {
      id: "02",
      title: "Changes can be implemented without breaking existing functionality",
      description: "New features, updates, or integrations can be introduced without disrupting what already works. This reduces regression issues, shortens release cycles, and allows your product to evolve without constant rework."
    },
    {
      id: "03",
      title: "Users complete tasks faster with fewer errors",
      description: "Improved interaction design and system logic reduce confusion and unnecessary steps. As a result, users can achieve their goals more efficiently, leading to higher satisfaction, better retention, and fewer support requests."
    },
    {
      id: "04",
      title: "Operational dependencies are reduced",
      description: "Manual processes, workarounds, and reliance on multiple disconnected tools are minimized. Teams can operate more independently, with less need for constant coordination or technical intervention."
    },
    {
      id: "05",
      title: "Growth does not require rebuilding from scratch",
      description: "The system is structured to accommodate expansion—whether it’s new features, markets, or user segments—without needing a full rewrite. This protects long-term investment and lowers future development costs."
    }
  ]

  return (
    <section className="w-full py-[120px] relative overflow-hidden">
      {/* Background Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[440px] pointer-events-none opacity-50">
        <img 
          src="/singleservice/webdev/flare.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mx-auto w-full max-w-[1920px] px-[200px] relative z-10">
        {/* Header Row */}
        <div className="mb-[60px] flex items-start justify-between w-full">
          <p className="max-w-[413px] text-[16px] leading-[26px] text-black-400">
            This service is relevant when reliability, scalability, and long-term usability matter more than quick releases.
          </p>
          <h2 className="text-[48px] leading-[1.1] tracking-tight text-black-400 text-right max-w-[623px]">
            When Your <span className="font-bold text-black-900">Product</span> Needs to <br />
            Work Beyond the <span className="font-bold text-black-900">Demo</span>
          </h2>
        </div>

        {/* Impact List */}
        <div className="flex flex-col w-full">
          {impacts.map((impact, index) => (
            <div 
              key={impact.id} 
              className={`flex items-center gap-[24px] py-[40px] border-b border-white-600 group cursor-default ${index === impacts.length - 1 ? 'border-none' : ''}`}
            >
              {/* Number and Title Container */}
              <div className="flex items-center gap-[24px] flex-1">
                <span className="text-[36px] font-medium text-black-900 leading-none w-[60px] group-hover:text-orange-600 transition-colors duration-300">
                  {impact.id}
                </span>
                <h3 className="text-[24px] font-medium text-black-900 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                  {impact.title}
                </h3>
              </div>

              {/* Description */}
              <div className="w-[535px] shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                <p className="text-[16px] leading-[21px] text-black-400 font-bold">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpectedImpact
