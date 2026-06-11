# AGENTS.md — HitHats Landing Page

## Stack & Commands
- **Runtime**: React 19 + Vite 8 (ESM)
- **Animations**: GSAP 3.15 (ScrollTrigger, SplitText) + Lenis 1.0 (smooth scroll)
- **Styling**: Vanilla CSS with custom properties (`App.css`), mobile-first, dark theme
- **Fonts**: Bebas Neue (display), Inter (body) — loaded via `@font-face` in `index.html`
- **Package manager**: `pnpm` (lockfile present)

```bash
pnpm dev      # Start dev server (Vite HMR)
pnpm build    # Production build → dist/
pnpm lint     # ESLint (flat config, ignores dist/)
pnpm preview  # Preview production build
```

## Architecture
- **Entry**: `src/main.jsx` → `src/App.jsx` (orchestrates all sections)
- **Sections** (in order): Nav → Hero → Marquee → Products → Statement → Philosophy → Testimonials → Gallery → Process → CTA → Footer
- **All animation logic lives in `App.jsx`** `useEffect` — GSAP timelines, ScrollTriggers, Lenis init/cleanup
- **Components** (`src/components/*.jsx`) are mostly presentational; they render markup + classes
- **No TypeScript**, no test suite, no state management lib

## Key Quirks
1. **GSAP + Lenis integration**: `gsap.ticker.add((time) => lenis.raf(time * 1000))` — Lenis drives scroll, GSAP reads it
2. **Mobile breakpoints**: 768px (tablet), 480px (phone) — check `App.jsx` for `isMobile` logic
3. **Reduced motion**: Respected via `prefers-reduced-motion` (WCAG AA per PRODUCT.md)
4. **Image optimization**: None configured — images served as-is from `public/` or imported
5. **Font loading**: `index.html` preloads Bebas Neue + Inter via `<link rel="preload">`
6. **No routing** — single page, anchor links in Nav scroll to sections

## Development Notes
- **ESLint flat config** (`eslint.config.js`): extends `js.configs.recommended`, `react-hooks`, `react-refresh`
- **Vite config** minimal: only `@vitejs/plugin-react`
- **Build artifacts**: `dist/` (gitignored), `node_modules/` (gitignored)
- **Lint before build**: `pnpm lint` → `pnpm build` (no typecheck step)

## PRODUCT.md Constraints (enforced in code)
- Dark default (`--bg: #080808`), accent `#E8330A`
- Spanish copy, "No Pidas Permiso" voice
- Anti-patterns: no glassmorphism, no gradient text, no template grids, no bounce easing
- Accessibility: WCAG AA, keyboard-navigable, alt text, reduced motion

## File Map (high-signal)
```
src/
├── main.jsx              # React root
├── App.jsx               # All GSAP/ScrollTrigger/Lenis logic + section composition
├── App.css               # All styles (1000+ lines, custom properties, mobile-first)
├── components/
│   ├── Nav.jsx           # Fixed nav + monolog-style overlay menu
│   ├── Hero.jsx          # Hero with SplitText char animation
│   ├── Marquee.jsx       # Dual-direction marquee (CSS animation)
│   ├── Products.jsx      # 2-col product grid (gorras/sacos)
│   ├── Statement.jsx     # Big type on accent background
│   ├── Philosophy.jsx    # Accordion (CSS-only height transition)
│   ├── Testimonials.jsx  # Carousel (JS interval + CSS fade)
│   ├── Gallery.jsx       # 3-col reverse-scroll (pinned + GSAP scrub)
│   ├── Process.jsx       # Sticky image + scroll-driven steps (IntersectionObserver)
│   ├── Cta.jsx           # Kinetic text + buttons
│   └── Footer.jsx        # Links + email + legal
public/
├── index.html            # Font preloads, viewport, meta
└── icons.svg             # Sprite sheet
```

## Gotchas for Agents
- **Don't add TypeScript** — project intentionally uses plain JSX
- **Don't add tests** — none configured, no test runner
- **Don't split `App.css`** — single file is intentional for cascade control
- **GSAP animations are imperative** — attached to DOM nodes via class selectors, not React refs
- **Lenis must be destroyed** on unmount (`App.jsx:159-162`) — cleanup prevents memory leaks
- **Mobile vs desktop animation params differ** — search `isMobile` in `App.jsx`
- **Images referenced by class** (e.g., `.hero-img`, `.product-card img`) — changing markup breaks animations