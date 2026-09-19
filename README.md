# Motive — marketing website

The public marketing site for Motive, a university events app. Students see
every society event in one consolidated feed instead of hunting through
Instagram stories, RSVP in-app, and see which of their friends are going.
Societies get free distribution, managed sign-ups, and real attendance data.

Launching at LSE for Welcome Week 2026.

This repo is **the marketing site only** — not the app.

---

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Node 20+.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animation | Motion (`motion/react`) — this is Framer Motion, renamed upstream |
| Components | [Aceternity UI](https://ui.aceternity.com/components), copied in and retokenised |
| Fonts | Inter Tight + Inter, self-hosted via `@fontsource-variable/*` |
| Content | Static, typed files under `src/content/` — no CMS, no backend |

## Where things live

**Design tokens → `src/config/tokens.ts`**
The single source of truth for colour, the type scale, radii, elevation and
motion. `tailwind.config.ts` imports it, so changing a value here changes every
utility class too. There are no hex values anywhere else in `src/`. The core
brand and accent hues were sampled from the app itself, not invented.

The type scale is named by role and fluid, so there are no
`text-3xl sm:text-5xl lg:text-6xl` chains in this codebase — one class covers
the whole range:

| Class | Use |
|---|---|
| `text-display-1` | Hero headline, once per page |
| `text-display-2` | `<h1>` on inner pages |
| `text-display-3` | Section `<h2>` |
| `text-display-4` | Sub-section `<h3>` |
| `text-title` | Card headings |
| `text-body-lg` | Section intros and standfirsts |
| `text-body` / `text-body-sm` | Copy |
| `text-caption` | Small print |
| `text-label` | Eyebrows and badges |

**The rendered guidelines → `/brand`**
A page in the site that renders the swatches, measured contrast pairs, the type
scale and the motion tokens live from `tokens.ts`. Point new contributors at it
rather than re-explaining the accent-carries-ink rule. Prose lives in
`src/content/brand.ts`; nothing on that page is transcribed by hand.

> Accessibility contract: `accent` is a light chartreuse, so it always carries
> `ink` text, never white. `brand` always carries `ink-inverse` or `brand-tint`.

**Copy → `src/content/`**
`home.ts`, `about.ts`, `societies.ts`, `app-preview.ts`. All typed. Components
read from these — don't write strings into a component.

**Product name, domain, social links, CTAs → `src/config/site.ts`**
Every URL and every occurrence of the product name comes from here. The name and
domain aren't final, so renaming is a single edit in this one file.

**Components**
- `src/components/ui/` — Aceternity components, copied from the live registry
  and adapted. Each file has a header comment naming its source and listing what
  was changed (colours retokenised; `@tabler/icons-react` replaced with inline
  SVG to keep the mobile bundle small).
- `src/components/site/` — shared furniture: header, footer, wordmark, CTA
  button, layout primitives, app preview, interest form.
- `src/components/home/`, `src/components/societies/`, `src/components/about/`
  — page sections.

**Two components worth knowing before you add a third**
- `<Reveal />` (`src/components/site/reveal.tsx`) — the site's *only* scroll
  animation. Everything that animates into view goes through it, which is how
  "restrained" and `prefers-reduced-motion` stay true without anyone having to
  remember. Don't hand-roll a `motion` entrance next to it.
- `<SectionHeading />` (`src/components/site/section.tsx`) — eyebrow + heading
  + standfirst, revealed as one unit. This block used to be written out by hand
  in every section.

## Notable decisions

- **Tailwind 3.4, not 4.** Tokens live in a real `tailwind.config.ts`, and the
  Aceternity components are written against v3.
- **`motion`, not `framer-motion`.** Framer Motion now ships as the `motion`
  package and the Aceternity source imports from `motion/react`. Same library.
- **Fonts from npm, not Google Fonts.** `@fontsource-variable/*` ships the woff2
  files, so there is no third-party request at runtime — worth it for students
  opening this from an Instagram link on mobile data.
- **The app preview is drawn in markup, not an image.** It weighs nothing, stays
  sharp, and picks up token changes. See the TODO below about real screenshots.
  The hero and the scroll section render the same markup at two sizes, so there
  is one source of truth for what the app looks like.
- **No usage numbers anywhere.** The stats band on the home page states facts
  about the product and the problem (a story lasts 24h, a society pays £0) and
  never a figure about traction, because there is none. Don't add one until
  there is something true to say.
- **Pages are toned in an alternating arc.** Two adjacent sections on the same
  ground read as one long section, which the first version of the home page did
  for three sections running. `<Section tone>` carries the grounds.
- **Sticky Scroll Reveal was swapped for Tracing Beam** on "how it works".
  Sticky Scroll Reveal nests its own scroll container, which fights the page
  scroll on a phone.
- **The primary CTA is early access, not a download.** There's no public build
  yet. When there is, set `stores.appStore` in `src/config/site.ts` and point
  `cta.primary` at it with the label "Download the App" — nothing else changes.

## Open TODOs

Each of these is also a `// TODO:` in the code.

**Blocking launch**
- [ ] `src/components/site/interest-form.tsx` — **the forms don't submit
      anywhere.** Both the student early-access form and the society sign-up
      set a success state locally and send nothing. Point `handleSubmit` at a
      real endpoint (a form service, or a route handler under `src/app/api`).
- [ ] `src/config/site.ts` — real product name, domain, contact inbox, and the
      real Instagram / TikTok / LinkedIn handles. All are placeholders.
- [ ] No testimonials anywhere yet. The block was removed rather than shipped
      as marked-empty slots. Add one back only when there are real quotes.
- [ ] `src/content/home.ts` — confirm which societies have agreed to be listed
      before using their names in the marquee. The current list is generic, and
      the page no longer carries a disclaimer saying so, so this one matters.

**Before it looks finished**
- [ ] Real app screenshots. The screen recordings I worked from contain real
      student names and a face, so they can't be published as-is — a clean set
      from a demo account is needed. Until then the preview is the markup mock
      in `src/components/site/app-preview.tsx`.
- [ ] `src/app/layout.tsx` — OG image and favicon, once the wordmark is final.
- [ ] `src/content/about.ts` — the About copy is written from the brief, not
      from an interview. Rewrite it in your own voice, and add the team; the
      team block on `/about` is a marked-empty slot until you do.
- [ ] `src/content/societies.ts` — the "free, permanently" claim on `/societies`
      is a commitment. Agree the long-term model before launch, and change that
      section first if societies will ever be charged.

**Verified**
- `npm install`, `npm run build`, `npx tsc --noEmit` and `npm run lint` all run
  clean (Node 22.20.0, npm 10.9.3, Next 16.3.5).
- `npm run dev` serves all six routes at 200 with no server errors:
  `/`, `/how-it-works`, `/societies`, `/about`, `/brand`, `/_not-found`.
- The home page was inspected rendered at 1440.

**Still to check by eye**
- [ ] All five pages at 375 / 768 / 1440: no horizontal overflow, sticky header
      present after scrolling with the CTA reachable without opening the mobile
      menu. Open `http://localhost:3000` and resize — this is a two-minute job
      in a real browser and is the one thing a build cannot tell you.

> **A build is not optional on this project.** The RSC bug fixed in
> `fix/rsc-reveal-delay` passed `tsc --noEmit` and only failed at prerender.
> `npm run build` is the cheapest check that catches that class of error.

## Conventions

- Mobile-first. Every section is built at 375px and scales up; most traffic will
  be students on phones from an Instagram link.
- Animation stays restrained — reveals and hovers. Every animated component
  honours `prefers-reduced-motion`.
- No hardcoded colours, URLs or product-name strings in components. If you need
  one, add it to `src/config/tokens.ts` or `src/config/site.ts` first.
