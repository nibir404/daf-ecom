import React from 'react'

const WorkBeyondDemo = () => {
  const impacts = [
    {
      number: '01',
      title: 'Systems remain stable under increasing load',
      description: 'As user traffic, data volume, or transactions grow, the system continues to perform without slowdowns or failures. This ensures consistent availability during peak usage, preventing revenue loss and user drop-offs.'
    },
    {
      number: '02',
      title: 'Changes can be implemented without breaking existing functionality',
      description: 'New features, updates, or integrations can be introduced without disrupting what already works. This reduces regression issues, shortens release cycles, and allows your product to evolve without constant rework.'
    },
    {
      number: '03',
      title: 'Users complete tasks faster with fewer errors',
      description: 'Improved interaction design and system logic reduce confusion and unnecessary steps. As a result, users can achieve their goals more efficiently, leading to higher satisfaction, better retention, and fewer support requests.'
    },
    {
      number: '04',
      title: 'Operational dependencies are reduced',
      description: 'Manual processes, workarounds, and reliance on multiple disconnected tools are minimized. Teams can operate more independently, with less need for constant coordination or technical intervention.'
    },
    {
      number: '05',
      title: 'Growth does not require rebuilding from scratch',
      description: 'The system is structured to accommodate expansion—whether it\'s new features, markets, or user segments—without needing a full rewrite. This protects long-term investment and lowers future development costs.'
    }
  ]

  return (
    <section className="relative w-full bg-white-500 py-10 lg:py-[120px] overflow-hidden min-h-[1034px]">
      {/* Background Flare - Strictly 1920px x 440px anchored to bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1920px] h-[440px] pointer-events-none z-0">
        <img 
          src="/singleservice/webdev/flare.svg" 
          alt="" 
          className="absolute inset-0 w-full h-full max-w-none object-bottom translate-y-[1px]"
          loading="lazy"
        />
      </div>

      <div className="mx-auto w-full max-w-[1520px] px-6 xl:px-0 relative z-10">
        {/* Header Row */}
        <div className="mb-[60px] flex flex-col lg:flex-row items-start justify-between w-full gap-6">
          <p className="max-w-[413px] text-[16px] leading-[26px] text-black-400 order-2 lg:order-1">
            This service is relevant when reliability, scalability, and long-term usability matter more than quick releases.
          </p>
          <h2 className="text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-black-400 lg:text-right order-1 lg:order-2 max-w-[623px]">
            When Your <span className="font-bold text-black-900">Product</span> Needs to{' '}
            <br className="hidden md:block" />
            Work Beyond the <span className="font-bold text-black-900">Demo</span>
          </h2>
        </div>

        {/* Impact Items - Full Width */}
        <div className="flex flex-col h-auto lg:h-[620px]">
          {impacts.map((item, index) => (
            <div 
              key={index} 
              className={`group flex flex-col lg:flex-row lg:items-center justify-between gap-[24px] py-8 lg:py-0 lg:h-[124px] relative w-full ${
                index < impacts.length - 1 ? 'border-b border-white-600' : ''
              }`}
            >
              {/* Left Side: Number and Title */}
              <div className="flex items-center gap-[24px] font-medium shrink-0">
                <span className="text-[24px] md:text-[36px] text-black text-right w-[40px] md:w-[60px] shrink-0" style={{ fontWeight: 510 }}>
                  {item.number}
                </span>
                <span className="text-[18px] md:text-[24px] text-black" style={{ fontWeight: 510 }}>
                  {item.title}
                </span>
              </div>

              {/* Right Side: Description */}
              <p className="text-[14px] md:text-[16px] leading-[21px] text-black-400 max-w-[535px] font-bold lg:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkBeyondDemo
