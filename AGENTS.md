<!-- BEGIN:nextjs-agent-rules -->

## 0. Next.js Rule (Mandatory)

This repo uses a Next.js version with breaking changes relative to older conventions.

- Always consult the relevant guide in `node_modules/next/dist/docs/` before implementing router/filesystem features.
- Heed deprecation notices.

---

## 1. Technology Stack (Web App)

- **Language**: TypeScript (strict)
- **Framework**: Next.js (App Router)
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Server state**: React Query (`@tanstack/react-query`)
- **Client state**: Zustand
- **HTTP**: Axios
- **Forms**: React Hook Form + Zod

Forbidden changes unless explicitly requested:

- Replacing Next.js App Router with Pages Router.
- Introducing Redux / RTK Query.
- Introducing additional global state libraries (Zustand is already used; no Recoil/MobX, etc.).

---

## 2. Project Structure (App Router)

Expected structure (high level – may grow over time):

```txt
src/
├── app/                         # Routing layer (App Router only)
│   ├── layout.tsx               # Root layout
│   ├── providers.tsx            # Global providers (React Query, etc.)
│   ├── globals.css              # Global styles + tokens
│   ├── (auth)/                  # Route group example (URL unaffected)
│   ├── (dashboard)/             # Route group example
│   └── api/                     # Route Handlers (BFF endpoints)
├── modules/                     # Feature modules (NO routing inside)
│   └── [module-name]/
│       ├── index.ts             # Public API for the module
│       ├── components/
│       │   ├── index.ts
│       │   ├── [component-name].tsx
│       │   └── icons/
│       │       ├── index.ts
│       │       └── [icon-name].tsx
│       ├── hooks/
│       ├── services/
│       ├── types/
│       ├── constants/
│       └── utils/
├── shared/                      # Reusable cross-feature layer
│   ├── index.ts
│   ├── components/
│   │   └── ui/                  # shadcn/ui primitives live here
│   ├── hooks/
│   ├── services/                # API base / shared services
│   ├── types/
│   ├── utils/                   # e.g. cn()
│   └── constants/
├── lib/                         # Infra glue (React Query config, axios instance, etc.)
│   └── index.ts
└── config/                      # App-level config
    ├── index.ts
    └── app.ts                   # appConfig from process.env
```

---

## 3. Architecture and Import Rules

### 3.1 Layers

```txt
Routing Layer (src/app)       → routes, layouts, route handlers, composition
Module Layer  (src/modules)   → feature UI + business logic (no routing)
Shared Layer  (src/shared)    → reusable UI + hooks + utils + types + services
Infra Layer   (src/lib)       → axios/react-query/zustand integration helpers
Config Layer  (src/config)    → app configuration, env-backed config
```

### 3.2 Import Rules (Enforced)

- **Alias-only**: do not use `./` or `../` imports. Always use `@/…`.
- **Barrel-only**: import from the nearest folder barrel (`index.ts`) and avoid deep imports.
  - Example: ✅ `import { cn } from "@/shared"` instead of ❌ `import { cn } from "@/shared/utils/cn"`.
- **Layer boundaries**:
  - `src/app` may import from `src/modules`, `src/shared`, `src/lib`, `src/config`.
  - `src/modules/*` may import from `src/shared`, `src/lib`, `src/config` but must not import from `src/app`.
  - `src/shared/*` must not import from `src/modules` or `src/app`.

---

## 4. Data Fetching (Axios + React Query)

### 4.1 Response Standard (Mandatory)

All API responses must follow:

```ts
type ApiResponse<T> = {
  error_code: string | null;
  data: T;
};
```

Source of truth: `src/shared/types/api.ts` (re-exported via `@/shared`).

### 4.2 Where to Put HTTP Logic

- **HTTP base** lives in `src/lib` (Axios instance) and/or `src/shared/services` (shared API base layer).
- **Feature services** live in `src/modules/[module]/services`.
- **React Query hooks** live in `src/modules/[module]/hooks` or `src/shared/hooks` when generic.

Forbidden:

- Calling `axios` directly inside React components.
- Duplicating multiple competing HTTP clients.

---

## 5. Client State (Zustand)

- Use Zustand for **cross-component client state** (auth session, UI prefs, etc.).
- Prefer local state (`useState`, `useReducer`) for state that is strictly local to one component.
- Do not put server state into Zustand; server state belongs to React Query.

---

## 6. Module Design Rules

### 6.1 Module Independence

Each module in `src/modules/[module-name]` must:

- Be self-contained: own its components/hooks/services/types/constants/utils.
- Export public API only via its `index.ts`.
- Never import internal files from another module (no cross-module deep imports).

### 6.2 Types / Constants / Utils Separation

- **Types**: in `types/` (and re-export from `types/index.ts`).
- **Constants**: in `constants/`.
- **Utils**: in `utils/`.
- Components should stay thin: no heavy logic, no large inline constants, no inline type declarations.

---

## 7. shadcn/ui Usage

shadcn/ui is the primary UI system. Components are copied into the repo and fully owned.

### 7.1 Adding Components

```bash
npx shadcn@latest add button input dialog table select
```

Components must land in `src/shared/components/ui/` (configured via `components.json`).

### 7.2 `cn()` Utility

Use `cn()` for conditional Tailwind class composition:

```tsx
import { cn } from '@/shared';

<div className={cn('px-4 py-2', isActive && 'bg-primary text-primary-foreground')} />;
```

---

## 8. Styling Rules

- Tailwind-first (utility classes).
- Keep design tokens centralized in `src/app/globals.css` (CSS variables).
- Use responsive classes (`sm`, `md`, `lg`, `xl`) and mobile-first layout.

<!-- END:nextjs-agent-rules -->
