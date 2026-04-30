import React from 'react'

const ProductDemo = () => {
  const points = [
    {
      title: "Companies Expanding Digitally",
      description: "You’re adding new channels, users, or markets—and your system needs to support that growth."
    },
    {
      title: "Distributed or Global Teams",
      description: "You require predictable delivery, clear communication, and structured execution."
    },
    {
      title: "Technical Stakeholders Evaluating Vendors",
      description: "You need confidence in architecture, not just UI or speed of delivery."
    },
    {
      title: "Organizations Moving From Idea to Product",
      description: "You need something that won’t collapse when real users start interacting with it."
    },
    {
      title: "Teams Replacing Unstable Systems",
      description: "Your current platform creates friction, errors, or constant maintenance overhead."
    }
  ]

  return (
    <section className="relative w-full py-10 lg:py-[120px] bg-white-50">
      <div className="mx-auto w-full max-w-[1520px] px-6 xl:px-0">
        {/* Header Row */}
        <div className="mb-[60px] flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-6">
          <h2 className="text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-black-400">
            When Your <span className="font-bold text-black-900">Product</span> Needs to <br className="hidden md:block" />
            Work Beyond the <span className="font-bold text-black-900">Demo</span>
          </h2>
          <p className="max-w-[413px] text-[16px] leading-[26px] text-black-400">
            This service is relevant when reliability, scalability, and long-term usability matter more than quick releases.
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-[60px] items-stretch w-full">
          {/* Left: List */}
          <div className="flex flex-col w-full lg:w-[500px]">
            {points.map((point, index) => (
              <div 
                key={index} 
                className={`flex flex-col gap-[4px] py-[20px] border-b border-white-600 ${index === points.length - 1 ? 'border-none' : ''}`}
              >
                <h3 className="text-[20px] font-medium text-black">
                  {point.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-black-400">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex-1 relative min-h-[300px] lg:min-h-full rounded-[2px] overflow-hidden">
            <img 
              src="/singleservice/webdev/workbeyonddemo.png" 
              alt="Work Beyond the Demo" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDemo
