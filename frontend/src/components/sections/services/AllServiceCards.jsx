import React, { useState, useEffect, useRef } from 'react';
import Button from '../../ui/Button';

const AllServiceCards = () => {
    const [activeSection, setActiveSection] = useState('foundation');
    const sectionRefs = useRef({});

    const services = [
        {
            id: 'foundation',
            category: 'Foundation',
            title: 'Start With a Reliable Digital Foundation',
            subtitle: 'Everything begins here your domain, hosting, and email. Fast to set up, reliable to scale.',
            cta: 'Get Online Instantly',
            links: ['Domain Registration & Management', 'Web Hosting (Shared, Cloud, VPS)', 'Google Workspace', 'SSL & Security Basics'],
            icon: '/homepage/foundation.svg',
            bgColor: 'bg-purple-10/50',
            borderColor: 'border-purple-100',
            tagBg: 'bg-purple-50',
            tagColor: 'text-purple-800',
            iconBg: 'bg-white-50'
        },
        {
            id: 'strategy',
            category: 'Strategy',
            title: 'Define What to Build and Why It Matters',
            subtitle: 'Before writing a single line of code, we align your business goals with the right technology, architecture, and execution plan.',
            cta: 'Start with Strategy',
            links: ['Product Strategy & Planning', 'Digital Transformation Consulting', 'System Architecture Design', 'Technology Advisory'],
            icon: '/homepage/strategy.svg',
            bgColor: 'bg-orange-10/50',
            borderColor: 'border-orange-100',
            tagBg: 'bg-orange-100',
            tagColor: 'text-orange-800',
            iconBg: 'bg-white-50'
        },
        {
            id: 'design',
            category: 'Design',
            title: 'Design Systems People Actually Use',
            subtitle: 'We create user experiences that are intuitive, scalable, and aligned with real user behavior not assumptions.',
            cta: 'Explore Design',
            links: ['UX/UI Design', 'UX Audit & Optimization', 'SaaS & MVP Product Design', 'Design Systems'],
            icon: '/homepage/design.svg',
            bgColor: 'bg-success-10/50',
            borderColor: 'border-success-100',
            tagBg: 'bg-success-100',
            tagColor: 'text-success-800',
            iconBg: 'bg-white-50'
        },
        {
            id: 'development',
            category: 'Development',
            title: 'Build Secure, Scalable Digital Products',
            subtitle: 'From web platforms to enterprise systems, we build reliable software designed for performance and long-term growth.',
            cta: 'Start Building',
            links: ['Web & Mobile App Development', 'Custom Software Development', 'ERP & Business Systems', 'API & System Integration'],
            icon: '/homepage/development.svg',
            bgColor: 'bg-gold-10/50',
            borderColor: 'border-gold-100',
            tagBg: 'bg-gold-100',
            tagColor: 'text-gold-800',
            iconBg: 'bg-white-50'
        },
        {
            id: 'automation',
            category: 'AI and Automation',
            title: 'Turn Manual Work into Intelligent Systems',
            subtitle: 'We integrate AI and automation to improve efficiency, reduce cost, and unlock new capabilities.',
            cta: 'Explore AI Solutions',
            links: ['AI Solutions & Integration', 'Process Automation', 'Data & Machine Learning Systems', 'Intelligent Workflows'],
            icon: '/homepage/ai-magic.svg',
            bgColor: 'bg-teal-10/50',
            borderColor: 'border-teal-100',
            tagBg: 'bg-teal-100',
            tagColor: 'text-teal-800',
            iconBg: 'bg-white-50'
        },
        {
            id: 'growth',
            category: 'Growth',
            title: 'Drive Traffic, Conversion, and Measurable Growth',
            subtitle: 'We optimize your digital presence to attract the right audience and turn users into customers.',
            cta: 'Grow My Business',
            links: ['SEO & GEO Optimization', 'Performance Optimization', 'Conversion Rate Optimization', 'Analytics & Tracking'],
            icon: '/homepage/growth.svg',
            bgColor: 'bg-alert-10/50',
            borderColor: 'border-alert-100',
            tagBg: 'bg-alert-100',
            tagColor: 'text-alert-800',
            iconBg: 'bg-white-50'
        },
        {
            id: 'maintain',
            category: 'Maintain',
            title: 'Keep Systems Running and Improving',
            subtitle: 'We ensure your systems remain secure, stable, and continuously optimized as your business evolves.',
            cta: 'Get Ongoing Support',
            links: ['Maintenance & Monitoring', 'Technical Support', 'System Upgrades', 'Project Takeover'],
            icon: '/homepage/maintain.svg',
            bgColor: 'bg-coral-10/50',
            borderColor: 'border-coral-100',
            tagBg: 'bg-coral-100',
            tagColor: 'text-coral-800',
            iconBg: 'bg-white-50'
        }
    ];

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        // Copy current refs to a variable for the cleanup function
        const currentRefs = sectionRefs.current;
        Object.values(currentRefs).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            Object.values(currentRefs).forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full pt-[120px]">
            <div className="max-w-[1520px] mx-auto px-6 xl:px-0 flex flex-col md:flex-row gap-[60px] lg:gap-[100px] items-start">
                
                {/* Left Sidebar Filter */}
                <div className="hidden md:block w-[220px] sticky top-[120px]">
                    <div className="flex flex-col border-l border-black-100">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => scrollToSection(service.id)}
                                className={`group flex items-center px-[20px] py-[10px] border-l-2 transition-all text-left ${
                                    activeSection === service.id 
                                    ? 'border-orange-600 text-black-900 font-bold' 
                                    : 'border-transparent text-black-300 font-normal hover:text-black-600'
                                }`}
                            >
                                <span className="text-[16px] leading-[30px] whitespace-nowrap">
                                    {service.category}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 flex flex-col gap-[40px]">
                    {services.map((service) => (
                        <div 
                            key={service.id} 
                            id={service.id}
                            ref={(el) => (sectionRefs.current[service.id] = el)}
                            className="scroll-mt-[120px]"
                        >
                            <div className={`backdrop-blur-[30px] ${service.bgColor} border border-white-600 rounded-[2px] p-[40px] flex flex-col md:flex-row gap-[60px] items-end shadow-sm h-auto md:h-[380px]`}>
                                
                                {/* Left Content */}
                                <div className="w-full md:w-[620px] flex flex-col justify-between self-stretch h-full">
                                    <div className="flex flex-col gap-[16px]">
                                        {/* Icon Container */}
                                        <div className={`${service.iconBg} border-2 border-white/40 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.15)] rounded-[10px] w-[60px] h-[60px] flex items-center justify-center p-[15px]`}>
                                            <div className="w-[30px] h-[30px]">
                                                <img src={service.icon} alt={service.category} className="w-full h-full object-contain" />
                                            </div>
                                        </div>

                                        {/* Text Container */}
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="text-[20px] font-medium text-black-900 leading-normal" style={{ fontWeight: 510 }}>
                                                {service.title}
                                            </h3>
                                            <p className="text-[14px] text-black-400 font-normal leading-[22px]">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Primary CTA (Tertiary in Figma) */}
                                    <Button variant="tertiary" className="mt-auto self-start">
                                        {service.cta}
                                    </Button>
                                </div>

                                {/* Right Links Section */}
                                <div className="w-full md:w-[400px] flex flex-col justify-between self-stretch h-full overflow-hidden">
                                    {/* Category Tag (Top) */}
                                    <div className={`inline-flex self-start px-[10px] py-[4px] ${service.tagBg} rounded-[2px]`}>
                                        <span className={`text-[14px] font-normal ${service.tagColor} whitespace-nowrap`}>
                                            {service.category}
                                        </span>
                                    </div>

                                    {/* Links List (Bottom) */}
                                    <div className="flex flex-col mt-6 md:mt-0">
                                        {service.links.map((link, lIndex) => (
                                            <a 
                                                key={lIndex}
                                                href="#" 
                                                className="flex justify-between items-center py-[16px] pr-[30px] pl-[10px] hover:bg-white-50 border border-transparent hover:border-white-600 rounded-[2px] transition-all group"
                                            >
                                                <span className="text-[16px] font-semibold text-black-400 group-hover:text-black-900 transition-colors">
                                                    {link}
                                                </span>
                                                <div className="w-[16px] h-[16px] flex items-center justify-center group-hover:translate-x-1 transition-all">
                                                    <img 
                                                        src="/arrow-right.svg" 
                                                        alt="arrow" 
                                                        className="w-full h-full object-contain" 
                                                        style={{ filter: 'invert(27%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(88%)' }} 
                                                    />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllServiceCards;
