import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import StartHere from './pages/StartHere'
import SearchDomain from './pages/SearchDomain'
import SingleService from './pages/SingleService'
import BlogPage from './pages/Blog'
import SingleBlog from './pages/SingleBlog'
import FAQPage from './pages/FAQList'
import CaseStudies from './pages/CaseStudies'
import SingleCaseStudy from './pages/SingleCaseStudy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SmoothScroll from './components/layout/SmoothScroll'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/resources" element={<Home />} /> {/* Temporary redirect to Home */}
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/search-domain" element={<SearchDomain />} />
          <Route path="/services/:serviceId" element={<SingleService />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<SingleCaseStudy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </SmoothScroll>
    </Router>
  )
}

export default App
