import React from 'react';
import Button from '../../ui/Button';

const PricingCard = ({ title, subtitle, price, description, ctaText, bgIcon }) => {
    return (
        <div className="bg-white-100 border border-white-600 p-[40px] rounded-[2px] flex-1 flex flex-col justify-between relative overflow-hidden h-[395px]">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-80">
                <img src={`/homepage/${bgIcon}`} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[24px]">
                    <h3 className="text-[30px] font-semibold italic text-black-900 leading-[1.2]">
                        {title}<br />{subtitle}
                    </h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[20px] text-black-900">
                            <span className="text-black-400 font-normal">Starting from</span>{" "}
                            <span className="font-bold">৳{price} /</span>{" "}
                            <span className="text-black-400 font-normal">year</span>
                        </p>
                        <p className="text-[16px] leading-[26px] text-black-400">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="mt-[40px]">
                    <Button variant="outline" className="w-fit">
                        {ctaText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Pricing = () => {
    const plans = [
        {
            title: "Linux",
            subtitle: "Hosting",
            price: "2,900",
            description: "Reliable hosting for small websites and business use.",
            ctaText: "Compare Plans",
            bgIcon: "Pricing 1.svg"
        },
        {
            title: "Reseller",
            subtitle: "Hosting",
            price: "1,190",
            description: "Manage and sell hosting services with full control.",
            ctaText: "Order Now",
            bgIcon: "Pricing 2.svg"
        },
        {
            title: "Online Newspaper",
            subtitle: "Hosting",
            price: "8,500",
            description: "Optimized for high-traffic content platforms.",
            ctaText: "Learn More",
            bgIcon: "Pricing 3.svg"
        },
        {
            title: "Business Email",
            subtitle: "(G Suite)",
            price: "6,990",
            description: "Professional email and collaboration tools.",
            ctaText: "Order Now",
            bgIcon: "Pricing 4.svg"
        }
    ];

    return (
        <section className="bg-white-500 py-[120px] relative overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-[20px] xl:px-[200px]">
                <div className="max-w-[1520px] mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-end justify-between mb-[60px] gap-[30px]">
                        <p className="text-[16px] leading-[26px] text-black-400 max-w-[358px]">
                            Custom systems are priced based on scope, complexity, and timeline.
                        </p>
                        <div className="text-right">
                            <h2 className="text-[48px] leading-[1.1] text-black-400">
                                Transparent <span className="font-bold text-black-900">Pricing</span> <br />
                                for Every Stage
                            </h2>
                        </div>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[20px]">
                        {plans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>

                    {/* Featured Custom Section */}
                    <div className="bg-white-100 border border-white-600 rounded-[2px] p-[40px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[400px]">
                        {/* Flare Background */}
                        <div className="absolute inset-0 pointer-events-none opacity-50">
                            <img src="/homepage/Additional Info Section.svg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10 flex flex-col gap-[80px] flex-1">
                            <div className="flex flex-col gap-[24px]">
                                <div className="flex flex-col gap-[10px] items-start">
                                    <div className="bg-[#E6F2E6] px-[16px] py-[8px] rounded-[30px] flex items-center gap-[8px]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.66667 1.33334L2 9.33334H7.33333L6.66667 14.6667L13.3333 6.66668H8L8.66667 1.33334Z" fill="#005B00"/>
                                        </svg>
                                        <span className="text-[14px] text-[#005B00] font-medium">Most Popular</span>
                                    </div>
                                    <h3 className="text-[30px] font-semibold italic text-black-900">
                                        Need Something More Advanced?
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <p className="text-[20px] font-semibold text-black-900">
                                        Not all systems fit into predefined plans.
                                    </p>
                                    <p className="text-[16px] leading-[26px] text-black-400 max-w-[552px]">
                                        For custom software, ERP systems, mobile apps, and AI solutions pricing depends on your specific requirements.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <Button variant="primary">
                                    Get Your System Plan
                                </Button>
                            </div>
                        </div>

                        {/* Globe Image */}
                        <div className="relative z-10 w-full max-w-[326px] h-[326px] mt-[40px] lg:mt-0">
                            <img src="/homepage/globe.png" alt="System Infrastructure" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
