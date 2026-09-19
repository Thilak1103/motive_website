# Motive — marketing site

Public marketing site for Motive, a university events app. Students get every
society's events in one feed instead of hunting through Instagram stories, RSVP
in-app, and see which friends are going. Societies get free distribution,
managed sign-ups, and real attendance data. Two-sided marketplace, launching at
LSE for Welcome Week 2026.

This repo is the marketing site only — not the app. It will be handed to
teammates to extend, so code clarity matters as much as the visuals.

## Hard rules

- **No hardcoded colours in components.** Every colour lives in
  `src/config/tokens.ts`, which `tailwind.config.ts` imports. Use utility
  classes (`bg-brand`, `text-accent`). Where a raw JS colour string is genuinely
  needed (SVG gradients, animated inline styles), import `colors` from that file.
- **Type comes from the named scale, not from picking a size.** `text-display-1`
  … `text-label`, defined in `tokens.ts` and chosen by role. The display steps
  are fluid, so a responsive chain like `text-3xl sm:text-5xl` is a regression —
  one class already covers 375px to desktop.
- **One scroll animation.** Everything that animates into view goes through
  `<Reveal />`. Don't add a second entrance pattern beside it.
- **No hardcoded URLs or product-name strings in components.** All of it comes
  from `src/config/site.ts`. The product name and domain are not final —
  renaming must stay a one-file edit.
- **No copy written into components.** Page text lives in typed files under
  `src/content/`.
- **`accent` always carries `ink` text, never white.** It's a light chartreuse;
  white on it fails contrast. `brand` carries `ink-inverse` or `brand-tint`.
- **Mobile-first.** Build at 375px, then scale up. Most traffic will be students
  on phones opening an Instagram link.
- **Restrained animation.** Reveals and hovers. Every animated component honours
  `prefers-reduced-motion`.
- Every unresolved item is a `// TODO:` in code *and* a bullet in README.md.

## Where things live

| What | Where |
|---|---|
| Design tokens (colour, type, radii) | `src/config/tokens.ts` |
| Name, domain, socials, CTAs, nav | `src/config/site.ts` |
| Page copy | `src/content/{home,about,societies,brand,app-preview}.ts` |
| Aceternity components (adapted) | `src/components/ui/` |
| Shared furniture (header, footer, buttons) | `src/components/site/` |
| Page sections | `src/components/{home,societies,about}/` |
| Pages | `src/app/{page,about/page,societies/page,brand/page}.tsx` |
| Rendered brand guidelines | `/brand` — reads `tokens.ts` live |

## Stack notes that will trip you up

- **Tailwind 3.4, not 4.** Deliberate: tokens live in a real
  `tailwind.config.ts`, and the Aceternity components are written against v3.
- **`motion`, not `framer-motion`.** Framer Motion ships as the `motion` package
  now; imports are `from "motion/react"`. Same library, current name.
- **Fonts come from `@fontsource-variable/*` on npm**, not `next/font/google` —
  self-hosted woff2, no third-party request at runtime. Inter Tight for
  headings (`font-display`), Inter for body (`font-sans`).
- **Aceternity components were copied from the live registry and adapted**, not
  written from memory. Each file in `src/components/ui/` has a header comment
  naming its source and listing what changed. If you add another, fetch its
  current code from ui.aceternity.com rather than recalling it, and retokenise
  the colours.

## Decisions worth not re-litigating

- **Tracing Beam, not Sticky Scroll Reveal**, for "how it works". Sticky Scroll
  Reveal nests its own scroll container, which fights page scroll on a phone.
- **The app preview is drawn in markup** (`src/components/site/app-preview.tsx`),
  not a screenshot. The source screen recordings contain real student names and
  a face, so they can't be published. The mock weighs nothing and picks up token
  changes for free. Replace it only with clean screenshots from a demo account.
- **Testimonials ship as visibly-marked placeholders** in dashed boxes, and the
  society marquee uses generic names. Listing real societies would imply a
  sign-up that hasn't happened. Don't quietly make either look real.
- **The primary CTA is early access, not a download.** There's no public build.
  When there is: set `stores.appStore` in `src/config/site.ts` and point
  `cta.primary` at it with the label "Download the App". Nothing else changes.
- **No traction numbers.** The home-page stats band states facts about the
  product and the problem, never usage. There are no users yet; inventing a
  figure is the one mistake this site can't recover from.
- **`/brand` is generated, not written.** Swatches, contrast ratios, the type
  scale and motion tokens are read from `tokens.ts` so they can't go stale.
  Add prose to `src/content/brand.ts`; never transcribe a value onto that page.
- **Sections alternate tone.** `<Section tone>` carries the ground, and two
  adjacent sections must not share one — that flattened the first home page.

## Bugs already fixed — don't reintroduce

- **Text Generate Effect**: the upstream Aceternity version drives its reveal
  through a scoped `animate("span", ...)` selector, which silently never applies
  under React 19 + motion 13 — the `<h1>` renders in the DOM at `opacity: 0`.
  Build passes, types pass, headline is invisible. Ours uses per-word
  `initial`/`animate` props instead. Don't "simplify" it back.
- **The header must be `fixed`, not `absolute` wrapping a `sticky` child.** A
  sticky element only sticks inside its own positioned ancestor, so the nested
  version scrolled away on every page.
- **Header CTAs must be root-relative** (`/#early-access`), not bare fragments.
  The header renders on every page; that anchor only exists on the home page.

None of these show up in `npm run build` or `tsc`. Check visually in a browser
at 375 / 768 / 1440 after touching the header, the hero, or any `ui/` component.

## Commands

```bash
npm install
npm run dev      # localhost:3000
npm run build
npm run lint
```

## Git

Work on a branch, conventional-commit messages, commit in logical chunks rather
than one large commit. Don't force push. Don't rewrite `main` history.

@AGENTS.md
