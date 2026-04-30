# 🎨 Daffodil E-commerce & Digital Systems - Frontend

A high-fidelity, premium digital platform built for scale. This repository contains the React-based frontend implementation of the Daffodil Web ecosystem, featuring pixel-perfect design alignment, advanced animations, and an AI-driven support interface.

## 🚀 Key Features

- **AI Support System**: A premium, frosted-glass "AI Floating Bar" with real-time interaction, structured links, and prominent CTAs. Fully responsive and mobile-optimized.
- **Advanced Glassmorphism**: High-intensity backdrop filters and complex mask-images used for atmospheric "Saas-platform" visual effects.
- **Asset Optimization**: Automated image minification pipeline via `vite-plugin-image-optimizer`, reducing total asset weight by ~70% without quality loss.
- **Service Journey Refinement**: Modular service pages featuring progressive content loading: `Hero` -> `ProductDemo` (Scenarios) -> `Technical Infrastructure` -> `WorkBeyondDemo` (1920px Impact Flare).
- **Standardized Resource Heros**: Unified centering and vertical balance for all secondary hubs (Start Here, Pricing, Blog, etc.), ensuring a consistent brand voice.
- **Smooth Scrolling**: Integrated **Lenis** momentum-based scrolling paired with **GSAP** for fluid, high-performance transitions and reveal effects.
- **Mega Menu Navigation**: Sophisticated multi-column navigation systems for Services and Resources, optimized for discovery.
- **Domain Search Ecosystem**: Dedicated flows for finding and selecting digital foundations (Domain, Hosting, SSL).
- **Responsive Excellence**: Pixel-perfect layouts across mobile, tablet, and desktop using fluid grid systems and modern CSS.

## 🛠️ Tech Stack

- **Core**: React 19 (Concurrent Mode), Vite 6 (Ultra-fast HMR)
- **Styling**: Tailwind CSS 4, Modern Glassmorphism (Backdrop Filters, Masking)
- **Asset Pipeline**: vite-plugin-image-optimizer (Squash, MozJPEG, SVGO, WebP conversion)
- **Animation**: GSAP 3 (ScrollTrigger, Ticker), CSS Keyframe Animations
- **Scrolling**: Lenis (Smooth Scroll)
- **Architecture**: Modular, Feature-Based Structure (FDS)

## 📂 Project Architecture

The codebase is organized by features to ensure maximum maintainability and separation of concerns.

| Directory | Purpose |
| :--- | :--- |
| `src/app` | Global configuration, routing, and application entry points. |
| `src/components/layout` | Shared persistent components (Navbar, Footer, SmoothScroll). |
| `src/components/sections` | Feature-specific UI blocks (Home, Services, AI Floating Bar). |
| `src/components/ui` | Atomic design components (Buttons, Cards, Badges). |
| `src/features` | Complex business logic (Blog, Case Studies, Domain Search). |
| `src/pages` | Route-level components. |
| `src/data` | Static datasets and AI response logic. |
| `src/styles` | Global CSS and custom design tokens. |

## ⚡ Development

### Installation
```bash
npm install
```

### Scripts
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles the application for production.
- `npm run preview`: Previews the production build locally.

---
© 2026 Daffodil Web & E-commerce. Built with precision.
