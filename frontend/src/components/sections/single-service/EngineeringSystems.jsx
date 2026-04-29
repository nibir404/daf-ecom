import React from 'react'

const EngineeringSystems = () => {
  const systems = [
    {
      title: "System Framing",
      desc: "We define boundaries, dependencies, and long-term constraints before execution begins.",
      badgeBg: "bg-teal-500",
      badgeText: "text-teal-900"
    },
    {
      title: "Interaction Design",
      desc: "We structure how users, data, and processes interact within the system.",
      badgeBg: "bg-gold-500",
      badgeText: "text-gold-900"
    },
    {
      title: "Controlled Dev Cycles",
      desc: "We build in stages where each release is usable, testable, and stable.",
      badgeBg: "bg-purple-200",
      badgeText: "text-purple-900"
    },
    {
      title: "Dependency Management",
      desc: "We ensure integrations, APIs, and services work cohesively without creating fragility.",
      badgeBg: "bg-orange-200",
      badgeText: "text-orange-900"
    },
    {
      title: "Stability Verification",
      desc: "We test under realistic conditions not just ideal scenarios.",
      badgeBg: "bg-success-200",
      badgeText: "text-success-900"
    },
    {
      title: "Evolution Planning",
      desc: "We design for change, ensuring the system can adapt without rework.",
      badgeBg: "bg-info-100",
      badgeText: "text-info-900"
    }
  ]

  return (
    <section className="w-full bg-black-900 py-[120px]">
      <div className="mx-auto w-full max-w-[1920px] px-[200px]">
        <div className="flex gap-[60px] items-center w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-[16px] w-[500px]">
            <h2 className="text-[48px] leading-[1.1] tracking-tight text-white-700">
              <span className="font-bold text-white-50">Engineering</span> Systems, <br />
              Not Just <span className="font-bold text-white-50">Features</span>
            </h2>
            <p className="max-w-[440px] text-[16px] leading-[26px] text-white-700">
              We treat every product as a system of interactions, dependencies, and future states.
            </p>
          </div>

          {/* Right Grid */}
          <div className="flex-1 grid grid-cols-3">
            {systems.map((system, index) => (
              <div 
                key={index} 
                className={`h-[250px] p-[24px] flex flex-col justify-between 
                  ${index < 3 ? 'border-b' : ''} 
                  ${index % 3 !== 2 ? 'border-r' : ''} 
                  border-white-50/10`}
              >
                <div className={`px-[16px] py-[6px] rounded-[30px] border border-white-500/10 text-center text-[14px] font-medium ${system.badgeBg} ${system.badgeText}`}>
                  {system.title}
                </div>
                <p className="text-[14px] leading-[22px] text-white-50">
                  {system.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineeringSystems
