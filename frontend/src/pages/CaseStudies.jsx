import React, { useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CaseStudyHero from '../components/sections/case-studies/CaseStudyHero';
import CaseStudyList from '../components/sections/case-studies/CaseStudyList';

const CaseStudies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            <Navbar />
            
            <main className="flex flex-col">
                <CaseStudyHero />
                <CaseStudyList />
            </main>

            <Footer />
        </MainLayout>
    );
};

export default CaseStudies;
