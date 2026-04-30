import React from 'react';

const PrivacyHero = () => {
    return (
        <section className="relative w-full h-[500px] overflow-hidden bg-white">
            <img 
                src="/privacy/privacyHero.png" 
                alt="Privacy Hero" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-[1920px] mx-auto h-full flex flex-col justify-center px-6 lg:px-[200px]">
                <h1 className="text-[64px] leading-[75px] text-black-400 font-normal">
                    Daffodil <span className="font-bold text-black-900">Web</span> & <span className="font-bold text-black-900">E-commerce</span> Services
                </h1>
                <p className="text-[20px] leading-[30px] text-black-400 mt-4">
                    Last Updated: <span className="font-bold italic text-black-900">21 April, 2026</span>
                </p>
            </div>
        </section>
    );
};

export default PrivacyHero;
