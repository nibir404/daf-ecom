import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES_DATA } from '../../../data/caseStudiesData';

const CaseStudyList = () => {
    return (
        <section id="case-studies-list" className="w-full bg-white-300 py-[120px]">
            <div className="max-w-[1520px] mx-auto px-6 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[80px]">
                    {CASE_STUDIES_DATA.map((study) => (
                        <Link 
                            to={`/case-studies/${study.id}`} 
                            key={study.id} 
                            className="flex flex-col gap-4 group"
                        >
                            {/* Image Container */}
                            <div className="w-full h-[500px] overflow-hidden rounded-[2px] bg-black-900 border-[3px] border-white-50 relative">
                                <img 
                                    src={study.mainImage} 
                                    alt={study.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Title and Category */}
                            <div className="border-b border-white-600 pb-5">
                                <h3 className="text-[36px] leading-[45px] font-medium text-black group-hover:text-orange-600 transition-colors">
                                    {study.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyList;
