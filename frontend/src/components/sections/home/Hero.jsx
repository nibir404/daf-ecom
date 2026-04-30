import Button from '../../ui/Button';

const Hero = () => {
    return (
        <section className="hero-section w-full min-h-[100vh] lg:h-[850px] lg:min-h-0 bg-[center_top] bg-[url('/homepage/home-hero.png')] bg-cover bg-no-repeat flex justify-center items-start overflow-hidden pt-[50px]">
            <div className="hero-content flex flex-col items-center w-full max-w-[1220px] px-6 text-center">
                <div className="flex items-center gap-2.5 bg-gold-50 px-4 py-2.5 rounded-full mb-6 lg:mb-10">
                    <img src="/homepage/growth.svg" alt="growth" className="w-4 h-4" loading="lazy" />
                    <span className="text-sm text-gold-800 font-normal leading-none">Optimize your business growth</span>
                </div>

                <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.2] lg:leading-[1.15] tracking-[-0.02em] text-black-400 mb-4 lg:mb-4">
                    Build <span className="text-black-900 font-bold">Software, <span className='text-orange-600 font-bold'>ERP</span> & <span className='text-black-900 font-bold'>Digital Systems</span></span> <br className="hidden md:block" />That Scale Without Rebuilding
                </h1>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] lg:leading-[1.5] text-black-400 mb-8 lg:mb-10 max-w-[800px]">
                    From first website to enterprise systems we help you <br className="hidden sm:block" />build once and scale without rebuilding.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 lg:gap-4 w-full sm:w-auto'>
                    <Button variant="primary" className="w-full sm:w-[260px]">
                        Get Your System Plan
                    </Button>
                    <span className="text-black-300 font-medium">or</span>
                    <button className="bg-transparent font-semibold underline underline-offset-2 text-black-900 py-3 transition duration-300 ease-in-out hover:text-blue-600 flex gap-2 items-center justify-center w-full sm:w-auto">
                        Book Strategy Call
                        <img src="/homepage/call-02.svg" alt="call-icon" loading="lazy" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
