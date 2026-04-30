import React, { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PrivacyHero from '../components/sections/privacy/PrivacyHero';
import PrivacySidebar from '../components/sections/privacy/PrivacySidebar';
import PrivacyContent from '../components/sections/privacy/PrivacyContent';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const sections = ['introduction', 'collect', 'use', 'cookies', 'sharing', 'security', 'retention'];
        
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <MainLayout>
            <Navbar />
            
            <main className="flex flex-col bg-white-300 min-h-screen">
                <PrivacyHero />
                
                <div className="max-w-[1520px] mx-auto py-[100px] px-6 xl:px-0 flex flex-col lg:flex-row gap-[60px] relative">
                    <PrivacySidebar 
                        activeSection={activeSection} 
                        scrollToSection={scrollToSection} 
                    />
                    <PrivacyContent />
                </div>
            </main>

            <Footer />
        </MainLayout>
    );
};

export default PrivacyPolicy;
