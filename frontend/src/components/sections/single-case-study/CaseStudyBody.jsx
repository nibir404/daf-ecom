import React from 'react';
import Button from '../../ui/Button';
import { useNavigate, Link } from 'react-router-dom';

const CaseStudyBody = ({ study }) => {
    const navigate = useNavigate();
    if (!study) return null;

    return (
        <div className="flex-1 flex flex-col gap-[40px]">
            {/* Back Link */}
            <Link 
                to="/case-studies" 
                className="flex items-center gap-2 text-black-400 hover:text-orange-600 transition-colors group w-fit mb-[-20px]"
            >
                <div className="w-[30px] h-[30px] bg-white border border-white-600 rounded-full flex items-center justify-center transition-all group-hover:border-orange-600 group-hover:bg-orange-50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-180">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span className="text-[16px] font-medium">Back to all case studies</span>
            </Link>

            {/* Title and Overview */}
            <div className="flex flex-col gap-[40px]">
                <h1 className="text-[64px] leading-[75px] text-black-900 font-normal">
                    {study.titlePrefix} <span className="font-bold">{study.titleHighlight}</span>
                </h1>
                
                <div className="flex flex-col gap-[24px]">
                    <h3 className="text-[24px] font-medium text-black">Overview</h3>
                    <div className="text-[20px] text-black-400 leading-[30px] flex flex-col gap-4">
                        {study.overview?.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Featured Image */}
            <div className="w-full h-[500px] overflow-hidden rounded-[2px] bg-black-900">
                <img 
                    src={study.mainImage} 
                    alt="Overview" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* The Problem */}
            <div className="flex flex-col gap-[24px]">
                <h3 className="text-[24px] font-medium text-black">The Problem</h3>
                <div className="flex flex-col gap-[10px]">
                    <p className="text-[24px] font-bold text-orange-500 leading-[30px]">
                        {study.problemTitle}
                    </p>
                    <div className="text-[20px] text-black-400 leading-[30px] flex flex-col gap-4">
                        <p>{study.problemIntro}</p>
                        <ul className="list-disc ml-8">
                            {study.problemPoints?.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <p className="italic">{study.problemConclusion}</p>
                    </div>
                </div>
            </div>

            {/* The Solution */}
            <div className="flex flex-col gap-[24px]">
                <h3 className="text-[24px] font-medium text-black">The Solution</h3>
                <div className="flex flex-col gap-[10px]">
                    <p className="text-[24px] font-bold text-orange-500 leading-[30px]">
                        {study.solutionTitle}
                    </p>
                    <p className="text-[20px] text-black-400 leading-[30px]">
                        {study.solutionIntro}
                    </p>
                    <div className="text-[20px] text-black-400 leading-[30px] mt-4">
                        <p className="font-bold mb-2">Core Modules Delivered:</p>
                        <ul className="list-disc ml-8 mb-6">
                            {study.solutionModules?.map((module, i) => (
                                <li key={i}>{module}</li>
                            ))}
                        </ul>
                        
                        <p className="font-bold mb-2">Key Strategic Decisions:</p>
                        <ul className="list-disc ml-8">
                            {study.solutionDecisions?.map((decision, i) => (
                                <li key={i}>{decision}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Solution Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                <div className="h-[422px] overflow-hidden rounded-[2px]">
                    <img src={study.solutionImage1} alt="Solution 1" className="w-full h-full object-cover" />
                </div>
                <div className="h-[422px] overflow-hidden rounded-[2px]">
                    <img src={study.solutionImage2} alt="Solution 2" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-[24px]">
                <h3 className="text-[24px] font-medium text-black">Results</h3>
                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[24px] font-bold text-orange-500 leading-[30px]">
                            {study.resultsTitle}
                        </p>
                        <p className="text-[20px] text-black-400 leading-[30px]">
                            {study.resultsIntro}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                        {study.metrics?.map((metric, i) => (
                            <div key={i} className="bg-white-50 border border-white-600 p-[40px] rounded-[2px] flex flex-col items-center justify-center gap-[18px]">
                                <span className="text-[40px] font-bold text-black-900 whitespace-nowrap">{metric.value}</span>
                                <span className="text-[20px] text-black-400 text-center">{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="mt-10 flex justify-center lg:justify-start">
                <Button 
                    variant="outline" 
                    onClick={() => navigate('/case-studies')}
                >
                    Explore Other Case Studies
                </Button>
            </div>
        </div>
    );
};

export default CaseStudyBody;
