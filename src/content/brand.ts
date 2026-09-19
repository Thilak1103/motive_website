/**
 * Copy for /brand — the living brand guidelines.
 *
 * The page renders colour swatches, the type scale and the motion tokens from
 * `src/config/tokens.ts` directly, so it cannot drift out of date the way a PDF
 * does. Change a token and this page changes with it. Only the prose lives
 * here.
 *
 * This exists because the repo gets handed to teammates: it is faster to point
 * someone at a page than to explain the accent-carries-ink rule again.
 */

import { siteConfig } from "@/config/site";

/**
 * A measured foreground/background pairing. `fails` is declared on the type
 * rather than only on the objects that set it — without it, TypeScript infers
 * a union where the passing pairs have no `fails` property at all, and the
 * page can't read it.
 */
export type ContrastPair = {
  fg: string;
  bg: string;
  ratio: string;
  label: string;
  fails?: boolean;
};

export const brand = {
  eyebrow: "Brand",
  headline: "How to build things that look like us.",
  standfirst: `Colour, type, motion and voice for ${siteConfig.nameInline}. Every value on this page is read live from the design tokens — if it renders here, it is what ships.`,

  /** Positioning first, mechanics second — the Herman Miller / Starbucks order. */
  positioning: {
    eyebrow: "What we are",
    headline: "A timetable, not a feed you scroll.",
    body: [
      "Instagram is chaos on purpose: infinite, algorithmic, and gone in a day. We are the opposite of that, and the design should say so before the copy does.",
      "Everything is ordered by time. Everything has an edge you can see. Nothing moves unless the movement means something. If a design decision makes the product feel more like an endless feed and less like a plan for your week, it's the wrong one.",
    ],
  },

  logo: {
    eyebrow: "The mark",
    headline: "Three bars and a dot.",
    body: "Stacked rows of decreasing length — a feed — with the top row marked in chartreuse. It carries the product's one idea and stays legible down to 16px.",
    dos: [
      "Keep the mark on the brand indigo, in both light and dark contexts.",
      "Give it clear space of at least the height of the top bar on every side.",
      "Use the mark alone below 24px; use mark + wordmark everywhere else.",
    ],
    donts: [
      "Don't recolour the badge to match a background — outline it instead.",
      "Don't stretch, rotate, or add a shadow or outline to the glyph.",
      "Don't set the wordmark in anything but Inter Tight ExtraBold.",
    ],
  },

  colour: {
    eyebrow: "Colour",
    headline: "Two colours do the work.",
    body: "Indigo is the ground and the authority. Chartreuse is the single action colour — it means 'this is the thing to press' or 'you're in', and it loses that meaning the moment it becomes decoration. Warm off-white, never grey, everywhere else.",
    /** Rendered as live swatches by the page. */
    roles: [
      {
        token: "brand",
        name: "Brand indigo",
        use: "Dark grounds, the mark, the header on the hero.",
      },
      {
        token: "accent",
        name: "Accent chartreuse",
        use: "Primary CTAs and confirmed states. One per screen region.",
      },
      {
        token: "bone",
        name: "Bone",
        use: "The default page ground. Warm, not grey.",
      },
      {
        token: "surface",
        name: "Surface",
        use: "Cards and raised panels on the light ground.",
      },
      {
        token: "ink",
        name: "Ink",
        use: "All body copy, headings and hairline rules.",
      },
    ],
  },

  /** The non-negotiable. Stated as a rule, with the measured ratios beside it. */
  contrast: {
    eyebrow: "Contrast",
    headline: "Accent carries ink. Never white.",
    body: "Chartreuse is a light colour. White text on it fails at every size, and it is the single easiest mistake to make in this palette. Brand indigo carries white, lavender or chartreuse. Every pairing below is measured, and anything new has to clear 4.5:1 for body copy and 3:1 for large display text before it ships.",
    pairs: [
      { fg: "ink", bg: "accent", ratio: "14.0:1", label: "Ink on accent" },
      { fg: "accent", bg: "brand", ratio: "11.1:1", label: "Accent on brand" },
      { fg: "brand-tint", bg: "brand", ratio: "8.2:1", label: "Lavender on brand" },
      { fg: "ink-muted", bg: "bone", ratio: "6.0:1", label: "Muted ink on bone" },
      {
        fg: "surface",
        bg: "accent",
        ratio: "1.1:1",
        label: "White on accent",
        fails: true,
      },
    ] as ContrastPair[],
  },

  type: {
    eyebrow: "Type",
    headline: "Inter Tight for headlines. Inter for everything else.",
    body: "Two variable faces, self-hosted. Display sizes are fluid — they scale continuously from 375px up rather than jumping at breakpoints, which is why you won't find a `text-3xl sm:text-5xl` chain anywhere in this codebase. Pick a step by its role, not by how big it looks.",
  },

  motion: {
    eyebrow: "Motion",
    headline: "Reveals and hovers. That's the whole vocabulary.",
    body: "Things fade up a short distance as they enter, once. Hovers are quick and small. Nothing loops in the corner of your eye except the society marquee, which is slow enough to ignore. Every animation honours prefers-reduced-motion, and every animated component on this site goes through one shared Reveal wrapper so this stays true by construction rather than by memory.",
  },

  voice: {
    eyebrow: "Voice",
    headline: "Say the true, specific thing.",
    body: "We write the way a student would describe the problem to a friend — plain, concrete, a bit dry. Specific beats impressive. No growth-marketing verbs, no exclamation marks, no claims we can't stand behind.",
    examples: [
      {
        good: "It's on a story that disappeared at 4am.",
        bad: "Never miss out on campus happenings again!",
        why: "The specific version is the one people recognise.",
      },
      {
        good: "No Google Form. No email chain. No spreadsheet.",
        bad: "Streamlined, frictionless event management.",
        why: "Name the actual thing being removed.",
      },
      {
        good: "We haven't launched, so nobody has used this yet.",
        bad: "Loved by students across the UK.",
        why: "We have no users. Saying otherwise is the one unrecoverable mistake.",
      },
    ],
  },

  /** The rules that are enforced in code, pointed at the files that enforce them. */
  rules: {
    eyebrow: "In the codebase",
    headline: "Four rules, and where they live.",
    items: [
      {
        rule: "No hex values in components",
        where: "src/config/tokens.ts",
        detail:
          "Every colour is a token and every token is a Tailwind utility. Where a raw string is unavoidable — SVG gradients, animated inline styles — import `colors` from the tokens file.",
      },
      {
        rule: "No product names or URLs in components",
        where: "src/config/site.ts",
        detail:
          "The name and domain aren't final. Renaming has to stay a one-file edit.",
      },
      {
        rule: "No copy in components",
        where: "src/content/",
        detail:
          "Page text lives in typed content files so it can be edited without reading JSX.",
      },
      {
        rule: "One reveal animation",
        where: "src/components/site/reveal.tsx",
        detail:
          "Everything that animates into view goes through it, so 'restrained' is enforced by a file rather than by discipline.",
      },
    ],
  },
};
