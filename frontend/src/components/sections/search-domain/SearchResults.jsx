import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';

    // Define approved TLDs
    const approvedTlds = [
        '.to', '.info', '.org', '.biz', '.us', '.net', '.com', '.io', '.co', '.app', 
        '.dev', '.me', '.ai', '.tech', '.store', '.online', '.site', '.xyz', '.shop', '.icu',
        '.vip', '.club', '.best', '.cloud', '.link', '.click', '.top', '.work', '.agency', '.care',
        '.digital', '.email', '.group', '.help', '.life', '.news', '.press', '.solutions', '.studio', '.today',
        '.world', '.zone', '.live', '.social', '.video', '.photography', '.blog', '.games', '.marketing', '.media'
    ];

    // Check if the search query is "valid"
    // Valid = no period OR ends with one of our 50 extensions
    const isValidSearch = useMemo(() => {
        if (!query) return true; // Initial state is handled by isNoSearch
        if (!query.includes('.')) return true; // Pure name search is always valid
        return approvedTlds.some(tld => query.toLowerCase().endsWith(tld));
    }, [query]);

    // Generate a list of 50 mock domain results
    const allMockDomains = useMemo(() => {
        if (!isValidSearch) return [];
        
        return approvedTlds.map((tld, index) => {
            const basePrice = Math.floor(Math.random() * 30) + 5;
            const price = `${basePrice}.9`;
            const retail = `${Math.floor(basePrice * 1.4)}.0`;
            
            let tag = null;
            let tagColor = '';
            
            if (index === 0) { tag = 'New'; tagColor = 'bg-success-10 text-success-800 border-success-800'; }
            else if (index === 3) { tag = 'Premium'; tagColor = 'bg-purple-10 text-purple-800 border-purple-800'; }
            else if (index === 4) { tag = '70% off'; tagColor = 'bg-orange-10 text-orange-800 border-orange-800'; }
            else if (index === 7) { tag = 'Popular'; tagColor = 'bg-info-10 text-info-700 border-info-700'; }
            
            // If user searched with a TLD, use the name part for generation
            const namePart = query.includes('.') ? query.split('.')[0] : query;
            
            return {
                name: `${namePart || 'domain'}${tld}`,
                price: `$${price}/year`,
                retail: `Retail $${retail}/year`,
                tag,
                tagColor
            };
        });
    }, [query, isValidSearch]);

    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + 10, allMockDomains.length));
            setIsLoading(false);
        }, 800);
    };

    const isNoSearch = !queryParams.get('q');
    const results = allMockDomains.slice(0, visibleCount);
    const hasMore = visibleCount < allMockDomains.length;

    return (
        <section className="relative w-full bg-black-900 pt-[20px] pb-[120px] px-6 flex justify-center min-h-[600px] overflow-hidden">
            <div className="relative z-10 max-w-[1520px] w-full flex flex-col gap-[60px]">
                {isNoSearch ? (
                    <div className="flex flex-col items-center justify-center py-[100px] gap-6 text-center">
                        <div className="w-[120px] h-[120px] bg-black-700 rounded-full flex items-center justify-center border-2 border-black-400 mb-4 shadow-[0px_0px_20px_0px_rgba(115,171,255,0.1)]">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white-700">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <h2 className="text-[32px] font-bold text-white-50">Search for your next domain</h2>
                        <p className="text-[18px] text-white-700 max-w-[600px]">
                            Enter a domain name in the search bar above to see availability, 
                            exclusive pricing, and premium extensions.
                        </p>
                        <div className="mt-4">
                            <Button 
                                variant="white"
                                className="!px-8 !py-[16px]"
                                onClick={() => {
                                    const input = document.querySelector('input');
                                    if (input) input.focus();
                                }}
                            >
                                Explore Popular Extensions
                            </Button>
                        </div>
                    </div>
                ) : !isValidSearch ? (
                    <div className="flex flex-col items-center justify-center py-[100px] gap-6 text-center">
                        <div className="w-[120px] h-[120px] bg-black-700 rounded-full flex items-center justify-center border-2 border-red-500/30 mb-4 shadow-[0px_0px_20px_0px_rgba(239,68,68,0.1)]">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="1.5" className="opacity-60">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                        </div>
                        <h2 className="text-[32px] font-bold text-white-50">No results for "{query}"</h2>
                        <p className="text-[18px] text-white-700 max-w-[600px]">
                            We couldn't find any domains matching this extension. 
                            Please try searching for a domain name or use a standard extension like .com, .net, or .org.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-[48px] font-normal text-white-700">
                                Search <span className="text-white-700">Results</span>
                            </h2>
                            <p className="text-[24px] text-white-700">
                                <span className="font-bold italic text-white leading-[30px]" style={{ fontVariationSettings: "'YAXS' 430" }}>{allMockDomains.length}</span> Domains are available
                            </p>
                        </div>

                        <div className="w-full border-2 border-black-400 rounded-[2px] overflow-hidden bg-black-700">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-black-500 border-b border-black-400">
                                        <th className="py-10 px-10 text-left text-[20px] font-bold text-white border-r border-black-400 w-[1150px]">Domain Name</th>
                                        <th className="py-10 px-10 text-left text-[20px] font-bold text-white">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((domain, index) => (
                                        <tr key={index} className="border-b border-black-400 h-[80px]">
                                            <td className="px-10 border-r border-black-400">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[20px] font-semibold text-white-50">{domain.name}</span>
                                                    {domain.tag && (
                                                        <span className={`px-4 py-[6px] rounded-[2px] border text-[14px] font-normal whitespace-nowrap ${domain.tagColor}`}>
                                                            {domain.tag}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-10">
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[20px] font-semibold text-white leading-none">{domain.price}</span>
                                                        <span className="text-[14px] text-white-700 leading-none">{domain.retail}</span>
                                                    </div>
                                                    <Button 
                                                        variant="primary"
                                                        onClick={() => {/* Buy logic */}}
                                                        className="bg-teal-900 !px-6 !py-[14px] !shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.65)] hover:bg-teal-800"
                                                        icon={
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                                <circle cx="9" cy="21" r="1"></circle>
                                                                <circle cx="20" cy="21" r="1"></circle>
                                                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                                            </svg>
                                                        }
                                                    >
                                                        Buy Now
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-center flex-col items-center gap-4">
                            {hasMore ? (
                                <Button 
                                    variant="white"
                                    onClick={handleLoadMore}
                                    disabled={isLoading}
                                    className="!px-6 !py-[14px] !rounded-[2px] disabled:opacity-50"
                                    icon={
                                        !isLoading && (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        )
                                    }
                                >
                                    {isLoading ? 'Loading...' : 'Explore More Domain'}
                                </Button>
                            ) : (
                                <p className="text-[18px] text-white-700 italic">No more relevant domains available for "{query}"</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default SearchResults;
