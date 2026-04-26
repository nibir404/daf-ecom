const Hero = () => {
    return (
        <section className="w-[1920px] h-[850px] bg-center bg-[url('/homehero.svg')] bg-no-repeat flex justify-center items-center">
            <div className="hero-content flex flex-col items-center justify-center w-[1220px] text-center gap-6 mt-[-300px]">
                <h1 className="text-[64px] leading-[1.15] tracking-[-0.02em] text-black-900">
                    Build <p className="inline-block text-black-900 font-semibold">Software,<p className='inline-block text-orange-600 font-bold'> ERP </p> & <p className='inline-block text-black-900 font-bold'>Digital Systems</p>  </p> <br />That Scale Without Rebuilding
                </h1>
                <p className="text-[20px] leading-[1.5] text-black-300">
                    From first website to enterprise systems we help you <br />build once and scale without rebuilding.
                </p>
                <div className='flex items-center gap-4'>
                    <button className="bg-teal-900 rounded-[2px] text-white-50 px-8 py-3 transition duration-300 ease-in-out hover:bg-teal-800 flex gap-2 items-center justify-center w-[260px]">
                        Get Your System Plan
                        <img src="/arrow-right.svg" alt="arrow-icon" />
                    </button>
                    <span className="text-black-300 font-medium">or</span>
                    <button className="bg-transparent font-semibold underline underline-offset-2 text-black-900 py-3 transition duration-300 ease-in-out hover:text-teal-900 flex gap-2 items-center justify-center w-auto">
                        Book Strategy Call
                        <img src="/homepage/call-02.svg" alt="call-icon" />
                    </button>
                </div>
                
            </div>
        </section>
    );
};

export default Hero;
