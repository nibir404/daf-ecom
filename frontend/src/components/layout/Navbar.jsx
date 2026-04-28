import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-[17px] border-b border-black-50/5">
      <div className="max-w-[1520px] mx-auto flex justify-between items-center h-[80px] px-6 md:px-0">
        <div className='brand-container flex items-center gap-[16px]'>
          <Link to="/" className="w-[169px] shrink-0">
            <img src="/Logo Container.png" alt="daf-logo" className="w-full" />
          </Link>
          <Link to="/" className="flex items-center gap-[10px] px-[20px] py-[10px] h-[48px] text-[16px] font-bold text-black-400 hover:text-black-900 transition-colors">
            Start here
            <img src="/arrow-right.svg" alt="icon" className="w-4 h-4" />
          </Link>
        </div>

        <div className='primary-links flex h-[48px] items-center'>
          <Link to="/about" className="px-[20px] py-[10px] text-[16px] font-normal text-black-400 hover:text-black-900 transition-colors">
            About us
          </Link>
          <button className="flex items-center gap-[10px] px-[20px] py-[10px] text-[16px] font-bold text-black-900">
            Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black-900">
              <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <Link to="/pricing" className="px-[20px] py-[10px] text-[16px] font-normal text-black-400 hover:text-black-900 transition-colors">
            Pricing
          </Link>
          <button className="flex items-center gap-[10px] px-[20px] py-[10px] text-[16px] font-normal text-black-400 hover:text-black-900 transition-colors">
            Resources
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black-400">
              <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div className='secondary-links flex items-center gap-[10px]'>
          <Link to="/explore" className="flex items-center gap-[10px] px-[20px] py-[10px] h-[48px] text-[16px] font-bold text-black-400 hover:text-black-900 transition-colors">
            Explore
            <img src="/more.svg" alt="icon" className="w-4 h-4" />
          </Link>
          <button className='relative bg-[#265f58] rounded-[2px] text-white-50 px-[24px] py-[14px] transition duration-300 ease-in-out hover:bg-[#1a433e] flex gap-[10px] items-center shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.65)]'>
            Contact us
            <img src="/arrow-right.svg" alt="arrow-icon" className="w-5 h-5 brightness-200" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
