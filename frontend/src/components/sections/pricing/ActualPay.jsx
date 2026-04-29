import React from 'react';

const ActualPay = () => {
    const benefits = [
        "Reduced manual processes",
        "Faster time-to-market",
        "Higher lead conversion rates",
        "Lower long-term maintenance costs"
    ];

    return (
        <section className="w-full bg-white-50 py-[120px] px-[200px]">
            <div className="max-w-[1520px] mx-auto flex flex-col gap-[60px]">
                {/* Header */}
                <div className="w-full flex items-end justify-between border-b border-[#dcdcdc] pb-[40px]">
                    <p className="text-[16px] leading-[26px] text-black-400 w-[223px]">
                        Pricing is not just cost—it’s long-term value.
                    </p>
                    <h2 className="text-[48px] text-black-400 font-normal leading-[1.2]">
                        What You <span className="text-[#494949]">Actually</span> <span className="font-bold text-[#0c0c0c]">Pay</span> For
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="w-full flex gap-[60px] items-start">
                    {/* Left Side: Text & Benefits */}
                    <div className="flex-1 flex flex-col justify-between self-stretch gap-[40px]">
                        <p className="text-[36px] italic leading-[1.3] text-black-400">
                            Our solutions are designed to reduce operational inefficiencies, improve <span className="font-bold text-orange-600">digital performance</span>, and support <span className="font-bold text-black-900">scalable growth</span>. Clients typically benefit from:
                        </p>
                        
                        <div className="flex flex-col w-full">
                            {benefits.map((benefit, index) => (
                                <div 
                                    key={index} 
                                    className={`py-[20px] border-b border-[#dcdcdc] ${index === benefits.length - 1 ? 'border-none' : ''}`}
                                >
                                    <p className="text-[24px] font-medium text-black">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-[700px] h-[500px] rounded-[2px] overflow-hidden">
                        <img 
                            src="/pricingpage/ActualPay.png" 
                            alt="Value breakdown" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActualPay;
