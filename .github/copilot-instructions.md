# Copilot Instructions for nextjs-dashboard

## Project Overview
- This is a Next.js dashboard app using the App Router, TypeScript, TailwindCSS, and Postgres.
- The codebase is structured for teaching and demo purposes, with clear separation of UI, data, and utility logic.

## Architecture & Data Flow
- **UI Components**: Located in `app/ui/`, organized by feature (e.g., `dashboard/`, `customers/`, `invoices/`).
- **Data Layer**: All data fetching and DB logic is in `app/lib/` (see `data.ts`). Types are defined in `definitions.ts`.
- **API Routes**: Use Next.js route handlers in `app/query/route.ts` and `app/seed/route.ts` for data queries and seeding.
- **Placeholder Data**: `app/lib/placeholder-data.ts` provides mock data for development and testing.

## Developer Workflows
- **Start Dev Server**: `pnpm dev` (uses Next.js with Turbopack)
- **Build**: `pnpm build`
- **Start Production**: `pnpm start`
- **Database**: Connects to Postgres via `process.env.POSTGRES_URL`. Seed with `app/seed/route.ts`.
- **Authentication**: Uses `next-auth` (see `package.json` for version).

## Project-Specific Patterns
- **Type Definitions**: All major entities (User, Customer, Invoice, Revenue) are typed in `app/lib/definitions.ts`.
- **Data Fetching**: Use async functions in `app/lib/data.ts` for DB queries. Always handle errors and log them.
- **UI Composition**: Components are feature-scoped and use TailwindCSS for styling. Example: `app/ui/dashboard/cards.tsx`.
- **Demo Delays**: Some data functions artificially delay responses for teaching purposes (see comments in `data.ts`).
- **Environment Variables**: Critical secrets (DB URL) are loaded from `.env`.

## Integration Points
- **Postgres**: All DB access via the `postgres` npm package.
- **TailwindCSS**: Configured in `tailwind.config.ts` and used throughout UI components.
- **Next.js Routing**: App Router structure (`app/` directory) with route handlers for API endpoints.

## Conventions & Examples
- **Error Handling**: Always log DB errors and throw with a clear message (see `data.ts`).
- **Pagination & Formatting**: Use utility functions in `app/lib/utils.ts` for currency, dates, and pagination.
- **Image Assets**: Customer images are stored in `public/customers/` and referenced by path in data.
- **Feature Organization**: UI, data, and API logic are grouped by feature for clarity and scalability.

## Key Files & Directories
- `app/ui/` — UI components (feature folders)
- `app/lib/` — Data logic, types, utilities
- `app/query/route.ts` — Example API route
- `app/seed/route.ts` — DB seeding logic
- `public/customers/` — Image assets
- `package.json` — Scripts, dependencies

---

If any section is unclear or missing important project-specific details, please provide feedback to improve these instructions.
