import React, { useState } from 'react';
import Button from '../../ui/Button';

// Static Data moved outside component for performance and cleaner structure
const TABS = [
    "Services", "Domain", "Hosting", "Server Hosting", "Reseller", "Email", "Web Security"
];

const SERVICES_PLANS = [
    {
        name: "Starter",
        tag: "Domain + Hosting",
        tagColor: "bg-purple-50 text-purple-900 border-purple-500",
        bestFor: "New businesses launching online",
        includes: ["Domain registration", "Hosting setup", "Basic website (template-based)", "SSL & security"],
        cta: "Buy Now",
        checkIcon: "/pricingpage/checkmark-purple.svg",
        glowColor: "group-hover/card:shadow-[0_0_50px_-12px_rgba(183,138,247,0.3)]",
        flareColor: "bg-[#B78AF7]"
    },
    {
        name: "Business",
        tag: "Email + Website",
        tagColor: "bg-teal-50 text-teal-900 border-teal-500",
        bestFor: "Growing companies building credibility",
        includes: ["Custom website design", "Business email setup", "CMS integration", "Basic SEO setup"],
        cta: "Buy Now",
        checkIcon: "/pricingpage/checkmark-teal.svg",
        glowColor: "group-hover/card:shadow-[0_0_50px_-12px_rgba(83,205,190,0.3)]",
        flareColor: "bg-[#53CDBE]"
    },
    {
        name: "Growth",
        tag: "SEO + Marketing",
        tagColor: "bg-gold-10 text-gold-900 border-gold-500",
        bestFor: "Companies focused on acquisition",
        includes: ["Advanced SEO optimization", "Performance tracking (analytics)", "CRO-focused landing pages", "Digital marketing campaigns"],
        cta: "Buy Now",
        checkIcon: "/pricingpage/checkmark-gold.svg",
        glowColor: "group-hover/card:shadow-[0_0_50px_-12px_rgba(187,158,92,0.3)]",
        flareColor: "bg-[#BB9E5C]"
    },
    {
        name: "Enterprise",
        bestFor: "Large-scale or complex operations",
        includes: ["Custom ERP / AI solutions", "Cloud & server infrastructure", "API integrations", "Dedicated support team"],
        cta: "Order Now",
        highlighted: true,
        checkIcon: "/pricingpage/checkmark-circle-02.svg",
        glowColor: "group-hover/card:shadow-[0_0_50px_-12px_rgba(138,197,138,0.3)]",
        flareColor: "bg-[#8AC58A]"
    }
];

const SERVICES_COMPARISON = [
    { feature: "Domain", starter: true, business: true, growth: true, enterprise: true },
    { feature: "Hosting", starter: "Basic", business: "Custom", growth: "Advanced", enterprise: "Scalable" },
    { feature: "Website", starter: false, business: true, growth: true, enterprise: true },
    { feature: "SEO", starter: false, business: "Basic", growth: "Advanced", enterprise: "Enterprise" },
    { feature: "Marketing", starter: false, business: false, growth: true, enterprise: true },
    { feature: "Custom Dev", starter: false, business: false, growth: "Partial", enterprise: true },
];

