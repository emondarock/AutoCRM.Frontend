# AutoCRM.ai Frontend

Next.js 14 frontend application for AutoCRM.ai - Automating Facebook Lead Ads to HubSpot CRM.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: Zustand + React Query
- **Authentication**: Clerk
- **HTTP Client**: Axios

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── (auth)/              # Authentication routes
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── (dashboard)/         # Protected dashboard routes
│   │   │   ├── dashboard/       # Main dashboard
│   │   │   ├── automations/     # Automation management
│   │   │   ├── connections/     # Connection management
│   │   │   └── layout.tsx       # Dashboard layout
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Landing page
│   ├── components/
│   │   ├── ui/                  # Shadcn UI components
│   │   ├── layout/              # Layout components
│   │   └── shared/              # Shared components
│   ├── lib/
│   │   ├── api.ts               # API client configuration
│   │   ├── utils.ts             # Utility functions
│   │   └── types.ts             # TypeScript type definitions
│   ├── hooks/                   # Custom React hooks
│   └── store/                   # Zustand stores
├── public/                      # Static assets
└── .env.local.example           # Environment variables template
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:
- `NEXT_PUBLIC_API_URL` - Backend API URL (http://localhost:5000)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CLERK_SECRET_KEY` - Clerk secret key

### 3. Run Development Server

```bash
npm run dev
```

Application will start on `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Routing Structure

### Public Routes
- `/` - Landing page with features and CTA
- `/sign-in` - Sign in page (Clerk)
- `/sign-up` - Sign up page (Clerk)

### Protected Routes (Dashboard)
- `/dashboard` - Overview dashboard with stats
- `/connections` - Manage Facebook and HubSpot connections
- `/automations` - Create and manage automations
- `/logs` - View sync logs and history
- `/settings` - User settings and subscription

## Development Guidelines

- Use TypeScript for type safety
- Follow Next.js 14 App Router conventions
- Use Server Components where possible
- Keep components small and focused
- Use Shadcn/ui components for consistency

---

Last updated: November 30, 2025
