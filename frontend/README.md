# 🛍️ DAF E-com Frontend

A high-performance, modular e-commerce frontend built with **React 19** and **Vite 8**. Designed for scalability, maintainability, and a premium user experience.

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📂 Project Architecture

The codebase follows a structured, feature-driven organization.

### Directory Structure

<!-- ARCHITECTURE_START -->
| Directory | Purpose |
| :--- | :--- |
| `src/app` | Global configuration, routing, and application entry points. |
| `src/components` | Shared reusable components. |
| `src/components/layout` | Shared persistent components like Navbars and Footers. |
| `src/components/sections` | Reusable blocks of UI specific to certain pages. |
| `src/components/sections/home` | Page sections specifically for the Home page. |
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
| `src/hooks` | Shared custom React hooks. |
| `src/lib` | Utility libraries and API configurations. |
| `src/pages` | Page-level components mapped to routes. |
| `src/store` | State management logic. |
| `src/styles` | Global CSS and theme configurations. |
<!-- ARCHITECTURE_END -->

---



## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite 8](https://vitejs.dev/)
- **Linting:** [ESLint](https://eslint.org/)
- **Logic:** JavaScript (ES Modules)

---

## 🗺️ Roadmap & Features

- [ ] Comprehensive E-commerce Dashboard
- [ ] Blog & Content Management Integration
- [ ] Dynamic Case Studies Showcase
- [ ] Responsive & Mobile-First Design
- [ ] Advanced State Management

---

© 2026 DAF E-com. s
