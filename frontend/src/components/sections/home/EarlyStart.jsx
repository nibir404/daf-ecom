import React from 'react';
import Button from '../../ui/Button';

const EarlyStart = () => {
    const cards = [
        {
            label: "Early Stage",
            labelColor: "text-[#360083]",
            labelBg: "bg-[#36008308]",
            labelBorder: "border-[#36008320]",
            banner: "/homepage/Early Stage Banner.svg",
            title: "Build your product, website, or system from scratch",
            subtitle: "Build your product or website from idea to launch",
            description: "We help you go from concept to production-ready system with the right foundation from day one.",
            linkText: "Start Your Plan",
            icon: "/homepage/Icon Wrapper.svg"
        },
        {
            label: "Growth",
            labelColor: "text-[#004500]",
            labelBg: "bg-[#00450008]",
            labelBorder: "border-[#00450020]",
            banner: "/homepage/Growth Banner.svg",
            title: "Fix performance, scale users, or upgrade architecture",
            subtitle: "Improve performance, handle more users, grow safely",
            description: "Upgrade architecture, optimize performance, and prepare your system for real growth.",
            linkText: "Improve My System",
            icon: "/homepage/GrowthIcon.svg"
        },
        {
            label: "ROI-Focused",
            labelColor: "text-[#327C73]",
            labelBg: "bg-[#327C7308]",
            labelBorder: "border-[#327C7320]",
            banner: "/homepage/ROI Focused Banner.svg",
            title: "Fix or Improve My Existing System",
            subtitle: "Identify issues, redesign, and improve results",
            description: "We identify bottlenecks and redesign systems that directly impact business results.",
            linkText: "Optimize My Product",
            icon: "/homepage/ROIIcon.svg"
        },
        {
            label: "Instant Setup",
            labelColor: "text-[#716038]",
            labelBg: "bg-[#71603808]",
            labelBorder: "border-[#71603820]",
            banner: "/homepage/Instant Setup Banner.svg",
            title: "Need Quick Setup",
            subtitle: "Domain, hosting, email ready in minutes",
            description: "Simple setup, reliable infrastructure, and the flexibility to scale when you need it.",
            linkText: "Get Online",
            icon: "/homepage/InstantSetupIcon.svg"
        }
    ];

    return (
        <section className="w-full py-24 md:py-[120px] overflow-hidden">
            <div className="max-w-[1520px] mx-auto px-6 md:px-0">
                {/* Header Section */}
                <div className="mb-[60px]">
                    <h2 className="text-[48px] font-normal text-black-400 tracking-tight leading-tight">
                        What Are You Trying to <span className="font-bold text-black-900">Achieve?</span>
                    </h2>
                    <p className="text-[18px] text-black-400 mt-4 font-normal">
                        Different goals need different solutions. Choose your path.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className="relative p-6 bg-white group cursor-pointer transition-all duration-500 hover:shadow-xl rounded-[2px] border border-white-600 overflow-hidden w-full md:w-[750px] md:h-[340px] flex flex-col"
                        >
                            {/* Banner Decoration */}
                            <img 
                                src={card.banner} 
                                alt="" 
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-100 group-hover:scale-105 transition-transform duration-700" 
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Top Header: Label and Icon */}
                                <div className="flex justify-between items-center mb-[16px]">
                                    <div className={`inline-flex px-3 py-1 ${card.labelBg} border ${card.labelBorder} rounded-[2px]`}>
                                        <span className={`text-sm font-normal uppercase tracking-wider ${card.labelColor}`}>
                                            {card.label}
                                        </span>
                                    </div>
                                    <div className="w-[80px] h-[80px] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <img src={card.icon} alt={card.label} className="w-full h-full object-contain" />
                                    </div>
                                </div>

                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-[20px] font-semibold text-black-900 mb-1 max-w-[500px]">
                                            {card.title}
                                        </h3>
                                        <p className="text-[14px] leading-[26px] text-black-400 font-normal">
                                            {card.subtitle}
                                        </p>

                                        {/* Adjusted Description Gap to fit 300px height */}
                                        <div className="mt-6">
                                            <p className="text-[16px] leading-[24px] text-black-500 font-medium">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Adjusted Divider Padding to fit 300px height */}
                                    <div className="py-4">
                                        <div className="h-[1px] w-full bg-[#E0E0E0]" />
                                    </div>

                                    {/* Footer Section: Link */}
                                    <div className="mt-auto">
                                        <Button variant="tertiary">{card.linkText}</Button>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="mt-5 mx-6 md:mx-0 flex flex-col md:flex-row items-center justify-between p-8 md:px-12 md:py-8 bg-white-50 rounded-[2px] border border-white-600">
                    <div className="flex items-center gap-6 mb-6 md:mb-0">
                        <div className="w-16 h-16 flex items-center justify-center">
                            <img src="/homepage/15 min CTA .png" alt="Paper plane" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h4 className="text-[24px] md:text-[28px] font-normal text-black-900 leading-tight">
                                Not sure?
                            </h4>
                            <p className="text-[18px] md:text-[22px] text-black-500 font-normal">
                                We'll <span className="text-black-900 font-medium">guide</span> you in <span className="text-orange-500 font-bold italic">15 minute</span>
                            </p>
                        </div>
                    </div>
                    
                    <Button 
                        variant="secondary" 
                        icon="/homepage/call-02.svg"
                        className="px-8 py-4"
                    >
                        Book Strategy Call
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default EarlyStart;
