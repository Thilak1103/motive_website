import type { Config } from "tailwindcss";
import { colors, fonts, fontSizes, radii, shadows } from "./src/config/tokens";

/**
 * Design tokens live in `src/config/tokens.ts` and are imported here so there
 * is exactly one source of truth. Add a colour, a type step or a shadow there,
 * not in this file.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: colors.brand,
        accent: colors.accent,
        bone: colors.bone,
        surface: colors.surface,
        ink: colors.ink,
      },
      fontFamily: {
        // Body / UI
        sans: [fonts.body, "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        // Headings
        display: [fonts.display, "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      // The named type scale. `text-display-1` … `text-label`.
      // These are additive: Tailwind's own `text-sm` etc. still exist, but
      // prefer the named steps so the scale stays enforceable.
      fontSize: fontSizes,
      borderRadius: {
        card: radii.card,
        inner: radii.inner,
        frame: radii.frame,
        pill: radii.pill,
      },
      boxShadow: {
        raised: shadows.raised,
        lifted: shadows.lifted,
        "on-brand": shadows.onBrand,
      },
      maxWidth: {
        content: "72rem",
        prose: "44rem",
      },
      backgroundImage: {
        /**
         * The dot grid that gives the brand-coloured sections texture. Sized
         * by `bg-grid` below; the colour is a token-derived lavender at low
         * alpha so it reads as paper grain, not as a visible pattern.
         */
        "dot-grid":
          "radial-gradient(circle at 1px 1px, rgba(203, 181, 255, 0.16) 1px, transparent 0)",
        /** Same idea for the light ground. */
        "dot-grid-ink":
          "radial-gradient(circle at 1px 1px, rgba(20, 17, 27, 0.09) 1px, transparent 0)",
      },
      backgroundSize: {
        grid: "22px 22px",
      },
      transitionTimingFunction: {
        // The brand easing curve. See `motionTokens.ease`.
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        // Required by <InfiniteMovingCards />
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        /** The live "on now" dot in the hero badge and the app preview. */
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.7" },
          "70%": { transform: "scale(1.9)", opacity: "0" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
