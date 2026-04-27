import React from 'react';

const HowItWorks = () => { return (
    <section className="w-full py-24 md:py-[120px] overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-6 md:px-0">
            <div className="flex flex-col gap-[20px]">
                {/* Header Section */}
                <div className="text-center mb-[60px] flex flex-col items-center gap-[10px]">
                    <h2 className="text-4xl md:text-[60px] font-bold font-serif text-white-900">How It Works</h2>
                    <p className="text-lg md:text-xl text-black-500 max-w-[700px]">
                        Discover how we deliver exceptional results through our proven process.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
 };

export default HowItWorks;
