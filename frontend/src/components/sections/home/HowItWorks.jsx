import React, { useState, useEffect, useRef } from 'react';
import Button from '../../ui/Button';

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('quick'); // 'quick' or 'custom'
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the section has been scrolled through
            // We start filling when the top of the section enters the bottom of the viewport
            // and finish when the bottom of the section leaves the top
            const sectionHeight = rect.height;
            const start = windowHeight;
            const end = -sectionHeight;
            
            const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const workflowData = {
        quick: {
            title: "Two Ways to",
            titleAccent: "Start",
            description: "Different goals need different solutions. Choose your path.",
            steps: [
                {
                    id: 1,
                    tag: "Step 1",
                    title: "Get Online Instantly",
                    text: "Search your domain, choose hosting or email, and get started in minutes no technical complexity required."
                },
                {
                    id: 2,
                    tag: "Step 2",
                    title: "Choose What Fits You",
                    text: "Simple, transparent plans designed for different needs—from personal projects to growing businesses."
                },
                {
                    id: 3,
                    tag: "Step 3",
                    title: "Launch Without Delays",
                    text: "Your domain, hosting, and email are activated instantly, so you can go live right away."
                },
                {
                    id: 4,
                    tag: "Step 4",
                    title: "Scale When You’re Ready",
                    text: "Upgrade resources, add features, or expand your setup as your business grows."
                }
            ],
            card: {
                title: "Get Online in Minutes, No Setup Complexity",
                description: "Search your domain, choose hosting, and launch instantly with a reliable foundation.",
                cta: "Get Online",
                image: "http://localhost:3845/assets/8f1146611ff4a4ecb05c2a36765ae6cbeb699db8.png",
                flare: "http://localhost:3845/assets/7ee905ccb6090f1f39eee6d03621f46e454e7938.svg"
            },
            theme: {
                primary: 'bg-blue-500',
                light: 'bg-blue-50',
                fill: 'bg-blue-500'
            }
        },
        custom: {
            title: "Two Ways to",
            titleAccent: "Get Started",
            subtitle: "Based on What You Need",
            description: "Different goals need different solutions. Choose your path.",
            steps: [
                {
                    id: 1,
                    tag: "Step 1",
                    title: "Discover & Define",
                    text: "We start with a focused discussion to understand your goals, users, and business challenges"
                },
                {
                    id: 2,
                    tag: "Step 2",
                    title: "Design & Plan",
                    text: "We define ux, system architecture, and a clear roadmap aligning design with functionality and scalability."
                },
                {
                    id: 3,
                    tag: "Step 3",
                    title: "Build & Validate",
                    text: "Our team develops your product using structured workflows, continuous feedback, and iterative validation."
                },
                {
                    id: 4,
                    tag: "Step 4",
                    title: "Launch & Scale",
                    text: "We deploy, monitor, and optimize your system ensuring it performs reliably as your business grows."
                }
            ],
            card: {
                title: "Build Something Scalable, With the Right Foundation",
                description: "Start with a structured approach to design, development, and long-term growth.",
                cta: "Get System Plan",
                image: "http://localhost:3845/assets/9888f4b32822a85739506bafd0d97405847de829.png",
                flare: "http://localhost:3845/assets/ff1ab9570f9d87a02b440850ddfb3d20ea6bfa2e.svg"
            },
            theme: {
                primary: 'bg-orange-500',
                light: 'bg-orange-50',
                fill: 'bg-orange-500'
            }
        }
    };

    const currentData = workflowData[activeTab];

    return (
        <section ref={sectionRef} className="w-full py-[120px] bg-white-50 overflow-hidden">
            <div className="max-w-[1520px] mx-auto px-6 md:px-0">
                {/* Header & Tabs */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-[60px] gap-8">
                    <div className="max-w-[524px]">
                        <h2 className="text-[48px] leading-[1.2] text-black-400">
                            Two Ways to <span className="font-bold text-black-900">Start</span>
                        </h2>
                        <p className="text-[16px] leading-[26px] text-black-400 mt-[10px]">
                            Different goals need different solutions. Choose your path.
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px] w-full md:w-[348px]">
                        <p className="text-[16px] font-medium text-black">
                            Select Your Preferred Tab and See The Path
                        </p>
                        <div className="bg-white border border-white-600 p-[4px] rounded-[2px] flex items-center">
                            <button 
                                onClick={() => setActiveTab('quick')}
                                className={`flex-1 h-[40px] rounded-[2px] text-[16px] font-semibold transition-all ${
                                    activeTab === 'quick' 
                                    ? 'bg-blue-700 text-white-50' 
                                    : 'text-black-300 hover:bg-white-200'
                                }`}
                            >
                                Quick setup
                            </button>
                            <button 
                                onClick={() => setActiveTab('custom')}
                                className={`flex-1 h-[40px] rounded-[2px] text-[16px] font-semibold transition-all ${
                                    activeTab === 'custom' 
                                    ? 'bg-blue-700 text-white-50' 
                                    : 'text-black-300 hover:bg-white-200'
                                }`}
                            >
                                Custom project
                            </button>
                        </div>
                    </div>
                </div>

                {/* Workflow Content */}
                <div className="flex flex-col md:flex-row gap-[60px] items-stretch">
                    {/* Left: Steps List */}
                    <div className="w-full md:w-[524px] relative py-2">
                        {/* Connecting Line (Grey Background) */}
                        <div className="absolute left-[24px] top-[25px] w-[2px] h-[calc(100%-80px)] bg-white-600" />
                        
                        {/* Connecting Line (Active Fill) */}
                        <div 
                            className={`absolute left-[24px] top-[25px] w-[2px] ${currentData.theme.fill} transition-all duration-300 ease-out origin-top`}
                            style={{ height: `calc(${(scrollProgress * 100).toFixed(2)}% - 80px)` }}
                        />
                        
                        <div className="flex flex-col gap-[40px]">
                            {currentData.steps.map((step) => (
                                <div key={step.id} className="flex gap-[24px] items-start relative z-10">
                                    {/* Icon Circle */}
                                    <div className={`shrink-0 w-[50px] h-[50px] rounded-full flex items-center justify-center ${currentData.theme.light}`}>
                                        <div className={`w-[36px] h-[36px] rounded-full ${currentData.theme.primary} flex items-center justify-center p-[4px]`}>
                                            <img src="/arrow-right.svg" alt="icon" className="w-[20px] h-[20px] rotate-90 brightness-0 invert" />
                                        </div>
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="flex flex-col gap-[11px]">
                                        <div className="bg-gold-10 border border-white-500 px-[16px] py-[6px] rounded-[30px] w-fit">
                                            <p className="text-[14px] text-gold-800">{step.tag}</p>
                                        </div>
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="text-[24px] font-semibold italic text-black">
                                                {step.title}
                                            </h3>
                                            <p className="text-[16px] leading-[26px] text-black-400">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Featured Card */}
                    <div className="flex-1 bg-white border border-white-600 rounded-[2px] relative overflow-hidden group/card">
                        {/* Background Flare */}
                        <div className="absolute inset-0 pointer-events-none opacity-40 group-hover/card:opacity-60 transition-opacity">
                            <img src={currentData.card.flare} alt="" className="w-full h-full object-cover scale-150 rotate-[145deg]" />
                        </div>

                        {/* Text Content */}
                        <div className="absolute left-[40px] top-[40px] max-w-[450px] z-10">
                            <h3 className="text-[36px] font-semibold italic leading-[1.2] text-black mb-[10px]">
                                {currentData.card.title}
                            </h3>
                            <p className="text-[16px] leading-[26px] text-black-400">
                                {currentData.card.description}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="absolute left-[40px] bottom-[40px] z-10">
                            <Button variant="primary">
                                {currentData.card.cta}
                            </Button>
                        </div>

                        {/* Featured Image */}
                        <div className="absolute right-0 bottom-0 w-[310px] h-full pointer-events-none">
                            <img 
                                src={currentData.card.image} 
                                alt="preview" 
                                className="w-full h-full object-cover object-left" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
