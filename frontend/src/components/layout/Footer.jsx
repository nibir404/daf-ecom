import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Footer = () => {
    const footerLinks = [
        {
            title: "Services",
            links: ["Web Development", "App Development", "Custom Software", "ERP Solutions", "AI & Automation", "Cloud & Hosting"]
        },
        {
            title: "Solutions",
            links: ["Launch a Product", "Business Growth", "Enterprise Systems", "Offshore Development", "Startup Support"]
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", path: "/blog" },
                { name: "Guides", path: "#" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "FAQs", path: "/faq" }
            ]
        },
        {
            title: "Support",
            links: ["Help Center", "Submit Ticket", "Live Chat", "System Status"]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", path: "/about" },
                { name: "Pricing", path: "/pricing" },
                { name: "Clients & Portfolio", path: "#" },
                { name: "Careers", path: "#" },
                { name: "Contact", path: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "#" },
                { name: "Security Policy", path: "#" },
                { name: "Compliance", path: "#" }
            ]
        }
    ];

    const partnerships = [
        { name: "ISO", logo: "/Footer/iso.png" },
        { name: "Microsoft", logo: "/Footer/microsoft.png" },
        { name: "Odoo", logo: "/Footer/odoo.png" }
    ];

    const socials = [
        { name: "Facebook", icon: "/Footer/facebook-02.svg" },
        { name: "YouTube", icon: "/Footer/youtube.svg" },
        { name: "LinkedIn", icon: "/Footer/linkedin-02.svg" }
    ];

    return (
        <footer className="bg-black-800 border border-teal-900 border-solid px-6 lg:px-[200px] py-[120px] w-full">
            <div className="max-w-[1520px] mx-auto flex flex-col gap-[20px] w-full">
                
                {/* Header Container */}
                <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-start pb-[60px] border-b border-white/10 w-full">
                    {/* Left Columns (Services, Solutions, Resources) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 flex-1 gap-[40px] lg:gap-[60px] items-start w-full lg:w-auto">
                        {footerLinks.slice(0, 3).map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-[20px] min-w-0">
                                <h4 className="text-[24px] text-white font-normal leading-normal whitespace-nowrap">{group.title}</h4>
                                <div className="flex flex-col text-[14px] text-white/80 leading-relaxed">
                                    {group.links.map((link, lIdx) => {
                                        const isObject = typeof link === 'object';
                                        const path = isObject ? link.path : (group.title === "Services" ? "/services" : "#");
                                        const label = isObject ? link.name : link;

                                        return (
                                            <Link 
                                                key={lIdx} 
                                                to={path} 
                                                className="hover:text-white transition-colors py-[2px] block whitespace-nowrap"
                                            >
                                                {label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Logo Container */}
                    <div className="flex flex-col h-auto lg:h-[80px] items-start w-full lg:w-[282px] shrink-0">
                        <Link to="/">
                            <img src="/Footer/DaffodilWhiteLogo.png" alt="Daffodil" className="w-[200px] lg:w-[240px] h-auto object-contain" />
                        </Link>
                    </div>

                    {/* Right Columns (Support, Company, Legal) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 flex-1 gap-[40px] lg:gap-[60px] items-start w-full lg:w-auto">
                        {footerLinks.slice(3).map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-[20px] min-w-0">
                                <h4 className="text-[24px] text-white font-normal leading-normal whitespace-nowrap">{group.title}</h4>
                                <div className="flex flex-col text-[14px] text-white/80 leading-relaxed">
                                    {group.links.map((link, lIdx) => {
                                        if (typeof link === 'object') {
                                            return (
                                                <Link key={lIdx} to={link.path} className="hover:text-white transition-colors py-[2px] block whitespace-nowrap">
                                                    {link.name}
                                                </Link>
                                            )
                                        }
                                        return (
                                            <Link 
                                                key={lIdx} 
                                                to={group.title === "Pricing" ? "/pricing" : "#"} 
                                                className="hover:text-white transition-colors py-[2px] block whitespace-nowrap"
                                            >
                                                {link}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partnerships and Contact Container */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-[20px] border-b border-white/10 w-full gap-[40px] lg:gap-0">
                    {/* Partnerships container */}
                    <div className="flex flex-col gap-[20px] items-start shrink-0">
                        <p className="text-[24px] text-white font-normal whitespace-nowrap">Partnerships</p>
                        <p className="text-[14px] text-white whitespace-nowrap">We are partnered with</p>
                        <div className="flex flex-wrap gap-[10px] items-center">
                            {partnerships.map((p, idx) => (
                                <div key={idx} className="bg-white rounded-[10px] w-[100px] lg:w-[120px] flex items-center justify-center p-[10px]">
                                    <img src={p.logo} alt={p.name} className="w-[100px] h-auto object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact information container */}
                    <div className="flex flex-col gap-[20px] items-start w-full lg:w-[600px] shrink-0">
                        <p className="text-[24px] text-white font-normal whitespace-nowrap">Contact Information</p>
                        <div className="bg-gold-50 border border-orange-600 border-solid flex flex-col sm:flex-row items-stretch sm:items-center justify-between overflow-clip pl-[24px] pr-[8px] py-[8px] relative rounded-[2px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.2)] w-full gap-4 sm:gap-0 hover:shadow-[0px_0px_15px_0px_#73abff,0px_0px_0px_2px_#df6c23] focus-within:shadow-[0px_0px_15px_0px_#73abff,0px_0px_0px_2px_#df6c23] transition-all duration-300 group cursor-text">
                            <div className="flex-1 relative flex items-center">
                                <input 
                                    type="email" 
                                    className="w-full bg-transparent border-none outline-none text-[14px] text-black-400 peer"
                                    placeholder=" "
                                />
                                <p className="absolute left-0 pointer-events-none text-[14px] text-black-400 font-normal peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0 transition-opacity duration-200">
                                    Enter your email <span className="font-bold italic">"example@gmail.com"</span>
                                </p>
                            </div>
                            <Button variant="primary" className="shrink-0">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer bottom container */}
                <div className="flex flex-col sm:flex-row items-center justify-between py-[10px] w-full gap-4 sm:gap-0">
                    <p className="text-[14px] text-white text-center sm:text-left">
                        © 2026 Daffodil Web and E-commerce. All rights reserved.
                    </p>
                    <div className="flex gap-[7.5px] items-center">
                        {socials.map((social, idx) => (
                            <a 
                                key={idx} 
                                href="#" 
                                className="bg-[#1c1c1c] rounded-full w-[30px] h-[30px] flex items-center justify-center hover:bg-black-400 transition-colors group"
                            >
                                <img src={social.icon} alt={social.name} className="w-[18px] h-[18px]" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
