import React from 'react';
import Button from '../../ui/Button';

const CTA = () => {
    return (
        <section className="py-[120px]">
            <div className="max-w-[1520px] mx-auto px-6 md:px-0">
                {/* CTA Card Container with Background Asset */}
                <div className="relative w-full h-[680px] bg-[url('/homepage/CTABanner.png')] bg-cover bg-center border-2 border-white-50 rounded-[2px] overflow-hidden flex flex-col items-center justify-start pt-[100px]">
                    
                    {/* Content Layer (Aligned with Figma Layout) */}
                    <div className="relative z-10 flex flex-col items-center px-4">
                        
                        {/* Pill Tag */}
                        <div className="bg-gold-50 border border-gold-100 px-[16px] py-[10px] rounded-[30px] flex items-center gap-[10px] mb-[16px] w-fit shadow-sm">
                            <div className="w-[18px] h-[18px] flex items-center justify-center">
                                <img src="/homepage/agreement-02.svg" alt="icon" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-[14px] text-gold-800 font-medium tracking-tight">No more Hesitation</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-[48px] md:text-[64px] leading-[80px] tracking-tight font-normal text-black-900 text-center mb-[10px]">
                            <span className="text-black-400">Start With </span>
                            <span className="text-orange-600 font-bold">Clarity</span>
                            <span className="text-black-400">, Not </span>
                            <span className="text-black-900 font-bold">Guesswork</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-[18px] md:text-[20px] leading-[30px] text-black-400 max-w-[764px] text-center mb-[40px]">
                            Tell us what you need we’ll guide you with the right approach.
                        </p>

                        {/* Button Group */}
                        <div className="flex flex-col md:flex-row gap-[16px] items-center">
                            <Button variant="primary" className="min-w-[240px]">
                                Get Your System Plan
                            </Button>
                            <Button variant="secondary" className="min-w-[240px]">
                                See Our Work
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
