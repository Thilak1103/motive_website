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
The single source of truth for colour, type and radii. `tailwind.config.ts`
imports it, so changing a value here changes every utility class too.
There are no hex values anywhere else in `src/`. Colours were sampled from the
app itself, not invented.

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
- `src/components/home/` and `src/components/societies/` — page sections.

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
- [ ] `src/content/home.ts` — the three testimonials are **marked placeholders
      and must not ship**. Replace with real quotes or delete the block.
- [ ] `src/content/home.ts` — confirm which societies have agreed to be listed
      before using their names in the marquee. The current list is generic.

**Before it looks finished**
- [ ] Real app screenshots. The screen recordings I worked from contain real
      student names and a face, so they can't be published as-is — a clean set
      from a demo account is needed. Until then the preview is the markup mock
      in `src/components/site/app-preview.tsx`.
- [ ] `src/app/layout.tsx` — OG image and favicon, once the wordmark is final.
- [ ] `src/content/about.ts` — the About copy is written from the brief, not
      from an interview. Rewrite it in your own voice, and add the team.

**Not yet verified**
- [ ] Rendered visual check at 375 / 768 / 1440 and a browser console check.
      `npm run build` and `tsc --noEmit` both pass clean, but the session this
      was built in couldn't launch a browser, so nothing has been looked at in
      a viewport yet. Run `npm run dev` and check the three pages.

## Conventions

- Mobile-first. Every section is built at 375px and scales up; most traffic will
  be students on phones from an Instagram link.
- Animation stays restrained — reveals and hovers. Every animated component
  honours `prefers-reduced-motion`.
- No hardcoded colours, URLs or product-name strings in components. If you need
  one, add it to `src/config/tokens.ts` or `src/config/site.ts` first.
