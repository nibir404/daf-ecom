# 🛍️ DAF E-com Frontend

A high-performance, modular e-commerce frontend built with **React 19**, **Vite 6**, and **Tailwind CSS 4**. Designed for scalability, maintainability, and a premium user experience with a focus on modern aesthetics, high-fidelity animations, and performance.

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📂 Project Architecture

The codebase follows a structured, feature-driven organization to ensure separation of concerns and ease of development.

### Directory Structure

| Directory | Purpose |
| :--- | :--- |
| `src/app` | Global configuration, routing, and application entry points. |
| `src/components` | Shared reusable components (Layout, Sections, UI). |
| `src/features` | Domain-specific logic (Blog, Case Studies, Services). |
| `src/hooks` | Shared custom React hooks for state and side effects. |
| `src/lib` | Utility libraries, helpers, and API configurations. |
| `src/pages` | Page-level components (Home, About, Pricing, etc.). |
| `src/store` | Centralized state management logic. |
| `src/styles` | Global CSS, Tailwind configurations, and theme tokens. |

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) - Functional components with modern hooks and concurrent features.
- **Bundler:** [Vite 6](https://vitejs.dev/) - Lightning-fast HMR and optimized build pipeline.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS with the next-gen engine.
- **Animations:** [GSAP 3](https://greensock.com/gsap/) - Industry-leading animation library for high-fidelity interactions.
- **Linting:** [ESLint](https://eslint.org/) - Industry standard code quality enforcement.
- **State:** React State & Context API (Scalable to Zustand/Redux).

---

## 🗺️ Roadmap & Features

### Current Features
- ✅ **Premium Smooth Scrolling:** Integrated [Lenis](https://github.com/darkroomengineering/lenis) for a buttery-smooth, inertia-based scrolling experience.
- ✅ **Global Reveal Animations:** GSAP-powered section reveal animations (fade-in & slide-up) as you scroll down the page.
- ✅ **High-Fidelity Footer:** Fully realized footer design from Figma node `609:4010` with partnership integrations and responsive link grids.
- ✅ **Animated Interactivity:** GSAP-enhanced button hover effects with elastic scaling, icon shifts, and dynamic background fills.
- ✅ **Interactive Domain Search:** High-fidelity search bar with active states, rich placeholders, and glow effects (now synced with Footer).
- ✅ **Dynamic Problem Solver:** Interactive section with state-driven content and synchronized illustrations.
- ✅ **How It Works Progress:** Interactive workflow section with tabbed views and scroll-driven progress tracking.
- ✅ **Service Showcase:** Comprehensive service cards with hover effects and detailed information.
- ✅ **Responsive & Accessible:** Mobile-first approach with refined desktop layouts and semantic HTML.

### Planned Features
- [ ] **E-commerce Dashboard:** Full-featured user and admin dashboards.
- [ ] **CMS Integration:** Headless CMS support for dynamic Blog and Case Studies content.
- [ ] **Advanced State Management:** Integration of Zustand or Redux for complex global state.
- [ ] **Dark Mode Support:** Dynamic theme switching with system preference detection.
- [ ] **SEO Optimization:** Enhanced meta tags, JSON-LD, and structured data.

---

## 🤝 Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

© 2026 DAF E-com. All rights reserved.

