import React from 'react';

const PrivacySidebar = ({ activeSection, scrollToSection }) => {
    const TOC_ITEMS = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'collect', label: 'Information We Collect' },
        { id: 'use', label: 'How We Use Your Information' },
        { id: 'cookies', label: 'Cookies & Tracking Technologies' },
        { id: 'sharing', label: 'Data Sharing & Disclosure' },
        { id: 'security', label: 'Data Security' },
        { id: 'retention', label: 'Data Retention' },
    ];

    return (
        <aside className="w-[300px] hidden lg:block">
            <div className="sticky top-[120px] flex flex-col border-l border-black-100">
                {TOC_ITEMS.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                        <div 
                            key={index} 
                            onClick={() => scrollToSection(item.id)}
                            className={`px-[10px] py-[4px] border-l-4 transition-all cursor-pointer flex justify-start
                                ${isActive 
                                    ? 'border-orange-600 text-black font-bold' 
                                    : 'border-transparent text-black-300 hover:text-black hover:border-black-200'}`}
                        >
                            <span className={isActive ? 'text-[20px] leading-[30px]' : 'text-[16px] leading-[30px]'}>
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
};

export default PrivacySidebar;
