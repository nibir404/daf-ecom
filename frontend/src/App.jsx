import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import StartHere from './pages/StartHere'
import SingleService from './pages/SingleService'
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
          <Route path="/resources" element={<Home />} /> {/* Temporary redirect to Home */}
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/services/:serviceId" element={<SingleService />} />
        </Routes>
      </SmoothScroll>
    </Router>
  )
}

export default App
