import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md border-b border-black-50/5">
      <div className="max-w-[1520px] mx-auto flex justify-between items-center h-[80px] px-6 md:px-0">
        <div className='brand-logo flex items-center gap-10'>
          <Link to="/">
            <img src="/Logo Container.png" alt="daf-logo" />
          </Link>
           <h3 className="nav-item">
             <Link to="/">Start Here</Link>
           </h3>
        </div>
        <div className='menus '>
          <ul className='nav-links flex justify-center items-center'>
            <li className="nav-item hover:bg-white-50 px-5 py-4 transition duration-300 ease-in-out">
              <Link to="/about">About Us</Link>
            </li>
            <li className="nav-item hover:bg-white-50 px-5 py-4 transition duration-300 ease-in-out">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-item hover:bg-white-50 px-5 py-4 transition duration-300 ease-in-out">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item hover:bg-white-50 px-5 py-4 transition duration-300 ease-in-out">
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </div>
        <div className='header-CTA flex items-center gap-10'>
          <div className='flex gap-4 '>
            <h3 className="nav-item">
              <Link to="/explore">Explore</Link>
            </h3>
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
