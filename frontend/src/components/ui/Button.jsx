import React from 'react';

const Button = ({ 
    variant = 'primary', 
    children, 
    className = '', 
    icon, 
    iconPosition = 'right',
    ...props 
}) => {
    const baseStyles = "flex items-center justify-center gap-2 transition-all duration-300 rounded-[2px]";
    
    const variants = {
        primary: "bg-black-900 text-white-50 px-[24px] py-[14px] font-semibold hover:bg-blue-600 shadow-sm active:scale-95 relative overflow-hidden shadow-inner-glow",
        secondary: "bg-white border-2 border-blue-500 px-8 py-4 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white shadow-sm active:scale-95",
        white: "bg-white text-black-900 px-[24px] py-[14px] font-semibold hover:bg-blue-600 hover:text-white shadow-sm active:scale-95 relative overflow-hidden",
        tertiary: "flex items-center text-black-500 text-base font-bold group/btn gap-[10px]",
        outline: "border border-blue-500 px-[24px] py-[14px] text-blue-500 font-normal hover:bg-blue-500 hover:text-white transition-all group/btn"
    };

    if (variant === 'tertiary') {
        return (
            <button className={`${variants.tertiary} ${className}`} {...props}>
                <span className="border-b-2 border-transparent group-hover/btn:border-orange-500 transition-all">
                    {children}
                </span>
                <span className="text-orange-500 transform group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
        );
    }

    const content = (
        <>
            {icon && iconPosition === 'left' && (
                <div className="w-5 h-5 flex items-center justify-center transition-all">
                    {typeof icon === 'string' ? <img src={icon} alt="" className="w-full h-full object-contain brightness-0 invert" /> : icon}
                </div>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
                <div className="w-5 h-5 flex items-center justify-center transition-all">
                    {typeof icon === 'string' ? (
                        <img 
                            src={icon} 
                            alt="" 
                            className={`w-full h-full object-contain ${variant === 'primary' ? 'brightness-0 invert' : ''}`} 
                        />
                    ) : icon}
                </div>
            )}
             {!icon && (variant === 'outline' || variant === 'primary' || variant === 'white') && (
                 <div className={`w-[20px] h-[20px] transition-transform group-hover:translate-x-1`}>
                    <img 
                        src="/arrow-right.svg" 
                        alt="arrow" 
                        className={`w-full h-full object-contain 
                            ${variant === 'primary' ? 'filter-teal-500' : ''} 
                            ${(variant === 'outline' || variant === 'white') ? 'filter-blue-500' : ''}`}
                    />
                </div>
            )}
        </>
    );
    return (
        <button className={`${baseStyles} ${variants[variant]} ${className} group/btn`} {...props}>
            {(variant === 'primary' || variant === 'white') && (
                <div 
                    className={`absolute h-[48px] top-0 w-[400px] transition-all duration-500 pointer-events-none
                        bg-[#0066FF] ${variant === 'primary' ? 'right-[270px] group-hover/btn:right-[-120px] opacity-20 group-hover/btn:opacity-100' : 'left-[-437px] group-hover/btn:left-[-120px] opacity-10 group-hover/btn:opacity-30'}`}
                />
            )}
            <div className="relative z-10 flex items-center gap-2">
                {content}
            </div>
        </button>
    );
};

export default Button;
