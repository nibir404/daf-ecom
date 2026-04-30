import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CaseStudySidebar from '../components/sections/single-case-study/CaseStudySidebar';
import CaseStudyBody from '../components/sections/single-case-study/CaseStudyBody';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';

const SingleCaseStudy = () => {
    const { id } = useParams();
    const study = CASE_STUDIES_DATA.find(s => s.id === parseInt(id)) || CASE_STUDIES_DATA[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <MainLayout>
            <Navbar />
            
            <main className="w-full bg-white-300 py-[120px]">
                <div className="max-w-[1520px] mx-auto px-6 lg:px-0">
                    <div className="flex flex-col lg:flex-row gap-[60px] items-start">
                        {/* Sidebar */}
                        <CaseStudySidebar study={study} />

                        {/* Main Content */}
                        <CaseStudyBody study={study} />
                    </div>
                </div>
            </main>

            <Footer />
        </MainLayout>
    );
};

export default SingleCaseStudy;
