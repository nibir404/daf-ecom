import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            quote: "We initially approached them for a website, but the team helped us rethink our entire system. From infrastructure to user experience, everything was structured for growth",
            author: "Dr. Sarah Ahmed",
            role: "Registrar, Eastern University",
            image: "/homepage/Testimonialimg1.png"
        },
        {
            id: 2,
            quote: "The team delivered a high-performance e-commerce platform that tripled our conversion rate within months. Their attention to technical detail is unmatched.",
            author: "James Wilson",
            role: "CEO, TechFlow Solutions",
            image: "/homepage/Testimonialimg1.png"
        },
        {
            id: 3,
            quote: "Working with them was a game-changer for our startup. They didn't just build an app; they built a foundation that allowed us to scale seamlessly.",
            author: "Emily Chen",
            role: "Founder, Bloom Creative",
            image: "/homepage/Testimonialimg1.png"
        }
    ];

    const current = testimonials[currentIndex];

    const nextTestimonial = () => {
        if (testimonials.length <= 1) return;
        gsap.to(cardRef.current, {
            opacity: 0,
            x: -20,
            duration: 0.3,
            onComplete: () => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                gsap.fromTo(cardRef.current, 
                    { opacity: 0, x: 20 },
                    { opacity: 1, x: 0, duration: 0.4 }
                );
            }
        });
    };

    const prevTestimonial = () => {
        if (testimonials.length <= 1) return;
        gsap.to(cardRef.current, {
            opacity: 0,
            x: 20,
            duration: 0.3,
            onComplete: () => {
                setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                gsap.fromTo(cardRef.current, 
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.4 }
                );
            }
        });
    };

    return (
        <section className="bg-black-900 py-[120px] overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header Container */}
                <div className="max-w-[733px] mx-auto mb-[60px] text-center">
                    <h2 className="text-[48px] leading-tight mb-4 tracking-tight">
                        <span className="text-white-700 font-normal">What Ou</span>
                        <span className="text-white-700 font-normal">r</span>
                        <span className="text-white font-bold italic"> Clients</span>
                        <span className="text-white-700 font-normal"> Say</span>
                    </h2>
                    <p className="text-[16px] leading-[26px] text-white-700 font-normal">
                        Real feedback from businesses we’ve worked with—from fast launches to complex system builds.
                    </p>
                </div>

                <div 
                    ref={cardRef}
                    className="max-w-[1520px] mx-auto bg-black-600 rounded-[2px] p-[40px] flex flex-col md:flex-row gap-[40px] items-start relative group overflow-hidden"
                >
                    {/* Hover Glows */}
                    <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] bg-blue-500/15 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                    <div className="absolute -bottom-[100px] -right-[100px] w-[400px] h-[400px] bg-orange-500/15 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                    {/* Image Container */}
                    <div className="w-full md:w-[350px] aspect-square relative shrink-0 overflow-hidden rounded-[2px]">
                        <img 
                            src={current.image} 
                            alt={current.author}
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 flex flex-col justify-between self-stretch">
                        <div className="content-stretch flex flex-col gap-[15px] items-start">
                            {/* Quote Icon */}
                            <div className="h-[30px] w-[38px] relative shrink-0">
                                <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 16.5C0 7.3873 7.3873 0 16.5 0V7.5C11.5294 7.5 7.5 11.5294 7.5 16.5H16.5V30H0V16.5ZM21.5 16.5C21.5 7.3873 28.8873 0 38 0V7.5C33.0294 7.5 29 11.5294 29 16.5H38V30H21.5V16.5Z" fill="#F2F2F2"/>
                                </svg>
                            </div>
                            <p className="text-[24px] md:text-[36px] leading-[1.4] text-white-500 font-normal tracking-tight">
                                {current.quote}
                            </p>
                        </div>

                        {/* Footer Info & Nav */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8">
                            <div className="flex flex-col gap-[3px]">
                                <h4 className="text-[24px] font-medium text-white-50 leading-tight">
                                    {current.author}
                                </h4>
                                <p className="text-[16px] text-white-700 font-normal">
                                    {current.role}
                                </p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-[16px] items-start">
                                <button 
                                    onClick={prevTestimonial}
                                    className="w-[50px] h-[50px] rounded-full bg-orange-300 flex items-center justify-center hover:bg-orange-400 transition-colors group/btn"
                                    aria-label="Previous testimonial"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button 
                                    onClick={nextTestimonial}
                                    className="w-[50px] h-[50px] rounded-full bg-orange-600 flex items-center justify-center hover:bg-orange-700 transition-colors group/btn"
                                    aria-label="Next testimonial"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
