# Product Requirements Document (PRD) - Daffodil Web & E-commerce

## 1. Project Overview

Daffodil is a high-fidelity, premium digital commerce platform designed to provide businesses with a scalable "once-and-for-all" digital foundation. The platform integrates service discovery, pricing transparency, and an intelligent AI assistant into a cohesive, high-performance web experience.

## 2. Core Features & Requirements

### 2.1 AI Support Ecosystem (AI Floating Bar)

- **Requirement**: A persistent, unobtrusive floating bar at the bottom of the viewport.
- **Visuals**: Premium "Frosted Glass" (Glassmorphism) effect with high-diffusion blur.
- **Interactions**:
  - Smooth expansion into a full-height AI chat canvas.
  - Simulated real-time messaging with structured response types (Text, Links, CTAs).
  - Intelligent auto-scroll and GSAP-powered transitions.
- **Responsiveness**: Fluid width (90%-96%) on mobile with strict safe-area-inset support.

### 2.2 Navigation & Service Discovery

- **Requirement**: High-density Mega Menus for "Services" and "Explore".
- **Interaction**: Hover-triggered dropdowns with active state synchronization, brand-tinted filters, and detailed service descriptions.
- **Mobile Menu**: Full-screen overlay with search integration and collapsible nested categories.

### 2.3 User Experience & Motion

- **Smooth Scrolling**: Lenis-powered momentum scrolling for a tactile, high-end feel.
- **Section Reveals**: GSAP ScrollTrigger animations to reveal content as the user explores, reducing cognitive load and increasing engagement.
- **Micro-interactions**: Hover-state scaling, magnetic button effects, and animated accent flares.

### 2.4 Domain & System Planning

- **Requirement**: Dedicated onboarding flows for business owners.
- **SearchDomain**: Interactive domain search interface with clean, data-driven results.
- **Service Detail**: Modular "Single Service" pages that provide deep-dives into specific offerings.

## 3. Technical Constraints & Design Tokens

### 3.1 Design Standards

- **Grid**: 1520px max-width container for desktop.
- **Spacing**: Standardized vertical spacing (120px - 200px between major sections).
- **Typography**: SF Pro (Modern Sans-Serif) with tight tracking and high-contrast weights.
- **Colors**: Sleek monochrome base with vivid primary accents (Orange-600, Teal-500) for CTAs.

### 3.2 Performance Targets

- **Lighthouse Score**: Target 90+ for Performance and Accessibility.
- **Rendering**: Static site generation / Optimized client-side bundles via Vite.
- **Accessibility**: ARIA labels for all interactive elements, focus-trap for modals, and contrast-compliant color palettes.

## 4. Feature Roadmap (Post-Frontend Completion)

- **Phase 1**: Real-time AI integration via WebSocket/Streaming API.
- **Phase 2**: E-commerce checkout flow for hosting/service bundles.
- **Phase 3**: User Dashboard for system monitoring and support ticketing.
