const Navbar = () => {
  return (
    <nav>
      <div className='header-main flex justify-between items-center w-full bg-white/50 backdrop-blur-md !px-50 h-[80px] '>
        <div className='brand-logo flex items-center gap-10'>
          <img src="/Logo Container.png" alt="daf-logo" />
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
          <button className='bg-teal-900 rounded-[2px] text-white-50 !px-6 !py-2 transition duration-300 ease-in-out hover:bg-blue-600 flex gap-2 items-center'>
            Contact Us
            <img src="/arrow-right.svg" alt="arrow-icon" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
