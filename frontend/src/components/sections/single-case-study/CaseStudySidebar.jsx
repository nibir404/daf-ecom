import React from 'react';

const CaseStudySidebar = ({ study }) => {
    if (!study) return null;

    return (
        <aside className="w-full lg:w-[324px] lg:sticky lg:top-[120px] h-fit">
            <div className="bg-white-50 border border-white-600 rounded-[2px] p-[20px] flex flex-col gap-[20px]">
                {/* Industry */}
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[24px] font-medium text-black">Industry</h4>
                    <div className="flex flex-wrap gap-[10px]">
                        {study.industries?.map((industry, index) => (
                            <div key={index} className="bg-purple-10/50 border border-purple-800 px-[16px] py-[6px] rounded-[2px]">
                                <span className="text-[14px] text-purple-800 text-center whitespace-nowrap">{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-px bg-white-600 w-full" />

                {/* Timeline */}
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[24px] font-medium text-black">Timeline</h4>
                    <p className="text-[20px] text-black-400 leading-[30px]">{study.timeline}</p>
                </div>

                <div className="h-px bg-white-600 w-full" />

                {/* Company */}
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[24px] font-medium text-black">Company</h4>
                    <p className="text-[20px] text-black-400 leading-[30px]">{study.companyName}</p>
                </div>

                <div className="h-px bg-white-600 w-full" />

                {/* We Provide */}
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[24px] font-medium text-black">We Provide</h4>
                    <ul className="list-disc ml-5 flex flex-col gap-1">
                        {study.servicesProvided?.map((service, index) => (
                            <li key={index} className="text-[20px] text-black-400 leading-[30px]">{service}</li>
                        ))}
                    </ul>
                    {study.extraServicesCount > 0 && (
                        <div className="bg-gold-50 border border-gold-100 px-2 py-1 rounded-[2px] self-start">
                            <span className="text-[20px] text-black-400">+{study.extraServicesCount} more</span>
                        </div>
                    )}
                </div>

                <div className="h-px bg-white-600 w-full" />

                {/* Tech Stack */}
                <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[24px] font-medium text-black">Tech Stack</h4>
                    <p className="text-[20px] text-black-400 leading-[30px]">{study.techStack?.join(', ')}</p>
                </div>
            </div>
        </aside>
    );
};

export default CaseStudySidebar;
