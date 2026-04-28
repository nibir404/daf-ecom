import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      lerp: 0.1,
    })

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Add Lenis to GSAP Ticker
    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);

    // Disable GSAP lag smoothing
    gsap.ticker.lagSmoothing(0)

    // Global reveal animations for sections (excluding Hero)
    // Small timeout to ensure DOM is ready after React render
    const timeout = setTimeout(() => {
      const sections = document.querySelectorAll('section:not(.hero-section)');
      sections.forEach((section) => {
          gsap.fromTo(section, 
              {
                  opacity: 0,
                  y: 30,
              },
              {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  ease: 'power2.out',
                  scrollTrigger: {
                      trigger: section,
                      start: 'top 90%',
                      toggleActions: 'play none none none',
                  }
              }
          );
      });
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      lenis.destroy()
      gsap.ticker.remove(raf)
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  }, [location])

  return children
}

export default SmoothScroll
