import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const FeaturedBlog = () => {
    return (
        <section className="pt-[50px] pb-[100px] bg-white-300">
            <div className="max-w-[1520px] mx-auto px-6 xl:px-0">
                <Link to="/blog/featured" className="bg-white border border-white-500 rounded-[2px] overflow-hidden flex flex-col lg:flex-row min-h-[500px] w-full shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                    {/* Left: Image */}
                    <div className="w-full lg:w-[747px] h-[300px] lg:h-full p-[9px]">
                        <img 
                            src="/blogpage/FeaturedBlog.png" 
                            alt="Featured Blog" 
                            className="w-full h-full object-cover rounded-[2px] transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 p-[40px] flex flex-col justify-between">
                        <div className="flex flex-col gap-5 items-start">
                            <div className="px-4 py-[6px] bg-gold-10 border border-white-500 rounded-[2px] text-gold-800 text-sm font-normal">
                                Featured
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="text-[36px] font-semibold italic text-black leading-tight font-['SF_Pro_Display'] group-hover:text-orange-600 transition-colors" style={{ fontVariationSettings: "'YAXS' 419.2" }}>
                                    How AI is Transforming Business Operations in 2026
                                </h2>
                                <p className="text-[16px] leading-[26px] text-black-400">
                                    Discover how AI-powered automation is helping businesses reduce manual processes, improve decision-making, and scale operations efficiently.
                                </p>
                            </div>
                        </div>

                        <Button variant="tertiary" className="w-fit">
                            Read Full Article
                        </Button>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedBlog;
