import React, { useState } from 'react'

const HeroFAQ = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchQuery.trim()) {
        setError(false)
        console.log('Searching for:', searchQuery)
        // Add navigation logic here if needed
      } else {
        setError(true)
      }
    }
  }

  return (
    <section className="pt-[50px] pb-[60px]">
      <div className="max-w-[1520px] mx-auto px-6 xl:px-0">
        <div className="flex flex-col md:flex-row items-end justify-between gap-[40px] mb-[40px]">
          <div className="flex flex-col gap-[16px] max-w-[800px]">
            <h1 className="text-[40px] md:text-[64px] leading-[1.1] text-black-400 font-normal">
              Frequently Asked <span className="font-bold text-black-900">Questions</span>
            </h1>
            <p className="text-[20px] leading-[30px] text-black-400">
              Find clear answers about our services, process, pricing, and technology—so you can make confident decisions faster.
            </p>
          </div>
          <p className="text-[16px] leading-[26px] text-black-900 max-w-[463px]">
            From ERP systems to custom software, web development, and AI solutions—this FAQ hub is structured to help business leaders, technical teams, and global clients get the clarity they need.
          </p>
        </div>

        {/* Search Bar - Matches Domain Search Style with States */}
        <div 
          className={`w-full bg-gold-50 border-[3px] rounded-[2px] flex items-center justify-between pl-6 pr-2 py-2 transition-all duration-300 ${
            error 
              ? 'border-warning-500 shadow-[0px_0px_15px_0px_rgba(239,68,68,0.5)]' 
              : isFocused 
                ? 'border-orange-600 shadow-[0px_0px_15px_0px_rgba(115,171,255,0.8)]'
                : 'border-orange-600 shadow-[0px_0px_15px_0px_rgba(115,171,255,0.4)] hover:shadow-[0px_0px_15px_0px_rgba(115,171,255,0.6)]'
          }`}
        >
          <div className="flex-1 flex items-center">
            <input 
              type="text"
              className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-black-400 placeholder:font-normal placeholder:text-black-400"
              placeholder="Search questions (e.g., ERP cost, web development process, AI integration)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                if (e.target.value.trim()) setError(false)
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleSearch}
            />
          </div>
          <button 
            onClick={handleSearch}
            className="flex items-center gap-[10px] px-6 py-[14px] bg-black-900 text-white-50 rounded-[2px] shadow-inner-glow hover:bg-black-800 transition-colors group"
          >
            <span className="text-[16px] font-normal">Find your answer</span>
            <div className="w-[20px] h-[20px] relative">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67131 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67131 5.67131 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67131 16.6667 9.58333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
        {error && <p className="text-warning-500 text-sm mt-2">Please enter a search term.</p>}
      </div>
    </section>
  )
}

export default HeroFAQ
