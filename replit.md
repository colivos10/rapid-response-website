# Rapid Response - Emergency Response Optimization Platform

## Overview

Rapid Response is a B2B/B2G landing page application showcasing an emergency response optimization platform. The application demonstrates how advanced algorithms strategically reposition emergency vehicles to reduce response times. Currently operating in Chile, the platform targets government agencies, private ambulance services, police/emergency services, city councils, and hospital networks.

The application is a modern single-page marketing website built with React and Express, featuring a comprehensive landing page with sections for hero messaging, statistics, problem/solution explanation, technology details, target audience information, case studies, and contact form functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, built using Vite as the build tool and development server.

**UI Component Library**: Shadcn/ui with Radix UI primitives, providing accessible, customizable components following a modern B2B design system. The design is heavily influenced by professional platforms like Stripe (trust), Linear (typography), and Material Design (structure).

**Styling System**: Tailwind CSS with a custom design system defined in `tailwind.config.ts`. The design uses:
- Inter font family for consistency across headings and body text
- Neutral color palette with primary blue accent (#1565C0 equivalent)
- Spacing primitives based on Tailwind's 4px scale
- Custom shadow and elevation utilities for depth
- Responsive grid layouts (1/2/3/4 columns based on breakpoint)

**Routing**: Wouter for client-side routing (lightweight React Router alternative).

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration. Local component state managed with React hooks.

**Form Handling**: React Hook Form with Zod schema validation via @hookform/resolvers for type-safe form validation.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Architecture Pattern**: Simple REST API with route handlers in `server/routes.ts`. The server follows a modular structure:
- `server/index.ts`: Application entry point with middleware setup
- `server/routes.ts`: API route registration
- `server/static.ts`: Static file serving with SPA fallback
- `server/vite.ts`: Development-mode Vite integration
- `server/storage.ts`: Data persistence abstraction layer

**Development vs Production**: 
- Development: Vite dev server integrated as Express middleware with HMR support
- Production: Pre-built static assets served from `dist/public` directory

**Build Process**: Custom build script (`script/build.ts`) that:
1. Bundles client with Vite
2. Bundles server with esbuild (with selective dependency bundling via allowlist)
3. Outputs production-ready artifacts to `dist/`

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`.

**Schema Design**:
- `users`: Basic user authentication table (id, username, password)
- `contact_requests`: Demo request submissions (id, organization_type, name, email, phone, message, created_at)

**Storage Abstraction**: IStorage interface pattern with MemStorage in-memory implementation as fallback. Production implementation would use DrizzleStorage with PostgreSQL connection.

**Migration Strategy**: Drizzle Kit for schema migrations with configuration in `drizzle.config.ts`.

### Design System

**Component Organization**: Components organized by purpose:
- `client/src/components/ui/`: Reusable Shadcn UI primitives
- `client/src/components/`: Feature-specific landing page sections (Navigation, HeroSection, StatsSection, etc.)
- `client/src/components/examples/`: Component examples for development

**Design Principles** (from `design_guidelines.md`):
- Professional B2B/B2G aesthetic prioritizing credibility and clarity
- Typography scale using Inter with tight letter-spacing (-0.02em)
- Consistent spacing using Tailwind's spacing primitives
- Responsive grid layouts with mobile-first approach
- Hero section with full-width background image and gradient overlay

**Interaction Patterns**:
- Smooth scroll navigation to page sections
- Hover elevation effects on interactive elements
- Toast notifications for form feedback
- Mobile-responsive navigation with hamburger menu

### API Structure

**Contact Form Submission**:
- `POST /api/contact`: Submit demo request
  - Request body validated against `insertContactRequestSchema`
  - Returns success response with created request ID
  - Error handling for validation failures and server errors

**Response Format**: Consistent JSON responses with `success`, `message`, and `id` or `error` fields.

**Request Logging**: Custom middleware logs all API requests with method, path, status code, duration, and response preview.

## External Dependencies

### UI Framework Dependencies

- **@radix-ui/***: Headless UI component primitives for accessibility (accordion, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight client-side routing
- **react-hook-form**: Form state management
- **zod**: Schema validation and type inference
- **class-variance-authority**: Component variant styling utilities
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **react-icons**: Additional icons (social media icons)
- **embla-carousel-react**: Carousel component library

### Backend Dependencies

- **express**: Web server framework
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **pg**: PostgreSQL client (expected to be added)
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used in current implementation)
- **date-fns**: Date manipulation utilities

### Development & Build Tools

- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for server code
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-***: Replit-specific development plugins (runtime error overlay, cartographer, dev banner)

### Database

**PostgreSQL**: Configured via `DATABASE_URL` environment variable. Drizzle ORM expects PostgreSQL dialect. The application includes schema definitions but the actual database connection implementation would need to be added (currently using in-memory storage as fallback).

### Third-Party Services

**Google Fonts**: Inter font family loaded via CDN in `client/index.html`.

**Potential Future Integrations** (based on package.json allowlist):
- Stripe (payment processing)
- OpenAI (AI features)
- Nodemailer (email notifications)
- JWT authentication
- Passport.js authentication strategies

### Environment Variables

- `DATABASE_URL`: PostgreSQL connection string (required for database operations)
- `NODE_ENV`: Environment mode (development/production)
- `REPL_ID`: Replit-specific identifier for development tooling