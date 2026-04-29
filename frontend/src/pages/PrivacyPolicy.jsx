import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
    return (
        <MainLayout>
            <Navbar />
            <section className="w-full py-[120px] px-6">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="text-[48px] font-bold mb-8 text-black-900">Privacy Policy</h1>
                    <div className="prose prose-lg text-black-400">
                        <p className="mb-6">At DAF E-com, we are committed to protecting your privacy and ensuring the security of your data.</p>
                        <h2 className="text-[24px] font-semibold text-black-900 mt-10 mb-4">Data Collection</h2>
                        <p className="mb-6">We collect only the information necessary to provide our digital services and support your business growth.</p>
                        <h2 className="text-[24px] font-semibold text-black-900 mt-10 mb-4">How We Use Your Data</h2>
                        <p className="mb-6">Your data is used to improve our platforms, provide technical assistance, and keep you informed about system updates.</p>
                        <p className="italic mt-12 text-black-300">Last updated: April 2026</p>
                    </div>
                </div>
            </section>
            <Footer />
        </MainLayout>
    );
};

export default PrivacyPolicy;
