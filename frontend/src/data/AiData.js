export const getDummyAIResponse = (query) => {
  const lowerQuery = query.toLowerCase();

  // Greetings
  if (lowerQuery.match(/^(hi|hello|hey|greetings|good morning|good afternoon)/)) {
    return {
      type: 'cta',
      content: "Hello there! I'm your Daffodil AI Assistant. How can I help you elevate your digital presence today?",
      ctaText: "Start a Project",
      ctaLink: "/contact"
    };
  }

  // Domain queries
  if (lowerQuery.includes('domain') || lowerQuery.includes('website name') || lowerQuery.includes('url')) {
    return {
      type: 'domain',
      content: "I can certainly help you find the perfect domain for your business! Here are some popular extensions. Which one are you interested in?"
    };
  }

  // Service queries
  if (lowerQuery.includes('service') || lowerQuery.includes('what do you do') || lowerQuery.includes('offer')) {
    return {
      type: 'links',
      content: "We offer a comprehensive suite of digital services designed to scale your business. Check out our core specialized areas:",
      links: [
        { label: "Web Development", url: "/services#web" },
        { label: "UI/UX Design", url: "/services#design" },
        { label: "AI Integration", url: "/services#ai" },
        { label: "Growth Marketing", url: "/services#marketing" }
      ]
    };
  }

  if (lowerQuery.includes('design') || lowerQuery.includes('ui') || lowerQuery.includes('ux') || lowerQuery.includes('figma')) {
    return {
      type: 'cta',
      content: "Our Design team specializes in creating stunning, user-centric interfaces. We focus on both high-fidelity aesthetics and seamless workflows.",
      ctaText: "View Case Studies",
      ctaLink: "/resources"
    };
  }

  if (lowerQuery.includes('develop') || lowerQuery.includes('code') || lowerQuery.includes('build') || lowerQuery.includes('app') || lowerQuery.includes('web')) {
    return {
      type: 'cta',
      content: "Our Development experts build robust, scalable applications using modern stacks. Whether it's an e-commerce platform or a custom SaaS, we can build it.",
      ctaText: "Book a Tech Consultation",
      ctaLink: "/contact"
    };
  }

  // AI & Automation
  if (lowerQuery.includes('ai') || lowerQuery.includes('automation') || lowerQuery.includes('bot') || lowerQuery.includes('gpt')) {
    return {
      type: 'links',
      content: "We integrate state-of-the-art AI solutions into your workflow. Explore our AI-driven resources:",
      links: [
        { label: "AI Whitepaper 2026", url: "/resources/ai-whitepaper" },
        { label: "Automation Guide", url: "/resources/automation" },
        { label: "SaaS AI Patterns", url: "/resources/saas-patterns" }
      ]
    };
  }

  // Growth / Marketing
  if (lowerQuery.includes('growth') || lowerQuery.includes('marketing') || lowerQuery.includes('seo') || lowerQuery.includes('sales')) {
    return {
      type: 'cta',
      content: "Our Growth services are focused on maximizing your digital footprint. We handle SEO, CRO, and performance marketing to drive real results.",
      ctaText: "Get Free SEO Audit",
      ctaLink: "/contact"
    };
  }

  // Specific chips interactions
  if (['.com', '.net', '.org', '.io'].some(ext => lowerQuery.includes(ext))) {
    const ext = ['.com', '.net', '.org', '.io'].find(e => lowerQuery.includes(e));
    return {
      type: 'cta',
      content: `Excellent choice! The ${ext} extension is highly recognizable. Would you like to check the detailed price list?`,
      ctaText: "View Pricing",
      ctaLink: "/pricing"
    };
  }

  if (['foundation', 'strategy', 'maintain'].some(s => lowerQuery.includes(s))) {
    return {
      type: 'text',
      content: "That's a crucial part of the product lifecycle. A solid foundation and strategy ensure long-term stability, while our maintenance plans keep everything running smoothly."
    };
  }
  
  if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('how much') || lowerQuery.includes('budget')) {
    return {
      type: 'cta',
      content: "Our pricing is tailored to the specific needs and scale of your project. Let's discuss your goals on a quick discovery call.",
      ctaText: "Schedule Discovery Call",
      ctaLink: "/contact"
    };
  }

  if (lowerQuery.includes('contact') || lowerQuery.includes('talk') || lowerQuery.includes('email') || lowerQuery.includes('phone') || lowerQuery.includes('call')) {
    return {
      type: 'cta',
      content: "You can reach out to our team directly. We typically respond within a few business hours!",
      ctaText: "Go to Contact Page",
      ctaLink: "/contact"
    };
  }

  if (lowerQuery.includes('ecommerce') || lowerQuery.includes('shop') || lowerQuery.includes('store')) {
    return {
      type: 'links',
      content: "E-commerce is one of our core specialties. View some of our latest storefront implementations:",
      links: [
        { label: "Fashion Hub Case", url: "/resources/fashion" },
        { label: "SaaS Subscription Model", url: "/resources/saas" },
        { label: "Global Marketplace", url: "/resources/global" }
      ]
    };
  }

  // Fallback
  return {
    type: 'text',
    content: "That's an interesting question! I'm currently running in limited 'dummy mode', but I'd love to assist you with our core services or project inquiries. Would you like to speak with a human expert?"
  };
};
