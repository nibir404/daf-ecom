import React from 'react';
import Button from '../../ui/Button';

const IWant = () => {
  const categories = [
    {
      id: 'website',
      title: 'I want to launch a website',
      bgColor: 'bg-purple-10/50',
      borderColor: 'border-purple-100',
      cards: [
        {
          title: 'Recommended Plans',
          subtitle: 'Launch Your Online Presence Without Complexity',
          description: 'Everything you need to go live—carefully structured packages designed for speed, reliability, and future expansion.'
        },
        {
          title: 'Bundle (Domain + Hosting + Email)',
          subtitle: 'Complete Setup in One Unified Package',
          description: 'Secure your identity, deploy your platform, and activate communication tools together—built for seamless activation and smooth growth.'
        },
        {
          isCta: true,
          description: 'Pick a package, complete setup in minutes, and move forward with confidence.',
          ctaText: 'Get Your Website Live Today',
          bgImage: '/starthere/Iwant1.svg'
        }
      ]
    },
    {
      id: 'domain',
      title: 'I need a domain name',
      bgColor: 'bg-orange-10/50',
      borderColor: 'border-orange-100',
      cards: [
        {
          title: 'Domain Search',
          subtitle: 'Find the Perfect Name for Your Brand',
          description: 'Search availability instantly and secure a digital identity that aligns with your business vision.'
        },
        {
          title: 'TLD Suggestions',
          subtitle: 'Choose the Right Extension for Your Market',
          description: 'Explore relevant domain endings based on industry, geography, and audience perception.'
        },
        {
          isCta: true,
          description: 'Register now and protect your brand identity for the long term.',
          ctaText: 'Secure Your Domain Before It’s Taken',
          bgImage: '/starthere/Iwant2.svg'
        }
      ]
    },
    {
      id: 'email',
      title: 'I need business email',
      bgColor: 'bg-success-10/50',
      borderColor: 'border-success-100',
      cards: [
        {
          title: 'Google Workspace',
          subtitle: 'Professional Communication Powered by Google',
          description: 'Access reliable email, collaboration tools, and cloud productivity—trusted by global organizations.'
        },
        {
          title: 'Enterprise Email',
          subtitle: 'Custom Email Solutions for Growing Organizations',
          description: 'Build secure communication systems tailored for internal operations and large teams.'
        },
        {
          isCta: true,
          description: 'Establish credibility with a branded communication system that scales with your company.',
          ctaText: 'Set Up Your Business Email Today',
          bgImage: '/starthere/Iwant3.svg'
        }
      ]
    },
    {
      id: 'hosting',
      title: 'I need hosting',
      bgColor: 'bg-alert-10/50',
      borderColor: 'border-alert-100',
      cards: [
        {
          title: 'Shared Hosting',
          subtitle: 'Affordable Hosting for Small and Medium Projects',
          description: 'Reliable environment designed for stability, simplicity, and cost efficiency.'
        },
        {
          title: 'Business Hosting',
          subtitle: 'High-Performance Hosting for Expanding Platforms',
          description: 'Enhanced speed, dedicated resources, and improved uptime for demanding workloads.'
        },
        {
          isCta: true,
          description: 'Select infrastructure that supports your current needs while preparing for future growth.',
          ctaText: 'Choose the Right Hosting Plan',
          bgImage: '/starthere/Iwant4.svg'
        }
      ]
    },
    {
      id: 'resell',
      title: 'I want to resell services',
      bgColor: 'bg-teal-10/50',
      borderColor: 'border-teal-100',
      cards: [
        {
          title: 'Domain Reseller',
          subtitle: 'Start Your Domain Reselling Business',
          description: 'Sell domain names under your own brand with full control and flexible pricing.'
        },
        {
          title: 'Hosting Reseller',
          subtitle: 'Offer Hosting Services to Your Clients',
          description: 'Build recurring revenue by managing hosting accounts through a centralized system.'
        },
        {
          isCta: true,
          description: 'Launch, manage, and scale your reselling operation with ease.',
          ctaText: 'Start Your Domain Reselling Business',
          bgImage: '/starthere/Iwant5.svg'
        }
      ]
    },
    {
      id: 'advanced',
      title: 'I need advanced infrastructure',
      bgColor: 'bg-info-10/50',
      borderColor: 'border-info-100',
      cards: [
        {
          title: 'VPS',
          subtitle: 'Flexible Virtual Servers for Custom Environments',
          description: 'Deploy scalable resources with full control over configurations and performance.'
        },
        {
          title: 'Dedicated Server',
          subtitle: 'Maximum Performance with Dedicated Hardware',
          description: 'Full resource isolation for mission-critical applications and heavy workloads.'
        },
        {
          isCta: true,
          description: 'Scale resources instantly based on traffic and usage without manual intervention.',
          ctaText: 'Build Your Own Digital Service Business',
          bgImage: '/starthere/Iwant6.svg'
        }
      ]
    }
  ];

  return (
    <section className="w-full bg-white-50 pt-[80px] md:pt-[120px] pb-0">
      <div className="max-w-[1520px] mx-auto px-6 xl:px-0 flex flex-col">
        {categories.map((category, index) => (
          <div 
            key={category.id} 
            className={`flex flex-col gap-[24px] pt-[40px] ${
              index !== categories.length - 1 ? 'pb-[40px] border-b border-white-600' : 'pb-0'
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3">
              <h2 className="text-[20px] font-semibold text-black-400" style={{ fontWeight: 590 }}>
                {category.title}
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              {category.cards.map((card, cardIndex) => (
                card.isCta ? (
                  <div 
                    key={cardIndex}
                    className={`relative rounded-[2px] p-[40px] h-[400px] flex flex-col justify-between overflow-hidden group border ${category.borderColor}`}
                  >
                    {/* Proper SVG Background for 3rd Card */}
                    <img 
                      src={card.bgImage} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <p className="relative z-10 text-[24px] font-medium leading-tight text-black max-w-[280px]">
                      {card.description}
                    </p>
                    
                    <Button variant="secondary" className="relative z-10 w-fit">
                      {card.ctaText}
                    </Button>
                  </div>
                ) : (
                  <div 
                    key={cardIndex}
                    className={`${category.bgColor} border ${category.borderColor} rounded-[2px] p-[40px] h-[400px] flex flex-col justify-between transition-all duration-300 hover:shadow-md`}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-[24px] font-medium text-black">
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <h4 className="text-[20px] font-bold text-black-400 leading-snug">
                        {card.subtitle}
                      </h4>
                      <p className="text-[14px] font-normal text-black-400 leading-[22px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IWant;
