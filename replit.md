# Replit.md

## Overview

This is a modern, responsive barbershop website for "Sion Barber Shop" built with React, TypeScript, and Express. The application features a full-stack architecture with a React frontend using shadcn/ui components, Tailwind CSS for styling, and an Express backend. The site emphasizes modern design, smooth animations, and premium user experience as specified in the requirements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal implementation)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend, esbuild for backend
- **Deployment**: Configured for Vercel deployment

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom color scheme focused on cool blue theme
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: React Query for server state, React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Modern responsive design with mobile-first approach

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development Setup**: Hot reloading with Vite middleware integration
- **Storage**: In-memory storage implementation with interface for future database integration

### Page Structure
The application is structured as a single-page website with the following sections:
- Hero section with animated elements and CTA
- About section with business information and contact details
- Services section displaying barbershop offerings
- Gallery section for showcasing work
- Reviews section for customer testimonials
- Location section with embedded Google Maps
- Footer with contact information and quick links

## Data Flow

### Business Hours System
- Custom hook `useBusinessHours` calculates real-time open/closed status
- Business hours defined in constants: Tuesday-Saturday 9 AM - 9 PM, closed Sunday-Monday
- Updates every minute to maintain accurate status

### Content Management
- Static content stored in constants file for easy maintenance
- Services, reviews, and gallery images configured as structured data
- Business information centralized for consistency across components

### Navigation
- Smooth scrolling navigation between sections
- Mobile-responsive hamburger menu
- Fixed navigation with scroll-based styling changes

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library with Radix UI
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **TypeScript**: Type safety across the application
- **Vite**: Fast development server and build tool
- **ESBuild**: Fast JavaScript bundler for backend
- **PostCSS**: CSS processing with Autoprefixer

### Third-party Integrations
- **Google Maps**: Embedded map showing barbershop location
- **Google Fonts**: Inter font family for modern typography
- **Facebook**: Social media integration for business page

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` directory using Vite
- Backend builds to `dist` directory using esbuild
- Single build command handles both frontend and backend compilation

### Environment Configuration
- Database URL configured via environment variable
- Development and production environments handled separately
- Static asset serving integrated with Express server

### Vercel Deployment
- Configuration optimized for Vercel deployment
- Static files served from Express server in production
- Development mode includes Vite middleware for hot reloading

### Database Strategy
- Drizzle ORM configured for PostgreSQL
- Migration system in place with `drizzle-kit`
- In-memory storage used as fallback for development
- Easy transition to PostgreSQL when database is provisioned

The application prioritizes performance, accessibility, and user experience while maintaining clean, maintainable code structure suitable for future enhancements and scaling.