const DYNAMIC_TAB_DATA = {
    'Domain': {
        subTabs: ["Top Level Domain", ".bd Domain", "International Domain", "Transfer Domain", "New Domain Extension", "Combo Offer"],
        headers: [
            { main: "Domain Name", sub: "" },
            { main: "Registration", sub: "Renewal" },
            { main: "With Hosting", sub: "Package" },
            { main: "Transfer to", sub: "Daffodil Global" },
            { main: "Registration", sub: "Period" }
        ],
        content: {
            'Top Level Domain': [
                [".com", { main: "৳ 1100", sub: "৳ 1100" }, "৳ 1100", "৳ 1100", "1 Year"],
                [".net", { main: "৳ 1100", sub: "৳ 1100" }, "৳ 1100", "৳ 1100", "1 Year"],
                [".org", { main: "৳ 1200", sub: "৳ 1100" }, "৳ 1100", "৳ 1100", "1 Year"],
                [".info", { main: "৳ 1100", sub: "৳ 1100" }, "৳ 1100", "৳ 1100", "1 Year"],
                [".tech", { main: "৳ 5300", sub: "৳ 1100" }, "৳ 1100", "৳ 1100", "1 Year"],
                [".asia", { main: "৳ 1600", sub: "৳ 1100" }, "৳ 1100", "৳ 1100", "1 Year"],
            ],
            '.bd Domain': [
                [".com.bd", { main: "৳ 1500", sub: "৳ 1500" }, "৳ 1200", "৳ 1500", "2 Years"],
                [".net.bd", { main: "৳ 1500", sub: "৳ 1500" }, "৳ 1200", "৳ 1500", "2 Years"],
                [".org.bd", { main: "৳ 1500", sub: "৳ 1500" }, "৳ 1200", "৳ 1500", "2 Years"],
            ],
            // Add other sub-tab content as needed
        }
    },
    'Hosting': {
        subTabs: ["Linux Hosting", "Windows Hosting", "Wordpress Hosting", "Cloud Hosting"],
        headers: [
            { main: "Plan Name", sub: "" },
            { main: "Storage", sub: "SSD NVMe" },
            { main: "Bandwidth", sub: "Monthly" },
            { main: "Websites", sub: "Allowed" },
            { main: "Price", sub: "Annually" }
        ],
        content: {
            'Linux Hosting': [
                ["Basic", "10 GB", "Unlimited", "1", "৳ 2,500"],
                ["Standard", "25 GB", "Unlimited", "3", "৳ 5,000"],
                ["Premium", "50 GB", "Unlimited", "10", "৳ 8,500"],
                ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "৳ 15,000"],
            ],
            'Windows Hosting': [
                ["W-Basic", "10 GB", "100 GB", "1", "৳ 3,500"],
                ["W-Standard", "25 GB", "500 GB", "3", "৳ 7,000"],
            ]
        }
    },
    'Server Hosting': {
        subTabs: ["VPS Hosting", "Dedicated Server", "Managed Server"],
        headers: [
            { main: "Config", sub: "vCPU/RAM" },
            { main: "Storage", sub: "Pure SSD" },
            { main: "Bandwidth", sub: "Speed" },
            { main: "Management", sub: "Support" },
            { main: "Price", sub: "Monthly" }
        ],
        content: {
            'VPS Hosting': [
                ["2 vCPU / 4GB", "80 GB", "2 TB / 1Gbps", "Unmanaged", "৳ 3,500"],
                ["4 vCPU / 8GB", "160 GB", "5 TB / 1Gbps", "Semi-Managed", "৳ 6,500"],
                ["8 vCPU / 16GB", "320 GB", "10 TB / 1Gbps", "Fully-Managed", "৳ 12,000"],
            ]
        }
    },
    'Reseller': {
        subTabs: ["Linux Reseller", "Windows Reseller"],
        headers: [
            { main: "Plan", sub: "" },
            { main: "Disk Space", sub: "" },
            { main: "Transfer", sub: "" },
            { main: "Accounts", sub: "cPanel" },
            { main: "Price", sub: "Monthly" }
        ],
        content: {
            'Linux Reseller': [
                ["Starter", "50 GB", "500 GB", "25", "৳ 2,000"],
                ["Business", "100 GB", "1 TB", "50", "৳ 3,500"],
                ["Master", "250 GB", "Unlimited", "100", "৳ 6,000"],
            ]
        }
    },
    'Email': {
        subTabs: ["Business Email", "Enterprise Email", "Google Workspace"],
        headers: [
            { main: "Storage", sub: "per User" },
            { main: "Features", sub: "Suite" },
            { main: "Security", sub: "Anti-Spam" },
            { main: "Users", sub: "Minimum" },
            { main: "Price", sub: "Monthly" }
        ],
        content: {
            'Business Email': [
                ["5 GB", "POP/IMAP", "Basic", "5", "৳ 150"],
                ["30 GB", "Full Collaboration", "Advanced", "10", "৳ 350"],
            ]
        }
    },
    'Web Security': {
        subTabs: ["SSL Certificates", "SiteLock", "CodeGuard"],
        headers: [
            { main: "Type", sub: "" },
            { main: "Validation", sub: "Method" },
            { main: "Warranty", sub: "USD" },
            { main: "Issuance", sub: "Time" },
            { main: "Price", sub: "Annually" }
        ],
        content: {
            'SSL Certificates': [
                ["DV SSL", "Domain", "$10,000", "5 Min", "৳ 1,500"],
                ["OV SSL", "Organization", "$50,000", "2 Days", "৳ 4,500"],
                ["EV SSL", "Extended", "$1.75M", "5 Days", "৳ 12,000"],
            ]
        }
    }
};

