import React from 'react'

const OurTeam = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "Product Lead",
      photo: "/aboutpage/People1.png"
    },
    {
      name: "Sarah Kim",
      role: "Engineering Lead",
      photo: "/aboutpage/People2.png"
    },
    {
      name: "Joseph Denver",
      role: "Sr. Staff Engineer",
      photo: "/aboutpage/People3.png"
    },
    {
      name: "David Kemel",
      role: "Jr. Full Stack Engineer",
      photo: "/aboutpage/People4.png"
    }
  ]

  return (
    <section className="py-[120px]">
      <div className="max-w-[1520px] mx-auto px-6 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[60px] items-start">
          {/* Left Side: Sticky Title */}
          <div className="w-full lg:w-[624px] shrink-0 lg:sticky lg:top-[120px]">
            <div className="space-y-6">
              <h2 className="text-[32px] md:text-[48px] font-normal leading-tight text-black-400">
                The People Behind
                Daffodil <span className="font-bold text-black-500">Web</span> and <span className="font-bold text-orange-600">Ecommerce</span>
              </h2>
              <p className="text-[16px] text-black-400 max-w-[400px]">
                Our values shape how we design, build, and grow Daffodil, from product decisions to how we treat users.
              </p>
            </div>
          </div>

          {/* Right Side: Team Grid */}
          <div className="w-full lg:flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {team.map((member, index) => (
                <div key={index} className="relative group overflow-hidden w-full aspect-[408/514] shrink-0">
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Name Card */}
                  <div className="absolute bg-white-50 flex flex-col gap-[4px] items-start justify-center left-[10px] right-[10px] p-[20px] rounded-[2px] bottom-[10px] lg:bottom-auto lg:top-[408px] border border-black-100/5 shadow-sm lg:group-hover:top-[398px] transition-all duration-500">
                    <h3 className="font-bold text-[20px] md:text-[24px] text-black-500 whitespace-nowrap leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-black-400 w-full">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
