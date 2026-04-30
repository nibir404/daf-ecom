import React, { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogContent from '../components/sections/blog/BlogContent';
import BlogExplore from '../components/sections/blog/BlogExplore';
import FAQ from '../components/sections/home/FAQ';

const SingleBlog = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Adjust based on when you want section to be active
            threshold: 0
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const sections = ['introduction', 'background', 'methodology', 'results', 'conclusion'];
        
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const BLOG_FAQS = [
        {
            question: "How does AI improve business operations?",
            answer: "AI improves business operations by automating repetitive tasks, providing predictive insights, and enhancing decision-making accuracy."
        },
        {
            question: "Is AI suitable for small and medium-sized businesses?",
            answer: "Yes, AI is scalable and can be tailored to businesses of any size to improve efficiency and drive growth."
        },
        {
            question: "What are the biggest challenges in implementing AI?",
            answer: "Common challenges include data quality, integration with legacy systems, and the need for specialized skills."
        },
        {
            question: "How long does it take to implement AI in a business?",
            answer: "Timelines vary based on complexity, but many projects can see initial results within a few months."
        },
        {
            question: "What industries benefit the most from AI adoption?",
            answer: "Virtually all industries can benefit, but healthcare, finance, and logistics see some of the most significant transformations."
        },
        {
            question: "Can AI replace human employees in business operations?",
            answer: "AI is designed to augment human work, allowing employees to focus on more strategic and creative tasks."
        },
        {
            question: "How can businesses measure the success of AI implementation?",
            answer: "Success can be measured through ROI, productivity gains, reduced error rates, and improved customer satisfaction."
        },
        {
            question: "What is the first step to adopting AI in business operations?",
            answer: "The first step is identifying high-impact use cases and assessing your current data infrastructure."
        }
    ];

    const TOC_ITEMS = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'background', label: 'Background' },
        { id: 'methodology', label: 'Methodology' },
        { id: 'results', label: 'Results' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    return (
        <MainLayout>
            <Navbar />

            <main className="flex flex-col bg-white-300">
                {/* Main Content Area with Sidebars */}
                <div className="max-w-[1520px] mx-auto pt-[50px] pb-10 md:pb-[100px] flex flex-col lg:flex-row px-6 xl:px-0 gap-10 lg:gap-[115px] relative">
                    
                    {/* Left Sticky Sidebar: Share */}
                    <aside className="hidden lg:block lg:w-[146px]">
                        <div className="sticky top-[120px] bg-white border border-white-600 rounded-[2px] p-5 flex flex-col gap-5 shadow-sm">
                            <span className="text-[20px] font-bold text-black whitespace-nowrap">Share Now</span>
                            <div className="flex gap-2">
                                <SocialIcon type="facebook" />
                                <SocialIcon type="youtube" />
                                <SocialIcon type="linkedin" />
                            </div>
                        </div>
                    </aside>

                    {/* Central Content */}
                    <div className="flex-1 w-full overflow-hidden">
                        <BlogContent />
                    </div>

                    {/* Right Sticky Sidebar: TOC */}
                    <aside className="hidden lg:block lg:w-[144px]">
                        <div className="sticky top-[120px] flex flex-col border-r border-black-100">
                            {TOC_ITEMS.map((item, index) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <div 
                                        key={index} 
                                        onClick={() => scrollToSection(item.id)}
                                        className={`px-[10px] py-[4px] border-r-4 transition-all cursor-pointer flex justify-end
                                            ${isActive 
                                                ? 'border-orange-600 text-black font-bold' 
                                                : 'border-transparent text-black-300 hover:text-black hover:border-black-200'}`}
                                    >
                                        <span className={isActive ? 'text-[20px] leading-[30px]' : 'text-[16px] leading-[30px]'}>
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </aside>
                </div>

                {/* Bottom Sections */}
                <BlogExplore />
                <FAQ 
                    faqs={BLOG_FAQS} 
                    className="py-[120px]"
                />
            </main>

            <Footer />
        </MainLayout>
    );
};

const SocialIcon = ({ type }) => {
    const icons = {
        facebook: "/Footer/facebook-02.svg",
        youtube: "/Footer/youtube.svg",
        linkedin: "/Footer/linkedin-02.svg"
    };

    return (
        <a 
            href="#" 
            className="bg-[#1c1c1c] rounded-full w-[30px] h-[30px] flex items-center justify-center transition-all hover:bg-orange-600 hover:scale-110 active:scale-95 group"
        >
            <img src={icons[type]} alt={type} className="w-[18px] h-[18px]" />
        </a>
    );
};

export default SingleBlog;
