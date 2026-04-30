import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const navigate = useNavigate();
  const servicesList = [
    { 
      id: 'foundation', 
      name: 'Foundation', 
      title: 'Start With a Reliable Digital Foundation', 
      desc: 'Everything begins here your domain, hosting, and email. Fast to set up, reliable to scale.', 
      links: ['Domain Registration & Management', 'Web Hosting (Shared, Cloud, VPS)', 'Google Workspace', 'SSL & Security Basics'],
      icon: '/homepage/foundation.svg', 
      image: '/service-menu/Foundation.png',
      bgDecor: '/service-menu/FoundationServicemegamenubg1.png',
      activeBg: 'bg-purple-50',
      activeBorder: 'border-purple-100',
      activeText: 'text-purple-600',
      activeFilter: 'brightness(0) saturate(100%) invert(14%) sepia(92%) saturate(4854%) hue-rotate(264deg) brightness(85%) contrast(110%)'
    },
    { 
      id: 'strategy', 
      name: 'Strategy', 
      title: 'Define What to Build and Why It Matters', 
      desc: 'Before writing a single line of code, we align your business goals with the right technology, architecture, and execution plan.', 
      links: ['Product Strategy & Planning', 'Digital Transformation Consulting', 'System Architecture Design', 'Technology Advisory'],
      icon: '/homepage/strategy.svg', 
      image: '/service-menu/Strategy.png',
      bgDecor: '/service-menu/StrategyServicemegamenubg2.png',
      activeBg: 'bg-orange-100',
      activeBorder: 'border-orange-200',
      activeText: 'text-orange-600',
      activeFilter: 'brightness(0) saturate(100%) invert(32%) sepia(92%) saturate(1530%) hue-rotate(352deg) brightness(92%) contrast(98%)'
    },
    { 
      id: 'design', 
      name: 'Design', 
      title: 'Design Systems People Actually Use', 
      desc: 'We create user experiences that are intuitive, scalable, and aligned with real user behavior not assumptions.', 
      links: ['UX/UI Design', 'UX Audit & Optimization', 'SaaS & MVP Product Design', 'Design Systems'],
      icon: '/homepage/design.svg', 
      image: '/service-menu/Design.png',
      bgDecor: '/service-menu/DesignServicemegamenubg3.png',
      activeBg: 'bg-success-100',
      activeBorder: 'border-success-200',
      activeText: 'text-success-600',
      activeFilter: 'brightness(0) saturate(100%) invert(24%) sepia(100%) saturate(2469%) hue-rotate(100deg) brightness(85%) contrast(106%)'
    },
    { 
      id: 'development', 
      name: 'Development', 
      title: 'Build Secure, Scalable Digital Products', 
      desc: 'From web platforms to enterprise systems, we build reliable software designed for performance and long-term growth.', 
      links: ['Web & Mobile App Development', 'Custom Software Development', 'ERP & Business Systems', 'API & System Integration'],
      icon: '/homepage/development.svg', 
      image: '/service-menu/Development.png',
      bgDecor: '/service-menu/DevelopmentServicemegamenubg4.png',
      activeBg: 'bg-gold-100',
      activeBorder: 'border-gold-200',
      activeText: 'text-gold-600',
      activeFilter: 'brightness(0) saturate(100%) invert(43%) sepia(35%) saturate(743%) hue-rotate(7deg) brightness(96%) contrast(87%)'
    },
    { 
      id: 'automation', 
      name: 'AI and Automation', 
      title: 'Turn Manual Work into Intelligent Systems', 
      desc: 'We integrate AI and automation to improve efficiency, reduce cost, and unlock new capabilities.', 
      links: ['AI Solutions & Integration', 'Process Automation', 'Data & Machine Learning Systems', 'Intelligent Workflows'],
      icon: '/homepage/ai-magic.svg', 
      image: '/service-menu/AI.png',
      bgDecor: '/service-menu/AIServicemegamenubg5.png',
      activeBg: 'bg-teal-100',
      activeBorder: 'border-teal-200',
      activeText: 'text-teal-600',
      activeFilter: 'brightness(0) saturate(100%) invert(48%) sepia(19%) saturate(1385%) hue-rotate(124deg) brightness(94%) contrast(86%)'
    },
    { 
      id: 'growth', 
      name: 'Growth', 
      title: 'Drive Traffic, Conversion, and Measurable Growth', 
      desc: 'We optimize your digital presence to attract the right audience and turn users into customers.', 
      links: ['SEO & GEO Optimization', 'Performance Optimization', 'Conversion Rate Optimization', 'Analytics & Tracking'],
      icon: '/homepage/growth.svg', 
      image: '/service-menu/Growth.png',
      bgDecor: '/service-menu/GrowthServicemegamenubg6.png',
      activeBg: 'bg-alert-100',
      activeBorder: 'border-alert-200',
      activeText: 'text-alert-600',
      activeFilter: 'brightness(0) saturate(100%) invert(44%) sepia(89%) saturate(1830%) hue-rotate(27deg) brightness(97%) contrast(101%)'
    },
    { 
      id: 'maintain', 
      name: 'Maintain', 
      title: 'Keep Systems Running and Improving', 
      desc: 'We ensure your systems remain secure, stable, and continuously optimized as your business evolves.', 
      links: ['Maintenance & Monitoring', 'Technical Support', 'System Upgrades', 'Project Takeover'],
      icon: '/homepage/maintain.svg', 
      image: '/service-menu/Maintain.png',
      bgDecor: '/service-menu/MaintainServicemegamenubg7.png',
      activeBg: 'bg-coral-100',
      activeBorder: 'border-coral-200',
      activeText: 'text-coral-600',
      activeFilter: 'brightness(0) saturate(100%) invert(31%) sepia(32%) saturate(1450%) hue-rotate(318deg) brightness(93%) contrast(93%)'
    }
  ];

  const [activeService, setActiveService] = useState(servicesList[0]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-[17px] border-b border-black-50/5">
      <div className="max-w-[1520px] mx-auto flex justify-between items-center h-[80px] px-6 md:px-0 relative">
        <div className='brand-container flex items-center gap-[16px]'>
          <Link to="/" className="w-[169px] shrink-0">
            <img src="/Logo Container.png" alt="daf-logo" className="w-full" />
          </Link>
          <Link to="/start-here" className="flex items-center gap-[10px] px-[20px] py-[10px] h-[48px] text-[16px] font-bold text-black-400 hover:text-black-900 transition-colors">
            Start here
            <img src="/arrow-right.svg" alt="icon" className="w-4 h-4" />
          </Link>
        </div>

        <div className='primary-links flex h-full items-center'>
          <Link to="/about" className="px-[20px] py-[10px] text-[16px] font-normal text-black-400 hover:text-black-900 transition-colors">
            About us
          </Link>
          
          {/* Services Mega Menu */}
          <div className="group">
            <Link to="/services" className="flex items-center gap-[10px] px-[20px] py-[10px] text-[16px] font-bold text-black-900 hover:text-black-400 transition-colors">
              Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black-900">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Dropdown Container */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[4px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white-200 border border-white-600 rounded-[2px] flex p-[39px] gap-[10px] shadow-lg overflow-hidden w-[1300px] h-[570px] relative">
                
                {/* Background Decoration */}
                <img 
                  src={activeService.bgDecor} 
                  alt="decoration" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300"
                />

                {/* Column 1: Service Categories */}
                <div className="flex flex-col w-[300px] relative z-10">
                  {servicesList.map((service, idx) => (
                    <Link 
                      key={service.id} 
                      to={`/services#${service.id}`}
                      onMouseEnter={() => setActiveService(service)}
                      className={`flex items-center gap-[20px] w-[300px] p-[20px] rounded-[2px] border transition-all duration-200 ${
                        activeService.id === service.id 
                          ? `${service.activeBg} ${service.activeBorder}` 
                          : `border-transparent bg-transparent ${idx !== servicesList.length - 1 ? 'border-b-white-600' : ''} hover:bg-white-100`
                      }`}
                      style={{ borderBottomWidth: activeService.id === service.id ? '1px' : idx !== servicesList.length - 1 ? '1px' : '0px' }}
                    >
                      <div className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
                        <img 
                          src={service.icon} 
                          alt={service.name} 
                          className="w-full h-full object-contain transition-all duration-200" 
                          style={{ filter: activeService.id === service.id ? service.activeFilter : 'none' }}
                        />
                      </div>
                      <span className={`text-[20px] leading-[1] ${
                        activeService.id === service.id 
                          ? `font-medium ${service.activeText}` 
                          : 'font-normal text-black-900'
                      }`}>
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Column 2: Service Details & Links */}
                <div className="flex flex-col justify-between w-[600px] h-[490px] p-[19px] border border-white-500 bg-white-100 rounded-[2px] shrink-0 relative z-10">
                  {/* Links List */}
                  <div className="flex flex-col">
                    {activeService.links.map((link, index) => (
                      <Link 
                        key={index}
                        to={`/services/${link.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between py-[16px] px-[10px] rounded-[2px] border border-transparent hover:border-white-600 hover:bg-white-50 transition-colors group/link"
                      >
                        <span className="text-[16px] font-semibold text-black-400">{link}</span>
                            <div className="w-[16px] h-[16px] flex items-center justify-center group-hover:translate-x-1 transition-all">
                              <img 
                                src="/arrow-right.svg" 
                                alt="arrow" 
                                className="w-full h-full object-contain" 
                                style={{ filter: 'invert(27%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(88%)' }}
                              />
                            </div>
                      </Link>
                    ))}
                  </div>

                  {/* Title, Desc, CTA */}
                  <div className="flex flex-col gap-[24px] items-start w-full">
                    <div className="flex flex-col gap-[4px] w-full">
                      <h3 className="text-[20px] font-medium text-black-900 leading-[normal]" style={{ fontWeight: 510 }}>
                        {activeService.title}
                      </h3>
                      <p className="text-[14px] text-black-400 font-normal leading-[22px]">
                        {activeService.desc}
                      </p>
                    </div>
                    <Button variant="tertiary" className="text-black-900">
                      Book Strategy Call
                    </Button>
                  </div>
                </div>

                {/* Column 3: Feature Image */}
                <div className="w-[300px] h-[490px] border border-white-600 rounded-[2px] overflow-hidden shrink-0 bg-white-100 relative z-10">
                  <img src={activeService.image} alt={activeService.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>

              </div>
            </div>
          </div>

          <Link to="/pricing" className="px-[20px] py-[10px] text-[16px] font-normal text-black-400 hover:text-black-900 transition-colors">
            Pricing
          </Link>
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-[10px] px-[20px] py-[10px] text-[16px] font-normal text-black-400 hover:text-black-900 transition-colors group-hover:text-black-900">
              Resources
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black-400 group-hover:text-black-900 transition-colors">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-[4px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white-200 border border-white-600 rounded-[2px] flex flex-col w-[254px] p-[20px] shadow-lg">
                <Link to="/blog" className="flex items-center gap-[20px] pb-[20px] border-b border-white-600 hover:opacity-70 transition-opacity">
                  <div className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
                    <img src="/resources-menu/blog.svg" alt="Blog" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[20px] font-medium text-black-900">Blog</span>
                </Link>
                
                <Link to="/case-studies" className="flex items-center gap-[20px] py-[20px] border-b border-white-600 hover:opacity-70 transition-opacity">
                  <div className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
                    <img src="/resources-menu/case%20studies.svg" alt="Case Studies" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[20px] font-medium text-black-900 whitespace-nowrap">Case Studies</span>
                </Link>

                <Link to="/faq" className="flex items-center gap-[20px] py-[20px] border-b border-white-600 hover:opacity-70 transition-opacity">
                  <div className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
                    <img src="/resources-menu/faq.svg" alt="FAQ" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[20px] font-medium text-black-900">FAQ</span>
                </Link>

                <Link to="/privacy-policy" className="flex items-center gap-[20px] pt-[20px] hover:opacity-70 transition-opacity">
                  <div className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L3 7V12C3 17.5 7 22 12 22C17 22 21 17.5 21 12V7L12 2Z" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[20px] font-medium text-black-900">Privacy</span>
                </Link>
              </div>
            </div>

          </div>
        </div>


        <div className='secondary-links flex h-full items-center gap-[10px]'>
          <div className="group/explore">
            <Link to="/services" className="flex items-center gap-[10px] px-[20px] py-[10px] h-[48px] text-[16px] font-bold text-black-400 hover:text-black-900 transition-colors group-hover/explore:text-black-900">
              Explore
              <img src="/more.svg" alt="icon" className="w-4 h-4" />
            </Link>

            {/* Explore Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[4px] opacity-0 invisible group-hover/explore:opacity-100 group-hover/explore:visible transition-all duration-300 z-50">
              <div className="bg-white-300 border border-white-600 rounded-[2px] flex p-[20px] gap-[10px] shadow-lg overflow-hidden w-[1520px] h-[680px] relative">
                
                {/* Column 1: Combo Offer */}
                <div className="flex flex-col w-[390px] p-[20px] bg-white-50 border border-white-600 rounded-[2px] h-full gap-[30px] relative z-10">
                  <div className="flex flex-col gap-[16px] flex-grow">
                    {/* Tag */}
                    <div className="self-start px-[16px] py-[10px] bg-warning-50 rounded-[30px] flex items-center gap-[10px]">
                      <img src="/explore-menu/discount.svg" alt="discount" className="w-4 h-4" />
                      <span className="text-[14px] font-normal text-warning-700">Combo Offer</span>
                    </div>
                    {/* Header */}
                    <div className="flex flex-col gap-[10px] mb-[5px]">
                      <h2 className="text-[24px] font-semibold italic text-black leading-tight">
                        All-in-One Digital Commerce Bundle for Growing Businesses
                      </h2>
                      <p className="text-[16px] text-black-400 font-normal leading-[24px]">
                        Build your site and start selling—everything in one solution.
                      </p>
                    </div>
                    {/* Cards */}
                    <div className="flex flex-col gap-[10px]">
                      {[
                        { name: 'Email Combo', price: '2,800' },
                        { name: 'Hosting Starter Combo', price: '2,500' },
                        { name: 'Hosting Advanced Combo', price: '4,700' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white-300 border border-white-500 rounded-[2px] p-[20px] flex justify-between items-end group/item cursor-pointer hover:border-white-600 transition-all h-[105px]">
                          <div className="flex flex-col justify-between h-full">
                            <span className="text-[14px] text-black-400 font-normal leading-tight">{item.name}</span>
                            <span className="text-[26px] font-semibold italic text-orange-600 leading-none">৳ {item.price}/ year</span>
                          </div>
                          <img src="/arrow-right.svg" alt="arrow" className="w-5 h-5 group-hover/item:translate-x-1 transition-transform" style={{ filter: 'invert(27%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(88%)' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* CTA */}
                  <Button variant="tertiary" className="text-black-900 mt-auto">
                    Book Strategy Call
                  </Button>
                </div>

                {/* Column 2: Services */}
                <div className="flex flex-col w-[390px] p-[20px] bg-white-50 border border-white-600 rounded-[2px] h-full relative z-10 overflow-hidden">
                  <div className="flex flex-col gap-[16px] mb-[16px]">
                    {/* Tag */}
                    <div className="self-start px-[16px] py-[10px] bg-info-50 rounded-[30px] flex items-center gap-[10px]">
                      <img src="/explore-menu/services.svg" alt="services" className="w-4 h-4" />
                      <span className="text-[14px] font-normal text-info-700">Services</span>
                    </div>
                    {/* Header */}
                    <div className="flex flex-col gap-[10px]">
                      <h2 className="text-[24px] font-semibold italic text-black leading-tight">
                        Explore All of Our Services
                      </h2>
                      <p className="text-[16px] text-black-400 font-normal leading-[24px]">
                        End-to-end solutions designed to build, scale, and optimize your digital business.
                      </p>
                    </div>
                  </div>
                  {/* List */}
                  <div className="flex flex-col flex-grow">
                    {servicesList.map((service, idx) => (
                      <Link 
                        key={service.id} 
                        to={`/services#${service.id}`}
                        onMouseEnter={() => setActiveService(service)}
                        className={`flex items-center gap-[20px] px-[20px] py-[15px] rounded-[2px] border transition-all duration-200 ${
                          activeService.id === service.id 
                            ? `${service.activeBg} ${service.activeBorder}` 
                            : `border-transparent bg-transparent ${idx !== servicesList.length - 1 ? 'border-b-white-600' : ''} hover:bg-white-100`
                        }`}
                        style={{ borderBottomWidth: activeService.id === service.id ? '1px' : idx !== servicesList.length - 1 ? '1px' : '0px' }}
                      >
                        <div className="w-[24px] h-[24px] flex-shrink-0 flex items-center justify-center">
                          <img 
                            src={service.icon} 
                            alt={service.name} 
                            className="w-full h-full object-contain transition-all duration-200" 
                            style={{ filter: activeService.id === service.id ? service.activeFilter : 'none' }}
                          />
                        </div>
                        <span className={`text-[18px] leading-[1] ${
                          activeService.id === service.id 
                            ? `font-medium ${service.activeText}` 
                            : 'font-normal text-black-900'
                        }`}>
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Pricing Banner */}
                <div className="flex-grow bg-[#0C0C0C] border border-white-600 rounded-[2px] h-full relative overflow-hidden z-10">
                  {/* Dark Image Background */}
                  <div className="absolute inset-0">
                    <img src="/explore-menu/pricingimg.png" alt="pricing" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  {/* Content Overlay */}
                  <div className="absolute bottom-[40px] left-[39px] right-[39px] flex justify-between items-center z-20">
                    <h2 className="text-[24px] font-semibold italic text-white-50 w-[410px] leading-tight">
                      Explore All The Pricing and Offers Based on Your Demand
                    </h2>
                    <Button 
                      variant="white" 
                      onClick={() => navigate('/pricing')}
                      className="!rounded-[2px]"
                    >
                      View Pricing
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <button className='relative bg-[#265f58] rounded-[2px] text-white-50 px-[24px] py-[14px] transition duration-300 ease-in-out hover:bg-[#1a433e] flex gap-[10px] items-center shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.65)]'>
            Contact us
            <img src="/arrow-right.svg" alt="arrow-icon" className="w-5 h-5 brightness-200" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
