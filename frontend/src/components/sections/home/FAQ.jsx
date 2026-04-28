import React, { useState } from 'react';
import Button from '../../ui/Button';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I get started?",
            answer: "Simply click the 'Call Us Today' button or send us an email. We'll schedule a discovery call to understand your needs and provide a tailored roadmap."
        },
        {
            question: "How much does a project cost?",
            answer: "Pricing varies based on complexity and scope. We offer flexible packages ranging from fast-track launches to full-scale enterprise systems."
        },
        {
            question: "How long does it take to build a system?",
            answer: "Fast-track projects can be delivered in weeks, while more complex systems may take a few months depending on integration requirements."
        },
        {
            question: "Do you only work with businesses in Bangladesh?",
            answer: "No, we work with clients globally, providing world-class development and design services regardless of location."
        },
        {
            question: "Can you help if I already have an existing system?",
            answer: "Yes, we specialize in system modernization and integration, helping you optimize and scale your current infrastructure."
        },
        {
            question: "Do you provide ongoing support after launch?",
            answer: "Absolutely. We provide dedicated support and maintenance packages to ensure your system remains secure and performs at its best."
        },
        {
            question: "What technologies do you work with?",
            answer: "We use a modern stack including React, Node.js, Python, and various cloud infrastructures tailored to your project's needs."
        },
        {
            question: "Can you integrate with other tools or systems?",
            answer: "Yes, we have extensive experience with API integrations and connecting third-party tools to create seamless workflows."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-[120px]">
            <div className="max-w-[1520px] mx-auto px-6 md:px-0">
                <div className="flex flex-col lg:flex-row gap-[60px] items-start">
                    
                    {/* Left Side: Header & Contact */}
                    <div className="w-full lg:w-[682px] bg-white border border-white-500 rounded-[2px] p-[40px] flex flex-col justify-between min-h-[600px] shrink-0">
                        <div className="flex flex-col gap-[24px]">
                            <div className="flex flex-col gap-[16px]">
                                <h2 className="text-[48px] leading-[1.1] text-black-400 font-normal">
                                    Frequently Asked <span className="text-black font-bold">Questions</span>
                                </h2>
                                <p className="text-[16px] leading-[26px] text-black-400 font-normal max-w-[500px]">
                                    Clear answers to help you move forward with confidence whether you're launching fast or building something complex.
                                </p>
                            </div>
                            
                            <Button variant="primary" className="w-fit">
                                Call Us Today
                            </Button>
                        </div>

                        <div className="flex flex-col gap-[24px] mt-20 lg:mt-0">
                            <h3 className="text-[36px] leading-tight text-black-400 font-normal">
                                Still have questions? <span className="text-black font-bold italic">Let's talk.</span>
                            </h3>
                            
                            <div className="flex items-center gap-[16px]">
                                <div className="w-[50px] h-[50px] bg-white-200 border-2 border-white/40 rounded-[2px] flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.15)] shrink-0">
                                    <img src="/homepage/FAQ-mail.svg" alt="Email" className="w-[30px] h-[30px]" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[14px] text-black-400 font-normal">
                                        Do you prefer <span className="font-bold">email</span> communication
                                    </p>
                                    <p className="text-[16px] text-black font-bold italic">
                                        Daffodil@webandecommerce.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: FAQ Accordion */}
                    <div className="flex-1 w-full flex flex-col">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`border-b border-white-600 overflow-hidden transition-all duration-300 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}
                            >
                                <button 
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between py-[20px] text-left group"
                                >
                                    <span className={`text-[24px] font-semibold italic transition-colors ${openIndex === index ? 'text-orange-600' : 'text-black group-hover:text-black-400'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-[16px] h-[16px] relative flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                                        <div className="absolute w-full h-[2px] bg-black"></div>
                                        <div className="absolute w-[2px] h-full bg-black"></div>
                                    </div>
                                </button>
                                <div 
                                    className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] mb-[20px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-[16px] text-black-400 font-normal leading-[1.6]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
