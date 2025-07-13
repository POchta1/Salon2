# Beauty Space Wien - Workspace Booking Platform

## Overview

Beauty Space Wien is a comprehensive workspace rental platform designed for beauty professionals in Vienna. It's a full-stack application that allows beauty professionals to browse, book, and manage workspace rentals for various beauty services including makeup, cosmetics, hairdressing, nail design, and foot care.

## User Preferences

Preferred communication style: Simple, everyday language.
Color scheme: Стильная монохромная тема (черный, белый, серый тона для элегантного дизайна).
Data structure: Clear categorization with proper organization by service type.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens for luxury branding
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful API with proper error handling and logging

### Build & Development
- **Development**: Vite dev server with HMR and Express middleware
- **Production**: Static build output with Express serving API and static files
- **TypeScript**: Strict configuration with path aliases for clean imports

## Key Components

### Database Schema
- **Users**: Basic user authentication system
- **Workspaces**: Core entity with categories (makeup, kosmetik, friseur, nageldesign, fußpflege)
- **Bookings**: Reservation system with customer details and status tracking
- **Contacts**: Contact form submissions with type categorization
- **Testimonials**: Customer reviews with rating system

### API Endpoints
- **Workspaces**: CRUD operations, filtering by category
- **Bookings**: Creation and status management
- **Contacts**: Contact form submission handling
- **Testimonials**: Display customer reviews

### UI Components
- **Workspace Cards**: Display workspace details with booking functionality
- **Booking Modal**: Complete booking form with date/time selection
- **Navigation**: Responsive navbar with mobile menu
- **Form Components**: Reusable form elements with validation
- **Layout Components**: Hero sections, features, testimonials

## Data Flow

### Frontend to Backend
1. User interactions trigger React Query mutations
2. API requests sent to Express endpoints with proper error handling
3. Server validates data using Zod schemas
4. Database operations performed through Drizzle ORM
5. Response sent back to frontend with consistent error handling

### Authentication Flow
- Basic session-based authentication system
- PostgreSQL session storage for persistence
- User management through dedicated endpoints

### Booking Flow
1. User selects workspace and opens booking modal
2. Form validation using React Hook Form and Zod
3. Date/time selection with calendar component
4. Price calculation based on hourly/daily rates
5. Booking submission creates database record
6. Confirmation and success feedback

## External Dependencies

### UI & Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Hook Form**: Form state management
- **React Query**: Server state management

### Backend & Database
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL hosting
- **Express.js**: Web server framework
- **Zod**: Schema validation library

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety and development experience
- **ESBuild**: Fast bundling for production

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- Express server running in development mode
- Database migrations using Drizzle Kit
- Environment-based configuration

### Production Build
1. Vite builds frontend to `dist/public`
2. ESBuild bundles server code to `dist/index.js`
3. Static files served by Express
4. Database migrations applied on deployment

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string
- **NODE_ENV**: Environment detection
- **REPL_ID**: Replit-specific configuration

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Database Migrations**: Automated schema management with Drizzle
- **Error Handling**: Comprehensive error boundaries and API error responses
- **Performance**: Optimized builds and lazy loading where appropriate

The application follows modern web development best practices with a focus on type safety, developer experience, and maintainable code structure. The architecture supports easy scaling and feature additions while maintaining code quality and performance.

## Recent Changes

### January 2025
- **Data Integration**: Added real images and pricing from original beautyspace.at website
- **Image Updates**: Integrated authentic workspace photos from Wix media CDN
- **Pricing Structure**: Updated with real rates (makeup €10/hr, kosmetik €78-84/day, friseur €72/day, nageldesign €48/day, fußpflege €48/day)
- **Data Organization**: Restructured workspace categories for better organization and clarity
- **Color Scheme**: Переход на стильную монохромную тему (черный, белый, серый) для элегантного дизайна
- **UI Consistency**: Ensured consistent hover states and button styling across all components