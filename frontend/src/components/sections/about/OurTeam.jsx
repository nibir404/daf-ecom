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
      <div className="max-w-[1920px] mx-auto px-[200px]">
        <div className="flex flex-col lg:flex-row gap-[60px] w-[1520px] items-start">
          {/* Left Side: Sticky Title (624px width) */}
          <div className="w-full lg:w-[624px] shrink-0 lg:sticky lg:top-[120px]">
            <div className="space-y-6">
              <h2 className="text-[48px] font-normal leading-tight text-black-400">
                The People Behind
                Daffodil <span className="font-bold text-black-500">Web</span> and <span className="font-bold text-orange-600">Ecommerce</span>
              </h2>
              <p className="text-[16px] text-black-400 max-w-[400px]">
                Our values shape how we design, build, and grow Daffodil, from product decisions to how we treat users.
              </p>
            </div>
          </div>

          {/* Right Side: Team Grid (836px width to maintain 20px gap strictly) */}
          <div className="w-[836px]">
            <div className="grid grid-cols-2 gap-[20px]">
              {team.map((member, index) => (
                <div key={index} className="relative group overflow-hidden w-[408px] h-[514px] shrink-0">
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Name Card - Specific Positioning from Figma */}
                  <div className="absolute bg-white-50 flex flex-col gap-[4px] items-start justify-center left-[10px] p-[20px] rounded-[2px] top-[408px] w-[388px] border border-black-100/5 shadow-sm group-hover:top-[398px] transition-all duration-500">
                    <h3 className="font-bold text-[24px] text-black-500 whitespace-nowrap leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[16px] text-black-400 w-full">
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
