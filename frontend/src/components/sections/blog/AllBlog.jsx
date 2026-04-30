import React, { useState } from 'react';
import Button from '../../ui/Button';

const CATEGORIES = [
    'All Blogs',
    'Featured',
    'AI & Intelligent Systems',
    'Engineering & Architecture'
];

const BLOG_POSTS = [
    {
        id: 1,
        title: "Custom Software vs Off-the-Shelf: Which is Right for Your Business?",
        description: "Choosing between custom and ready-made software can define your operational efficiency. Learn the key differences",
        image: "/blogpage/blog1.png",
        size: "small"
    },
    {
        id: 2,
        title: "The Rise of Serverless Computing: Benefits and Use Cases",
        description: "Explore the advantages of serverless architecture and how it can revolutionize your cloud strategy.",
        image: "/blogpage/blog2.png",
        size: "small"
    },
    {
        id: 3,
        title: "Cybersecurity Best Practices for Remote Work Environments",
        description: "Enhance your remote work security with our expert tips on data protection and threat prevention.",
        image: "/blogpage/blog3.png",
        size: "small"
    },
    {
        id: 4,
        title: "Embracing DevOps: A Guide to Streamlining Software Development",
        description: "Learn how DevOps principles can accelerate your development cycles and improve collaboration.",
        image: "/blogpage/blog4.png",
        size: "large"
    },
    {
        id: 5,
        title: "Maximizing ROI with Data Analytics: Strategies for Success",
        description: "Unlock the potential of your data with our guide to effective analytics and business intelligence.",
        image: "/blogpage/blog5.png",
        size: "large"
    },
    {
        id: 6,
        title: "The Future of E-commerce: Trends and Technologies to Watch",
        description: "Stay ahead in the e-commerce game with insights on the latest trends and technological innovations.",
        image: "/blogpage/blog6.png",
        size: "large"
    },
    {
        id: 7,
        title: "Cloud Migration Strategies: A Step-by-Step Guide",
        description: "Navigate your cloud migration smoothly with our comprehensive guide and expert advice.",
        image: "/blogpage/blog7.png",
        size: "large"
    },
    {
        id: 8,
        title: "Building a Mobile-First Strategy: Tips and Considerations",
        description: "Optimize your digital presence for mobile users with our essential tips and strategic insights.",
        image: "/blogpage/blog8.png",
        size: "large"
    },
    {
        id: 9,
        title: "AI in Healthcare: Transforming Patient Care and Diagnostics",
        description: "Discover how AI is revolutionizing healthcare with advancements in diagnostics and patient care.",
        image: "/blogpage/blog9.png",
        size: "large"
    }
];
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
    return (
        <Link to={`/blog/${post.id}`} className={`relative group cursor-pointer overflow-hidden rounded-[2px] h-[500px] flex-1 block`}>
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
            
            {/* Content Area */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 pb-10">
                <h3 className="text-white text-[20px] md:text-[24px] font-medium leading-[1.2] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {post.title}
                </h3>
                <p className="text-[#acacac] text-[14px] leading-[20px] line-clamp-2">
                    {post.description} <span className="text-white font-bold ml-1">Read more...</span>
                </p>
            </div>
        </Link>
    );
};

const AllBlog = () => {
    const [activeCategory, setActiveCategory] = useState('All Blogs');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <section className="bg-white-50 min-h-screen">
            {/* Sticky Filter Bar */}
            <div className="sticky top-[80px] z-40 bg-white border-b border-white-500 shadow-sm">
                <div className="max-w-[1520px] mx-auto h-auto min-h-[100px] flex flex-col lg:flex-row items-center justify-between px-6 xl:px-0 py-4 lg:py-0 gap-6">
                    <div className="flex gap-[10px] items-center overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full border transition-all duration-300 text-[14px] md:text-[16px] whitespace-nowrap
                                    ${activeCategory === cat 
                                        ? 'bg-blue-500 border-transparent text-white' 
                                        : 'bg-white border-white-600 text-[#333] hover:border-blue-500'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    
                    <div className="relative w-full lg:w-auto">
                        <div 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full lg:w-[450px] border-b border-black py-[10px] flex items-center justify-between cursor-pointer group/select"
                        >
                            <span className="text-[16px] text-[#333] font-medium">
                                {activeCategory === 'All Blogs' ? 'Select Your Blog Category' : activeCategory}
                            </span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={`text-[#333] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 w-full bg-white-200 border border-white-600 rounded-[2px] mt-1 shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                {CATEGORIES.map(cat => (
                                    <div 
                                        key={cat}
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`px-6 py-3 cursor-pointer transition-colors duration-200 text-[16px]
                                            ${activeCategory === cat ? 'bg-blue-50 text-blue-600 font-medium' : 'text-black-400 hover:bg-white-50 hover:text-black-900'}`}
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Blogs Grid */}
            <div className="max-w-[1520px] mx-auto px-6 xl:px-0 py-[60px] flex flex-col gap-[40px] md:gap-[60px]">
                {/* First Row: 3 Small Cards */}
                <div className="flex flex-col md:flex-row gap-5">
                    {BLOG_POSTS.slice(0, 3).map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Second Row: 2 Large Cards */}
                <div className="flex flex-col md:flex-row gap-5">
                    {BLOG_POSTS.slice(3, 5).map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Third Row: 2 Large Cards */}
                <div className="flex flex-col md:flex-row gap-5">
                    {BLOG_POSTS.slice(5, 7).map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Fourth Row: 2 Large Cards */}
                <div className="flex flex-col md:flex-row gap-5">
                    {BLOG_POSTS.slice(7, 9).map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllBlog;
