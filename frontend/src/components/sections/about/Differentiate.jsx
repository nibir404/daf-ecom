import React from 'react'

const Differentiate = () => {
  const features = [
    {
      title: "Established Industry Experience",
      description: "Our long-standing presence reflects reliability, consistency, & deep domain understanding built over years.",
      icon: "/aboutpage/about-diff-office.svg"
    },
    {
      title: "Data-Driven Strategies",
      description: "We focus on data and market insights to ensure our solutions are practical and yield results.",
      icon: "/aboutpage/about-diff-chart.svg"
    },
    {
      title: "Scalable Technical Solutions",
      description: "We build systems that grow with your business, focusing on security and performance.",
      icon: "/aboutpage/about-diff-code.svg"
    },
    {
      title: "Integrated Workflows",
      description: "Our approach simplifies complex tasks through well-structured and connected workflows.",
      icon: "/aboutpage/about-diff-structure.svg"
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-0">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-[40px] md:text-[48px] font-normal text-black-400">
            What Makes Us <span className="font-bold text-black-800">Different</span>
          </h2>
          <p className="text-[16px] text-black-400 max-w-[648px] mx-auto">
            Experience, consistency, and an integrated approach to digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white-100 p-10 flex flex-col items-center text-center space-y-10 min-h-[338px] group transition-all duration-500 hover:bg-black-800"
            >
              <div className="w-[60px] h-[60px] bg-white-50 flex items-center justify-center rounded-[10px] shadow-lg transition-transform duration-500 group-hover:scale-110">
                <img src={feature.icon} alt={feature.title} className="w-[30px] h-[30px]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-[20px] font-semibold text-black-800 group-hover:text-white-50 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-black-400 group-hover:text-white-50/70 transition-colors duration-500 leading-[1.5]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiate
