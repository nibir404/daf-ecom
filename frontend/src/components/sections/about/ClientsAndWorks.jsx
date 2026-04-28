import React from 'react'

const ClientsAndWorks = () => {
  const works = [
    {
      title: "Corporate websites designed for strong digital presence",
      image: "/about-work-1.png"
    },
    {
      title: "E-commerce platforms optimized for performance and scalability",
      image: "/about-work-2.png"
    },
    {
      title: "Custom web systems for operational workflows",
      image: "/about-work-3.png"
    },
    {
      title: "Digital solutions that reduce manual effort and improve efficiency",
      image: "/about-work-4.png"
    }
  ]

  return (
    <section className="py-24 bg-white-50 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-[40px] md:text-[48px] font-normal text-black-400 leading-tight">
              Clients and <span className="font-bold text-black-800">Work</span>
            </h2>
            <p className="text-[16px] text-black-400 max-w-[358px]">
              Delivering solutions that improve operations and strengthen digital presence.
            </p>
          </div>
          <p className="text-[16px] text-black-400 max-w-[328px]">
            We have worked with organizations across various industries, delivering solutions that enhance efficiency and support growth.
          </p>
        </div>

        <div className="divide-y divide-black-50/10">
          {works.map((work, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-between py-8 relative overflow-hidden transition-all duration-500 hover:px-8"
            >
              <h3 className="text-[20px] md:text-[24px] font-semibold text-black-900 flex-1 max-w-[800px] relative z-10">
                {work.title}
              </h3>
              
              {/* Thumbnail Image on Hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0 w-[132px] h-[176px] shrink-0 rounded-[2px] overflow-hidden">
                <img 
                  src={work.image} 
                  alt="work thumbnail" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-black-900 w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsAndWorks
