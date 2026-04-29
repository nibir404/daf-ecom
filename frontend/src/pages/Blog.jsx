import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Blog = () => {
    return (
        <MainLayout>
            <Navbar />
            <section className="w-full py-[120px] px-6 md:px-0">
                <div className="max-w-[1520px] mx-auto text-center">
                    <h1 className="text-[48px] font-bold mb-6 text-black-900">Latest Insights</h1>
                    <p className="text-[18px] text-black-400 mb-12">Expert advice on scaling software, digital transformation, and growth strategy.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border border-white-600 rounded-[2px] bg-white-100 italic text-black-300">
                            Blog posts coming soon...
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </MainLayout>
    );
};

export default Blog;
