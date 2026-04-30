import React, { useRef } from 'react';
import Button from '../../ui/Button';

const CaseStudies = () => {
    const scrollRef = useRef(null);

    const studies = [
        {
            id: 1,
            title: "ERP System for Operations Team",
            tag: "Manufacturing",
            problem: "Manual processes, disconnected tools, and lack of real-time visibility across operations.",
            solution: "Built a custom ERP system integrating inventory, HR, finance, and reporting into a unified platform.",
            impact: [
                { text: "Reduced manual work by ", highlight: "40%" },
                { text: "Improved reporting speed ", highlight: "3x" },
                { text: "Delivered in ", highlight: "8 weeks" }
            ],
            image: "/homepage/Case Study Image.png",
            tagBg: "bg-gold-10",
            tagColor: "text-gold-800"
        },
        {
            id: 2,
            title: "Supply Chain Optimization",
            tag: "Logistics",
            problem: "Complex supply chain with significant delays and high operational costs.",
            solution: "Developed an AI-driven optimization engine that streamlined routing and inventory management.",
            impact: [
                { text: "Operational costs reduced by ", highlight: "25%" },
                { text: "On-time delivery improved by ", highlight: "15%" },
                { text: "ROI achieved in ", highlight: "6 months" }
            ],
            image: "/homepage/Case Study Image.png", // Reusing image as per availability
            tagBg: "bg-purple-10",
            tagColor: "text-purple-800"
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' 
                ? scrollLeft - clientWidth 
                : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full py-[60px] lg:py-[120px] overflow-hidden">
            <div className="max-w-[1520px] mx-auto px-6 xl:px-0">
                {/* Header Section */}
                <div className="text-center mb-[60px] flex flex-col items-center gap-[10px]">
                    <h2 className="text-[32px] md:text-[48px] font-normal leading-[1.2] md:leading-[60px] text-black-400">
                        Real <span className="font-bold text-black-900">Systems</span>. Real <span className="font-bold text-black-900">Business</span> Impact.
                    </h2>
                    <p className="text-[16px] md:text-[18px] leading-[26px] text-black-400 max-w-[648px]">
                        We don't offer disconnected services. We design, build, and evolve complete systems that grow with your business.
                    </p>
                </div>

                {/* Content Slider Container */}
                <div className="relative group">
                    <div 
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-[20px]"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {studies.map((study) => (
                            <div 
                                key={study.id}
                                className="snap-center shrink-0 w-full flex flex-col lg:flex-row gap-[20px] items-stretch lg:h-[550px]"
                            >
                                {/* Left Details Card */}
                                <div className="w-full lg:w-[530px] bg-white p-6 lg:p-[40px] rounded-[2px] border border-white-600 flex flex-col justify-between lg:h-full">
                                    <div className="flex flex-col gap-[16px]">
                                        {/* Title & Tag */}
                                        <div className="border-b border-white-500 pb-[16px] flex flex-wrap justify-between items-start gap-4 lg:gap-[24px]">
                                            <h3 className="text-[20px] lg:text-[24px] font-semibold text-orange-600 leading-normal">
                                                {study.title}
                                            </h3>
                                            <div className={`px-[16px] py-[6px] ${study.tagBg} border border-white-500 rounded-[30px] shrink-0`}>
                                                <span className={`text-[14px] font-normal ${study.tagColor}`}>
                                                    {study.tag}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Summary Points */}
                                        <div className="flex flex-col gap-[16px]">
                                            {/* Problem */}
                                            <div className="flex flex-col gap-[4px]">
                                                <p className="text-[16px] font-semibold text-black">Problem</p>
                                                <p className="text-[14px] leading-[24px] text-black-400">{study.problem}</p>
                                            </div>

                                            {/* Solution */}
                                            <div className="flex flex-col gap-[4px]">
                                                <p className="text-[16px] font-semibold text-black">Solution</p>
                                                <p className="text-[14px] leading-[24px] text-black-400">{study.solution}</p>
                                            </div>

                                            {/* Impact */}
                                            <div className="flex flex-col gap-[4px]">
                                                <p className="text-[16px] font-semibold text-black">Impact</p>
                                                <ul className="list-disc ml-[21px] flex flex-col gap-[0px]">
                                                    {study.impact.map((item, i) => (
                                                        <li key={i} className="text-[14px] leading-[24px] text-black-400">
                                                            {item.text} <span className="font-bold text-black-900">{item.highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="">
                                        <Button variant="outline" className="w-fit">
                                            View Case Study
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Image Container */}
                                <div className="flex-1 bg-white border-[5px] border-white rounded-[2px] overflow-hidden h-[300px] sm:h-[400px] lg:h-full">
                                    <img 
                                        src={study.image} 
                                        alt={study.title} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-[40px] lg:mt-[60px] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-[16px]">
                    <div className="flex gap-[16px] order-last sm:order-first">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-[50px] h-[50px] bg-orange-300 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors group"
                        >
                            <div className="w-[24px] h-[24px] rotate-180">
                                <img src="/arrow-right.svg" alt="prev" className="w-full h-full object-contain invert brightness-0" />
                            </div>
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-[50px] h-[50px] bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors group sm:hidden"
                        >
                            <div className="w-[24px] h-[24px]">
                                <img src="/arrow-right.svg" alt="next" className="w-full h-full object-contain invert brightness-0" />
                            </div>
                        </button>
                    </div>
                    <p className="text-[18px] lg:text-[24px] font-medium text-black-400 text-center">
                        Explore case studies by scrolling
                    </p>
                    <button 
                        onClick={() => scroll('right')}
                        className="hidden sm:flex w-[50px] h-[50px] bg-orange-600 rounded-full items-center justify-center hover:bg-orange-700 transition-colors group"
                    >
                        <div className="w-[24px] h-[24px]">
                            <img src="/arrow-right.svg" alt="next" className="w-full h-full object-contain invert brightness-0" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
