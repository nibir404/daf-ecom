import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

const SearchHero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (searchQuery.trim()) {
                setError(false);
                navigate(`/search-domain?q=${encodeURIComponent(searchQuery.trim())}`);
            } else {
                setError(true);
            }
        }
    };

    const extensions = ['.com', '.net', '.org', '.io'];

    return (
        <section className="relative w-full h-[600px] bg-[#0c0c0c] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Flare */}
            <div className="absolute inset-0 pointer-events-none">
                <img 
                    src="/search/flare.png" 
                    alt="" 
                    className="w-full h-full object-cover opacity-80"
                    style={{ transform: 'rotate(360deg)', opacity: '1' }}   
                />
            </div>

            <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center gap-[40px] px-6">
                <div className="text-center flex flex-col gap-4">
                    <h1 className="text-[64px] font-normal text-white-50 leading-[75px] tracking-tight">
                        Find Your <span className="font-bold">Perfect</span> Domain
                    </h1>
                    <p className="text-[20px] text-white-700 leading-[30px]">
                        Secure it now before someone else does.
                    </p>
                </div>

                {/* Search Bar */}
                <div className={`w-full max-w-[1200px] bg-gold-50 border-[3px] rounded-[2px] flex items-center justify-between pl-6 pr-2 py-2 transition-all duration-300 ${error ? 'border-warning-500 shadow-[0px_0px_15px_0px_rgba(239,68,68,0.5)]' : 'border-orange-600 shadow-[0px_0px_15px_0px_rgba(115,171,255,1)]'}`}>
                    <div className="flex-1 relative flex items-center">
                        <input 
                            type="text"
                            className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-black-400 placeholder:font-normal placeholder:text-black-400 peer"
                            placeholder="|"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                if (e.target.value.trim()) setError(false);
                            }}
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <Button 
                        onClick={handleSearch}
                        className="!px-6 !py-[14px] !rounded-[2px] !shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.65)]"
                        icon={
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        }
                    >
                        Find your domain
                    </Button>
                </div>

                {/* Extension Pills */}
                <div className="flex flex-wrap justify-center gap-[10px]">
                    {extensions.map((ext, index) => (
                        <div 
                            key={index}
                            className="bg-black-500 border border-black-400 px-6 py-3 rounded-[30px] flex items-center justify-center min-w-[80px] group hover:border-orange-600 transition-all duration-300 cursor-pointer"
                            onClick={() => {
                                setSearchQuery(`domain${ext}`);
                                navigate(`/search-domain?q=domain${ext}`);
                            }}
                        >
                            <span className="text-[16px] font-medium text-teal-500 text-center">{ext}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SearchHero;
