import React, { useState, useEffect, useRef } from 'react';
import { getDummyAIResponse } from '../../../data/AiData';
import gsap from 'gsap';

const AIFloatingBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  const modalRef = useRef(null);
  const flareRef = useRef(null);

  // Auto-scroll to bottom when messages or loading state changes
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      gsap.to(scrollContainer, {
        scrollTop: scrollContainer.scrollHeight,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, [messages, isLoading]);

  // Strict Toggle body scroll when chat is open
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Modal Animation with GSAP
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(modalRef.current, 
        { opacity: 0, y: 30, scale: 0.98, filter: 'blur(10px)' },
        { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.6, ease: "expo.out" }
      );
    }
  }, [isOpen]);

  // Background Blur Animation with GSAP
  useEffect(() => {
    if (isLoading && flareRef.current) {
      gsap.to(flareRef.current, {
        backdropFilter: "blur(16px)",
        opacity: 0.9,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    } else if (flareRef.current) {
      gsap.to(flareRef.current, {
        backdropFilter: "blur(10px)",
        opacity: 0.6,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [isLoading]);

  const simulateAIResponse = (userText) => {
    setIsLoading(true);
    setTimeout(() => {
      const response = getDummyAIResponse(userText);
      setMessages(prev => [...prev, { role: 'ai', ...response }]);
      setIsLoading(false);
    }, 2000); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsOpen(true);
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    const currentQuery = query;
    setQuery('');
    simulateAIResponse(currentQuery);
  };

  const handleOptionClick = (text) => {
    setIsOpen(true);
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    simulateAIResponse(text);
  };

  const closeChat = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        setIsOpen(false);
        setMessages([]);
        setQuery('');
        setIsLoading(false);
      }
    });
  };

  // Prevent scroll propagation to body
  const handleScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-150%); }
            100% { transform: translateX(150%); }
          }

          @keyframes border-pulse {
            0% { border-color: rgba(223, 108, 35, 0.4); box-shadow: 0 0 0 0 rgba(223, 108, 35, 0.2); }
            50% { border-color: rgba(223, 108, 35, 0.8); box-shadow: 0 0 15px 0 rgba(223, 108, 35, 0.1); }
            100% { border-color: rgba(223, 108, 35, 0.4); box-shadow: 0 0 0 0 rgba(223, 108, 35, 0.2); }
          }

          .animate-border-pulse {
            animation: border-pulse 2s infinite ease-in-out;
          }

          .flare-container {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: 0;
            background: radial-gradient(circle at 50% -20%, rgba(223, 108, 35, 0.05) 0%, transparent 70%);
          }

          .scrollbar-custom::-webkit-scrollbar {
            width: 5px;
          }
          .scrollbar-custom::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.08);
            border-radius: 10px;
          }
          .scrollbar-custom:hover::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.15);
          }

          .message-glass {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          }

          .user-message {
            background: #111;
            color: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          /* Enhanced Visibility Frosted Glass Strip */
          .saas-blur-strip {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 245px;
            z-index: 80;
            pointer-events: none;
            overflow: hidden;
            /* Remove parent opacity to ensure backdrop-filter renders reliably */
          }

          .saas-blur-layer {
            position: absolute;
            inset: 0;
            backdrop-filter: blur(100px);
            -webkit-backdrop-filter: blur(100px);
            background: transparent; /* Colorless to let page colors shine through */
            
            /* Ultra-smooth multi-stop mask for the "Dissolving Blur" effect */
            mask-image: linear-gradient(
              to top, 
              black 0%, 
              black 20%, 
              rgba(0,0,0,0.8) 40%, 
              rgba(0,0,0,0.4) 70%, 
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to top, 
              black 0%, 
              black 20%, 
              rgba(0,0,0,0.8) 40%, 
              rgba(0,0,0,0.4) 70%, 
              transparent 100%
            );
            
            opacity: ${isOpen ? 1 : 1};
            transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          }
        `}
      </style>

      {/* Full-Page Background Blur Overlay when active */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white/40 backdrop-blur-[40px] z-[95] transition-all duration-700" 
          onClick={closeChat}
        />
      )}

      {/* Figma-Matched Blur Strip */}
      <div className="saas-blur-strip">
        <div className="saas-blur-layer" />
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] sm:w-full sm:max-w-[480px] z-[999] pointer-events-auto transition-all duration-700" 
           style={{ bottom: 'calc(2rem + env(safe-area-inset-bottom))' }}>
        
        <div className={`relative w-full flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-w-[96vw] md:max-w-[940px] !w-[96vw] md:!w-[940px]' : ''}`}>
          
          {/* AI Canvas Modal */}
          <div 
            ref={modalRef}
            onWheel={handleScroll}
            className={`pointer-events-auto absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-[94vw] md:w-[940px] bg-white/95 backdrop-blur-[40px] border border-white/60 rounded-[4px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] origin-bottom ${isOpen ? 'block' : 'hidden'}`}
          >
            <div className="relative w-full h-[65vh] md:h-[50vh] max-h-[600px] md:max-h-[450px] flex flex-col">
              
              {/* Animated Accent Flare */}
              <div ref={flareRef} className="flare-container backdrop-blur-[12px]">
                 <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-orange-600/5 blur-[120px] rounded-full" />
              </div>

              {/* Minimal Header */}
              <div className="relative z-20 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-black/5 bg-white/40">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-600 animate-pulse shadow-[0_0_8px_rgba(234,88,12,0.3)]" />
                  <span className="text-[10px] md:text-[11px] font-bold text-black/40 uppercase tracking-[0.15em] md:tracking-[0.2em]">AI Support System</span>
                </div>
                <button 
                  onClick={closeChat} 
                  className="p-1.5 md:p-2 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors group"
                >
                   <svg width="16" height="16" md:width="18" md:height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/20 group-hover:text-black transition-colors">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                   </svg>
                </button>
              </div>

              {/* Scrollable Canvas Container */}
              <div 
                className="relative z-10 flex-1 overflow-y-auto w-full px-4 md:px-6 pt-4 md:pt-6 pb-6 md:pb-8 custom-scrollbar" 
                ref={scrollRef}
              >
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black/90 tracking-tight leading-tight mb-6 md:mb-8">
                      How can I <span className="text-orange-600 italic">elevate</span> your business today?
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-[650px]">
                      {['Foundation', 'Strategy', 'Design', 'Growth'].map((s) => (
                        <button 
                          key={s} 
                          onClick={() => handleOptionClick(s)}
                          className="px-3 md:px-4 py-2 md:py-2.5 rounded-[2px] text-[12px] md:text-[13px] font-bold border border-black/5 bg-white/50 hover:bg-white hover:border-orange-600/40 transition-all text-black/60"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 md:gap-6 w-full max-w-[850px] mx-auto">
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`w-full flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[90%] md:max-w-[78%] p-3 md:p-5 rounded-[4px] text-[14px] md:text-[15px] leading-relaxed transition-all shadow-sm ${
                          msg.role === 'user' 
                          ? 'user-message rounded-tr-none bg-[#0c0c0c] text-white' 
                          : 'message-glass rounded-tl-none font-medium text-black/80 bg-white/40'
                        }`}>
                          {msg.content}
                          
                          {msg.type === 'domain' && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {['.com', '.net', '.io'].map(ext => (
                                <button key={ext} onClick={() => handleOptionClick(ext)} className="px-4 py-2 rounded-[2px] bg-white border border-black/10 hover:border-orange-600 font-bold transition-all text-[13px] hover:shadow-sm">
                                  {ext}
                                </button>
                              ))}
                            </div>
                          )}

                          {msg.type === 'links' && msg.links && (
                            <div className="flex flex-col gap-2 mt-4">
                              {msg.links.map((link, idx) => (
                                <a 
                                  key={idx} 
                                  href={link.url}
                                  className="flex items-center justify-between px-4 py-2 bg-white/40 border border-black/5 rounded-[2px] text-[13px] font-bold text-black/70 hover:bg-white hover:border-orange-600/30 transition-all group"
                                >
                                  {link.label}
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                                  </svg>
                                </a>
                              ))}
                            </div>
                          )}

                          {msg.type === 'cta' && (
                            <div className="mt-4">
                              <a 
                                href={msg.ctaLink}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#df6c23] text-white text-[13px] font-bold rounded-[2px] hover:bg-black transition-all shadow-md active:scale-95"
                              >
                                {msg.ctaText}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                                </svg>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="message-glass p-6 rounded-[6px] rounded-tl-none flex gap-2 items-center">
                          <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Refined Search Bar - Figma Matched */}
          <div className={`pointer-events-auto w-full group relative transition-all duration-700 ${isOpen ? 'z-[101]' : ''}`}>
            <div className={`
              w-full flex items-center gap-3 px-4 py-2
              bg-[#faf7f0] border border-[#df6c23] rounded-[2px]
              transition-all duration-300 pointer-events-auto
              shadow-[0_15px_50px_rgba(223,108,35,0.15)]
              ${!isOpen && 'animate-border-pulse'}
            `}>
              <form onSubmit={handleSearch} className="flex-1 flex items-center justify-between w-full">
                <div className="flex-1 flex items-center gap-1">
                  <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Ask Here"
                    className="flex-1 bg-transparent outline-none text-[14px] text-black font-medium transition-all placeholder:text-black/30"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#0c0c0c] hover:bg-black p-2.5 rounded-[2px] text-white transition-all transform active:scale-95 disabled:opacity-30"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFloatingBar;
