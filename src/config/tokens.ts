/**
 * Single source of truth for the design tokens.
 *
 * Every value here was sampled from the Motive app itself (screen recording,
 * Sept 2026) rather than invented. `tailwind.config.ts` imports this file, so
 * changing a value here changes it everywhere — utility classes included.
 *
 * Components must never write a hex value inline. Use a Tailwind token
 * (`bg-brand`, `text-accent`, ...) or, where a raw string is unavoidable
 * (SVG gradients, inline `style` for animated colour), import `colors` below.
 */

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
  },

  /** Chartreuse. Carries every primary CTA and "you're in" style badge. */
  accent: {
    DEFAULT: "#BCF136",
    deep: "#A3D625",
    soft: "#E8FBB4",
  },

  /** Warm off-white page background. Deliberately not grey. */
  bone: {
    DEFAULT: "#EFEAE3",
    deep: "#E1DCD5",
  },

  /** Card / raised surface. */
  surface: {
    DEFAULT: "#FDFDFD",
  },

  /** Warm near-black: body copy, headings, and the hairline card outlines. */
  ink: {
    DEFAULT: "#14111B",
    muted: "#5C564F",
    rule: "#2A251E",
    inverse: "#FDFDFD",
  },
} as const;

export const fonts = {
  /** Headings. Tighter and more confident at large sizes. */
  display: "Inter Tight Variable",
  /** Body copy and UI. */
  body: "Inter Variable",
} as const;

export const radii = {
  card: "1.25rem",
  pill: "9999px",
} as const;

/**
 * ACCESSIBILITY CONTRACT
 * `accent` is a light colour: it always carries `ink` text, never white.
 * `brand` always carries `ink.inverse` or `brand.tint` text.
 */
