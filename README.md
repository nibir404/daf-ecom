# 🛍️ DAF E-com - Scalable Digital Systems

A high-performance, modular digital solutions platform designed for scalability, maintainability, and a premium user experience. Built with **React 19**, **Vite 6**, and **Tailwind CSS 4**.

---

## 🎯 Product Vision

DAF E-com provides a robust foundation for building **Software, ERP, and Digital Systems** that scale without rebuilding. Our philosophy centers on "Build Once, Scale Forever," ensuring that from the first website to enterprise-level systems, the architecture remains solid and performant.

### Core Value Propositions
- **Precision Spatial System:** Standardized 1520px content containers for consistent layout.
- **High-Fidelity UI/UX:** GSAP-driven animations and premium aesthetics.
- **Modern Tech Stack:** Native React 19 features and Tailwind CSS 4's next-gen engine.
- **Scalable Architecture:** Modular, feature-driven organization.

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**

### Installation
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📂 Project Architecture

The codebase follows a structured, feature-driven organization to ensure separation of concerns and ease of development.

<!-- ARCHITECTURE_START -->
| Directory | Purpose |
| :--- | :--- |
| `src/app` | Global configuration, routing, and application entry points. |
| `src/components` | Shared reusable components. |
| `src/components/layout` | Shared persistent components like Navbars and Footers. |
| `src/components/sections` | Reusable blocks of UI specific to certain pages. |
| `src/components/sections/about` | Sections for the About Us page. |
| `src/components/sections/faq-list` | FAQ section components. |
| `src/components/sections/home` | Page sections specifically for the Home page. |
| `src/components/sections/pricing` | Pricing page components. |
| `src/components/sections/search-domain` | Components for the domain search feature. |
| `src/components/sections/services` | Service listing page components. |
| `src/components/sections/single-service` | Detailed service page components. |
| `src/components/sections/start-here` | Onboarding and Start Here page components. |
| `src/components/ui` | Atomic UI components (Buttons, Inputs, etc.). |
| `src/features` | Domain-specific logic (API, components, hooks). |
| `src/features/blog` | Blog-related functionality. |
| `src/features/blog/components` | Project directory. |
| `src/features/blog/hooks` | Project directory. |
| `src/features/caseStudies` | Case study domain logic. |
| `src/features/caseStudies/components` | Project directory. |
| `src/features/caseStudies/hooks` | Project directory. |
| `src/features/services` | Service-related functionality. |
| `src/features/services/components` | Project directory. |
| `src/features/services/hooks` | Project directory. |
| `src/lib` | Utility libraries and API configurations. |
| `src/pages` | Page-level components mapped to routes. |
| `src/store` | State management logic. |
| `src/styles` | Global CSS and theme configurations. |
<!-- ARCHITECTURE_END -->

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) - Functional components with modern hooks and concurrent features.
- **Bundler:** [Vite 6](https://vitejs.dev/) - Lightning-fast HMR and optimized build pipeline.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS with the next-gen engine.
- **Animations:** [GSAP 3](https://greensock.com/gsap/) - Industry-leading animation library for high-fidelity interactions.
- **Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis) - Smooth, momentum-based scrolling.
- **Linting:** [ESLint](https://eslint.org/) - Industry standard code quality enforcement.

---

## 🗺️ Roadmap & Features

### ✅ Current Features
- **High-Fidelity Pages:** About Us, Pricing, Services, Home, and more.
- **Sticky Side-Header Layout:** Persistent navigation in complex sections.
- **Interactive Portfolio:** Hover-reveal thumbnails and distributed header alignment.
- **Mission & Vision Visualization:** Balanced dual-column layout with status badges.
- **Responsive & Accessible:** Mobile-first approach with semantic HTML.

### 🚀 Planned Features
- [ ] **E-commerce Dashboard:** Full-featured user and admin dashboards.
- [ ] **CMS Integration:** Headless CMS support for dynamic content.
- [ ] **Advanced State Management:** Integration of Zustand for complex state.
- [ ] **Dark Mode Support:** Dynamic theme switching.
- [ ] **SEO Optimization:** Enhanced meta tags and JSON-LD.

---

## 🤝 Contribution

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

© 2026 DAF E-com. All rights reserved.
