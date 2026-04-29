import React from 'react';
import Button from '../../ui/Button';

const PricingHero = () => {
    return (
        <section className="relative w-full h-[600px] bg-white-50 flex items-center justify-center overflow-hidden">
            {/* Background Flare */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[600px] pointer-events-none">
                <img 
                    src="/pricingpage/heropricing.png" 
                    alt="" 
                    className="w-full h-full object-cover object-top opacity-80"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[1100px]">
                {/* Headline */}
                <h1 className="text-[64px] leading-[75px] text-black-400 font-normal tracking-tight">
                    Transparent <span className="font-bold text-black-900">Pricing</span> for Scalable <br />
                    Digital <span className="font-bold text-black-900">Solutions</span>
                </h1>

                {/* Subheadline */}
                <p className="mt-[16px] text-[20px] leading-[30px] text-black-400 max-w-[1100px]">
                    Flexible pricing models for websites, applications, cloud hosting, and enterprise systems designed to match your business stage and growth goals.
                </p>

                {/* CTAs */}
                <div className="mt-[40px] flex items-center gap-[16px]">
                    <Button variant="primary">
                        Get a Custom Quote
                    </Button>
                    <span className="text-[20px] leading-[30px] text-black-400">or</span>
                    <Button variant="tertiary">
                        Compare Plans
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PricingHero;
