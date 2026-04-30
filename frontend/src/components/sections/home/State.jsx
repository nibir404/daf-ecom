import React from 'react';

const State = () => {
    return (
        <div className="w-full bg-white-500 border-y border-white-600">
            <div className="w-full max-w-[1520px] mx-auto px-6 xl:px-0 grid grid-cols-1 md:grid-cols-4">
                <div className="flex flex-col items-center text-center py-10 px-8 border-b md:border-b-0 md:border-r border-white-600">
                    <h2 className="text-[48px] md:text-[64px] font-bold italic text-black-900 leading-[1.1] md:leading-[60px] tracking-tight">20+</h2>
                    <p className="text-[18px] md:text-[20px] text-black-400 font-normal mt-2 md:mt-4">years of experience</p>
                </div>
                <div className="flex flex-col items-center text-center py-10 px-8 border-b md:border-b-0 md:border-r border-white-600">
                    <h2 className="text-[48px] md:text-[64px] font-bold italic text-black-900 leading-[1.1] md:leading-[60px] tracking-tight">40+</h2>
                    <p className="text-[18px] md:text-[20px] text-black-400 font-normal mt-2 md:mt-4">Projects delivered</p>
                </div>
                <div className="flex flex-col items-center text-center py-10 px-8 border-b md:border-b-0 md:border-r border-white-600">
                        <h2 className="text-[48px] md:text-[64px] font-bold italic text-black-900 leading-[1.1] md:leading-[60px] tracking-tight">6 weeks</h2>
                        <p className="text-[18px] md:text-[20px] text-black-400 font-normal mt-2 md:mt-4">Avg. delivery time</p>
                    </div>
                    <div className="flex flex-col items-center text-center py-10 px-8 border-none">
                        <h2 className="text-[48px] md:text-[64px] font-bold italic text-black-900 leading-[1.1] md:leading-[60px] tracking-tight">98%</h2>
                        <p className="text-[18px] md:text-[20px] text-black-400 font-normal mt-2 md:mt-4">Client retention</p>
                    </div>
                </div>
            </div>
    );
};

export default State;
