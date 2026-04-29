import React from 'react'

const ServiceTrust = () => {
  return (
    <section className="w-full bg-black-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-10 text-[14px] font-medium uppercase tracking-[0.2em] text-white/40">
          Trusted by startups, enterprises, and global teams
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo Placeholders - replace with actual logos if provided in assets */}
          <img src="/homepage/partner1.svg" alt="Partner 1" className="h-8 w-auto" />
          <img src="/homepage/partner2.svg" alt="Partner 2" className="h-8 w-auto" />
          <img src="/homepage/partner3.svg" alt="Partner 3" className="h-8 w-auto" />
          <img src="/homepage/partner4.svg" alt="Partner 4" className="h-8 w-auto" />
          <img src="/homepage/partner5.svg" alt="Partner 5" className="h-8 w-auto" />
          <img src="/homepage/partner6.svg" alt="Partner 6" className="h-8 w-auto" />
        </div>
      </div>
    </section>
  )
}

export default ServiceTrust
