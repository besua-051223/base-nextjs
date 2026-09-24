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
- Replacing shadcn/ui with another UI library.
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

### 6.2 Public API Example

```ts
// src/modules/dashboard/index.ts

// Components
export { DashboardPage, StatisticCards } from '@/modules/dashboard/components';

// Hooks
export { useDashboardFilters } from '@/modules/dashboard/hooks';

// Services (pure business logic)
export { dashboardService } from '@/modules/dashboard/services';

// Types
export type { DashboardData, ReportItem, StatisticCard } from '@/modules/dashboard/types';

// Constants
export { DASHBOARD_COLORS } from '@/modules/dashboard/constants';
```

---

## 7. Components, Types, Utils, Constants

### 7.1 Component Files

For any React component (module or shared):

- One file per component: `components/[component-name].tsx`.
- Component files must contain **only**:
  - Imports.
  - The component function.
  - JSX and minimal UI wiring (handlers calling out to utilities/services).

**Do not** define:

- Interfaces/types inline in component files.
- Static constants (like options arrays, status maps) inline.
- Heavy helper/utility functions inline.

### 7.2 Types

- All interfaces/types (including Props) belong in the module’s `types/index.ts` or in `src/shared/types` if reused globally.
- Components must import types via `import type { X } from "@/modules/module/types";`.
- No `any` unless absolutely necessary (and then documented).

### 7.3 Utils

- Any non-trivial logic (mapping, formatting, calculations, data transforms) goes into `utils/index.ts`.
- Components call these utils instead of re-implementing logic inline.

### 7.4 Constants

- Static values (status maps, color maps, dropdown options, route keys) go into `constants/index.ts`.
- Route paths that are shared across modules must live in `src/shared/constants` (e.g. a routes constant).
- Use `UPPER_SNAKE_CASE` or descriptive camelCase for exported constants.
- Page-specific copy (titles, subtitles, descriptive text) that is used **only in one component** may be kept inline in that component instead of a constant.
- Only promote text to `constants/` when it is reused in ≥ 2 places, or when it represents product copy/config that should be centrally managed.
- Numbers and strings used for comparison (status, role, filter sentinel, HTTP code, enum-like values) **must** be named constants so they can be reused and maintained in one place. Do not compare against raw literals (`=== 1`, `=== 'all'`).
- Do not write union types like `1 | 2 | 3` or `'1' | '2'` by hand. Define a `as const` object, then derive the type with `typeof` / `keyof`:

```ts
export const ROLE = {
  ROOT: 1,
  ADMIN: 2,
  USER: 3,
} as const;

export type Role = (typeof ROLE)[keyof typeof ROLE];
```

---

## 8. shadcn/ui Usage

shadcn/ui is the primary UI system. Components are copied into the repo and fully owned.

### 8.1 Adding Components

```bash
npx shadcn@latest add button input dialog table select
```

Components must land in `src/shared/components/ui/` (configured via `components.json`).

### 8.2 Alias Map (`components.json`)

| Alias                    | Resolves to              |
| ------------------------ | ------------------------ |
| `@/shared/components/ui` | shadcn/ui primitives     |
| `@/shared/components`    | Shared custom components |
| `@/shared/hooks`         | Shared hooks             |
| `@/shared/utils`         | Shared utils (incl. `cn`) |
| `@/lib`                  | Infra glue               |

### 8.3 `cn()` Utility

Use `cn()` for conditional Tailwind class composition:

```tsx
import { cn } from '@/shared';

<div className={cn('px-4 py-2', isActive && 'bg-primary text-primary-foreground')} />;
```

### 8.4 Using in Modules

Import shadcn/ui and shared components via the `@/shared` barrel (barrel-only rule):

```tsx
import { Button, Input } from '@/shared';
```

Do **not** deep-import primitives (e.g. `@/shared/components/ui/button`).

### 8.5 Creating Shared Composite Components

When a composition of shadcn primitives is reused across ≥ 2 modules, extract it to `src/shared/components/`:

```txt
src/shared/components/
├── ui/                  # Raw shadcn components (auto-generated, minimal edits)
│   ├── button.tsx
│   └── input.tsx
└── ConfirmDialog/       # Composite shared component
    └── index.tsx
```

Export from `src/shared/components/index.ts`:

```ts
export { ConfirmDialog } from '@/shared/components/ConfirmDialog';
```

### 8.6 Style Overrides

- Prefer editing the component file in `ui/` directly (they are yours to own).
- Global token overrides go in `src/app/globals.css` via CSS variables:

```css
:root {
  --primary: oklch(0.205 0 0);
  --radius: 0.625rem;
}
```

---

## 9. Styling Rules

- **Tailwind-first**:
  - Use Tailwind classes for layout, spacing, typography, colors, radii, etc.
  - Add reusable colors/fonts in `src/app/globals.css` (`@theme` / CSS variables) and reference them via class names (`bg-primary`, `text-muted-foreground`).
- **Colors must be CSS tokens**:
  - Declare colors as CSS variables in `src/app/globals.css` (`:root` + `@theme inline` `--color-*`).
  - Use semantic token classes (`bg-card`, `text-foreground`, `text-primary`, `border-border`). Do not use raw hex (`bg-[#003d7a]`, `text-[#0f2744]`) or default Tailwind palettes (`slate-*`, `gray-*`, `blue-*`, `red-*`, …) in app/module code.
  - Exception: `src/shared/components/ui/` (shadcn primitives) may keep generated classes.
- **Spacing / padding — Tailwind scale, no arbitrary values**:
  - Do not use arbitrary spacing/padding: `p-[16px]`, `gap-[8px]`, `m-[12px]`.
  - Convert pixels to the Tailwind spacing scale by dividing by 4: `16px` → `p-4`, `8px` → `gap-2`, `12px` → `m-3`, `2px` → `gap-0.5`.
  - Viewport / percentage / calc values that are not spacing (`max-h-[70vh]`, `w-[92%]`) are allowed when the scale cannot express them.
- **Inline styles**:
  - Only for truly dynamic values (e.g. width based on percentage, colors from data).
  - Do not use inline styles for fixed layout or colors that Tailwind already supports.
- Ensure mobile-first responsive design (`sm`, `md`, `lg`, `xl`).

<!-- END:nextjs-agent-rules -->
