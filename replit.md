# Lumière - Fine Dining Restaurant Website

## Overview

This is a modern, luxurious fine dining restaurant website built with a full-stack TypeScript architecture. The application showcases Lumière, a fictional high-end restaurant specializing in molecular gastronomy and culinary artistry. The project features a responsive frontend with elegant animations, a complete menu system, and restaurant information pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: GSAP for advanced animations and scroll-triggered effects
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for HTTP server and API routes
- **Database**: PostgreSQL with Drizzle ORM
- **Cloud Database**: Neon Database (serverless PostgreSQL)
- **Session Management**: Memory-based storage with extensible interface

### Design System
- **Color Palette**: Elegant restaurant colors (burgundy, gold, forest green, ivory)
- **Typography**: Multi-font system (Playfair Display, Poppins, Great Vibes, Montserrat, Lora)
- **Theme**: Light theme with CSS custom properties for consistent styling

## Key Components

### Pages
1. **Home Page**: Hero section with parallax effects and call-to-action buttons
2. **Menu Page**: Filterable menu with categories (appetizers, mains, desserts)
3. **About Page**: Restaurant story, timeline, and chef profiles
4. **Contact Page**: Reservation form and contact information
5. **404 Page**: Custom not-found page

### Core Components
- **Navigation**: Fixed header with scroll effects and mobile menu
- **Footer**: Links, contact info, and social media
- **Menu Item Cards**: Interactive cards with hover effects
- **Chef Cards**: Team member profiles with animations
- **Animation Hooks**: Custom GSAP integration for fade-in and parallax effects

### UI Library
- Complete shadcn/ui component library
- Radix UI primitives for accessibility
- Custom styling with Tailwind CSS variants
- Responsive design patterns

## Data Flow

### Frontend Data Management
- Menu items and chef data stored in TypeScript interfaces
- Static data files for restaurant content
- TanStack Query for potential API integration
- Form state management for contact/reservation forms

### Backend API Structure
- RESTful API endpoints with `/api` prefix
- Modular route registration system
- Express middleware for logging and error handling
- Extensible storage interface (currently in-memory, database-ready)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon Database client for PostgreSQL
- **drizzle-orm**: Type-safe database toolkit
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **class-variance-authority**: Component variant management
- **date-fns**: Date manipulation utilities

### UI and Animation
- **@radix-ui/***: Accessible UI primitives
- **embla-carousel-react**: Carousel functionality
- **GSAP**: Animation library (loaded via CDN)

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle handles schema migrations

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Development and production environment detection
- Replit-specific development tooling integration

### Production Setup
- Express serves static files from build output
- PostgreSQL database for persistent storage
- Session management with connect-pg-simple
- Error handling and logging middleware

### Development Features
- Hot module replacement with Vite
- Real-time error overlay
- Automatic database schema synchronization
- Development banner for external access

The application is designed for easy deployment on platforms like Replit, with built-in development tooling and cloud database integration. The architecture supports scaling from a demo restaurant website to a full production application with reservations, user accounts, and order management.