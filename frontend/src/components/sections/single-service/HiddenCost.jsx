import React from 'react'

const HiddenCost = () => {
  const points = [
    {
      img: "/singleservice/webdev/hc3.png",
      title: "Systems become slower as usage increases"
    },
    {
      img: "/singleservice/webdev/hc4.png",
      title: "Systems become slower as usage increases"
    },
    {
      img: "/singleservice/webdev/hc5.png",
      title: "User journeys break under edge cases"
    },
    {
      img: "/singleservice/webdev/hc6.png",
      title: "Integrations fail or become unreliable"
    }
  ]

  return (
    <section className="w-full py-10 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1520px] px-6 xl:px-0">
        {/* Header Section */}
        <div className="mb-[60px] flex flex-col items-center text-center">
          <h2 className="max-w-[698px] text-[32px] md:text-[48px] leading-[1.2] tracking-tight text-black-400">
            The Hidden <span className="font-bold text-black-900">Cost</span> of Poorly <br className="hidden md:block" />
            Built <span className="font-bold text-black-900">Applications</span>
          </h2>
          <p className="mt-[10px] max-w-[648px] text-[16px] leading-[26px] text-black-400">
            Most digital products don’t fail immediately—they degrade over time.
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-center w-full">
          {/* Large Mockups Grid */}
          <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto">
            {/* Left Large Mockup */}
            <div className="h-[300px] md:h-[460px] w-full md:w-[400px] lg:w-[497px] relative rounded-[2px] overflow-hidden border border-white-500 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
              <img 
                src="/singleservice/webdev/hc1.png" 
                alt="System Visualization 1" 
                className="h-full w-full object-cover rounded-[2px]"
              />
            </div>

            {/* Middle Large Mockup */}
            <div className="h-[300px] md:h-[460px] w-full md:w-[400px] lg:w-[497px] relative rounded-[2px] overflow-hidden border border-white-500 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
              <img 
                src="/singleservice/webdev/hc2.png" 
                alt="System Visualization 2" 
                className="h-full w-full object-cover rounded-[2px]"
              />
            </div>
          </div>

          {/* Right List */}
          <div className="flex flex-col gap-[20px] w-full lg:w-[400px]">
            {points.map((point, index) => (
              <div key={index} className="flex gap-[16px] items-center">
                <div className="h-16 w-16 md:h-[100px] md:w-[100px] shrink-0 rounded-[2px] overflow-hidden border border-white-500 shadow-sm">
                  <img 
                    src={point.img} 
                    alt={point.title} 
                    className="h-full w-full object-cover rounded-[2px]"
                  />
                </div>
                <p className="text-[18px] md:text-[24px] font-medium leading-tight text-black">
                  {point.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HiddenCost
