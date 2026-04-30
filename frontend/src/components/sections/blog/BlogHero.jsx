import React from 'react';
import Button from '../../ui/Button';

const BlogHero = () => {
    return (
        <section className="relative w-full h-[600px] bg-white-50 overflow-hidden flex items-center justify-center">
            {/* Background Flare */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[409px] pointer-events-none">
                <img 
                    src="/blogpage/BlogHero.png" 
                    alt="" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-[1520px] mx-auto flex flex-col items-center text-center gap-10">
                <div className="flex flex-col gap-4 max-w-[1100px]">
                    <h1 className="text-[64px] leading-[75px] text-black-400 font-normal">
                        Insights on <span className="font-bold text-black-900">Software</span>, <span className="font-bold text-black-900">AI</span> & <span className="font-bold text-black-900">Digital</span> Transformation
                    </h1>
                    <p className="text-[20px] leading-[30px] text-black-400 max-w-[1018px] mx-auto">
                        Explore practical guides, expert insights, and real-world strategies on custom software, ERP systems, AI automation, and modern web development.
                    </p>
                </div>
                
                <Button variant="primary">
                    Explore All Blogs
                </Button>
            </div>
        </section>
    );
};

export default BlogHero;
