# 🎨 DAF E-com Frontend Development

This directory contains the React-based frontend for the DAF E-com project.

## 🚀 Development

### Installation

```bash
npm install
```

### Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## 🛠️ Tech Stack Specifics

- **React 19**: Utilizing the latest React features and concurrent rendering.
- **Vite 6**: Ultra-fast development server and optimized build pipeline.
- **Tailwind CSS 4**: Modern CSS framework with native container queries and improved performance.
- **GSAP 3**: High-performance animations for scroll-triggered reveal effects and micro-interactions.
- **Lenis**: Integrated smooth scrolling for a premium, momentum-based user experience.
- **High-Fidelity About Us Page**: Rebuilt all sections (Hero, Mission, Work, Team) with strict adherence to 1520px container constraints and 120px/200px spacing rules.
- **Architecture**: Feature-based modularity designed for scalability and separation of concerns.

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

For general project information and the overall roadmap, please refer to the [Root README](../README.md).
