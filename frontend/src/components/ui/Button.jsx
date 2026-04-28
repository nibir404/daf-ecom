import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Button = ({ 
    variant = 'primary', 
    children, 
    className = '', 
    icon, 
    iconPosition = 'right',
    ...props 
}) => {
    const buttonRef = useRef(null);
    const iconRef = useRef(null);
    const baseStyles = "flex items-center justify-center gap-2 transition-all duration-500 rounded-[2px]";
    
    const variants = {
        primary: "bg-black-900 text-white-50 px-[24px] py-[14px] font-semibold shadow-sm active:scale-95 relative overflow-hidden shadow-inner-glow hover:shadow-lg",
        secondary: "bg-white border border-blue-500 px-[24px] py-[14px] text-blue-500 font-semibold shadow-sm active:scale-95 relative overflow-hidden group-hover/btn:text-white-50",
        white: "bg-white text-black-900 px-[24px] py-[14px] font-semibold shadow-sm active:scale-95 relative overflow-hidden group-hover/btn:text-white-50",
        tertiary: "flex items-center text-black-500 text-base font-bold group/btn gap-[10px]",
        outline: "border border-blue-500 px-[24px] py-[14px] text-blue-500 font-normal active:scale-95 relative overflow-hidden group-hover/btn:text-white-50"
    };

    const handleMouseEnter = () => {
        if (variant === 'tertiary') return;
        gsap.to(buttonRef.current, {
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out"
        });
        if (iconRef.current) {
            gsap.to(iconRef.current, {
                x: 4,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    };

    const handleMouseLeave = () => {
        if (variant === 'tertiary') return;
        gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.inOut"
        });
        if (iconRef.current) {
            gsap.to(iconRef.current, {
                x: 0,
                duration: 0.4,
                ease: "power2.inOut"
            });
        }
    };

    if (variant === 'tertiary') {
        return (
            <button className={`${variants.tertiary} ${className}`} {...props}>
                <span className="border-b-2 border-transparent group-hover/btn:border-orange-500 transition-all duration-300">
                    {children}
                </span>
                <span className="text-orange-500 transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
            </button>
        );
    }



    return (
        <button 
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${baseStyles} ${variants[variant]} ${className} group/btn`} 
            {...props}
        >
            {/* Animated Background Layer */}
            {(variant === 'primary' || variant === 'white' || variant === 'secondary' || variant === 'outline') && (
                <div 
                    className={`absolute inset-0 transition-transform duration-500 ease-out origin-left scale-x-0 group-hover/btn:scale-x-100 pointer-events-none z-0
                        ${(variant === 'primary' || variant === 'secondary' || variant === 'white') ? 'bg-blue-600' : 'bg-blue-500'}`}
                />
            )}
            
            <div className="relative z-10 flex items-center gap-2">
                {icon && iconPosition === 'left' && (
                    <div className="w-5 h-5 flex items-center justify-center transition-all duration-300">
                        {typeof icon === 'string' ? <img src={icon} alt="" className="w-full h-full object-contain brightness-0 invert" /> : icon}
                    </div>
                )}
                <span className={`transition-colors duration-300 
                    ${(variant === 'secondary' || variant === 'outline' || variant === 'white') ? 'group-hover/btn:text-white-50' : ''}`}>
                    {children}
                </span>
                {icon && iconPosition === 'right' && (
                    <div ref={iconRef} className="w-5 h-5 flex items-center justify-center transition-all duration-300">
                        {typeof icon === 'string' ? (
                            <img 
                                src={icon} 
                                alt="" 
                                className={`w-full h-full object-contain transition-all duration-300 
                                    ${variant === 'primary' ? 'brightness-0 invert' : 'group-hover/btn:brightness-0 group-hover/btn:invert'}`} 
                            />
                        ) : icon}
                    </div>
                )}
                 {!icon && (variant === 'outline' || variant === 'primary' || variant === 'white' || variant === 'secondary') && (
                     <div ref={iconRef} className={`w-[20px] h-[20px] transition-all duration-300`}>
                        <img 
                            src="/arrow-right.svg" 
                            alt="arrow" 
                            className={`w-full h-full object-contain transition-all duration-300
                                ${variant === 'primary' ? 'filter-teal-500' : ''} 
                                ${(variant === 'outline' || variant === 'white' || variant === 'secondary') ? 'filter-blue-500 group-hover/btn:brightness-0 group-hover/btn:invert' : ''}`}
                        />
                    </div>
                )}
            </div>
        </button>
    );
};

export default Button;
