import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const EXPLORE_POSTS = [
    {
        id: 1,
        title: "Embracing DevOps: A Guide to Streamlining Software Development",
        description: "Learn how DevOps principles can accelerate your development cycles and improve collaboration.",
        image: "/blogpage/blog1.png",
    },
    {
        id: 2,
        title: "Maximizing ROI with Data Analytics: Strategies for Success",
        description: "Unlock the potential of your data with our guide to effective analytics and business intelligence.",
        image: "/blogpage/blog2.png",
    },
    {
        id: 3,
        title: "The Future of E-commerce: Trends and Technologies to Watch",
        description: "Stay ahead in the e-commerce game with insights on the latest trends and technological innovations.",
        image: "/blogpage/blog3.png",
    },
    {
        id: 4,
        title: "Cloud Migration Strategies: A Step-by-Step Guide",
        description: "Navigate your cloud migration smoothly with our comprehensive guide and expert advice.",
        image: "/blogpage/blog4.png",
    },
    {
        id: 5,
        title: "Building a Mobile-First Strategy: Tips and Considerations",
        description: "Optimize your digital presence for mobile users with our essential tips and strategic insights.",
        image: "/blogpage/blog5.png",
    },
    {
        id: 6,
        title: "AI in Healthcare: Transforming Patient Care and Diagnostics",
        description: "Discover how AI is revolutionizing healthcare with advancements in diagnostics and patient care.",
        image: "/blogpage/blog6.png",
    },
    {
        id: 7,
        title: "The Impact of Blockchain on Supply Chain Transparency",
        description: "Explore how blockchain technology is enhancing transparency and efficiency in global supply chains.",
        image: "/blogpage/blog1.png",
    },
    {
        id: 8,
        title: "Cybersecurity Best Practices for Modern Businesses",
        description: "Protect your organization from digital threats with our essential guide to cybersecurity best practices.",
        image: "/blogpage/blog2.png",
    },
    {
        id: 9,
        title: "The Rise of Remote Work: Tools and Strategies for Success",
        description: "Empower your remote workforce with the right tools and strategies for productivity and collaboration.",
        image: "/blogpage/blog3.png",
    }
];

const BlogExplore = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        
        const scrollAmount = 800; // Large card width + gap
        const currentScroll = scrollRef.current.scrollLeft;
        const targetScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

        gsap.to(scrollRef.current, {
            scrollLeft: targetScroll,
            duration: 0.8,
            ease: "power2.out"
        });
    };

    return (
        <section className="bg-black-900 py-[120px] overflow-hidden">
            <div className="max-w-[1520px] mx-auto">
                <div className="flex items-start justify-between mb-[60px] p-[10px]">
                    <div className="flex flex-col gap-4 text-white-700">
                        <h2 className="text-[48px] font-normal leading-normal">
                            Explore More <span className="font-bold text-white-50">Insights</span>
                        </h2>
                        <p className="text-[16px] leading-[26px] max-w-[448px]">
                            Dive deeper into strategies, technologies, and ideas shaping the future of modern business.
                        </p>
                    </div>
                    
                    <div className="flex gap-4">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-[50px] h-[50px] bg-orange-300 rounded-full flex items-center justify-center rotate-180 transition-hover hover:bg-orange-600 active:scale-95"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-[50px] h-[50px] bg-orange-600 rounded-full flex items-center justify-center transition-hover hover:bg-orange-300 active:scale-95"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div 
                    ref={scrollRef}
                    className="flex gap-[30px] overflow-x-auto no-scrollbar scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {EXPLORE_POSTS.map(post => (
                        <Link key={post.id} to={`/blog/${post.id}`} className="min-w-[750px] h-[500px] relative group cursor-pointer overflow-hidden rounded-[2px] block shrink-0">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Seamless Blur Overlay */}
                            <div 
                                className="absolute inset-0 backdrop-blur-[15px] bg-black/40 transition-opacity duration-300 opacity-90 group-hover:opacity-100"
                                style={{
                                    maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 70%)',
                                    WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 70%)'
                                }}
                            />
                            
                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <h3 className="text-white text-[24px] font-medium leading-[32px] mb-3 group-hover:text-orange-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-white-700 text-[14px] leading-[20px] max-w-[700px]">
                                    {post.description} <span className="text-white font-bold ml-1">Read more...</span>
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogExplore;
