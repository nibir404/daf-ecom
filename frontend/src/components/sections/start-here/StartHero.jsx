import React from 'react';

const StartHero = () => {
  return (
    <section className="relative w-full h-[600px] flex flex-col items-center justify-start pt-[50px] overflow-hidden bg-white-50">
      {/* Background Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1920px] h-auto pointer-events-none">
        <img 
          src="/starthere/StartHereHero.png" 
          alt="background-flare" 
          className="w-full object-contain opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] w-full px-6 flex flex-col items-center text-center gap-[16px]">
        <h1 className="text-[40px] md:text-[64px] leading-[1.17] font-normal text-black-400">
          Start with the <span className="font-bold text-black-900">Right</span> Digital <br className="hidden md:block" />
          <span className="font-bold text-black-900">Foundation</span>
        </h1>
        <p className="text-[16px] md:text-[20px] leading-[1.5] md:leading-[30px] text-black-400 max-w-[1000px]">
          Choose exactly what you need whether you're creating an online presence, 
          securing a domain, setting up communication, or scaling infrastructure 
          without confusion or unnecessary steps.
        </p>
      </div>
    </section>
  );
};

export default StartHero;