const GrowthStage = () => {
    const [activeTab, setActiveTab] = useState('Services');
    const [activeSubTab, setActiveSubTab] = useState('');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (tab !== 'Services' && DYNAMIC_TAB_DATA[tab]) {
            setActiveSubTab(DYNAMIC_TAB_DATA[tab].subTabs[0]);
        }
    };

    const renderServiceCell = (value, colIndex) => {
        if (value === true) {
            const icons = [null, "/pricingpage/checkmark-purple.svg", "/pricingpage/checkmark-teal.svg", "/pricingpage/checkmark-gold.svg", "/pricingpage/checkmark-circle-02.svg"];
            return (
                <div className="flex items-center justify-center">
                    <img src={icons[colIndex]} alt="Included" className="size-[24px]" />
                </div>
            );
        }
        if (value === false) {
            return (
                <div className="flex items-center justify-center">
                    <img src="/pricingpage/cancel-circle.svg" alt="Not Included" className="size-[24px]" />
                </div>
            );
        }
        return (
            <div className="text-[16px] text-white-600 font-medium text-center">
                {value}
            </div>
        );
    };

    return (
        <section className="w-full bg-black-900 py-[120px]">
            <div className="max-w-[1520px] mx-auto px-6 xl:px-0 flex flex-col items-center gap-[60px] md:gap-[100px]">
                
                {/* Header & Main Tabs */}
                <div className="w-full flex flex-col items-center gap-[40px] md:gap-[60px]">
                    <div className="flex flex-col items-center text-center gap-[16px] max-w-[730px]">
                        <h2 className="text-[32px] md:text-[48px] leading-tight md:leading-[60px] text-white">
                            <span className="text-[#acacac]">Complete</span> Digital Packages <span className="text-[#acacac]">for Every</span> Growth <span className="text-[#acacac]">Stage</span>
                        </h2>
                        <p className="text-[16px] text-white-700">
                            Integrated solutions combining web, infrastructure, and growth services.
                        </p>
                    </div>

                    <div className="w-full overflow-x-auto pb-4 md:pb-0">
                        <div className="bg-black-500 border border-black-400 p-[4px] rounded-[2px] flex gap-[4px] w-fit mx-auto min-w-max">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`px-[15px] md:px-[20px] py-[8px] md:py-[10px] text-[14px] md:text-[16px] font-semibold rounded-[2px] transition-all duration-300 whitespace-nowrap ${
                                        activeTab === tab ? "bg-orange-600 text-white" : "text-black-300 hover:text-white"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {activeTab === 'Services' ? (
                    <div className="w-full flex flex-col gap-[60px] md:gap-[100px]">
                        {/* Service Plans Cards */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] items-stretch">
                            {SERVICES_PLANS.map((plan, index) => (
                                <div key={index} className={`flex-1 relative bg-black-700 border border-black-400 p-[30px] md:p-[40px] rounded-[2px] flex flex-col justify-between gap-[40px] md:gap-[80px] overflow-hidden group/card transition-all duration-500 ${plan.highlighted ? "border-success-200" : ""} ${plan.glowColor}`}>
                                    <div className={`absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-10 transition-opacity duration-500 group-hover/card:opacity-20 ${plan.flareColor}`} />
                                    <div className={`absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-5 transition-opacity duration-500 group-hover/card:opacity-10 ${plan.flareColor}`} />
                                    <div className="relative z-10 flex flex-col gap-[24px]">
                                        <div className="flex flex-col gap-[20px]">
                                            <div className="flex justify-between items-center gap-4">
                                                <h3 className="text-[24px] md:text-[30px] italic font-semibold text-white">{plan.name}</h3>
                                                {plan.tag && <div className={`px-[12px] md:px-[16px] py-[4px] md:py-[6px] rounded-[30px] border text-[12px] md:text-[14px] font-medium whitespace-nowrap ${plan.tagColor}`}>{plan.tag}</div>}
                                            </div>
                                            <div className="w-full h-[1px] bg-black-400" />
                                            <div className="text-[14px] leading-[25px]">
                                                <p className="font-bold text-white-700">Best for:</p>
                                                <p className="text-white-700">{plan.bestFor}</p>
                                            </div>
                                            <div className="w-full h-[1px] bg-black-400" />
                                        </div>
                                        <div className="flex flex-col gap-[16px]">
                                            <p className="text-[18px] md:text-[20px] font-medium text-white">Includes</p>
                                            <div className="flex flex-col gap-[10px]">
                                                {plan.includes.map((item, i) => (
                                                    <div key={i} className="flex gap-[10px] items-start">
                                                        <img src={plan.checkIcon} alt="" className="size-[20px] md:size-[24px] shrink-0 mt-1" />
                                                        <p className="text-[14px] md:text-[16px] text-white-600 leading-normal md:leading-[26px]">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative z-10">
                                        <Button variant="outline" whiteIcon={true} className="w-full !border-white-50 !text-white-50 hover:!bg-white-50 hover:!text-black-900 transition-all duration-300">
                                            {plan.cta}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Services Comparison Table */}
                        <div className="w-full flex flex-col items-center gap-[40px] md:gap-[60px]">
                            <h2 className="text-[32px] md:text-[48px] leading-tight md:leading-[60px] text-white text-center">Compare <span className="font-bold">Plans</span> at a Glance</h2>
                            <div className="w-full border border-black-400 rounded-[2px] overflow-hidden bg-black-700/30 overflow-x-auto">
                                <table className="w-full border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="border-b border-black-400 bg-black-500/50">
                                            <th className="py-[30px] px-[40px] text-left text-[20px] font-bold text-white w-[30%]">Feature</th>
                                            <th className="py-[30px] text-center text-[20px] font-bold text-white w-[17.5%]">Starter</th>
                                            <th className="py-[30px] text-center text-[20px] font-bold text-white w-[17.5%]">Business</th>
                                            <th className="py-[30px] text-center text-[20px] font-bold text-white w-[17.5%]">Growth</th>
                                            <th className="py-[30px] text-center text-[20px] font-bold text-white w-[17.5%]">Enterprise</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {SERVICES_COMPARISON.map((row, index) => (
                                            <tr key={index} className="border-b border-black-700 hover:bg-black-800 transition-colors duration-200">
                                                <td className="py-[25px] px-[40px] text-[18px] text-white-700 font-medium bg-black-700/50">{row.feature}</td>
                                                <td className="py-[25px]">{renderServiceCell(row.starter, 1)}</td>
                                                <td className="py-[25px]">{renderServiceCell(row.business, 2)}</td>
                                                <td className="py-[25px]">{renderServiceCell(row.growth, 3)}</td>
                                                <td className="py-[25px]">{renderServiceCell(row.enterprise, 4)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full flex flex-col md:flex-row gap-[40px] items-start">
                        {/* Sidebar/Horizontal Tabs on Mobile */}
                        <div className="w-full md:w-[192px] md:sticky md:top-[100px] md:border-l border-black-400 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
                            {DYNAMIC_TAB_DATA[activeTab]?.subTabs.map((subTab) => (
                                <button
                                    key={subTab}
                                    onClick={() => setActiveSubTab(subTab)}
                                    className={`px-[15px] md:px-[10px] py-[8px] text-left transition-all duration-300 border-b-2 md:border-b-0 md:border-l-[3px] md:-ml-[1px] whitespace-nowrap ${
                                        activeSubTab === subTab
                                        ? "border-orange-600 text-white font-bold text-[18px] md:text-[20px]"
                                        : "border-transparent text-black-300 text-[14px] md:text-[16px] font-normal hover:text-white"
                                    }`}
                                >
                                    {subTab}
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Data Table */}
                        <div className="w-full flex-1 bg-black-700 border-2 border-black-400 rounded-[2px] overflow-hidden h-fit overflow-x-auto">
                            <table className="w-full border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-black-400 bg-black-500/50">
                                        {DYNAMIC_TAB_DATA[activeTab]?.headers.map((header, i) => (
                                            <th key={i} className={`py-[30px] md:py-[40px] px-[20px] md:px-[40px] text-left text-[18px] md:text-[20px] font-bold text-white ${i === 0 ? "border-r border-black-400" : ""}`}>
                                                <div>{header.main}</div>
                                                {header.sub && <div className="font-normal text-[12px] md:text-[14px] text-white-700">{header.sub}</div>}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {(DYNAMIC_TAB_DATA[activeTab]?.content[activeSubTab] || []).map((row, rowIndex) => (
                                        <tr key={rowIndex} className="border-b border-black-400 hover:bg-black-800 transition-colors duration-200">
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className={`py-[20px] md:py-[30px] px-[20px] md:px-[40px] text-[14px] md:text-[16px] text-white-700 font-normal ${cellIndex === 0 ? "border-r border-black-400 bg-black-700/50" : "font-bold"}`}>
                                                    {typeof cell === 'object' ? (
                                                        <div className="flex flex-col">
                                                            <span className="text-white">{cell.main}</span>
                                                            {cell.sub && <span className="text-[12px] md:text-[14px] text-white-700 font-normal">{cell.sub}</span>}
                                                        </div>
                                                    ) : cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    {(!DYNAMIC_TAB_DATA[activeTab]?.content[activeSubTab]) && (
                                        <tr>
                                            <td colSpan={DYNAMIC_TAB_DATA[activeTab]?.headers.length} className="py-[60px] md:py-[100px] text-center text-black-300 italic">
                                                Content for "{activeSubTab}" is coming soon.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GrowthStage;
