import React from 'react';
import Button from '../../ui/Button';

const ServiceCTA = () => {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-0">
        {/* CTA Card Container with Background Asset */}
        <div className="relative w-full h-[800px] bg-white-50 border border-black-100/10 rounded-[2px] overflow-hidden flex flex-col items-center justify-start pt-[100px] shadow-sm">
          
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/service/Service CTA.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            
            {/* Pill Tag */}
            <div className="bg-gold-50 border border-gold-100 px-[16px] py-[10px] rounded-[30px] flex items-center gap-[10px] mb-[16px] w-fit shadow-sm">
              <div className="w-[18px] h-[18px] flex items-center justify-center">
                <img src="/homepage/agreement-02.svg" alt="icon" className="w-full h-full object-contain" />
              </div>
              <span className="text-[14px] text-gold-800 font-medium tracking-tight">No more Hesitation</span>
            </div>

            {/* Title */}
            <h2 className="text-[48px] md:text-[64px] leading-[1.1] md:leading-[80px] tracking-tight font-normal text-black-900 mb-[16px]">
              <span className="text-black-400">Start with The </span>
              <span className="text-orange-600 font-bold">Right</span>
              <span className="text-black-400"> System,</span>
              <br />
              <span className="text-black-400">Not Just a </span>
              <span className="text-black-900 font-bold">Service</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[18px] md:text-[20px] leading-[30px] text-black-400 max-w-[764px] mb-[40px]">
              Tell us your business challenge—we'll map the right combination of services to solve it efficiently and sustainably.
            </p>

            {/* Button Group */}
            <div className="flex flex-col md:flex-row gap-[16px] items-center">
              <Button variant="primary" className="min-w-[240px]">
                Request Proposal
              </Button>
              <Button variant="secondary" className="min-w-[240px]">
                Book Free Consultation
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
