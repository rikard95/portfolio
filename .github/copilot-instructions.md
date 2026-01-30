# Copilot Instructions for Portfolio Project

## Project Overview
This is a portfolio website built with Angular 20.3, featuring a collection of interactive pages including a calculator, todo list, diary, and user authentication pages.

## Technology Stack
- **Framework**: Angular 20.3 (standalone components)
- **Language**: TypeScript 5.9 with strict mode enabled
- **Testing**: Jasmine & Karma
- **Build Tool**: Angular CLI
- **Styling**: CSS (component-scoped)

## Project Structure
```
src/
├── app/
│   ├── layout/          # Shared layout components (header, footer)
│   ├── pages/           # Feature pages (calculator, todo, dagbok, om-mig, login, registrera)
│   ├── shared/          # Shared/reusable components
│   ├── app.ts           # Root component
│   └── app.routes.ts    # Application routing
├── index.html
├── main.ts
└── styles.css           # Global styles
```

## Coding Conventions

### TypeScript
- Use **strict mode** (noImplicitReturns, noFallthroughCasesInSwitch, etc.)
- Use **single quotes** for strings
- Use **2 spaces** for indentation
- Enable strict Angular compiler options (strictTemplates, strictInjectionParameters)
- Prefer **standalone components** over NgModules

### Angular Patterns
- All components should be **standalone** (set `standalone: true`)
- Use **signals** for reactive state management where appropriate
- Component file naming: `component-name.ts`, `component-name.html`, `component-name.css`
- Use component selector prefix `app-` (e.g., `app-calculator`)
- Import Angular modules explicitly (CommonModule, FormsModule, etc.)

### Code Style
- Use **Prettier** for formatting with these settings:
  - printWidth: 100
  - singleQuote: true
  - Angular parser for HTML files
- Insert final newline in files
- Trim trailing whitespace

### Component Structure
- Place components in feature-specific directories under `pages/` or `shared/`
- Each component should have its own directory with:
  - TypeScript file (`*.ts`)
  - Template file (`*.html`)
  - Styles file (`*.css`)
  - Test file (`*.spec.ts`)

## Build & Development Commands
- **Start dev server**: `npm start` or `ng serve` (runs on http://localhost:4200)
- **Build**: `npm run build` or `ng build`
- **Run tests**: `npm test` or `ng test`
- **Watch mode**: `npm run watch`

## Testing Guidelines
- Write unit tests using Jasmine
- Test files should be co-located with components (`*.spec.ts`)
- Use Karma test runner for execution

## Common Patterns in This Codebase
- **LocalStorage usage**: Components may use localStorage for persistence (see calculator notes feature)
- **Swedish language**: Some components and content use Swedish (e.g., "om-mig", "dagbok", "registrera")
- **Signal-based state**: The app uses Angular signals for reactive state (e.g., `signal('text')`)
- **Router integration**: Pages are connected via Angular Router

## Security Considerations
- Be cautious with `eval()` usage (currently used in calculator component)
- Sanitize user inputs when rendering dynamic content
- Use Angular's built-in XSS protections

## Dependencies
Key dependencies include:
- @angular/core, @angular/common, @angular/router
- rxjs for reactive programming
- zone.js for Angular's change detection

## Best Practices
- Follow Angular style guide conventions
- Keep components focused and single-purpose
- Use TypeScript types explicitly
- Write tests for new features
- Maintain consistent file and folder structure
