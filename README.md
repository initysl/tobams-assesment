# Tobams Group - Frontend Intern Assessment

An implementation of the Tobams Group "Training and Development" page for the Frontend Intern
Assessment, built as a responsive, production-ready Next.js application.

**Live URL:** (https://tobams-frontend-assessment-theta.vercel.app/)

**Figma design:** [Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Stack

| Concern   | Choice                                       |
| --------- | -------------------------------------------- |
| Framework | Next.js 16.3.4, App Router                   |
| UI        | React 19.2.8                                 |
| Styling   | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Language  | TypeScript 5                                 |
| Fonts     | Nunito + Nunito Sans via `next/font/google`  |
| Images    | `next/image`                                 |
| Motion    | Framer Motion (scroll reveals only)          |

No other CSS framework, UI kit, or third-party component library is used - every component in
`components/` is written from scratch for this project.

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Project structure

```
app/
  layout.tsx     Root layout: font, metadata, header, closing CTA, footer
  page.tsx       Composes the page sections - no markup of its own
  not-found.tsx  Custom branded 404
  globals.css    Tailwind import + the @theme design tokens
components/
  layout/        SiteHeader, NavDropdown, MobileMenu, SiteFooter
  sections/      One file per page section
  ui/            Button, Container, BulletList, Reveal, icons
lib/
  content.ts     All page copy and link data, typed
public/images/   Design assets, renamed descriptively
```

`app/page.tsx` is a thin composition of section components; no section markup lives in the page file.

## Design decisions and assumptions

**Design tokens are sampled, not guessed.** Because the Figma file is not publicly accessible, the
colours were sampled pixel-by-pixel from the provided PNG exports and defined once in `app/globals.css`
under Tailwind v4's `@theme` block (`--color-plum: #571244`, `--color-coral: #ef4353`, and so on).
Components use semantic utilities like `bg-plum` rather than arbitrary hex values.

**Fonts.** The design pairs two families, both loaded via `next/font/google`: **Nunito** at semibold
for headings, **Nunito Sans** for body copy. They are exposed as the `font-heading` and `font-sans`
Tailwind tokens in `app/globals.css`, so a heading only needs `font-heading font-semibold`.

**Scroll animations.** Each section below the fold fades and rises into place once, via the shared
`components/ui/Reveal.tsx` wrapper (Framer Motion `whileInView` with `once: true`). Only `opacity` and
a full `transform` string animate, so the work stays on the GPU. The testimonial cards additionally
stagger at 60ms intervals. Two deliberate exclusions: the hero does not animate - it is above the fold,
and delaying the largest text paint to animate something already on screen trades real performance for
no benefit - and `prefers-reduced-motion` drops the translate everywhere, keeping only a short fade
rather than removing the transition entirely.

**The desktop and mobile frames disagree in three places.** Where they differ, the implementation
follows each frame at its own breakpoint:

1. _Hero heading._ Desktop reads "Training and Development"; mobile reads "Learning and Development".
   The desktop wording is used at every breakpoint, since it matches the page name and the brief.
2. _Consultation CTA band._ The two frames carry entirely different copy. Both strings are kept in
   `lib/content.ts` and each renders at the breakpoint it was drawn for.
3. _Footer "What We Do" column._ The mobile frame omits "Talent Recruitment". The desktop list is
   used at all breakpoints.

**The fourth testimonial** is clipped by the frame edge in the desktop export; its full content was
recovered from the mobile frame, where the cards stack.

**Nav dropdown and footer link targets** are placeholder routes (`/about`, `/pricing`, …). The design
is a single page, so no other routes exist; the links are real anchors so they remain keyboard-
navigable and screen-reader-correct. Because that makes the 404 reachable from nearly every header
click, `app/not-found.tsx` replaces Next's stock page with a branded one that says the route isn't
built yet and offers the way back — its shortcut list is derived from `NAV_LINKS` rather than retyped,
so it cannot drift out of sync with the nav.

**Interactivity.** The brief describes a static page, but the design contains a hamburger menu,
nav dropdown carets, and testimonial carousel arrows. Rendering these as inert decoration would leave
keyboard users with dead controls, so they are implemented for real: the mobile menu traps focus and
closes on Escape, dropdowns respond to click and Escape with `aria-expanded`, and the carousel is a
scroll-snap track that is itself focusable and arrow-key scrollable. Client components are limited to
those three plus the `Reveal` animation wrapper; every section is otherwise a server component.

**SEO** A small seo was implemented with optimized meta tags, structured data markup, and a clean XML sitemap to improve crawlability.

## Responsive behaviour

Built mobile-first and verified at the three widths named in the brief - **425px**, **768px** and
**1280px+**. Only Tailwind's `sm:`/`lg:` responsive prefixes are used; there are no custom media
queries anywhere in the codebase.

## Accessibility

- Semantic landmarks throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`.
- Every section is labelled via `aria-labelledby` pointing at its own heading; heading levels descend
  from a single `<h1>`.
- All images carry descriptive `alt` text. The hero photograph is decorative and uses `alt=""` so
  screen readers skip it rather than announcing filler.
- Every control is a real `<a>` or `<button>` with a visible `focus-visible` ring; carousel arrows and
  icon-only links have `aria-label`s and the arrows disable at each end of the track.

## Known issues

- Nav dropdown submenu items are invented groupings; the Figma frame shows the carets but not the
  expanded menu contents.

## AI disclosure

As permitted by the brief, AI tooling (Claude) was used while building this project - for scaffolding some components, and drafting this README. All output was reviewed and modified carefully.
