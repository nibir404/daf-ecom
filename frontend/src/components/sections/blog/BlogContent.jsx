import { Link } from 'react-router-dom';

const BlogContent = () => {
    return (
        <div className="flex flex-col gap-[40px] w-full max-w-[1000px]">
            {/* Back Button */}
            <Link 
                to="/blog" 
                className="flex items-center gap-2 text-black-400 hover:text-orange-600 transition-colors group w-fit"
            >
                <div className="w-[30px] h-[30px] bg-white border border-white-600 rounded-full flex items-center justify-center transition-all group-hover:border-orange-600 group-hover:bg-orange-50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rotate-180">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span className="text-[16px] font-medium">Back to Blogs</span>
            </Link>

            {/* Header / Meta */}
            <div id="introduction" className="flex flex-col gap-4">
                <h1 className="text-[64px] leading-[75px] text-black-400 font-normal">
                    How AI is Transforming <span className="font-bold text-black-900">Business Operations</span> in 2026
                </h1>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1 text-[20px] text-black-900">
                        <span className="font-bold">Author:</span>
                        <span>Engineering Team |</span>
                        <span className="font-bold ml-1">Published at</span>
                        <span>19th January,</span>
                        <span className="font-bold italic ml-1">2026</span>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="px-4 py-[6px] bg-[#EFE6FD]/50 border border-[#360083] rounded-[2px] text-[#360083] text-sm font-normal">
                            Business
                        </div>
                        <div className="px-4 py-[6px] bg-[#EFE6FD]/50 border border-[#360083] rounded-[2px] text-[#360083] text-sm font-normal">
                            AI
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <p className="text-[20px] leading-[30px] text-black-400">
                Artificial Intelligence has moved far beyond experimentation and is now becoming the core layer of how modern businesses operate. In 2026, organizations are no longer exploring whether AI is useful—they are actively restructuring their operations around it. What was once a competitive advantage is quickly becoming a baseline expectation. Businesses that fail to adapt are not just missing opportunities; they are creating operational disadvantages that compound over time.
            </p>

            {/* Main Image - Background Section */}
            <div id="background" className="w-full h-[500px] overflow-hidden rounded-[2px]">
                <img 
                    src="/single-blog/snblog1.png" 
                    alt="Main Blog" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Body Text 1 - Methodology */}
            <p id="methodology" className="text-[20px] leading-[30px] text-black-400">
                At its core, AI is transforming business operations by replacing static, manual processes with dynamic, intelligent systems. Traditionally, operations depended heavily on human intervention—data entry, reporting, customer service handling, and even decision-making were often reactive and time-consuming. Today, AI enables businesses to automate these repetitive workflows while simultaneously learning from data patterns. This shift is not just about speed; it’s about improving accuracy, consistency, and scalability across the organization.
            </p>

            {/* Body Text 2 */}
            <p className="text-[20px] leading-[30px] text-black-400">
                One of the most immediate impacts of AI can be seen in process automation. Tasks that previously required hours of manual effort—such as invoice processing, customer query handling, or internal reporting—can now be executed in seconds with minimal human oversight. This allows teams to redirect their focus toward strategic initiatives rather than operational maintenance. As a result, organizations are not only reducing costs but also unlocking higher productivity from their existing workforce.
            </p>

            {/* Sub Images - Results */}
            <div id="results" className="flex gap-[40px] w-full h-[422px]">
                <div className="flex-1 rounded-[2px] overflow-hidden">
                    <img 
                        src="/single-blog/snblog2.png" 
                        alt="Process" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 rounded-[2px] overflow-hidden">
                    <img 
                        src="/single-blog/snblog3.png" 
                        alt="Analytics" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Body Text 3 - Conclusion */}
            <div id="conclusion" className="text-[20px] leading-[30px] text-black-400 flex flex-col gap-6">
                <p>
                    Beyond automation, AI is fundamentally changing how decisions are made within businesses. Instead of relying solely on historical data and intuition, companies can now use predictive analytics to anticipate trends, identify risks, and recommend actions before issues arise. For example, businesses can forecast customer demand, optimize inventory levels, or detect inefficiencies in real time. This proactive approach transforms operations from reactive problem-solving into forward-looking strategy execution.
                </p>
                <p>
                    Another significant transformation lies in customer experience. AI enables businesses to personalize interactions at scale—something that was previously impossible without large teams. By analyzing user behavior, preferences, and engagement patterns, AI systems can deliver tailored recommendations, dynamic content, and faster support responses. This level of personalization not only improves customer satisfaction but also drives higher conversion rates and long-term loyalty.
                </p>
            </div>
        </div>
    );
};

export default BlogContent;
