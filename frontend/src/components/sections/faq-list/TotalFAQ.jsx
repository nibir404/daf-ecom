import React, { useState, useEffect, useRef } from 'react'

const FAQ_DATA = [
  {
    id: 'general',
    title: 'General Questions',
    questions: [
      {
        q: 'What does your company specialize in?',
        a: 'We specialize in high-end e-commerce solutions, custom web development, ERP systems, and AI-driven automation for global brands.'
      },
      {
        q: 'Which industries do you serve?',
        a: 'We serve a diverse range of sectors including Fintech, Healthcare, Logistics, Retail, and Manufacturing.'
      },
      {
        q: 'Do you work with startups or only enterprises?',
        a: 'We partner with both. We help startups build MVPs and assist enterprises with digital transformation and system scaling.'
      },
      {
        q: 'Can one team handle multiple solutions like ERP and website?',
        a: 'Yes, our cross-functional teams work in sync to deliver integrated solutions like ERP-connected e-commerce platforms.'
      },
      {
        q: 'Where are your offices located?',
        a: 'We operate globally with regional offices in major tech hubs, providing 24/7 support and localized consulting.'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    questions: [
      {
        q: 'What specific web technologies do you use?',
        a: 'We primarily use React, Next.js, Node.js, and robust backend systems like Python/Django and Go.'
      },
      {
        q: 'Do you provide UI/UX design services?',
        a: 'Absolutely. Our design-first approach ensures every product is both visually stunning and highly functional.'
      },
      {
        q: 'Can you migrate our existing site to a new platform?',
        a: 'Yes, we specialize in seamless migrations from legacy systems to modern, scalable platforms without data loss.'
      },
      {
        q: 'Do you offer custom mobile app development?',
        a: 'Yes, we build native and cross-platform mobile apps (iOS & Android) that integrate with your core business systems.'
      },
      {
        q: 'How do you handle AI and automation requests?',
        a: 'We analyze your business processes and implement custom AI models to automate repetitive tasks and improve efficiency.'
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & Engagement',
    questions: [
      {
        q: 'What are your engagement models?',
        a: 'We offer Fixed Price, Time & Materials, and Dedicated Team models to suit different project needs.'
      },
      {
        q: 'Do you provide free project estimates?',
        a: 'Yes, we offer a free initial consultation and a detailed project estimate following a requirements review.'
      },
      {
        q: 'How are payments structured?',
        a: 'Payments are typically tied to milestones, ensuring transparency and accountability throughout the project lifecycle.'
      },
      {
        q: 'Is there a minimum project size you accept?',
        a: 'While we prefer long-term partnerships, we evaluate every project based on its strategic value and our capacity.'
      },
      {
        q: 'Are there any hidden costs in your pricing?',
        a: 'No. Our proposals are transparent and include all expected costs for design, development, and initial deployment.'
      }
    ]
  },
  {
    id: 'process',
    title: 'Process & Delivery',
    questions: [
      {
        q: 'What is your typical project timeline?',
        a: 'MVPs usually take 8-12 weeks, while larger enterprise solutions range from 4 to 8 months.'
      },
      {
        q: 'How do you handle project communication?',
        a: 'We use dedicated Slack channels, weekly syncs, and project management tools like Jira or Asana for full transparency.'
      },
      {
        q: 'Do you follow Agile methodology?',
        a: 'Yes, we work in 2-week sprints, providing regular demos and allowing for flexibility in project scope.'
      },
      {
        q: 'Will I have a dedicated project manager?',
        a: 'Every client is assigned a dedicated Project Manager who acts as the primary point of contact.'
      },
      {
        q: 'How do you handle quality assurance?',
        a: 'We have a rigorous QA process including automated testing, manual testing, and user acceptance testing (UAT).'
      }
    ]
  },
  {
    id: 'tech',
    title: 'Technology & Security',
    questions: [
      {
        q: 'How do you ensure the security of our data?',
        a: 'We implement industry-standard encryption, follow OWASP security guidelines, and conduct regular vulnerability assessments.'
      },
      {
        q: 'Do you provide cloud hosting services?',
        a: 'Yes, we offer managed hosting services on AWS, Azure, and Google Cloud with 99.9% uptime guarantees.'
      },
      {
        q: 'Can you integrate with our existing CRM/ERP?',
        a: 'Yes, our teams are experts at building custom APIs and connectors to link new software with your legacy systems.'
      },
      {
        q: 'What is your stack for AI solutions?',
        a: 'We use Python, TensorFlow, PyTorch, and various LLM APIs (OpenAI, Anthropic) to build intelligent features.'
      },
      {
        q: 'Do you provide system documentation?',
        a: 'Yes, we provide comprehensive technical documentation, API specs, and user manuals for every project.'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support & Maintenance',
    questions: [
      {
        q: 'Do you offer post-launch support?',
        a: 'Yes, we offer various support packages ranging from basic maintenance to 24/7 critical issue monitoring.'
      },
      {
        q: 'How do you handle bug reports?',
        a: 'Bugs are reported through our client portal and prioritized based on their impact on business operations.'
      },
      {
        q: 'Can you maintain a site built by another company?',
        a: 'Yes, we perform a code audit first to understand the existing system and then provide a maintenance plan.'
      },
      {
        q: 'Do you provide training for our staff?',
        a: 'Yes, we offer training sessions for your internal teams to ensure they can manage the system effectively.'
      },
      {
        q: 'How often do you provide system updates?',
        a: 'We provide regular security patches and performance updates as part of our maintenance agreements.'
      }
    ]
  },
  {
    id: 'global',
    title: 'Outsourcing & Global Clients',
    questions: [
      {
        q: 'How do you handle different time zones?',
        a: 'Our global team structure allows us to provide overlap with almost any time zone, ensuring smooth collaboration.'
      },
      {
        q: 'Do you offer offshore development teams?',
        a: 'Yes, we provide high-quality offshore and nearshore development services to optimize costs without sacrificing quality.'
      },
      {
        q: 'How do you ensure IP protection?',
        a: 'We sign strict NDAs and IP assignment agreements, ensuring that all work produced belongs entirely to the client.'
      },
      {
        q: 'Can we visit your offices?',
        a: 'Yes, we welcome clients to visit our physical offices and meet the teams working on their projects.'
      },
      {
        q: 'Do you have experience with global compliance (GDPR, etc.)?',
        a: 'Yes, we build systems that comply with global data protection regulations including GDPR, CCPA, and others.'
      }
    ]
  }
]

const ListFAQ = () => {
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].id)
  const [openItems, setOpenItems] = useState({})
  const sectionRefs = useRef({})

  const toggleItem = (categoryId, index) => {
    const key = `${categoryId}-${index}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const scrollToCategory = (id) => {
    const element = sectionRefs.current[id]
    if (element) {
      const offset = 100 // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveCategory(id)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (const section of FAQ_DATA) {
        const element = sectionRefs.current[section.id]
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const absoluteTop = top + window.scrollY
          const absoluteBottom = bottom + window.scrollY

          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            setActiveCategory(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-white-300">
      <div className="max-w-[1520px] mx-auto px-6 xl:px-0 flex flex-col md:flex-row gap-[40px] lg:gap-[60px] relative">
        
        {/* Sidebar */}
        <div className="hidden md:block w-[240px] lg:w-[300px] shrink-0">
          <div className="sticky top-[100px] border-l border-black-100 flex flex-col items-start">
            {FAQ_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`w-full text-left px-[10px] py-[8px] transition-all duration-200 border-l-3 ${
                  activeCategory === cat.id 
                    ? 'border-orange-600 text-black-900 font-bold' 
                    : 'border-transparent text-black-300 font-normal hover:text-black-400'
                }`}
              >
                <span className="text-[16px] leading-[30px] whitespace-nowrap">
                  {cat.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-[60px] lg:gap-[80px]">
          {FAQ_DATA.map((cat) => (
            <div 
              key={cat.id} 
              ref={el => sectionRefs.current[cat.id] = el}
              className="flex flex-col gap-[24px]"
            >
              <h2 className={`text-[32px] md:text-[48px] font-medium leading-tight transition-colors duration-300 ${activeCategory === cat.id ? 'text-black-900' : 'text-black-400'}`}>
                {cat.title}
              </h2>
              <div className="flex flex-col">
                {cat.questions.map((item, idx) => {
                  const isOpen = openItems[`${cat.id}-${idx}`]
                  return (
                    <div 
                      key={idx} 
                      className={`border-b border-white-600 overflow-hidden transition-all duration-300 ${idx === cat.questions.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <button
                        onClick={() => toggleItem(cat.id, idx)}
                        className="w-full flex items-center justify-between py-[20px] text-left group"
                      >
                        <span className="text-[18px] md:text-[24px] font-semibold italic text-black-900 leading-normal transition-colors group-hover:text-orange-600">
                          {item.q}
                        </span>
                        <div className={`w-[16px] h-[16px] flex items-center justify-center transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33334V12.6667M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </button>
                      <div 
                        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-[20px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-[16px] md:text-[18px] leading-[28px] text-black-400 max-w-[900px]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListFAQ
