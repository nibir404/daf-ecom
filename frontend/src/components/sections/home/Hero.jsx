const Hero = () => {
    return (
        <section className="bg-center bg-[url('/homehero.svg')] w-[1920px] h-[820px] bg-no-repeat bg-cover relative">
            <div className="hero-content ">
                <h1>Hero Section</h1>
                <p>Hero Section</p>
            </div>
           <div>
             <button className='bg-[#265F58] rounded-[2px] text-white !px-6 !py-2 transition duration-300 ease-in-out hover:bg-[#021B79] flex gap-2 items-center'>
            Contact Us
            <img src="/arrow-right.svg" alt="arrow-icon" />
          </button>
           </div>
        </section>
    );
};

export default Hero;
