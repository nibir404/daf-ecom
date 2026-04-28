import React from 'react';
import Button from '../../ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-white-50 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Flare Asset */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[400px] z-0 pointer-events-none">
        <img 
          src="/service/ServiceHero.png" 
          alt="flare" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1100px] mx-auto text-center px-6">
        <div className="space-y-[16px]">
          <h1 className="text-[48px] md:text-[64px] leading-[1.1] md:leading-[75px] font-normal text-black-400 tracking-tight">
            Everything You Need to <span className="font-bold text-black-900">Build</span> and <span className="font-bold text-black-900">Run</span> Modern Digital Products
          </h1>
          <p className="text-[18px] md:text-[20px] leading-[30px] text-black-400 max-w-[900px] mx-auto">
            Explore the full range of capabilities—from product engineering and enterprise systems to intelligent automation and managed infrastructure designed to support growth at every stage.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-[40px] flex justify-center">
          <Button variant="primary">
            View All Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
