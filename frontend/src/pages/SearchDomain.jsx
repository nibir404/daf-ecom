import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SearchHero from '../components/sections/search-domain/search-hero';
import SearchResults from '../components/sections/search-domain/SearchResults';
import FAQ from '../components/sections/home/FAQ';
import PricingCTA from '../components/sections/pricing/PricingCTA';

const SearchDomain = () => {
    const domainFaqs = [
        {
            question: "How long does domain registration take?",
            answer: "Most domain registrations are processed instantly. Once your payment is confirmed, your domain will be active and ready for use within minutes."
        },
        {
            question: "Can I transfer my existing domain to Daffodil?",
            answer: "Yes, you can easily transfer your domain to us. Simply provide your domain's EPP/Authorization code, and our team will handle the migration process."
        },
        {
            question: "Do you provide WHOIS privacy protection?",
            answer: "Absolutely. We offer WHOIS privacy protection to keep your personal information secure and hidden from public domain databases."
        },
        {
            question: "What happens when my domain expires?",
            answer: "We send multiple renewal reminders before your domain expires. If not renewed, it enters a grace period before being released back to the public."
        },
        {
            question: "Can I register a domain without hosting?",
            answer: "Yes, you can register a domain name and park it with us without purchasing a hosting plan. You can add hosting later whenever you're ready."
        }
    ];

    return (
        <MainLayout>
            <Navbar />
            <SearchHero />
            <SearchResults />
            <FAQ 
                title={<>Frequently Asked <span className="text-black font-bold">Questions</span></>}
                subtitle="Everything you need to know about domain registration, transfers, and management with Daffodil Global."
                faqs={domainFaqs}
                className="py-[120px] bg-white-500"
            />
            <Footer />
        </MainLayout>
    );
};

export default SearchDomain;
