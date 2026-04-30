import React, { useEffect } from 'react'
import MainLayout from '../components/layout/MainLayout'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BlogHero from '../components/sections/blog/BlogHero'
import FeaturedBlog from '../components/sections/blog/FeaturedBlog'
import AllBlog from '../components/sections/blog/AllBlog'

function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Navbar />

      <main className="flex flex-col">
        <BlogHero />
        <FeaturedBlog />
        <AllBlog />
      </main>

      <Footer />
    </MainLayout>
  )
}

export default BlogPage