import React from 'react';
import Button from '../../ui/Button';

const Services = () => {

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
            category: 'AI & Automation',
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

    return (
        <section className="w-full py-[120px] bg-white">
            <div className="max-w-[1520px] mx-auto px-6 md:px-0">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center gap-[10px] mb-[80px]">
                    <h2 className="text-[48px] font-normal text-black-400 tracking-tight leading-[1.1] max-w-[700px]">
                        From Idea to <span className="font-bold text-black-900">Scalable</span> Systems <br />
                        <span className="font-bold text-black-900">End-to-End</span> Execution
                    </h2>
                    <p className="text-[16px] text-black-400 leading-relaxed max-w-[650px]">
                        We don't offer disconnected services. We design, build, and evolve complete systems that grow with your business.
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative flex flex-col items-center">
                    {services.map((service, index) => (
                        <div 
                            key={service.id}
                            className="sticky w-[1160px] mb-[40px]"
                            style={{ 
                                top: `${100 + (index * 20)}px`,
                                zIndex: index + 1 
                            }}
                        >
                            <div className={`backdrop-blur-[30px] ${service.bgColor} border border-white-600 rounded-[2px] p-[40px] flex flex-col md:flex-row gap-[60px] items-end shadow-sm h-[380px]`}>
                                
                                {/* Left Content */}
                                <div className="w-[620px] flex flex-col justify-between self-stretch h-full">
                                    <div className="flex flex-col gap-[16px]">
                                        {/* Icon Container */}
                                        <div className={`${service.iconBg} border-2 border-white/40 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.15)] rounded-[10px] w-[60px] h-[60px] flex items-center justify-center p-[15px]`}>
                                            <div className="w-[30px] h-[30px]">
                                                <img src={service.icon} alt={service.category} className="w-full h-full object-contain" />
                                            </div>
                                        </div>

                                        {/* Text Container */}
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="text-[20px] font-medium text-black leading-normal" style={{ fontWeight: 510 }}>
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
                                <div className="w-[400px] flex flex-col justify-between self-stretch h-full overflow-hidden">
                                    {/* Category Tag (Top) */}
                                    <div className={`inline-flex self-start px-[10px] py-[4px] ${service.tagBg} rounded-[2px]`}>
                                        <span className={`text-[14px] font-normal ${service.tagColor} whitespace-nowrap`}>
                                            {service.category}
                                        </span>
                                    </div>

                                    {/* Links List (Bottom) */}
                                    <div className="flex flex-col">
                                        {service.links.map((link, lIndex) => (
                                            <a 
                                                key={lIndex}
                                                href="#" 
                                                className="flex justify-between items-center py-[16px] pr-[30px] pl-[10px] hover:bg-[#FFFFFF] border border-transparent hover:border-[#E5E5E5] rounded-[2px] transition-all group"
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

export default Services;
