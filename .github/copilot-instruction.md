---
name: Project Coding Standards
description: Core rules and tech stack context for this repository
globs: "**/*.{js,jsx}"
---

# Project Context
* **App Type:** Property Management
* **Target Audience:** Internal land owner and renters
* **Core Goal:** Fast, accessible, and easy to use

# Tech Stack & Runtime
* **Frontend:** React 19, Next.js 16 (App Router)
* **State & Data:** None (for global UI state)
* **Styling:** Tailwind CSS v4
* **Testing:** None, Testing Library

# Architecture Rules
* **Directory Structure:** Follow Next.js App Router rules (`app/` directory).
* **Component Splitting:** Keep page components thin. Extract UI components to `components/ui/`.
* **Data Fetching:** Do not use inline `fetch`. Encapsulate all API calls in custom hooks inside `hooks/queries/`.
* **State Location:** Prefer localized state (`useState`). Use Zustand only for multi-page flows.

# Coding Guidelines
* **Component Type:** Write functional components with explicit `React.FC` or parameter typing.
* **Tailwind Standards:** Order classes logically: layout -> spacing -> sizing -> borders -> colors.
* **Semicolons:** Explicitly include trailing semicolons for all declarations.

# Testing Standards
* **Test Location:** Co-locate tests with components using the format `ComponentName.test.tsx`.
* **Mocking:** Mock all network requests using MSW (Mock Service Worker).
* **Testing Philosophy:** Test behavior and accessibility, not internal component implementation details.

# What to Avoid (Anti-Patterns)
* **No Barrel Files:** Avoid `index.ts` files for re-exporting modules to prevent circular dependencies.
* **No Inline Styles:** Do not use the `style={{}}` attribute unless computing dynamic values.

# Response Rules
* **Conciseness:** Keep code blocks concise. Provide only the modified sections unless requested otherwise.
* **Comments:** Do not add explanatory comments inside the code blocks unless the logic is complex.
* **Follow-up:** Always ask for schema clarifications before writing database-adjacent logic.
