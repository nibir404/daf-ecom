import React from 'react';
import Button from '../../ui/Button';

const PricingCTA = () => {
    return (
        <section className="py-[120px] px-[200px]">
            <div className="max-w-[1520px] mx-auto overflow-hidden relative border border-white-50 rounded-[2px] bg-white h-[680px]">
                
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/pricingpage/PricingCTA.png" 
                        alt="CTA Background" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center px-[80px]">
                    <div className="flex flex-col gap-[40px] max-w-[690px]">
                        
                        {/* Header Content */}
                        <div className="flex flex-col gap-[16px]">
                            {/* Pill Tag */}
                            <div className="bg-gold-50 border border-gold-100 px-[16px] py-[10px] rounded-[30px] flex items-center gap-[10px] w-fit shadow-sm">
                                <div className="w-[16px] h-[16px] flex items-center justify-center">
                                    <img src="/homepage/agreement-02.svg" alt="icon" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-[14px] text-gold-800 font-medium tracking-tight">No more Hesitation</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-[64px] leading-[80px] font-normal text-black-400">
                                Let’s Define the <span className="font-bold text-orange-600">Right Solution</span> Together.
                            </h2>

                            {/* Subtitle */}
                            <p className="text-[20px] leading-[30px] text-black-400">
                                Tell us what you need we’ll guide you with the right approach.
                            </p>
                        </div>

                        {/* Button Group */}
                        <div className="flex gap-[16px]">
                            <Button 
                                variant="primary" 
                                className="min-w-[267px] h-[48px]"
                            >
                                Book a Free Consultation
                            </Button>
                            <Button 
                                variant="outline" 
                                className="min-w-[241px] h-[48px] !border-[#021e81] !text-[#021e81]"
                            >
                                Get Pricing Estimate
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCTA;
