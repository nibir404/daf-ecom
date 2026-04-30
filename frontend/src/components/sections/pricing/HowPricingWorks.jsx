import React from 'react';

const HowPricingWorks = () => {
    const models = [
        {
            title: "Fixed Scope",
            desc: "Best for defined projects (websites, landing pages)",
            icon: "/pricingpage/cells.svg"
        },
        {
            title: "Time & Material",
            desc: "Flexible builds (custom software, integrations)",
            icon: "/pricingpage/pendulum.svg"
        },
        {
            title: "Dedicated Team",
            desc: "Long-term development & scaling",
            icon: "/pricingpage/user-group.svg"
        }
    ];

    return (
        <section className="w-full py-[120px]">
            <div className="max-w-[1520px] mx-auto px-6 xl:px-0 w-full flex flex-col gap-[60px]">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-[10px]">
                    <h2 className="text-[32px] md:text-[48px] leading-tight md:leading-[60px] tracking-tight text-black-400">
                        How Our <span className="font-bold text-black-900">Pricing</span> Works
                    </h2>
                    <p className="text-[16px] leading-[26px] text-black-400 max-w-[648px]">
                        Clear models. No hidden variables. Built for long-term partnerships.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] items-stretch w-full">
                    {models.map((model, index) => (
                        <div 
                            key={index} 
                            className="flex-1 bg-white-100 p-[40px] flex flex-col items-center text-center gap-[40px] rounded-[2px]"
                        >
                            {/* Icon Container */}
                            <div className="size-[60px] bg-white-50 rounded-[10px] flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.15)] border-2 border-white/40">
                                <img 
                                    src={model.icon} 
                                    alt={model.title} 
                                    className="size-[30px]"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-[10px]">
                                <h3 className="text-[20px] font-semibold text-black leading-tight">
                                    {model.title}
                                </h3>
                                <p className="text-[16px] leading-[24px] text-black-400">
                                    {model.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Italic Text */}
                <p className="text-[24px] md:text-[34px] leading-tight md:leading-[43px] text-black-400 text-center italic mt-[20px]">
                    We structure pricing based on project scope, scalability requirements, and support needs, not just deliverables. Whether you're launching a business website or building enterprise-grade systems, each plan aligns with real operational outcomes.
                </p>
            </div>
        </section>
    );
};

export default HowPricingWorks;
