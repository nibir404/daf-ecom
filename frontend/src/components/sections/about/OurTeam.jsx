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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-0">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Sticky Title */}
          <div className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-32 space-y-6">
              <h2 className="text-[40px] md:text-[48px] font-normal leading-tight text-black-400">
                The People Behind <br />
                <span className="text-black-800">Daffodil <span className="font-bold">Web</span></span> and <span className="font-bold text-orange-600">Ecommerce</span>
              </h2>
              <p className="text-[16px] text-black-400 max-w-[400px]">
                Our values shape how we design, build, and grow Daffodil, from product decisions to how we treat users.
              </p>
            </div>
          </div>

          {/* Right Side: Team Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <div key={index} className="relative group overflow-hidden rounded-[2px] h-[514px]">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute bottom-[10px] left-[10px] right-[10px] bg-white-50 p-6 rounded-[2px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-[24px] font-bold text-black-800">{member.name}</h3>
                    <p className="text-[16px] text-black-400">{member.role}</p>
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
