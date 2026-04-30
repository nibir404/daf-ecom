import React from 'react';

const TechCard = ({ name, icon }) => (
    <div className="bg-white flex items-center gap-[10px] h-[60px] md:h-[80px] px-[16px] md:px-[24px] py-[16px] md:py-[20px] rounded-[10px] shrink-0 transition-all hover:border-blue-500/30 hover:shadow-sm">
        <div className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center overflow-hidden">
            <img src={`/homepage/${icon}`} alt={name} className="w-full h-full object-contain" />
        </div>
        <span className="text-[#111] text-[18px] md:text-[24px] font-medium whitespace-nowrap">{name}</span>
    </div>
);

const TechStack = () => {
    const row1 = [
        { name: "React", icon: "React.png" },
        { name: "Flutter", icon: "Flutter.png" },
        { name: "JavaScript", icon: "Javascript.png" },
        { name: "Go", icon: "Go.png" },
        { name: "MongoDB", icon: "mongodb.png" },
        { name: "Java", icon: "Java.png" },
        { name: "Node JS", icon: "Nodejs.png" },
        { name: "Python", icon: "Python.png" },
        { name: "PHP", icon: "php.png" },
        { name: "Ruby", icon: "Ruby.png" },
    ];

    const row2 = [
        { name: "Rust", icon: "Rust.png" },
        { name: "Dotnet", icon: "Dotnet.png" },
        { name: "HTML 5", icon: "Html 5.png" },
        { name: "Tailwind", icon: "Tailwind.png" },
        { name: "Angular", icon: "Angular.png" },
        { name: "Express", icon: "Express.png" },
        { name: "Redis", icon: "Redis.png" },
        { name: "MySQL", icon: "Mysql.png" },
        { name: "Docker", icon: "Docker.png" },
        { name: "Kubernetes", icon: "Kubernetes.png" },
        { name: "Github", icon: "github.png" },
    ];

    return (
        <section className="relative w-full py-[60px] lg:py-[120px] overflow-hidden">
            {/* Background Flare */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[440px] pointer-events-none opacity-40">
                <img src="/homepage/flare.png" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-[1520px] mx-auto px-6 xl:px-0 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-[10px] mb-[60px]">
                    <h2 className="text-[32px] md:text-[48px] leading-[1.2] md:leading-[60px] text-black-400">
                        Built With <span className="text-[#df6c23] font-bold">Modern</span>, Scalable <span className="text-black-900 font-bold">Technology</span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] leading-[26px] text-black-400 max-w-[700px] px-4 md:px-0">
                        We use secure, scalable, modern technologies across web, mobile, and cloud ecosystems.
                    </p>
                </div>

                {/* Scrolling Rows */}
                <div className="flex flex-col gap-[20px] w-full mask-fade-x">
                    {/* Row 1: Left Scroll */}
                    <div className="relative flex overflow-hidden">
                        <div className="flex gap-[20px] animate-scroll-left whitespace-nowrap w-max hover:[animation-play-state:paused]">
                            {[...row1, ...row1].map((tech, index) => (
                                <TechCard key={`row1-${index}`} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Right Scroll */}
                    <div className="relative flex overflow-hidden">
                        <div className="flex gap-[20px] animate-scroll-right whitespace-nowrap w-max hover:[animation-play-state:paused]">
                            {[...row2, ...row2].map((tech, index) => (
                                <TechCard key={`row2-${index}`} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
