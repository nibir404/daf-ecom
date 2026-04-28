import React from 'react'

const ClientsAndWorks = () => {
  const works = [
    {
      title: "Corporate websites designed for strong digital presence",
      image: "/aboutpage/about-work-1.png"
    },
    {
      title: "E-commerce platforms optimized for performance and scalability",
      image: "/aboutpage/about-work-2.png"
    },
    {
      title: "Custom web systems for operational workflows",
      image: "/aboutpage/about-work-3.png"
    },
    {
      title: "Digital solutions that reduce manual effort and improve efficiency",
      image: "/aboutpage/about-work-4.png"
    }
  ]

  return (
    <section className="py-[120px] bg-[#FEFEFE] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-[200px]">
        <div className="flex flex-col gap-[60px] w-[1520px]">
          {/* Header Block */}
          <div className="flex flex-col md:flex-row justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-[48px] font-normal text-black-400 leading-tight">
                Clients and <span className="font-bold text-black-800">Work</span>
              </h2>
              <p className="text-[16px] text-black-400 max-w-[358px]">
                Delivering solutions that improve operations and strengthen digital presence.
              </p>
            </div>
            <p className="text-[16px] text-black-400 max-w-[328px] text-right">
              We have worked with organizations across various industries, delivering solutions that enhance efficiency and support growth.
            </p>
          </div>

          {/* List Block */}
          <div className="divide-y divide-black-100/10">
            {works.map((work, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-between py-[24px] relative overflow-hidden transition-all duration-500"
              >
                <h3 className="text-[24px] font-medium text-black-900 flex-1 relative z-10 transition-all duration-300 group-hover:pl-4">
                  {work.title}
                </h3>
                
                {/* Thumbnail Image on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 w-[132px] h-[176px] shrink-0 rounded-[2px] overflow-hidden absolute right-0">
                  <img 
                    src={work.image} 
                    alt="work thumbnail" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative bottom line on hover */}
                <div className="absolute bottom-0 left-0 h-[1px] bg-black-900/10 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsAndWorks
