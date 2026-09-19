/**
 * Single source of truth for the design tokens.
 *
 * The core hues were sampled from the Motive app itself (screen recording,
 * Sept 2026) rather than invented — `brand.DEFAULT` and `accent.DEFAULT` are
 * the app's own values and must not drift. Everything else in this file is a
 * system built around them: supporting steps, a type scale, elevation, and
 * motion.
 *
 * `tailwind.config.ts` imports this file, so changing a value here changes it
 * everywhere — utility classes included.
 *
 * Components must never write a hex value inline. Use a Tailwind token
 * (`bg-brand`, `text-accent`, ...) or, where a raw string is unavoidable
 * (SVG gradients, inline `style` for animated colour), import `colors` below.
 */

/* -------------------------------------------------------------------------- */
/* Colour                                                                      */
/* -------------------------------------------------------------------------- */

export const colors = {
  /** Deep indigo-violet. The app's header and the site's dark ground. */
  brand: {
    DEFAULT: "#281174",
    /** Lighter violet used in the app for avatars and active states. */
    bright: "#421EC3",
    /** Lavender used for outlines and secondary text on top of `brand`. */
    tint: "#CBB5FF",
    /** Darker step, for gradients and depth on the dark ground. */
    deep: "#1B0B52",
    /**
     * One step up from `brand` — the "card on a dark section" surface. Without
     * it, every raised element on the brand ground had to be a translucent
     * white, which greys out and loses the violet.
     */
    raised: "#32188C",
  },

  /** Chartreuse. Carries every primary CTA and "you're in" style badge. */
  accent: {
    DEFAULT: "#BCF136",
    deep: "#A3D625",
    soft: "#E8FBB4",
    /** Very low-chroma wash, for accent-tinted panels on the light ground. */
    wash: "#F4FDDC",
  },

  /** Warm off-white page background. Deliberately not grey. */
  bone: {
    DEFAULT: "#EFEAE3",
    deep: "#E1DCD5",
    /** A half-step lighter than DEFAULT, to separate stacked light sections. */
    light: "#F6F3EE",
  },

  /** Card / raised surface. */
  surface: {
    DEFAULT: "#FDFDFD",
    /** Hairline outline for surfaces. Kept as a colour so it can't drift. */
    line: "#DAD3C9",
  },

  /** Warm near-black: body copy, headings, and the hairline card outlines. */
  ink: {
    DEFAULT: "#14111B",
    muted: "#5C564F",
    rule: "#2A251E",
    inverse: "#FDFDFD",
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Typography                                                                  */
/* -------------------------------------------------------------------------- */

export const fonts = {
  /** Headings. Tighter and more confident at large sizes. */
  display: "Inter Tight Variable",
  /** Body copy and UI. */
  body: "Inter Variable",
} as const;

/**
 * The type scale, as Tailwind `fontSize` entries:
 * `[size, { lineHeight, letterSpacing, fontWeight }]`.
 *
 * Display sizes are fluid (`clamp`) so a headline scales continuously between
 * 375px and desktop instead of jumping at each breakpoint. That is why you
 * will not see `text-3xl sm:text-5xl lg:text-6xl` chains in this codebase —
 * one class, `text-display-1`, does the whole range.
 *
 * Pick by role, not by size:
 *   display-1  hero headline, once per page
 *   display-2  page <h1> on inner pages, closing-band headline
 *   display-3  section <h2>
 *   display-4  sub-section <h3>
 *   title      card headings
 *   body-lg    section intros and standfirsts
 *   body       default copy
 *   body-sm    card copy, captions, form labels
 *   label      eyebrows and badges (uppercase, letterspaced)
 */
type FontSize = [
  string,
  { lineHeight: string; letterSpacing?: string; fontWeight?: string },
];

export const fontSizes: Record<string, FontSize> = {
  "display-1": [
    "clamp(2.5rem, 1.55rem + 4.05vw, 4.75rem)",
    { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "800" },
  ],
  "display-2": [
    "clamp(2.125rem, 1.62rem + 2.15vw, 3.5rem)",
    { lineHeight: "1.05", letterSpacing: "-0.032em", fontWeight: "800" },
  ],
  "display-3": [
    "clamp(1.75rem, 1.41rem + 1.45vw, 2.625rem)",
    { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "800" },
  ],
  "display-4": [
    "clamp(1.375rem, 1.24rem + 0.58vw, 1.75rem)",
    { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "800" },
  ],
  title: [
    "1.0625rem",
    { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "700" },
  ],
  "body-lg": [
    "clamp(1.0625rem, 1.02rem + 0.19vw, 1.1875rem)",
    { lineHeight: "1.6", letterSpacing: "-0.005em" },
  ],
  body: ["1rem", { lineHeight: "1.6" }],
  "body-sm": ["0.875rem", { lineHeight: "1.6" }],
  caption: ["0.8125rem", { lineHeight: "1.5" }],
  label: [
    "0.6875rem",
    { lineHeight: "1", letterSpacing: "0.14em", fontWeight: "700" },
  ],
};

/* -------------------------------------------------------------------------- */
/* Shape and elevation                                                         */
/* -------------------------------------------------------------------------- */

export const radii = {
  /** Cards, panels, media. Matches the app's card corner. */
  card: "1.25rem",
  /** Nested inside a card — badges, inner tiles. */
  inner: "0.75rem",
  /** The device frame around the app preview. */
  frame: "2.25rem",
  pill: "9999px",
} as const;

/**
 * Elevation is deliberately shallow. The app separates surfaces with a hairline
 * outline, not a drop shadow, so the site does the same — these exist for the
 * few places that genuinely lift off the page (the condensed header, the phone
 * frame, the open mobile menu).
 */
export const shadows = {
  /** Condensed header pill, hovered cards. */
  raised: "0 1px 2px rgba(20, 17, 27, 0.04), 0 8px 24px -12px rgba(20, 17, 27, 0.18)",
  /** Mobile menu, the phone frame. */
  lifted: "0 2px 4px rgba(20, 17, 27, 0.05), 0 24px 56px -24px rgba(20, 17, 27, 0.35)",
  /** On the brand ground a black shadow is invisible — this one is violet. */
  onBrand: "0 24px 64px -28px rgba(27, 11, 82, 0.9)",
} as const;

/* -------------------------------------------------------------------------- */
/* Motion                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Brand motion in one place, so "restrained" is a value rather than a habit.
 *
 * Rules: reveals travel a short distance and only once; hovers are quick;
 * nothing loops in the reader's peripheral vision except the marquee, which is
 * slow enough to ignore. Every animated component honours
 * `prefers-reduced-motion` — see `globals.css` and `useReveal`.
 */
export const motionTokens = {
  duration: {
    /** Hover and focus state changes. */
    fast: 0.18,
    /** The default for a reveal. */
    base: 0.5,
    /** Hero entrance only. */
    slow: 0.8,
  },
  /** Gentle deceleration. Nothing on this site overshoots or bounces. */
  ease: [0.22, 1, 0.36, 1] as const,
  /** Vertical travel for a reveal, in px. Small on purpose. */
  revealDistance: 16,
  /** Delay between siblings in a staggered group, in seconds. */
  stagger: 0.07,
} as const;

/* -------------------------------------------------------------------------- */
/* Contracts                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * ACCESSIBILITY CONTRACT
 *
 * `accent` is a light colour: it always carries `ink` text, never white.
 *   accent on ink      14.0:1
 * `brand` always carries `ink.inverse`, `brand.tint` or `accent` text.
 *   brand-tint on brand  8.2:1
 *   accent on brand     11.1:1
 *   ink-muted on bone    6.0:1
 *
 * Any new pairing must clear 4.5:1 for body copy and 3:1 for large display
 * text before it ships. The /brand page renders these pairings live.
 */
