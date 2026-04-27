import React, { useState } from 'react';

const ProblemWeSolve = () => {
    const [activeId, setActiveId] = useState(1);

    const problems = [
        {
            id: 1,
            label: "Problem 1",
            title: "You shouldn’t have to rebuild your system every time you grow.",
            description: "Because the original architecture wasn't designed to scale.",
            image: "/homepage/problem-section.png"
        },
        {
            id: 2,
            label: "Problem 2",
            title: "Your tech team and business goals speak different languages.",
            description: "Months pass. The product doesn't reflect the vision.",
            image: "/homepage/problem2.jpg"
        },
        {
            id: 3,
            label: "Problem 3",
            title: "Every new hire reveals another gap in the system.",
            description: "Scaling breaks things that were working fine at 10 users.",
            image: "/homepage/problem3.jpg"
        }
    ];

    const activeProblem = problems.find(p => p.id === activeId);

    return (
        <section className="w-full pt-[120px]">
            <div className="max-w-[1520px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-start gap-[60px]">
                {/* Left: Illustration - Fixed size for consistency */}
                <div className="flex-1 w-full max-w-[935px] self-stretch h-[400px] md:h-[600px]">
                    <div className="relative rounded-[4px] overflow-hidden shadow-2xl h-full bg-white">
                        <img 
                            key={activeProblem.image}
                            src={activeProblem.image} 
                            alt={`Problem ${activeId} illustration`} 
                            className="w-full h-full object-cover transform hover:scale-105 transition-all duration-1000 ease-in-out"
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-black-900/5 pointer-events-none" />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-[525px] flex flex-col relative">
                    {/* Full-height gray track line */}
                    <div className="absolute -right-4 top-0 bottom-0 w-[1px] bg-white-600" />

                    {problems.map((problem, index) => {
                        const isActive = activeId === problem.id;
                        return (
                            <div 
                                key={problem.id}
                                onClick={() => setActiveId(problem.id)}
                                className={`flex flex-col relative cursor-pointer group ${
                                    index !== problems.length - 1 ? 'border-b border-white-600' : ''
                                } py-8 transition-all duration-500`}
                            >
                                {/* Problem Badge Container */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    isActive ? 'max-h-20 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
                                }`}>
                                    <div className="inline-flex w-fit bg-white-50 border border-white-500 px-4 py-1.5 rounded-full shadow-sm">
                                        <span className="text-[14px] text-gold-800 font-normal">
                                            {problem.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`text-[34px] leading-[43px] transition-all duration-300 ${
                                    isActive 
                                        ? 'text-black-900 font-medium italic mb-4' 
                                        : 'text-black-200 font-normal hover:text-black-400 mb-0'
                                }`}>
                                    {problem.title}
                                </h3>

                                {/* Description Container */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <p className="text-[16px] leading-[26px] text-black-400 font-normal">
                                        {problem.description}
                                    </p>
                                </div>

                                {/* Active Indicator */}
                                <div className={`absolute -right-[17.5px] w-[4px] bg-orange-500 rounded-full z-10 transition-all duration-500 ${
                                    isActive ? 'top-8 bottom-8 opacity-100 scale-y-100' : 'top-1/2 bottom-1/2 opacity-0 scale-y-0'
                                }`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProblemWeSolve;
