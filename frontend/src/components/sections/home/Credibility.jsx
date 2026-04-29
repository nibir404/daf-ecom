import React from 'react';

const Credibility = ({ showSearchBar = true }) => {
    return (
        <section className="w-full flex flex-col items-center">
            {/* Top Logos Section */}
            <div className="w-full bg-black-800 py-24 flex flex-col items-center justify-center relative overflow-hidden border-b border-black-700">
                <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center gap-12">
                    {/* Trust Text */}
                    <p className="text-white-700 text-[20px] font-normal text-center leading-[28px]">
                        Trusted by <span className="text-white-50 font-semibold">startups</span>, <span className="text-white-50 font-semibold">enterprises</span>, and <span className="text-white-50 font-semibold">global teams</span> to build scalable systems
                    </p>
                    
                    {/* Logos Container */}
                    <div className="w-full border-y border-white-900/10 py-10">
                        <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <img src="/homepage/company1.png" alt="Stripe" className="h-8 object-contain" />
                            <img src="/homepage/company2.png" alt="Shopify" className="h-8 object-contain" />
                            <img src="/homepage/company3.png" alt="Vercel" className="h-8 object-contain" />
                            <img src="/homepage/company4.png" alt="Notion" className="h-8 object-contain" />
                            <img src="/homepage/company5.png" alt="Linear" className="h-8 object-contain" />
                            <img src="/homepage/company6.png" alt="WordPress" className="h-8 object-contain" />
                        </div>
                    </div>

                    {/* Domain Search Bar - Conditional */}
                    {showSearchBar && (
                        <div className="w-full bg-gold-50 border border-orange-600 rounded-[2px] flex items-center justify-between pl-5 pr-2 py-2 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] mt-4 hover:shadow-[0px_0px_15px_0px_#73abff,0px_0px_0px_2px_#df6c23] focus-within:shadow-[0px_0px_15px_0px_#73abff,0px_0px_0px_2px_#df6c23] transition-all duration-300 group cursor-text box-border">
                            <div className="flex-1 relative flex items-center">
                                <input 
                                    type="text"
                                    className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-black-400 peer"
                                    placeholder=" "
                                />
                                <p className="absolute left-0 pointer-events-none text-[14px] text-black-400 font-normal peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0 transition-opacity duration-200">
                                    Search the <span className="font-bold italic">“Domain”</span> you want
                                </p>
                            </div>
                            <button className="bg-black-900 text-white-50 px-6 py-3.5 rounded-[2px] flex items-center gap-2.5 hover:bg-blue-600 transition-all duration-300 cursor-pointer shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.65)] shrink-0">
                                <span className="text-[16px] font-medium">Find your domain</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Credibility;
