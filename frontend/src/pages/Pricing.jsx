import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FAQ from "../components/sections/home/FAQ";
import PricingHero from "../components/sections/pricing/PricingHero";
import GrowthStage from "../components/sections/pricing/GrowthStage";
import ActualPay from "../components/sections/pricing/ActualPay";
import HowPricingWorks from "../components/sections/pricing/HowPricingWorks";
import Credibility from '../components/sections/home/Credibility';
import PricingCTA from '../components/sections/pricing/PricingCTA';

const Pricing = () => {
    const pricingFaqs = [
        {
            question: "How much does a website or software solution cost?",
            answer: "Pricing varies based on complexity and scope. We provide fixed-scope quotes for well-defined projects and flexible models for evolving enterprise systems."
        },
        {
            question: "Do you offer fixed pricing or flexible models?",
            answer: "Yes, we offer Fixed Scope for defined deliverables and Time & Material or Dedicated Team models for ongoing development and scaling."
        },
        {
            question: "Can I upgrade my plan later?",
            answer: "Absolutely. Our solutions are built to scale. You can transition from a starter package to a dedicated team as your business growth requires."
        },
        {
            question: "Do you support international clients?",
            answer: "Yes, we have a proven track record of supporting businesses in Bangladesh and global markets with localized expertise and international standards."
        },
        {
            question: "What is included in support and maintenance?",
            answer: "Standard plans include security updates, bug fixes, and performance monitoring. Dedicated teams provide 24/7 technical oversight."
        },
        {
            question: "How do you ensure scalability?",
            answer: "We utilize cloud-native architectures, API-first designs, and modular software patterns to ensure your system grows with your user base."
        },
        {
            question: "Will we have project visibility?",
            answer: "Yes. We maintain full transparency through integrated project management tools, regular sprints, and dedicated communication channels."
        },
        {
            question: "What if requirements change?",
            answer: "Our agile-driven flexible models are designed exactly for this, allowing you to pivot or expand requirements without restarting the entire process."
        }
    ];

    return (
      <div className="min-h-screen bg-white-300 font-sf-pro">
        <MainLayout>
            <Navbar />
            <PricingHero />
            <Credibility 
                variant="light" 
                text="From domain registration and hosting to custom software, ERP, and AI-driven platforms, explore pricing built for businesses in Bangladesh and global markets."
                showSearchBar={false}
                logos={[
                    "/pricingpage/Vector.png",
                    "/pricingpage/Vector-1.png",
                    "/pricingpage/Group.png",
                    "/pricingpage/Vector-2.png",
                    "/pricingpage/Group-1.png",
                    "/pricingpage/Vector-3.png"
                ]}
            />
            <HowPricingWorks />
            <GrowthStage />
            <ActualPay />
            <div className="">
                <FAQ faqs={pricingFaqs} />
            </div>
            <PricingCTA />
            <Footer />
        </MainLayout>
        </div>
    );
};

export default Pricing;
