import React from 'react'

const HowWeWork = () => {
  const steps = [
    {
      title: "Understanding Requirements",
      description: "We begin by identifying business needs, challenges, and objectives."
    },
    {
      title: "Planning and Structuring",
      description: "We define a clear approach that aligns technology with business goals."
    },
    {
      title: "Execution and Integration",
      description: "We develop and implement solutions that fit seamlessly into existing systems."
    },
    {
      title: "Testing and Deployment",
      description: "Every solution is validated to ensure stability, performance, and security."
    },
    {
      title: "Continuous Support",
      description: "We provide ongoing improvements to ensure systems remain effective over time."
    }
  ]

  return (
    <section className="py-[120px] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-[200px]">
        <div className="flex flex-col gap-[60px] items-center w-[1520px]">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h2 className="text-[40px] md:text-[48px] font-normal text-black-400">
              How We <span className="font-bold text-black-800">Work</span>
            </h2>
            <p className="text-[16px] text-black-400 max-w-[648px] mx-auto">
              Experience, consistency, and an integrated approach to digital solutions.
            </p>
          </div>

          {/* Process Visualization Container */}
          <div className="flex flex-col items-center w-full">
            {/* Connecting Structure (SVG) */}
            <div className="w-full max-w-[1269px] mb-[0px]">
               <img 
                 src="/aboutpage/HowWeWrokImg.svg" 
                 alt="process connection" 
                 className="w-full h-auto"
               />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-[10px] w-full relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white-50 p-10 flex flex-col items-start space-y-6 h-[242px] border border-black-50/5 transition-all duration-300 hover:shadow-xl group"
                >
                  <h3 className="text-[20px] font-medium text-black-800 leading-tight group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-black-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
