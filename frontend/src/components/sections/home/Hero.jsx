import Button from '../../ui/Button';

const Hero = () => {
    return (
        <section className="hero-section w-full h-[850px] bg-center bg-[url('/homepage/home-hero.png')] bg-cover bg-no-repeat flex justify-center items-center overflow-x-hidden">
            <div className="hero-content flex flex-col items-center justify-center w-[1220px] text-center mt-[-300px]">
                <div className="flex items-center gap-2.5 bg-gold-50 px-4 py-2.5 rounded-full mb-10">
                    <img src="/homepage/growth.svg" alt="growth" className="w-4 h-4" />
                    <span className="text-sm text-gold-800 font-normal leading-none">Optimize your business growth</span>
                </div>

                <h1 className="text-[64px] leading-[1.15] tracking-[-0.02em] text-black-400 mb-4">
                    Build <span className="text-black-900 font-bold">Software, <span className='text-orange-600 font-bold'>ERP</span> & <span className='text-black-900 font-bold'>Digital Systems</span></span> <br />That Scale Without Rebuilding
                </h1>
                <p className="text-[20px] leading-[1.5] text-black-400 mb-10">
                    From first website to enterprise systems we help you <br />build once and scale without rebuilding.
                </p>
                <div className='flex items-center gap-4'>
                    <Button variant="primary" className="w-[260px]">
                        Get Your System Plan
                    </Button>
                    <span className="text-black-300 font-medium">or</span>
                    <button className="bg-transparent font-semibold underline underline-offset-2 text-black-900 py-3 transition duration-300 ease-in-out hover:text-blue-600 flex gap-2 items-center justify-center w-auto">
                        Book Strategy Call
                        <img src="/homepage/call-02.svg" alt="call-icon" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
