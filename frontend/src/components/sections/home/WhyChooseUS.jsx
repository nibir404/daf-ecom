import React from 'react';
import Button from '../../ui/Button';

const WhyChooseUS = () => {
    return (
        <section className="bg-black-800 border-y border-teal-900 relative overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-6 lg:px-10 xl:px-[200px] py-[60px] lg:py-[120px]">
                <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[100px]">
                    {/* Left Content */}
                    <div className="flex-1 w-full max-w-[675px] h-auto lg:h-[700px] flex flex-col justify-between gap-[40px] lg:gap-0 py-[10px]">
                        {/* Top Group: Headline & Tagline */}
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="text-[32px] md:text-[48px] leading-[1.2] text-white-700">
                                We Don’t Build <span className="font-bold text-white-50">Projects</span>. <br className="hidden md:block" />
                                We Build <span className="font-bold text-white-50">Systems</span> That <span className="font-bold text-white-50">Scale</span>.
                            </h2>
                            <p className="text-[16px] md:text-[18px] leading-[26px] text-white-700 max-w-[577px]">
                                We focus on long-term impact, not short-term delivery so your system doesn’t just launch, it performs, scales, and evolves.
                            </p>
                        </div>

                        {/* Bottom Group: Description & CTA */}
                        <div className="flex flex-col gap-[30px] lg:gap-[40px]">
                            <div className="flex flex-col gap-[20px] lg:gap-[30px] text-[18px] md:text-[24px] leading-[1.25] text-white-50 font-normal">
                                <p>
                                    From infrastructure to application logic, every layer is designed to work together so your business doesn’t face bottlenecks, performance issues, or costly rebuilds later.
                                </p>
                                <p>
                                    Whether you’re starting from scratch or improving an existing system, we focus on building solutions that are stable, scalable, and aligned with your business goals.
                                </p>
                            </div>

                            <div className="flex">
                                <Button variant="white">
                                    Book a Call Today
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Graphic */}
                    <div className="flex-1 w-full max-w-[785px] h-[300px] sm:h-[400px] lg:h-[700px] relative bg-black-600 rounded-[2px] border border-black-400 overflow-hidden">
                        <img 
                            src="/homepage/why choose us.png" 
                            alt="System Scaling Visualization" 
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUS;
