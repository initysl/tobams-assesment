# Tobams Group — Frontend Intern Assessment

An implementation of the Tobams Group "Training and Development" page for the Frontend Intern
Assessment, built as a responsive, production-ready Next.js application.

**Live URL:** _<!-- TODO: paste the Vercel deployment URL here -->_

**Figma design:** [Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Stack

| Concern   | Choice                                       |
| --------- | -------------------------------------------- |
| Framework | Next.js 16.3.4, App Router                   |
| UI        | React 19.2.8                                 |
| Styling   | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Language  | TypeScript 5                                 |
| Fonts     | `next/font/google`                           |
| Images    | `next/image`                                 |

No other CSS framework, UI kit, or third-party component library is used — every component in
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
  page.tsx       Composes the page sections — no markup of its own
  globals.css    Tailwind import + the @theme design tokens
components/
  layout/        SiteHeader, NavDropdown, MobileMenu, SiteFooter
  sections/      One file per page section
  ui/            Button, Container, BulletList, icons
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

**Font substitution.** **Nunito Sans** is loaded via `next/font/google`.

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
navigable and screen-reader-correct.

**Interactivity.** The brief describes a static page, but the design contains a hamburger menu,
nav dropdown carets, and testimonial carousel arrows. Rendering these as inert decoration would leave
keyboard users with dead controls, so they are implemented for real: the mobile menu traps focus and
closes on Escape, dropdowns respond to click and Escape with `aria-expanded`, and the carousel is a
scroll-snap track that is itself focusable and arrow-key scrollable. These are the only client
components; everything else is a server component.

## Responsive behaviour

Built mobile-first and verified at the three widths named in the brief — **425px**, **768px** and
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

- The live URL above is a placeholder until the Vercel deployment is created.
- The typeface is a visual match rather than the exact Figma font — see "Font substitution".
- Nav dropdown submenu items are invented groupings; the Figma frame shows the carets but not the
  expanded menu contents.

## AI disclosure

As permitted by the brief, AI tooling (Claude) was used while building this project - for scaffolding some components, and drafting this README. All output was reviewed and modified carefully.
