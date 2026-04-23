import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='header-main flex justify-between items-center w-full'>
        <div className='brand-logo flex items-center gap-10'>
          <img src="./public/Logo Container.png" alt="daf-logo" />
           <h3 className="nav-item"><a href="#">Start Here</a></h3>
        </div>
        <div className='menus '>
          <ul className='nav-links flex justify-center items-center gap-10'>
            <li className="nav-item"><a href="#">About Us</a></li>
            <li className="nav-item"><a href="#">Services</a></li>
            <li className="nav-item"><a href="#">Pricing</a></li>
            <li className="nav-item"><a href="#">Resources</a></li>
          </ul>
        </div>
        <div className='header-CTA flex items-center gap-10'>
         <div className='flex gap-4 '>
          <h3 className="nav-item"><a href="#">Explore</a></h3>
          <img src="/more.svg" alt="icon" />
         </div> 
          <button className='bg-[#265F58] rounded-[2px] text-white !px-6 !py-2 shadow-[-1px_-1px_0px_0px_rgba(255,255,255,0.25),1px_1px_0px_0px_rgba(255,255,255,0.25)]'>Contact Us</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
