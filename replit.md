# replit.md

## Overview

This is a Buy It For Life (BIFL) Cookware Directory - a single-page application that showcases premium heritage cookware brands organized by country of origin. The application features a modern, premium design aesthetic with a React frontend and Express backend, built for performance and user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom BIFL-themed color palette
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Component Structure**: Modular component architecture with shared UI components

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for fast backend bundling

### Monorepo Structure
```
├── client/           # React frontend application
├── server/           # Express backend application  
├── shared/           # Shared types and schemas
├── components.json   # shadcn/ui configuration
└── package.json      # Monorepo package management
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` for type safety across frontend/backend
- **Migrations**: Managed through `drizzle-kit` with output to `./migrations`
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### UI Components
- **Design System**: shadcn/ui "new-york" style with custom BIFL theming
- **Component Library**: Comprehensive set including forms, navigation, data display
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Accessibility**: Built-in a11y features through Radix UI primitives

### Data Management
- **Brand Data**: Static data structure for cookware brands organized by country
- **Filtering**: Client-side filtering by price category and search terms
- **Display**: Country-grouped brand cards with responsive grid layout

## Data Flow

1. **Static Data**: Brand information stored in `client/src/lib/brands-data.ts`
2. **Client Rendering**: React components consume static data for immediate display
3. **API Ready**: Backend storage interface prepared for future dynamic data
4. **Search & Filter**: Client-side filtering for fast user interactions
5. **Navigation**: Smooth scrolling between country sections

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: react, react-dom, @tanstack/react-query
- **UI Components**: @radix-ui/* component primitives
- **Styling**: tailwindcss, class-variance-authority, clsx
- **Utilities**: date-fns, embla-carousel-react, wouter
- **Forms**: react-hook-form, @hookform/resolvers

### Backend Dependencies
- **Server**: express, connect-pg-simple (session management)
- **Database**: @neondatabase/serverless, drizzle-orm, drizzle-zod
- **Development**: tsx, esbuild, vite

### Development Tools
- **Build**: vite, esbuild, typescript
- **Database**: drizzle-kit for migrations
- **Styling**: postcss, autoprefixer

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20, PostgreSQL 16 modules
- **Development**: `npm run dev` runs tsx server with Vite middleware
- **Production Build**: Vite builds client, esbuild bundles server
- **Port Configuration**: Server on port 5000, external port 80
- **Auto-scaling**: Configured for Replit autoscale deployment

### Build Process
1. **Development**: Hot reloading with Vite middleware integration
2. **Build**: Client builds to `dist/public`, server bundles to `dist/index.js`
3. **Production**: Node.js serves static files and API endpoints
4. **Database**: Drizzle migrations manage schema changes

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string (required for production)
- `NODE_ENV`: Environment flag for development/production behavior

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- July 1, 2025. Expanded to comprehensive kitchen directory with cookware and knives separation
  * Added 13 knife brands across 6 countries (German, French, Nordic, Swiss, Spanish, Japanese)
  * Replaced header navigation with country dropdown to reduce clutter
  * Added category tabs to separate Cookware vs Knives
  * Added statistics section showing brand counts
  * Updated all branding from "BIFL Cookware" to "BIFL Kitchen"
  * Total: 46 heritage brands across 15 countries
- July 1, 2025. Added premium glassware category
  * Added 6 glassware brands: Duralex (France), Fiskars & Iittala (Finland), Schott Zwiesel (Germany), Bormioli Rocco (Italy), Rörstrand (Sweden)
  * Extended category tabs to include 🥃 Glassware alongside Cookware and Knives
  * Updated search functionality and statistics to include glassware
  * Total: 52 heritage brands (33 cookware + 13 knives + 6 glassware) across 15 countries
- July 1, 2025. Added coffee equipment category
  * Added 14 coffee equipment brands across 7 countries: ECM & Profitec (Germany), JURA (Switzerland), 3TEMP & Bodum (Nordic), La Pavoni & Bialetti (Italy), Chemex (Global), Canadiano (Canada), Moccamaster (Netherlands), Hario & Kalita (Japan)
  * Extended to 4-category tabs: 🍳 Cookware, 🔪 Knives, 🥃 Glassware, ☕ Coffee
  * Updated interface with 5-column statistics layout and coffee-specific search examples
  * Total: 66 heritage brands (33 cookware + 13 knives + 6 glassware + 14 coffee) across 15 countries
- July 3, 2025. Applied deployment fixes for production readiness
  * Added comprehensive error handling and logging to server startup
  * Implemented graceful startup with try-catch blocks and proper error reporting
  * Added health check endpoints (/health and /api/status) for deployment monitoring
  * Created PostgreSQL database and configured DATABASE_URL environment variable
  * Enhanced error handling to prevent server crashes in production
  * Added environment variable validation and startup logging
  * Improved production vs development mode detection and handling
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```