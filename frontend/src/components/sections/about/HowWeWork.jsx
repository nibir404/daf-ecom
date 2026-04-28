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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-0">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-[40px] md:text-[48px] font-normal text-black-400">
            How We <span className="font-bold text-black-800">Work</span>
          </h2>
          <p className="text-[16px] text-black-400 max-w-[648px] mx-auto">
            Experience, consistency, and an integrated approach to digital solutions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-0 left-0 w-full h-[179px] hidden md:flex items-center justify-center opacity-30 pointer-events-none">
             <img src="/about-work-path.svg" alt="process path" className="w-[1269px] h-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white-50 p-8 flex flex-col items-start space-y-6 min-h-[242px] border border-black-50/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-[20px] font-medium text-black-800 leading-tight">
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
    </section>
  )
}

export default HowWeWork
